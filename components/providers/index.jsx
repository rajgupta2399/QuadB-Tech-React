"use client"; // Mark this as a client component

import { ThemeProvider } from "next-themes";
import { SidebarProvider } from "../ui/sidebar";
import { AppSidebar } from "../app-sidebar";
import { AppSidebarInset } from "./app-sidebar-inset";
import { Provider } from "react-redux";
import store from "@/store/store";

export function Providers({ children }) {
  // Set default values for sidebar state and width
  const defaultOpen = true; // Or use any other default value you'd prefer
  const sidebarWidth = "250px"; // Set a default width or use any value you want

  return (
    <Provider store={store}>
      <ThemeProvider
        enableSystem
        attribute="class"
        defaultTheme="dark"
        disableTransitionOnChange
      >
        <SidebarProvider defaultOpen={defaultOpen} defaultWidth={sidebarWidth}>
          <AppSidebar>
            <AppSidebarInset>{children}</AppSidebarInset>
          </AppSidebar>
        </SidebarProvider>
      </ThemeProvider>
    </Provider>
  );
}
