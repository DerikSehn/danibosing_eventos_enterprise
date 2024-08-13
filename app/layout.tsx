import { Metadata } from "next"
import Head from "next/head"
import "styles/tailwind.css"


export const metadata: Metadata = {
  title: "Daniela Bosing Eventos ",
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
      </Head>
      <body className="bg-zeus-800" >{children}</body>
    </html>
  )
}
