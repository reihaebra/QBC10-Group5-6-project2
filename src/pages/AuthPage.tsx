import React, { useEffect, useRef, useState } from 'react';
import Login from '../components/Login.tsx';
import Register from '../components/Register.tsx';
import Sidebar from '../components/ui/Sidebar.tsx';

export type AuthView = 'login' | 'register';

const AuthForm: React.FC = () => {
  const [view, setView] = useState<AuthView>('login'); // default: Login first
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    // Find the anchor tags rendered by current Login/Register implementation
    const toRegister = root.querySelector<HTMLAnchorElement>(
      'a[href="/register"]'
    );
    const toLogin = root.querySelector<HTMLAnchorElement>('a[href="/login"]');

    const handleToRegister = (e: Event) => {
      e.preventDefault();
      setView('register');
    };

    const handleToLogin = (e: Event) => {
      e.preventDefault();
      setView('login');
    };

    toRegister?.addEventListener('click', handleToRegister);
    toLogin?.addEventListener('click', handleToLogin);

    return () => {
      toRegister?.removeEventListener('click', handleToRegister);
      toLogin?.removeEventListener('click', handleToLogin);
    };
  }, [view]);

  return (
    <div>
      <aside>
        <Sidebar />
      </aside>
      <main ref={containerRef} className="w-full h-full pr-24">
        {view === 'login' ? <Login /> : <Register />}
      </main>
    </div>
  );
};

export default AuthForm;
