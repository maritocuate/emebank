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
import { PlusSquare } from 'lucide-react'

export default async function DepositCard({ id }: { id: string }) {
  const deposits = await fetchDeposits(id, 'increment')

  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2">
        <div className="space-y-2">
          <CardTitle>Recent Deposit</CardTitle>
          <CardDescription>
            You made {deposits.length} deposits this month.
          </CardDescription>
        </div>
        <PlusSquare className="text-primary" size={18} />
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
