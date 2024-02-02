import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fetchBalance } from '@/lib/data'
import { CircleDollarSign } from 'lucide-react'

export default async function BalanceCard({ id }: { id: string }) {
  await timeout(3 * 1000)
  const balance = await fetchBalance(id)

  function timeout(delay: number) {
    return new Promise(res => setTimeout(res, delay))
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
        <CircleDollarSign className="text-primary" size={18} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${balance}</div>
        <p className="text-xs text-muted-foreground">+3.1% from last month</p>
      </CardContent>
    </Card>
  )
}
