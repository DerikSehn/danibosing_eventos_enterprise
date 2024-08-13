import Header from "components/Header/Header"
import { Metadata } from "next"
import "styles/tailwind.css"


export const metadata: Metadata = {
  title: "Danibosing Eventos",
  twitter: {
    card: "summary_large_image",
  },
}
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
