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

export const fetchBalance = async id => {
  try {
    const account = await prisma.user.findUnique({
      where: { id: id },
      select: { balance: true },
    })

    if (!account) {
      throw new Error('Account not found!')
    }

    return account.balance
  } catch (err) {
    throw new Error('Failed to fetch balance!')
  }
}

export const fetchTransactions = async id => {
  try {
    const account = await prisma.transaction.findMany({
      where: { accountId: id },
    })

    if (!account) {
      throw new Error('Account not found!')
    }

    return account
  } catch (err) {
    throw new Error('Failed to fetch transaction!')
  }
}

export const fetchDeposits = async (id, type) => {
  try {
    const deposits = await prisma.transaction.findMany({
      where: {
        AND: [{ accountId: id }, { type }],
      },
    })

    if (!deposits) {
      throw new Error('Deposits not found!')
    }

    return deposits
  } catch (err) {
    throw new Error('Failed to fetch deposits!')
  }
}

export const fetchTransactionsByType = async (id, type) => {
  try {
    const deposits = await prisma.transaction.findMany({
      where: {
        AND: [{ accountId: id }, { type }],
      },
    })

    if (!deposits) {
      throw new Error('Transactions not found!')
    }

    return deposits
  } catch (err) {
    throw new Error('Failed to fetch transactions!')
  }
}
