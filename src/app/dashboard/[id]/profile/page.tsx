'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import useUserStore from '@/store/userStore'

export default function Profile() {
  const { user } = useUserStore()

  return (
    <div className="flex items-center justify-center mt-3">
      <Card className="w-full md:w-1/3 lg:w-1/4">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col space-y-5">
          <Avatar className="mx-auto h-24 w-24">
            <AvatarImage src={user?.avatar} alt="avatar" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <Label htmlFor="name">Username</Label>
            <Input id="name" value={user?.username} onChange={() => {}} />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Save changes</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
