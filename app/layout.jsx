export const metadata = {
  title: 'Careers — NimbleS2P',
  description: "Join NimbleS2P — India's leading AI-powered procurement platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, overflowX: 'hidden' }}>
        {children}
      </body>
    </html>
  );
}
