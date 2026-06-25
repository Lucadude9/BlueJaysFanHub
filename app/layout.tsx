import "./globals.css";

export const metadata = {
  title: "Blue Jays Fan Hub",
  description: "React assignment project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}