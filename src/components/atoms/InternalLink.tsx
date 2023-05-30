import { Link } from '@chakra-ui/react'

export default function InternalLink({
  children,
  link
}: {
  children: React.ReactNode
  link: string
}) {
  return (
    <Link href={link} rel="noopener noreferrer">
      {children}
    </Link>
  )
}
