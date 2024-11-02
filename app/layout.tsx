import {ReactNode} from "react";
import 'app/ui/global.css'
import { inter, lusitana } from "app/ui/fonts"

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`} >{children}</body>
    </html>
  );
}
