import React, { useState } from 'react'
import { Popover } from '@headlessui/react';
import { ClockIcon, UserIcon } from '@heroicons/react/outline';
import { ChevronDownIcon, MinusIcon, PlusIcon } from '@heroicons/react/solid';

export default function SelectPerson() {
    const [persons, setPersons] = useState({ adults: 0, childrens: 0, infans: 0, pets: 0 })


    const { adults, childrens, infans, pets } = persons
    const handleAddCount = (type: string) => {
        if (type === 'adults') {
            setPersons({ ...persons, adults: adults + 1 })
        }
        if (type === 'childrens') {
            setPersons({ ...persons, childrens: childrens + 1 })
        }
        if (type === 'infans') {
            setPersons({ ...persons, infans: infans + 1 })
        }
        if (type === 'pets') {
            setPersons({ ...persons, pets: pets + 1 })
        }
    }
    const handleRemoveCount = (type: string) => {
        if (type === 'adults' && adults > 0) {
            setPersons({ ...persons, adults: adults - 1 })
        }
        if (type === 'childrens' && childrens > 0) {
            setPersons({ ...persons, childrens: childrens - 1 })
        }
        if (type === 'infans' && infans > 0) {
            setPersons({ ...persons, infans: infans - 1 })
        }
        if (type === 'pets' && pets > 0) {
            setPersons({ ...persons, pets: pets - 1 })
        }
    }

    return (
        <>
            <div className='w-full'>
                <Popover className="relative ">
                    <Popover.Button
                        className="
                        select_person px-4 py-3 flex gap-2 items-center
                        justify-between w-full">
                        <div className='flex gap-2'>
                            <UserIcon width={20} strokeWidth="0.05rem" className="text=[#4B4B4B]" />
                            <span className=''>
                                4 person
                            </span>
                        </div>
                        <ChevronDownIcon width={25} />
                    </Popover.Button>
                    <Popover.Panel className="absolute z-10 w-full select_person_area">
                        <div className="grid grid-cols-1 gap-y-8">
                            
                            {/* adults */}
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='person_title'>Adults</h2>
                                    <h4 className='person_age mt-1'>Age 13+</h4>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='add_person'>
                                        <button onClick={() => handleRemoveCount('adults')}
                                            type="button" className='border border-[#C4C4C4] p-[5px] rounded-full'
                                            disabled={adults > 0 ? false : true}>

                                            <MinusIcon width={15} />
                                        </button>
                                    </div>
                                    <div className='person_count'>{persons.adults}</div>

                                    <div onClick={() => handleAddCount('adults')}
                                        className='add_person'>
                                        <button type="button" className='border 
                                        border-[#C4C4C4] p-[5px] rounded-full' >
                                            <PlusIcon width={15} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            {/* childrens */}
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='person_title'>Children</h2>
                                    <h4 className='person_age mt-1'>Age 2-12</h4>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='add_person'>
                                        <button type="button"
                                            onClick={() => handleRemoveCount('childrens')}
                                            className='border border-[#C4C4C4] p-[5px]  rounded-full'
                                            disabled={childrens > 0 ? false : true}>
                                            <MinusIcon width={15} />
                                        </button>
                                    </div>
                                    <div className='person_count'>{persons.childrens}</div>

                                    <div className='add_person'>
                                        <button type="button" onClick={() => handleAddCount('childrens')}
                                            className='border border-[#C4C4C4] p-[5px] rounded-full' >
                                            <PlusIcon width={15} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            {/* Infants */}
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='person_title'>Infants</h2>
                                    <h4 className='person_age mt-1'>Under 2</h4>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='add_person'>
                                        <button
                                            onClick={() => handleRemoveCount('infans')}
                                            type="button"
                                            className='border border-[#C4C4C4] p-[5px] rounded-full'
                                            disabled={infans > 0 ? false : true}>
                                            <MinusIcon width={15} />
                                        </button>
                                    </div>
                                    <div className='person_count'>
                                        {persons.infans}
                                    </div>

                                    <div className='add_person'>
                                        <button type="button"
                                            onClick={() => handleAddCount('infans')}
                                            className='border border-[#C4C4C4] p-[5px] rounded-full' >
                                            <PlusIcon width={15} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                            {/* Pets */}
                            <div className='flex justify-between'>
                                <div>
                                    <h2 className='person_title'>Pets</h2>
                                    <h4 className='person_age mt-1'></h4>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <div className='add_person'>
                                        <button
                                            onClick={() => handleRemoveCount('pets')}
                                            type="button" className='border border-[#C4C4C4] p-[5px] rounded-full'
                                            disabled={pets > 0 ? false : true}>
                                            <MinusIcon width={15} />
                                        </button>
                                    </div>
                                    <div className='person_count'>{persons.pets}</div>

                                    <div className='add_person'>
                                        <button type="button" onClick={() => handleAddCount('pets')}
                                            className='border border-[#C4C4C4] p-[5px] rounded-full' >
                                            <PlusIcon width={15} />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </Popover.Panel>
                </Popover>
            </div>
        </>
    )
}
