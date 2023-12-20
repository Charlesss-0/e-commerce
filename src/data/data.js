import { v4 as uuid } from 'uuid'

import sweaterOne from '../assets/sweaterOne.jpeg'
import sweaterTwo from '../assets/sweaterTwo.jpeg'
import sweaterThree from '../assets/sweaterThree.jpeg'
import sweaterFour from '../assets/sweaterFour.jpeg'
import sweaterFive from '../assets/sweaterFive.jpeg'
import hoodieOne from '../assets/hoodieOne.jpeg'
import hoodieTwo from '../assets/hoodieTwo.jpeg'
import hoodieThree from '../assets/hoodieThree.jpeg'
import hoodieFour from '../assets/hoodieFour.jpeg'
import hoodieFive from '../assets/hoodieFive.jpeg'

export const storeProducts = {
	sweaters: [
		{
			img: sweaterOne,
			id: uuid(),
			title: 'Sweater One',
			price: 10,
			company: 'Sweater Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
		{
			img: sweaterTwo,
			id: uuid(),
			title: 'Sweater Two',
			price: 16,
			company: 'Sweater Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
		{
			img: sweaterThree,
			id: uuid(),
			title: 'Sweater Three',
			price: 8,
			company: 'Sweater Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
		{
			img: sweaterFour,
			id: uuid(),
			title: 'Sweater Four',
			price: 18,
			company: 'Sweater Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
		{
			img: sweaterFive,
			id: uuid(),
			title: 'Sweater Five',
			price: 24,
			company: 'Sweater Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
	],
	hoodies: [
		{
			img: hoodieOne,
			id: uuid(),
			title: 'Hoodie One',
			price: 10,
			company: 'Hoodie Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
		{
			img: hoodieTwo,
			id: uuid(),
			title: 'Hoodie Two',
			price: 16,
			company: 'Hoodie Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
		{
			img: hoodieThree,
			id: uuid(),
			title: 'Hoodie Three',
			price: 8,
			company: 'Hoodie Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
		{
			img: hoodieFour,
			id: uuid(),
			title: 'Hoodie Four',
			price: 18,
			company: 'Hoodie Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
		{
			img: hoodieFive,
			id: uuid(),
			title: 'Hoodie Five',
			price: 24,
			company: 'Hoodie Company',
			info: 'Lorem ipsum dolor sit.',
			inCart: false,
			count: 0,
			total: 0,
		},
	],
}
