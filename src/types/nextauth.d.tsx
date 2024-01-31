import NextAuth, { DefaultSession } from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      id: string
      username: string
      balance: number
    } & DefaultSession['user']
  }
  interface User {
    id: string
    username: string
    balance: number
  }
}
