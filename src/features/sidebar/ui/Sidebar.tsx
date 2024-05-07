'use client'

import { GanttChartSquare } from 'lucide-react'
import Link from 'next/link'

import { MENU } from '../lib/menu.data'

import { MenuItem } from './MenuItem'
import { COLORS } from '@/shared/lib'
import { LogoutButton } from '@/shared/ui'

// import { COLORS } from '@/shared/lib/color.constants'

export function Sidebar() {
	return (
		<aside className='border-r-border bg-sidebar flex h-full flex-col justify-between border-r'>
			<div>
				<Link
					href='/'
					className='p-layout border-b-border flex items-center gap-2.5 border-b'
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={38}
					/>
					<span className='relative text-2xl font-bold'>
						RED Planner
						<span className='absolute -right-6 -top-1 rotate-[18deg] text-xs font-normal opacity-40'>
							beta
						</span>
					</span>
				</Link>
				<div className='relative p-3'>
					<LogoutButton />
					{MENU.map(item => (
						<MenuItem
							item={item}
							key={item.link}
						/>
					))}
				</div>
			</div>
			<footer className='p-layout text-center text-xs font-normal opacity-40'>
				2024 &copy; With love from{' '}
				<a
					href='https://www.youtube.com/c/redgroup/?sub_confirmation=1'
					target='_blank'
					rel='noreferrer'
					className='hover:text-primary text-brand-300 transition-colors'
				>
					RED Group
				</a>
				. <br /> All rights reserved.
			</footer>
		</aside>
	)
}
