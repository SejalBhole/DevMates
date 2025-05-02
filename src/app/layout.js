// src/app/layout.js
export const metadata = {
    title: "DevConnect",
    description: "Build your dream dev team",
  };
  
  export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body
          style={{
            backgroundImage: "url('https://www.transparenttextures.com/patterns/geometry2.png')",
            backgroundRepeat: "repeat",
            backgroundColor: "#f9fafb",
          }}
          className="min-h-screen"
        >
          {children}
        </body>
      </html>
    );
  }
  