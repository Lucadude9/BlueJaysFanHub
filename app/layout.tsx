import "./globals.css";

// basic layout wrapper for all pages
export const metadata = {
  title: "Blue Jays Fan Hub",
  description: "React assignment project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}