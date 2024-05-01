'use client'

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import { useForm } from "react-hook-form"

export function Authform () {
    const form = useForm()
    const handleSubmit = form.handleSubmit((data) => console.log(data))

  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-100 px-4 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign In</h1>
          <p className="text-gray-500 dark:text-gray-400">Enter your email to sign in</p>
        </div>
        <Card>
          <CardContent className="p-6 pt-5 space-y-4">
            <form onSubmit={handleSubmit} className="grid gap-4">
              <div className="grid gap-1">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="m@example.com" type="email" {...form.register('email')} />
              </div>
              <Button className="w-full" type="submit">
                Send Magic Link
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}