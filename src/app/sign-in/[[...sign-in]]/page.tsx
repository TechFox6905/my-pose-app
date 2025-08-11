'use client'

import * as Clerk from '@clerk/elements/common'
import * as SignIn from '@clerk/elements/sign-in'
import { Button } from '@/src/components/ui/button'
import { Input } from '@/src/components/ui/input'
import { Label } from '@/src/components/ui/label'

export default function SignInPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center px-4 py-12">
      <SignIn.Root>
        <div className="w-full max-w-md rounded-2xl border bg-white p-8 shadow-sm">
          <SignIn.Step name="start" className="space-y-6">
            <div className="text-center space-y-1">
              <h1 className="text-2xl font-semibold tracking-tight">Sign in</h1>
              <p className="text-sm text-muted-foreground">Welcome back. Enter your details to continue.</p>
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

            <div className="space-y-2">
              <Clerk.Field name="identifier" className="space-y-2">
                <Label className="text-sm font-medium">Email or username</Label>
                <Clerk.Input asChild>
                  <Input placeholder="you@example.com" />
                </Clerk.Input>
                <Clerk.FieldError className="block text-red-500 text-sm" />
              </Clerk.Field>
            </div>

            <SignIn.Action submit asChild>
              <Button className="w-full">Continue</Button>
            </SignIn.Action>

            <Clerk.GlobalError className="block text-red-500 text-sm" />
          </SignIn.Step>

          <SignIn.Step name="verifications" className="space-y-6">
            <SignIn.Strategy name="email_code">
              <div className="space-y-2">
                <Clerk.Field name="code">
                  <Label className="text-sm font-medium">Email code</Label>
                  <Clerk.Input type="otp" className="w-full" />
                  <Clerk.FieldError className="block text-red-500 text-sm" />
                </Clerk.Field>
              </div>
              <SignIn.Action submit asChild>
                <Button className="w-full">Verify</Button>
              </SignIn.Action>
            </SignIn.Strategy>
          </SignIn.Step>
        </div>
      </SignIn.Root>
    </div>
  )
} 