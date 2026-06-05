import { useMutation } from "@tanstack/react-query";

import { login } from "@/lib/api/auth";

export const useLoginMutation = () => {
   return useMutation({
      mutationFn: login,
   });
};