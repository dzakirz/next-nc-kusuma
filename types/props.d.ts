export type ComponentWithChildren = {
  children: React.ReactNode;
};

export type InputProps = {
  variant: "text" | "password";
  id: string;
  label: string;
  placeholder: string;
};