export type UserRole = "STUDENT" | "EMPLOYER" | "ADMIN";

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  profileImage?: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: UserRole;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
