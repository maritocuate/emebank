import { Button } from '@/components/ui/button'
import Image from 'next/image'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

export default function Login() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen sm:mx-auto sm:w-full sm:max-w-md">
      <Card className="w-full">
        <CardHeader className="flex">
          <div className="mx-auto">
            <Image
              alt="Logo"
              height="30"
              width="30"
              src="/images/logo.svg"
              priority
            />
          </div>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          <Input placeholder="Email" />
          <Input placeholder="Password" type="password" />
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button className="w-full">Login</Button>
          <div className="flex justify-between w-full mt-4 text-sm text-slate-400">
            <div>New here?</div>
            <Link className="underline" href="/auth/register">
              Create an account
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
