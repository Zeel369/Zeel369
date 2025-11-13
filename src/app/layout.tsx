import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'MTSAI - Solving Traffic Congestion With Trust, Technology, And Voter Support',
  description: 'Miracle Traffic Solution AI - A ready-to-deploy, self-financing solution for traffic congestion',
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
