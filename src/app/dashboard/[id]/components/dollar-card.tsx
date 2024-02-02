import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'

export default async function DollarCard({ id }: { id: string }) {
  const dollarValue = await fetch('https://api.bluelytics.com.ar/v2/latest')
    .then(r => r.json())
    .then(data => data.blue.value_avg)

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Dollar Value</CardTitle>
        <DollarSign className="text-primary" size={18} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${dollarValue}</div>
        <p className="text-xs text-muted-foreground">-7% from last month</p>
      </CardContent>
    </Card>
  )
}
