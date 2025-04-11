import './globals.css'; // Make sure this file exists

export const metadata = {
  title: 'Korean to English Academic Translation',
  description: 'Academic translation by Matty',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
