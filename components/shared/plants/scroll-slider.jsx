'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

import { Container } from '../container'

import { Plants } from './plants'

export const ScrollSlider = () => {
	const targetref = useRef(null)

	const { scrollYProgress } = useScroll({
		target: targetref
	})

	console.log(targetref)
	const xScroll = useTransform(scrollYProgress, [0, 1], ['1%', '-100%'])
	return (
		<div className='min-h-[250svh] relative' ref={targetref}>
			<div className='py-[3.75rem] flex sticky top-0 left-0'>
				<Container>
					<div className='flex flex-wrap items-center gap-5 justify-between mb-[3.75rem]'>
						<h2 className='text-7xl font-extrabold max-lg:text-4xl'>
							New Plants
						</h2>
						<p className='text-base max-w-[800px]'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Similique suscipit consequuntur quos possimus ducimus? Excepturi,
							ipsam at. Perferendis illum, dolores soluta aliquam ipsa optio
							eaque velit quam autem voluptate at!
						</p>
					</div>

					<motion.div style={{ x: xScroll }}>
						<Plants />
					</motion.div>
				</Container>
			</div>
		</div>
	)
}
