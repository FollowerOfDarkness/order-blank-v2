import { LoginForm } from "@/features/login";
import { poppins } from "@/shared/fonts/fonts";

export const LoginPage = () => {
  return (
    <main className={`${poppins.variable} font-poppins min-h-screen flex flex-col`}>
      <LoginForm />
    </main>
  );
};
