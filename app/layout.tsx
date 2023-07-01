import Header from './components/Header'
import EditForm from './components/modals/EditFormModal'
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
          <EditForm />
          <div className='max-w-2xl bg-[#EFF0F4] p-2 px-8 rounded-sm mx-auto mt-12'>
            {children}
          </div>
        </Providers>
      </body>
    </html>
  )
}
