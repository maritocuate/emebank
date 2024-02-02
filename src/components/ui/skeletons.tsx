import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'

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

export function CardSecondaryLoading() {
  return (
    <Card>
      <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-2 text-muted-foreground">
        <div className="space-y-2">
          <CardTitle>██████</CardTitle>
          <CardDescription>██████</CardDescription>
        </div>
        █
      </CardHeader>

      <CardContent className="text-muted-foreground">
        <div className="space-y-8 mt-4">
          <div className="flex items-center">
            ██
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">██</p>
            </div>
            <div className="ml-auto font-medium">█</div>
          </div>
          <div className="flex items-center">
            ██
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">██</p>
            </div>
            <div className="ml-auto font-medium">█</div>
          </div>
          <div className="flex items-center">
            ██
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">██</p>
            </div>
            <div className="ml-auto font-medium">█</div>
          </div>
          <div className="flex items-center">
            ██
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">██</p>
            </div>
            <div className="ml-auto font-medium">█</div>
          </div>
          <div className="flex items-center">
            ██
            <div className="ml-4 space-y-1">
              <p className="text-sm text-muted-foreground">██</p>
            </div>
            <div className="ml-auto font-medium">█</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
