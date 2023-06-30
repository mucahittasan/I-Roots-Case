import Header from './components/Header'
import './globals.css'
import { Providers } from './redux/provider'


export const metadata = {
  title: 'I Roots Case',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className='content'>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  )
}
