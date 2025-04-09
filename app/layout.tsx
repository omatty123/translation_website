export const metadata = {
  title: "Translation Website",
  description: "Academic Korean to English Translation by Matty Wegehaupt",
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
