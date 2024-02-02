import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function CardPrimaryLoading() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 text-muted-foreground text-xs">
        <CardTitle className="text-sm">██████</CardTitle>█
      </CardHeader>
      <CardContent className="text-muted-foreground">
        <div className="text-xl">████</div>
        <p className="text-xs">████</p>
      </CardContent>
    </Card>
  )
}
