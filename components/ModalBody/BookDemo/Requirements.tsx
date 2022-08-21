import { CheckIcon } from '@heroicons/react/solid'
import React from 'react'

const requirements = [
    { id: 1, title: 'Join a Video Call' },
    { id: 2, title: 'Join a Video Call' },
    { id: 3, title: 'Join a Video Call' },
    { id: 4, title: 'Book for a Private Group' },
    { id: 5, title: 'Book for a Private Group' },
    { id: 6, title: 'Book for a Private Group' },
]

export default function Requirements() {
    return (
        <div className='requirement'>
            <h1 className='title'>Requirements</h1>

            <div className='mt-5 flex flex-wrap gap-12 w-[85%]'>
                {requirements.map(requirement => (
                    <div key={requirement.id} className='flex gap-2 items-center'>
                        <span className='h-4 w-4 bg-[#E51075] rounded-full p-[2px]'>
                            <CheckIcon className='text-white' />
                        </span>
                        <p className='re_title'>{ requirement.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
