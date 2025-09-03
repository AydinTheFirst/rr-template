import { Button } from "@heroui/react";
import { useGoogleLogin } from "@react-oauth/google";

import http from "~/lib/http";
import { useAuthStore } from "~/store/auth-store";

export default function Page() {
  const user = useAuthStore((state) => state.user);

  const unlinkGoogle = async () => {
    await http.post("/auth/google/unlink");
    location.reload();
  };

  const linkGoogle = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (tokenResponse) => {
      await http.post("/auth/google/link", {
        code: tokenResponse.code,
      });
      location.reload();
    },
  });

  if (user) {
    return (
      <div>
        Authenticated User: {user.displayName}
        {user.googleId ? (
          <Button color="primary" onPress={unlinkGoogle}>
            Unlink Google Account
          </Button>
        ) : (
          <Button color="primary" onPress={linkGoogle}>
            Link Google Account
          </Button>
        )}
      </div>
    );
  }

  return <div>No user</div>;
}
