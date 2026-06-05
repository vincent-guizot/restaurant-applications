import { z } from "zod";

export const registerSchema = z.object({
   name: z
      .string()
      .min(3, "Nama minimal 3 karakter"),

   email: z.email("Email tidak valid"),

   phone: z
      .string()
      .min(10, "Nomor HP minimal 10 digit"),

   password: z
      .string()
      .min(6, "Password minimal 6 karakter"),
});

export type RegisterSchema = z.infer<
   typeof registerSchema
>;