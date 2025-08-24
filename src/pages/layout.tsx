import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider } from "next-themes";
import { Outlet } from "react-router";

import { composeProviders } from "~/utils/compose-providers";

const AppProviders = composeProviders(
  ({ children }) => <HeroUIProvider>{children}</HeroUIProvider>,
  ({ children }) => (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
    </ThemeProvider>
  )
);

export default function RootLayout() {
  return (
    <AppProviders>
      <Outlet />
    </AppProviders>
  );
}
