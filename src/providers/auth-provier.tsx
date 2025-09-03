import React, { useEffect } from "react";
import useSWR from "swr";

import { useAuthStore } from "~/store/auth-store";

export const AuthProvider = ({ children }: React.PropsWithChildren) => {
  const setUser = useAuthStore((state) => state.setUser);

  const { data, error } = useSWR("/users/me");

  useEffect(() => {
    if (data) {
      setUser(data);
    } else if (error) {
      setUser(null);
    }
  }, [data, error, setUser]);

  return children;
};
