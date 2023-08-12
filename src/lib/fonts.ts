import { Comfortaa, Lobster, Nunito, Pacifico, Righteous } from 'next/font/google'

// How to use? Put Comfortaa.className inside className
export const comfortaa = Comfortaa({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '700']
})

export const nunito = Nunito({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['400', '700'],
  style: ['normal', 'italic']
})

export const pacifico = Pacifico({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})

export const lobster = Lobster({
  subsets: ['latin', 'vietnamese'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})

export const righteous = Righteous({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400'],
  style: ['normal']
})
