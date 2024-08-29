'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const PlantItem = ({ imageUrl, title, text, price }) => {
	return (
		<article className='grid gap-4 flex-[0_0_31.75%] max-xl:flex-[0_0_15.625rem]'>
			<Link className='overflow-hidden' href={`/plant/${title}`}>
				<motion.div
					whileHover={{ scale: 1.03 }}
					transition={{ duration: 0.15, ease: 'backOut' }}
					className='relative aspect-[6/4]'
				>
					<Image
						className='object-cover absolute top-0 left-0 h-full w-full transition-transform origin-bottom'
						src={imageUrl}
						width={300}
						height={300}
						alt={title}
					/>
				</motion.div>
			</Link>
			<h4>
				<Link
					className='text-2xl font-bold hover:underline'
					href={`/plant/${title}`}
				>
					{title}
				</Link>
			</h4>

			<p className='text-[0.875rem] max-w-[15.625rem]'>{text}</p>
			<div className='flex gap-[0.9375rem] justify-between items-center'>
				<div className='text-base font-bold dollar'>{price}</div>
				<Link href={`/plant/${title}`}>
					<motion.div
						whileHover={{ width: '5rem' }}
						transition={{ duration: 0.15, type: 'spring', stiffness: 100 }}
						className='h-[2.5rem] w-[2.5rem] rounded-full bg-black flex items-center justify-center'
					>
						<ArrowRight className='text-white' size={25} />
					</motion.div>
				</Link>
			</div>
		</article>
	)
}
