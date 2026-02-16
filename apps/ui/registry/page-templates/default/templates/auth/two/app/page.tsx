import { LoginForm } from "../components/login-form"
import { ShaderRipple } from "../components/shader-ripple"

export default function Page() {
  return (
    <div className="relative flex h-screen items-center justify-center">
      <div className="relative z-10 w-full max-w-sm">
        <LoginForm />
      </div>
      <ShaderRipple className="absolute inset-0 -z-0 h-screen" />
    </div>
  )
}
