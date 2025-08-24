import { Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const iconName = theme === "light" ? "lucide:moon" : "lucide:sun";

  return (
    <Button
      isIconOnly
      onPress={toggleTheme}
      radius="full"
      size="sm"
      variant="light"
    >
      <Icon className="h-4 w-4" icon={iconName} />
    </Button>
  );
}
