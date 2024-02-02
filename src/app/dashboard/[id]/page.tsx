import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Suspense } from 'react'
import { RecentSales } from './components/recent-sales'
import { CircleDollarSign, CreditCard } from 'lucide-react'
import ActionsBar from './components/actions-bar'
import BalanceCard from './components/balance-card'
import CardPrimaryLoading from '@/components/ui/skeletons'
import DollarCard from './components/dollar-card'
import MovementsCard from './components/movements-card'

interface DashboardPageProps {
  params: {
    id: string
  }
}
export default async function DashboardPage({ params }: DashboardPageProps) {
  const { id } = params

  return (
    <>
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex flex-col items-center justify-between space-y-2 md:flex-row">
          <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          <ActionsBar />
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          <Suspense fallback={<CardPrimaryLoading />}>
            <BalanceCard id={id} />
          </Suspense>

          <Suspense fallback={<CardPrimaryLoading />}>
            <MovementsCard id={id} />
          </Suspense>

          <Suspense fallback={<CardPrimaryLoading />}>
            <DollarCard id={id} />
          </Suspense>
        </div>
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle>Overview</CardTitle>
              <CircleDollarSign className="text-primary" size={18} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$0.00</div>
              <p className="text-xs text-muted-foreground">
                +3.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Recent Transactions</CardTitle>
              <CardDescription>You made 265 sales this month.</CardDescription>
            </CardHeader>
            <CardContent>
              <RecentSales />
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}
