'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useLayoutEffect, useRef, useState } from 'react'

import { Container } from '../container'

import { Plants } from './plants'

export const ScrollSlider = () => {
	const targetRef = useRef(null)
	const plantsRef = useRef(null)
	const [plantsWidth, setPlantsWidth] = useState(0)

	const { scrollYProgress } = useScroll({
		target: targetRef
	})

	useLayoutEffect(() => {
		if (plantsRef.current) {
			setPlantsWidth(
				plantsRef.current.scrollWidth - plantsRef.current.offsetWidth
			)
		}
	}, [])

	const xScroll = useTransform(
		scrollYProgress,
		[0, 1],
		['1%', `-${plantsWidth}px`]
	)

	return (
		<div className='min-h-[250svh] relative' ref={targetRef}>
			<div className='py-[3.75rem] flex sticky top-0 left-0 overflow-hidden'>
				<Container>
					<div className='flex flex-wrap items-center gap-5 justify-between mb-[3.75rem]'>
						<h2 className='text-7xl font-extrabold max-lg:text-4xl w-0'>
							New Plants
						</h2>
						<p className='text-base max-w-[800px] max-sm:hidden'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit.
							Similique suscipit consequuntur quos possimus ducimus? Excepturi,
							ipsam at. Perferendis illum, dolores soluta aliquam ipsa optio
							eaque velit quam autem voluptate at!
						</p>
					</div>

					<motion.div style={{ x: xScroll }} ref={plantsRef}>
						<Plants />
					</motion.div>
				</Container>
			</div>
		</div>
	)
}
