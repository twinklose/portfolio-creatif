import { Heading } from '@chakra-ui/react'

type TypographyUsage = ['h1', 'p']

export default function Typography({
	type,
	content,
}: {
	type: TypographyUsage[number]
	content: string
}) {
	switch (type) {
		case 'h1':
			return (
				<Heading as="h1" size="4xl">
					{content}
				</Heading>
			)
		case 'p':
			return <p>{content}</p>
		default:
			return <p>{content}</p>
	}
}
