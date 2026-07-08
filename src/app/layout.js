import "./globals.css";

export const metadata = {
  title: "Naeemihoney | Premium Organic Raw Honey",
  description: "Buy 100% Organic, raw, and chemical-free honey with return warranty. Delivery all over Pakistan.",
  icons: {
    icon: "/NaeemiHoneyLogo.png",
    apple: "/NaeemiHoneyLogo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
