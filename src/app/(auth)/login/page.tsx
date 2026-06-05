"use client";

import { useRouter } from "next/navigation";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema, LoginSchema } from "@/lib/validations/login.schema";

import { useLoginMutation } from "@/lib/query/auth.query";

import { useAuthStore } from "@/store/auth.store";

export default function LoginPage() {
  const router = useRouter();

  const setToken = useAuthStore((state) => state.setToken);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const { mutate, isPending } = useLoginMutation();

  const onSubmit = (data: LoginSchema) => {
    mutate(data, {
      onSuccess: (response) => {
        const token = response?.data?.token;

        setToken(token);

        router.push("/");
      },

      onError: (error) => {
        console.log(error);
      },
    });
  };

  return (
    <div className="mx-auto mt-20 max-w-md">
      <h1 className="mb-6 text-2xl font-bold">Login</h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Email"
            {...register("email")}
            className="w-full rounded border p-3"
          />

          {errors.email && (
            <p className="text-sm text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register("password")}
            className="w-full rounded border p-3"
          />

          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full rounded bg-black p-3 text-white"
        >
          {isPending ? "Loading..." : "Login"}
        </button>
      </form>
    </div>
  );
}
