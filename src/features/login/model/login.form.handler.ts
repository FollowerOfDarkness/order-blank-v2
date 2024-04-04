import { SubmitHandler } from "react-hook-form";

export interface IFormInput {
  email: string;
  password: string | number;
}

export const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/i;

export const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
