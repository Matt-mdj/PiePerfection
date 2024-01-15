import { Roboto } from 'next/font/google'
import Header from '../components/Layout/Header'
import './globals.css'

const roboto = Roboto({ subsets: ['latin'] , weight: ['400', '500', '700']  })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <main className="max-w-4xl mx-auto p-4">
          <Header />
          {children}
          <footer className="border-t p-8 text-center text-grey-500 mt-16">
            &copy; 2023 All Rights Reserved
          </footer>
        </main>
        
      </body>
    </html>
  )
}
