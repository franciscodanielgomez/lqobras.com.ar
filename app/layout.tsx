import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "LQ Obras",
  description: "Lourdes Quiñonez - Maestro Mayor de Obras",
};

export default function RootLayout({
                                     children,
                                   }: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
        <Navbar />
        {children}

        {/* Botón de WhatsApp */}
        <div style={{ position: 'fixed', bottom: '20px', right: '20px' }}>
          <a href="https://wa.me/5493704364290" target="_blank" rel="noopener noreferrer">
            <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={{ width: '60px', height: '60px' }}
            />
          </a>
        </div>
      </ThemeProvider>
      </body>
      </html>
  );
}