'use client'

import { Button } from '@/components/ui/button'
import { MinusCircle, PlusCircle } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

export default function ActionsBar() {
  return (
    <div className="flex space-x-2">
      <Dialog>
        <DialogTrigger asChild>
          <Button size={'sm'} className="gap-2">
            Deposit
            <PlusCircle size={15} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Deposit</DialogTitle>
            <DialogDescription>Choose the amount to deposit.</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <Input
                id="name"
                defaultValue="0.00"
                className="w-full text-center"
              />
            </div>
          </div>
          <Button
            size={'sm'}
            className="w-full"
            onClick={() => console.log('deposit')}
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>

      <Dialog>
        <DialogTrigger asChild>
          <Button size={'sm'} className="gap-2">
            Withdrawal
            <MinusCircle size={15} />
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Withdrawal</DialogTitle>
            <DialogDescription>
              Choose the amount to withdraw.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="items-center gap-4">
              <Input
                id="name"
                defaultValue="0.00"
                className="w-full text-center"
              />
            </div>
          </div>
          <Button
            size={'sm'}
            className="w-full"
            onClick={() => console.log('done')}
          >
            Done
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  )
}
