import { AuthProvider } from "@/contexts/auth-context";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <div className="min-h-screen bg-cream-50 flex items-center justify-center">
        <div className="max-w-md w-full">
          {children}
        </div>
      </div>
    </AuthProvider>
  );
}
