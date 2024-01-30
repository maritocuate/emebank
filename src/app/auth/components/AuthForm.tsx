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

interface AuthFormProps {
  mode: 'login' | 'register'
}

export default function AuthForm({ mode }: AuthFormProps) {
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

  const onSubmit: SubmitHandler<FieldValues> = data => console.log(data)

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
