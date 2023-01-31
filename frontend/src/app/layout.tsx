import { Footer } from "@/layouts/footer";
import { Header } from "@/layouts/header";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header titleSiteName="jorgeju4rez"/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
