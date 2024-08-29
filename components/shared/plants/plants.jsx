import { PlantItem } from './plant-item'
import { cn } from '@/lib/utils'

const PLANTS = [
	{
		title: 'Monstera Deliciosa',
		text: 'Monstera deliciosa is a popular variety of plant in the family',
		price: '10',
		imageUrl: '/plants/01.jpg'
	},
	{
		title: 'Ficus Benjamina',
		text: 'Ficus benjamina is a popular variety of plant in the family',
		price: '30',
		imageUrl: '/plants/02.jpg'
	},
	{
		title: 'Pilea Peperomioides',
		text: 'Pilea peperomioides is a popular variety of plant in the family',
		price: '120',
		imageUrl: '/plants/03.jpg'
	},
	{
		title: 'Monstera Deliciosa',
		text: 'Monstera deliciosa is a popular variety of plant in the family',
		price: '10',
		imageUrl: '/plants/01.jpg'
	},
	{
		title: 'Ficus Benjamina',
		text: 'Ficus benjamina is a popular variety of plant in the family',
		price: '30',
		imageUrl: '/plants/02.jpg'
	},
	{
		title: 'Pilea Peperomioides',
		text: 'Pilea peperomioides is a popular variety of plant in the family',
		price: '120',
		imageUrl: '/plants/03.jpg'
	}
]

export const Plants = () => {
	return (
		<div className={'flex gap-[1.875rem] max-md:gap-[0.9375rem]'}>
			{PLANTS.map((plant, index) => (
				<PlantItem
					key={index}
					title={plant.title}
					text={plant.text}
					price={plant.price}
					imageUrl={plant.imageUrl}
				/>
			))}
		</div>
	)
}
