import './globals.css'


export const metadata = {
  title: 'FuryForever Dev.',
  description: "FuryForever's portifolio!",
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
