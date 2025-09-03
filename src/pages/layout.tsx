import { HeroUIProvider } from "@heroui/react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router";
import { SWRConfig } from "swr";

import { fetcher } from "~/lib/http";
import { AuthProvider } from "~/providers/auth-provier";
import { composeProviders } from "~/utils/compose-providers";

const AppProviders = composeProviders(
  ({ children }) => <HeroUIProvider>{children}</HeroUIProvider>,
  ({ children }) => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  ),
  ({ children }) => (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      {children}
    </GoogleOAuthProvider>
  ),
  ({ children }) => <SWRConfig value={{ fetcher }}>{children}</SWRConfig>,
  ({ children }) => <AuthProvider>{children}</AuthProvider>,
);

export default function RootLayout() {
  return (
    <AppProviders>
      <Outlet />
    </AppProviders>
  );
}
