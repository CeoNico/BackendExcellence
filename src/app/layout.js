import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Backend Excellence",
  description:
    "Crece tu presencia en el mundo digital con tu propio sitio web. Nuestra agencia de desarollo asegura un sitio web con un diseno hermoso y simple para que tus clientes puedan navegar. Basado en el norte de Argentina en sirviendo todo la provinica de Salta, Argentina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
