import './globals.css';

export const metadata = {
  title: 'Stitch Design',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com/" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?display=swap&family=Manrope:wght@400;500;700;800&family=Noto+Sans:wght@400;500;700;900"
        />
      </head>
      <body className="relative flex min-h-screen flex-col bg-slate-50">{children}</body>
    </html>
  );
}
