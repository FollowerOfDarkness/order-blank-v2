"use server";

import { useSigninMutation } from "../api/login.api";

// export interface IFormInput {
//   email: string;
//   password: string | number;
// }

// export const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i;

// export const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
export async function authenticate(formData: FormData) {
  try {
	
    console.log("login.handler", formData.get("password"));
    useSigninMutation({password: });
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
