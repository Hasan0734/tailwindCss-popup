import React from 'react'
import { Popover } from '@headlessui/react';
import { ClockIcon, UserIcon } from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function SelectPerson() {
    return (
        <>
            <div className='w-full'>
                <Popover className="relative ">
                    <Popover.Button className="select_person px-4 py-3 flex 
                                        gap-2 items-center justify-between w-full">
                        <div className='flex gap-2'>
                            <UserIcon width={20} strokeWidth="0.05rem" className="text=[#4B4B4B]" />
                            <span className=''>
                                4 person
                            </span>
                        </div>
                        <ChevronDownIcon width={25} />
                    </Popover.Button>
                    <Popover.Panel className="absolute z-10 bg-white px-2 py-2">
                        <div className="grid grid-cols-2">
                            <a href="/analytics">Analytics</a>
                            <a href="/engagement">Engagement</a>
                            <a href="/security">Security</a>
                            <a href="/integrations">Integrations</a>
                        </div>

                        <img src="/solutions.jpg" alt="" />
                    </Popover.Panel>
                </Popover>
            </div>
        </>
    )
}
