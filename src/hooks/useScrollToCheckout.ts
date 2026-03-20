import { MouseEvent } from 'react'

export function useScrollToCheckout() {
  return (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault()
    document.getElementById('checkout')?.scrollIntoView({ behavior: 'smooth' })
  }
}
