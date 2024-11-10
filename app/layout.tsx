import {ReactNode} from "react";
import 'app/ui/global.css'
import {lusitana } from "app/ui/fonts"
import {Metadata} from "next";

export const metadata: Metadata = {
  title: {
    template: '%s | Mooki Dashboard',
    default: 'Mooki Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};


export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${lusitana.className} antialiased`} >{children}</body>
    </html>
  );
}
