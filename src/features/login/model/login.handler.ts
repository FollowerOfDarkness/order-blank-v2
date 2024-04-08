"use client";
import { useSigninMutation } from "../api/login.api";

// export interface IFormInput {
//   email: string;
//   password: string | number;
// }

// export const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i;

// export const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
export function useAuthenticate(formData: any) {
  const [signIn, { isLoading }] = useSigninMutation();
  try {
    console.log("login.handler", formData);
    // signIn({ email: formData.get("email") as string, password: formData.get("password") as string });
  } catch (error) {
    console.log("login.handler", formData);
    if (error) {
      //   switch (error.type) {
      //     case "CredentialsSignin":
      //       return "Invalid credentials.";
      //     default:
      //       return "Something went wrong.";
      //   }
    }
    throw error;
  }
}
