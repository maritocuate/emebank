import { useState } from 'react'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

enum TransactionType {
  DEPOSIT = 'deposit',
  WITHDRAWAL = 'withdrawal',
}

interface PopupProps {
  title: string
  description: string
  icon: React.ReactNode
  setTypeTransaction: (type: TransactionType) => void
  submitHandler?: (amount: number) => void
}

const Popup = ({
  title,
  description,
  icon,
  setTypeTransaction,
  submitHandler,
}: PopupProps) => {
  const [amount, setAmount] = useState<number>(0)

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value))
  }

  const handleSubmission = () => {
    if (submitHandler) {
      setTypeTransaction(
        title === 'Deposit'
          ? TransactionType.DEPOSIT
          : TransactionType.WITHDRAWAL
      )
      submitHandler(amount)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={'sm'} className="gap-2">
          {title}
          {icon}
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="items-center gap-4">
            <Input
              id="name"
              className="w-full text-center"
              value={amount}
              onChange={handleAmountChange}
            />
          </div>
        </div>
        <DialogClose asChild>
          <Button size={'sm'} className="w-full" onClick={handleSubmission}>
            Done
          </Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}

export default Popup
