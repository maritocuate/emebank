import bcrypt from 'bcrypt'

import prisma from '@/libs/prismadb'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  const { name, email, password } = body

  if (!name || !email || !password)
    return new NextResponse('Missing fields', { status: 400 })

  // check if email already exists
  const emailFound = await prisma.user.findUnique({
    where: {
      email,
    },
  })
  if (emailFound) {
    return new NextResponse('Email already exists', { status: 400 })
  }

  const hashedPassword = await bcrypt.hash(password, 12)

  const user = await prisma.user.create({
    data: {
      username: name,
      balance: 0,
      email,
      password: hashedPassword,
    },
  })

  // remove password from response
  const { password: _, ...rest } = user
  return NextResponse.json(user)
}
