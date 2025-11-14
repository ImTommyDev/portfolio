import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio de Tomás",
  description: "Desarrollador web | Next.js, TypeScript, IA y automatización",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
