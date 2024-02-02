import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { ScrollArea } from '@/components/ui/scroll-area'
import { fetchDeposits } from '@/lib/data'
import { PlusSquare, MinusSquare } from 'lucide-react'

interface TransactionsCardProps {
  id: string
  type: 'deposit' | 'withdrawal'
}

export default async function TransactionsCard({
  id,
  type,
}: TransactionsCardProps) {
  const deposits = await fetchDeposits(id, type)

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-2">
          <CardTitle>Recent {type}</CardTitle>
          <CardDescription>
            You made {deposits.length} {type} this month.
          </CardDescription>
        </div>
        {type === 'deposit' ? (
          <PlusSquare className="text-primary" size={18} />
        ) : (
          <MinusSquare className="text-red-500" size={18} />
        )}
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px]">
          <div className="space-y-8 mt-4">
            {deposits.map(deposit => (
              <div className="flex items-center" key={deposit.id}>
                <Avatar className="flex h-9 items-center justify-center space-y-0 border">
                  <AvatarImage src="/images/avatar.png" alt="Avatar" />
                  <AvatarFallback>OM</AvatarFallback>
                </Avatar>
                <div className="ml-4 space-y-1">
                  <p className="text-sm text-muted-foreground">
                    {deposit.createdAt.toDateString()}
                  </p>
                </div>
                <div className="ml-auto font-medium">+${deposit.amount}</div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
