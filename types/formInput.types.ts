export interface SignUpFormInputs {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface FormButtonProps {
  isLoading: boolean;
  loadingText?: string;
  children: React.ReactNode;
}
