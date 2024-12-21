"use server";

import { headers } from "next/headers";

export async function getTheme(): Promise<"light" | "dark"> {
  // Check for theme cookie
  const headersList = await headers();
  const cookies = headersList.get("cookie");
  const themeCookie = cookies
    ?.split(";")
    .find((c) => c.trim().startsWith("theme="));
  const theme = themeCookie?.split("=")[1];

  if (theme === "light" || theme === "dark") {
    return theme;
  }

  return "light"; // Default theme
}
