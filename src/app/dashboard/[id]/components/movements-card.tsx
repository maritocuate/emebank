import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { fetchTransactions } from '@/lib/data'
import { ArrowDownUp } from 'lucide-react'

export default async function MovementsCard({ id }: { id: string }) {
  const response = await fetchTransactions(id)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Movements</CardTitle>
        <ArrowDownUp className="text-primary" size={18} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">+{response.length}</div>
        <p className="text-xs text-muted-foreground">+12% from last month</p>
      </CardContent>
    </Card>
  )
}
