import { Inter as FontSans } from 'next/font/google'

import { Footer } from '@/components/shared/footer'
import { Header } from '@/components/shared/header'

import './globals.scss'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans'
})

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app'
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body
				className={cn(
					'min-h-screen bg-background font-sans antialiased',
					fontSans.variable
				)}
			>
				<div className='wrapper'>
					<Header />
					{children}
					<Footer />
				</div>
			</body>
		</html>
	)
}
