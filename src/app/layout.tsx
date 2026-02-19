import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Email Refiner – Write Better Emails in Seconds',
  description: 'Transform your email drafts with AI. 7 writing styles, Gmail & Zimbra support. Join 10,000+ professionals writing better emails instantly.',
  openGraph: {
    title: 'AI Email Refiner – Write Better Emails in Seconds',
    description: 'AI-powered Chrome extension that rewrites your emails in 7 styles.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;1,400&family=DM+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  )
}
