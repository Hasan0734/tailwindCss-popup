import React from 'react'
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ClockIcon } from '@heroicons/react/outline'


const times = [
    { id: 1, time: '12:00 AM' },
    { id: 2, time: '12:15 AM' },
    { id: 3, time: '12:30 AM' },
    { id: 4, time: '12:45 AM' },
    { id: 5, time: '1:00 AM' },
    { id: 6, time: '1:15 AM' },
    { id: 7, time: '1:30 AM' },
    { id: 8, time: '1:45 AM' },
    { id: 9, time: '2:00 AM' },
    { id: 10, time: '2:15 AM' },
    { id: 11, time: '2:30 AM' },
    { id: 12, time: '2:45 AM' },
    { id: 13, time: '3:00 AM' },
    { id: 14, time: '3:15 AM' },
    { id: 15, time: '3:30 AM' },
    { id: 16, time: '3:45 AM' },
    { id: 17, time: '4:00 AM' },
    { id: 18, time: '4:15 AM' },
    { id: 19, time: '4:30 AM' },
    { id: 12, time: '4:45 AM' },

]

export default function SelectTime({ selectedTime, setSelectedTime }: { selectedTime: any, setSelectedTime: any }) {
    return (


        <Listbox value={selectedTime} onChange={setSelectedTime}>
            <Listbox.Button className="select_btn px-4 py-3 flex
                                        gap-2 items-center justify-between w-full">
                <ClockIcon strokeWidth="0.06rem" className='text-[#E51075]' width={25} />
                <span className='content text-[#E51075]'>{selectedTime ? selectedTime?.time : 'Select time'}</span>
                <ChevronDownIcon width={25} />
            </Listbox.Button>
            <Listbox.Options
                className="select_times 
                        scrollbar-thin scrollbar-thumb-gray-300
                         scrollbar-track-gray-200 overflow-y-scroll z-40">

                {times.map((time: any) => (
                    <Listbox.Option
                        className="hover:bg-gray-200 py-2 cursor-pointer"
                        key={time.id}
                        value={time}
                    >
                        {time.time}
                    </Listbox.Option>
                ))}
            </Listbox.Options>
        </Listbox>



    )
}
