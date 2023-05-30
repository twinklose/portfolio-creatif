import React from 'react'
import { Link } from '@chakra-ui/react'

export default function InternalLink({
	children,
	link,
}: {
	children: React.ReactNode
	link: string
}): JSX.Element {
	return (
		<Link href={link} rel="noopener noreferrer">
			{children}
		</Link>
	)
}
