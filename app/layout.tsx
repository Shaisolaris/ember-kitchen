import { Toaster } from "@/components/ui/sonner"
import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ember*Kitchen - No Cap, Just Flavor",
  description:
    "Serving 70s aesthetics with a modern twist. Locally sourced, highkey delicious, and strictly for the vibers.",
  icons: {
    icon: [
      {
        url: "/ember-kitchen/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/ember-kitchen/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/ember-kitchen/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/ember-kitchen/apple-icon.png",
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
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Playfair+Display:ital,wght@1,700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${spaceGrotesk.className} antialiased`}>
        {children}
        
        <Toaster position="top-right" />
      </body>
    </html>
  )
}
