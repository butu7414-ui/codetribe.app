import './globals.css'

export const metadata = {
  title: 'CODETRIBE — DEV-HELP LIVE',
  description: 'Where devs debug together',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
