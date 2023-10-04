"use client"
import './globals.css'
import Head from './head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Inter } from 'next/font/google'

import { ThemeProvider } from "next-themes"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head/>
      <head />
      <body>
        <ThemeProvider enableSystem={false} attribute='class'>
          <Navbar />
          {children}
          <Footer/>
        </ThemeProvider>
      </body>
    </html>
  )
}