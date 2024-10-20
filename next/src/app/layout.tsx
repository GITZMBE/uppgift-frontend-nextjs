// import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/ui/Header";
import { RecoilProvider } from "@/providers";

// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='title' content='Create Next App' />
        <meta name='description' content='Generated by create next app' />
        <meta
          name='keywords'
          content='Consid, Datocms, headless, cms, Nextjs'
        />
        <title>Consid commerce</title>
        <link rel='shortcut icon' href='favicon.ico' type='image/x-icon' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter'
          rel='stylesheet'
        />
      </head>
      <body className='font-Inter'>
        <RecoilProvider>
          <Header />
          {children}
        </RecoilProvider>
      </body>
    </html>
  );
}
