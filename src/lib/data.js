import prisma from '@/libs/prismadb'

export const fetchUser = async id => {
  try {
    const account = await prisma.user.findUnique({
      where: { id: id },
    })

    if (!account) {
      throw new Error('Account not found!')
    }
    return account
  } catch (err) {
    throw new Error('Failed to fetch user!')
  }
}