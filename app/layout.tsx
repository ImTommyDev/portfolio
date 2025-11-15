import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Portfolio de Tomás",
  description: "Desarrollo web, automatización e IA.",
};
export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 min-h-screen">
        {children}
      </body>
    </html>
  );
}
