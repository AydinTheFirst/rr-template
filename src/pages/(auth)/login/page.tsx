import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useGoogleLogin } from "@react-oauth/google";

import http from "~/lib/http";

export default function LoginPage() {
  return (
    <div>
      <h1>Login Page</h1>
      <GoogleLoginButton />
    </div>
  );
}

function GoogleLoginButton() {
  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (tokenResponse) => {
      const { data } = await http.post("/auth/google", {
        code: tokenResponse.code,
      });
      localStorage.setItem("token", data.token);
      window.location.replace("/"); // Redirect to home page
    },
  });

  return (
    <Button onPress={login}>
      <Icon className="mr-2 h-5 w-5" icon="logos:google-icon" />
      Sign in with Google
    </Button>
  );
}
