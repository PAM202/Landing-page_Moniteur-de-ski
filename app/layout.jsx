import "./globals.css";
import { Inter, Syncopate, Syne } from "next/font/google";

const syncopate = Syncopate({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display"
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "500", "700"],
  variable: "--font-sans"
});

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-accent"
});

export const metadata = {
  title: "Formation d’anglais pour moniteurs de ski",
  description:
    "Une formation pensée pour les moniteurs de ski qui veulent accélérer leurs carrières grâce à la maîtrise de l’anglais sur les pistes."
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${syncopate.variable} ${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
