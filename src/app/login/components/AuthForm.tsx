'use client'

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
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'
import { toast } from '@/components/ui/use-toast'
import { getSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import useUserStore from '@/store/userStore'

interface AuthFormProps {
  mode: 'login' | 'register'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const { setUser } = useUserStore()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const getCurrentSession = async () => {
    const session = await getSession()
    const userId = session?.user.id

    if (session?.user) {
      const { id, username, email, balance, avatar } = session?.user
      setUser({
        id,
        username,
        email: email as string,
        balance,
        avatar,
      })
    }
    router.push(`/dashboard/${userId}`)
  }

  const onSubmit: SubmitHandler<FieldValues> = async data => {
    if (mode === 'login') {
      const res = await signIn('credentials', {
        ...data,
        redirect: false,
      })

      if (res?.error) {
        toast({
          title: 'Error',
          description: res.error,
          variant: 'destructive',
        })
      } else {
        getCurrentSession()
      }
    }

    if (mode === 'register') {
      await fetch('/api/accounts', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(() => signIn('credentials', data))
        .catch(res => toast({ title: 'Error', description: res.response.data }))
        .then(() => toast({ description: 'Account created' }))
        .finally(() => getCurrentSession())
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
          <CardTitle className="capitalize">{mode}</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-2">
          {mode === 'register' && (
            <Input
              {...register('name', { required: true })}
              placeholder="Name"
            />
          )}
          <Input
            {...register('email', { required: true })}
            placeholder="Email"
            type="text"
          />
          <Input
            {...register('password', { required: true })}
            type="password"
            placeholder="Password"
          />
        </CardContent>
        <CardFooter className="flex flex-col">
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </Card>
    </form>
  )
}
