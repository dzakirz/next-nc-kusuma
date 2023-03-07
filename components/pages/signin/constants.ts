import { InputProps } from "@/types/props";

export const Styles = {
  label: {
    valid: "font-medium",
    error: "font-medium text-error",
  },
  input: {
    valid:
      "w-full px-3 py-2 border-2 bg-base-100 rounded-xl focus:outline-none border-secondary focus:border-primary focus:ring-1 focus:ring-primary",
    error:
      "w-full px-3 py-2 border-2 bg-base-100 rounded-xl focus:outline-none border-error focus:border-error focus:ring-1 focus:ring-error",
  },
};

export const mockSigninInput: InputProps[] = [
  {
    variant: "text",
    id: "email",
    label: "Email",
    placeholder: "Masukkan Email",
  },
  {
    variant: "password",
    id: "password",
    label: "Password",
    placeholder: "Masukkan Password",
  },
];
