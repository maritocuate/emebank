import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex gap-2">
      <div>
        <Image src="/images/logo.svg" alt="Logo" width={30} height={30} />
      </div>
      <span className="hidden md:flex items-center text-pretty font-bold">
        Eme Bank
      </span>
    </div>
  )
}
