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
    "Une formation pensée pour les moniteurs de ski qui veulent accélérer leurs carrières grâce à la maîtrise de l’anglais sur les pistes.",
  metadataBase: new URL("https://www.educ-altitudes.com"),
  openGraph: {
    title: "Formation d’anglais pour moniteurs de ski",
    description:
      "Une formation pensée pour les moniteurs de ski qui veulent accélérer leurs carrières grâce à la maîtrise de l’anglais sur les pistes.",
    url: "https://www.educ-altitudes.com/",
    type: "website",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Educ’Altitudes"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Formation d’anglais pour moniteurs de ski",
    description:
      "Une formation pensée pour les moniteurs de ski qui veulent accélérer leurs carrières grâce à la maîtrise de l’anglais sur les pistes.",
    images: ["/og.jpg"]
  },
  icons: {
    icon: "/logocarre.jpg",
    apple: "/logocarre.jpg",
    shortcut: "/logocarre.jpg"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${syncopate.variable} ${inter.variable} ${syne.variable}`}>
      <body>{children}</body>
    </html>
  );
}
