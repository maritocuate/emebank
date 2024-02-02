import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Suspense } from 'react'
import ActionsBar from './components/actions-bar'
import BalanceCard from './components/balance-card'
import CardPrimaryLoading, {
  CardSecondaryLoading,
} from '@/components/ui/skeletons'
import DollarCard from './components/dollar-card'
import MovementsCard from './components/movements-card'
import TransactionsCard from './components/transactions-card'

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
          <Suspense fallback={<CardSecondaryLoading />}>
            <TransactionsCard id={id} type="deposit" />
          </Suspense>

          <Suspense fallback={<CardSecondaryLoading />}>
            <TransactionsCard id={id} type="withdrawal" />
          </Suspense>
        </div>
      </div>
    </>
  )
}
