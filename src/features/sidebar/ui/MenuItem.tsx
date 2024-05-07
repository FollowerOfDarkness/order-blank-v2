import Link from 'next/link'

import { IMenuItem } from '../lib/menu.interface'

export function MenuItem({ item }: { item: IMenuItem }) {
	return (
		<div>
			<Link
				href={item.link}
				className='px-layout hover:bg-border mt-2 flex items-center gap-2.5 rounded-lg py-1.5 transition-colors'
			>
				<item.icon />
				<span>{item.name}</span>
			</Link>
		</div>
	)
}
