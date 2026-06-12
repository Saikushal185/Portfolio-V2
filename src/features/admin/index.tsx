import { useState, useEffect } from 'react';
import { AdminLogin } from './AdminLogin';
import { Dashboard } from './Dashboard';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { Loader2 } from 'lucide-react';

export const AdminPage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!isSupabaseConfigured) {
            setLoading(false);
            return;
        }

        supabase.auth.getSession().then(({ data: { session } }) => {
            setIsAuthenticated(!!session);
            setLoading(false);
        });

        const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
            setIsAuthenticated(!!session);
        });

        return () => subscription.unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]" >
                <Loader2 className="w-8 h-8 text-blue-600 animate-spin" />
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 md:py-20 px-4 max-w-5xl mx-auto" >
            {!isAuthenticated ? (
                <AdminLogin onLogin={() => {
                    setIsAuthenticated(true);
                    window.scrollTo(0, 0);
                }} />
            ) : (
                <Dashboard />
            )}
        </div>
    );
};
