'use client'

import { MinusCircle, PlusCircle } from 'lucide-react'
import { toast } from '@/components/ui/use-toast'
import Popup from '@/components/ui/popup'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import useUserStore from '@/store/userStore'

enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
}

export default function ActionsBar() {
  const [typeTransaction, setTypeTransaction] = useState<TransactionType>(
    TransactionType.DEPOSIT
  )
  const { data: session } = useSession()
  const { updateBalance } = useUserStore()

  const handleTransaction = async (amount: number) => {
    if (!session?.user?.id) {
      toast({ title: 'Sign In', variant: 'destructive' })
      return
    }

    const data = {
      accountId: session.user.id,
      type: typeTransaction,
      amount: amount,
    }

    await fetch('/api/transactions', {
      method: 'POST',
      body: JSON.stringify(data),
    })
      .catch(() => toast({ title: `${typeTransaction} failed` }))
      .then(() => fetchBalance(session.user.id))
      .then(() => toast({ title: `${typeTransaction} success` }))
  }

  const fetchBalance = async (userId: string) => {
    await fetch(`/api/accounts/${userId}/balance`)
      .then(res => res.json())
      .then(res => updateBalance(res.balance))
  }

  return (
    <div className="flex space-x-2">
      <Popup
        title="Deposit"
        description="Select the amount to deposit"
        icon={<PlusCircle size={15} />}
        setTypeTransaction={setTypeTransaction}
        submitHandler={handleTransaction}
      />

      <Popup
        title="Withdrawal"
        description="Select the amount to withdraw"
        icon={<MinusCircle size={15} />}
        setTypeTransaction={setTypeTransaction}
        submitHandler={handleTransaction}
      />
    </div>
  )
}
