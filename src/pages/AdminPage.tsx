import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { supabase } from "@/integrations/supabase/client";
import { Shield, Users, Crown, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Navigate } from "react-router-dom";
import { toast } from "sonner";

interface UserProfile {
  id: string;
  user_id: string;
  email: string | null;
  display_name: string | null;
  is_premium: boolean;
  subscription_status: string | null;
  created_at: string;
}

const AdminPage = () => {
  const { user, isLoading } = useAuth();
  const [isAdmin, setIsAdmin] = useState(false);
  const [checkingAdmin, setCheckingAdmin] = useState(true);
  const [users, setUsers] = useState<UserProfile[]>([]);

  useEffect(() => {
    const checkAdmin = async () => {
      if (!user) {
        setCheckingAdmin(false);
        return;
      }
      const { data } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", user.id)
        .eq("role", "admin")
        .maybeSingle();

      setIsAdmin(!!data);
      setCheckingAdmin(false);
    };
    checkAdmin();
  }, [user]);

  useEffect(() => {
    if (!isAdmin) return;
    const fetchUsers = async () => {
      const { data } = await supabase.from("profiles").select("*");
      if (data) setUsers(data as UserProfile[]);
    };
    fetchUsers();
  }, [isAdmin]);

  if (isLoading || checkingAdmin) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Shield className="w-8 h-8 text-primary animate-pulse-neon" />
      </div>
    );
  }

  if (!user) return <Navigate to="/login" />;
  if (!isAdmin) return <Navigate to="/" />;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 pt-24 pb-16">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-8">
            <Crown className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Админ панел</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-muted-foreground">Общо потребители</span>
              </div>
              <p className="text-3xl font-bold text-foreground">{users.length}</p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Crown className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Премиум</span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {users.filter((u) => u.is_premium).length}
              </p>
            </div>
            <div className="glass-card rounded-xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="w-5 h-5 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">Безплатни</span>
              </div>
              <p className="text-3xl font-bold text-foreground">
                {users.filter((u) => !u.is_premium).length}
              </p>
            </div>
          </div>

          <div className="glass-card rounded-xl overflow-hidden">
            <div className="p-4 border-b border-border/50">
              <h2 className="text-lg font-semibold text-foreground">Потребители</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border/30">
                    <th className="text-left text-sm text-muted-foreground font-medium p-4">Имейл</th>
                    <th className="text-left text-sm text-muted-foreground font-medium p-4">Статус</th>
                    <th className="text-left text-sm text-muted-foreground font-medium p-4">Регистрация</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map((u) => (
                    <tr key={u.id} className="border-b border-border/20 hover:bg-secondary/30 transition-colors">
                      <td className="p-4 text-sm text-foreground">{u.email || "—"}</td>
                      <td className="p-4">
                        {u.is_premium ? (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-accent/10 text-accent border border-accent/20">
                            <Crown className="w-3 h-3" /> Премиум
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-muted text-muted-foreground">
                            Безплатен
                          </span>
                        )}
                      </td>
                      <td className="p-4 text-sm text-muted-foreground">
                        {new Date(u.created_at).toLocaleDateString("bg-BG")}
                      </td>
                    </tr>
                  ))}
                  {users.length === 0 && (
                    <tr>
                      <td colSpan={3} className="p-8 text-center text-muted-foreground">
                        Няма регистрирани потребители
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminPage;
