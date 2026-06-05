export interface LoginPayload {
   email: string;
   password: string;
}

export interface RegisterPayload {
   name: string;
   email: string;
   phone: string;
   password: string;
}

export interface User {
   id: string;
   name: string;
   email: string;
   phone: string;
}

export interface AuthResponse {
   success: boolean;
   message: string;
   data: {
      token: string;
      user: User;
   };
}