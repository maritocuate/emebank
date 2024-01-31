import Image from 'next/image'

interface WelcomeLogoProps {
  username: string
}

export default function WelcomeLogo({ username }: WelcomeLogoProps) {
  return (
    <div className="flex gap-2">
      <div>
        <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
      </div>
      <span className="hidden md:flex items-center text-pretty capitalize">
        Welcome {username}
      </span>
    </div>
  )
}
