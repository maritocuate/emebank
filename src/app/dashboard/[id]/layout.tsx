import { fetchUser } from '@/lib/data'
import Logo from './components/logo'
import { UserNav } from './components/user-nav'

interface LayoutDashboardProps {
  children: React.ReactNode
  params: {
    id: string
  }
}

export default async function Layout({
  children,
  params,
}: LayoutDashboardProps) {
  const { id } = params
  const user = await fetchUser(id)
  const { username, email, balance } = user

  return (
    <nav className="flex flex-col">
      <div className="border-b">
        <div className="flex h-16 items-center px-4">
          <Logo />
          <div className="ml-auto flex items-center space-x-4">
            <div className="capitalize text-sm">Welcome {username}</div>
            <UserNav userid={id} username={username} email={email} />
          </div>
        </div>
      </div>
      {children}
    </nav>
  )
}
