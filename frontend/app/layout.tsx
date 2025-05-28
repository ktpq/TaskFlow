import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title> TaskFlow </title>
        <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      </head>
      <body className="font-main">
        <div className="z-10"><Toaster position="bottom-right"/></div>
        {children}
      </body>
    </html>
  );
}
