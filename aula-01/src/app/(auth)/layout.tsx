export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div>
      <b>Auth</b>
      {children}
    </div>
  )
}
