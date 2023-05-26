"use client"
import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

interface ProviderProps {
  session:  Session | null | undefined,
  children: ReactNode
}

function Provider({children, session}: ProviderProps) {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider