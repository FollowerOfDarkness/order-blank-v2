import { LoginForm } from "@/features/login";
import { poppins } from "@/shared/fonts";

export const LoginPage = () => {
  return (
    <main
      className={`
	  ${poppins.variable} 
	  flex 
	  min-h-screen 
	  flex-col 
	  items-center 
	  justify-center  
	  bg-gradient-to-b
	from-blue-700
	 via-blue-400
	  to-blue-400
	   font-poppins
	    shadow-lg`}
    >
      <LoginForm />
    </main>
  );
};
