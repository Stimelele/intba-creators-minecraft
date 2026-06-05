import "./globals.css";

export const metadata = {
  title: "INTBA CREATORS Minecraft",
  description: "Community landing page for Minecraft plugin creators."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
