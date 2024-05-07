'use client'

import { LogOut } from 'lucide-react'
import { useRouter } from 'next/navigation'

export function LogoutButton() {
	return (
		<div className='absolute right-1 top-1'>
			<button
				className='opacity-20 transition-opacity duration-300 hover:opacity-100'
				onClick={() => console.log('Logout')}
			>
				<LogOut size={20} />
			</button>
		</div>
	)
}
