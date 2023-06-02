import Footer from "@/components/Footer"
import Header from "@/components/Header"
import './globals.css'
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'John Doe',
  description: 'Esse fugiat enim nostrud aute adipisicing dolor sit veniam et sunt amet tempor aute.',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
