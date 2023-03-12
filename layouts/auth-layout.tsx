import { ComponentWithChildren } from '@/types/props'

export default function AuthLayout({ children }: ComponentWithChildren) {
  return <div className='flex items-center justify-center w-full min-h-screen py-10'>{children}</div>
}
