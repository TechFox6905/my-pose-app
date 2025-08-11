
'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignUp from '@clerk/elements/sign-up'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'

export default function SignUpPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <SignUp.Root>
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
          <SignUp.Step name="start" className="space-y-6">
            <div className="text-center space-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">Create an account</h1>
              <p className="text-sm text-muted-foreground">Get started in seconds.</p>
            </div>

            <div className="grid grid-cols-1 gap-3">
              <Clerk.Connection
                name="google"
                className="flex items-center gap-x-3 justify-center font-medium border shadow-sm py-2 px-3 rounded-md"
              >
                <Clerk.Icon className="size-4" />
                Continue with Google
              </Clerk.Connection>
            </div>

            <div className="space-y-4">
              <Clerk.Field name="emailAddress" className="space-y-2">
                <Label className="text-sm font-medium">Email</Label>
                <Clerk.Input asChild>
                  <Input type="email" placeholder="you@example.com" />
                </Clerk.Input>
                <Clerk.FieldError className="block text-red-500 text-sm" />
              </Clerk.Field>

              <Clerk.Field name="password" className="space-y-2">
                <Label className="text-sm font-medium">Password</Label>
                <Clerk.Input asChild>
                  <Input type="password" placeholder="••••••••" />
                </Clerk.Input>
                <Clerk.FieldError className="block text-red-500 text-sm" />
              </Clerk.Field>
            </div>

            <SignUp.Action submit asChild>
              <Button className="w-full">Sign up</Button>
            </SignUp.Action>

            <Clerk.GlobalError className="block text-red-500 text-sm" />
          </SignUp.Step>

          <SignUp.Step name="continue" className="space-y-6">
            <div className="space-y-2">
              <Clerk.Field name="username">
                <Label className="text-sm font-medium">Username</Label>
                <Clerk.Input asChild>
                  <Input placeholder="yourname" />
                </Clerk.Input>
                <Clerk.FieldError className="block text-red-500 text-sm" />
              </Clerk.Field>
            </div>
            <SignUp.Action submit asChild>
              <Button className="w-full">Continue</Button>
            </SignUp.Action>
          </SignUp.Step>

          <SignUp.Step name="verifications" className="space-y-6">
            <SignUp.Strategy name="email_code">
              <div className="space-y-2">
                <Clerk.Field name="code">
                  <Label className="text-sm font-medium">Email code</Label>
                  <Clerk.Input type="otp" className="w-full" />
                  <Clerk.FieldError className="block text-red-500 text-sm" />
                </Clerk.Field>
              </div>
              <SignUp.Action submit asChild>
                <Button className="w-full">Verify</Button>
              </SignUp.Action>
            </SignUp.Strategy>
          </SignUp.Step>
        </div>
      </SignUp.Root>
    </div>
  )
} 