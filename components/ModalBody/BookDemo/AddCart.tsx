import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/solid'
import Link from 'next/link';
import SlotSlider from './SlotSlider';


const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]

const times = [
    { id: 1, time: '10:30 AM - 11:30 AM' },
    { id: 2, time: '12:00 PM - 1:00 PM' },
    { id: 3, time: '3:00 PM - 4:00 PM' },
    { id: 4, time: '4:30 PM - 5:30 PM' },
    { id: 5, time: '6:00 PM - 7:00 PM<' },
    { id: 6, time: '7:30 PM - 8:30 PM' },
]

export default function AddCart() {
    const [selectedPerson, setSelectedPerson] = useState(people[0]);
    const [agree, setAgree] = useState(false)
    const [selectTime, setSelectTime] = useState('10:30 AM - 11:30 AM')

    return (
        <div className='col-span-2 md:col-span-1 flex justify-center'>
            <div className='w-full max-w-[530px]
             p-0 sm:p-6 bg-[#F9F9F9] rounded-xl add_cart_card'>
                <div>
                    <h3 className='title'>Book a Demo for Live Class</h3>
                    <p className='sub_title mt-2'>Select 30 Minutes Demo Slot</p>
                </div>
                <form className='mt-6'>

                    <div>
                        <label className='label_text'>The Child you want trial session for</label>
                        <div className='mt-1'>
                            <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                                <Listbox.Button className="trial_select trial_font">
                                    {selectedPerson.name}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                        <path d="M1.625 1.625L8 8.375L14.375 1.625" stroke="black" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </Listbox.Button>
                                <Listbox.Options className="bg-transparent py-2 z-20 ">
                                    {people.map((person) => (
                                        <Listbox.Option
                                            className="trial_select cursor-pointer trial_font"
                                            key={person.id}
                                            value={person}
                                            disabled={person.unavailable}
                                        >
                                            {person.name}
                                        </Listbox.Option>
                                    ))}
                                </Listbox.Options>
                            </Listbox>
                        </div>
                    </div>

                    {/* choise slot session */}
                    <div className='mt-4'>
                        <SlotSlider />
                        {/* times */}
                        <div className='mt-5 grid grid-cols-1 xs:grid-cols-2 gap-4'>
                            {times.map(t => (<div key={t.id}

                                onClick={() => setSelectTime(t.time)}
                                className={`${selectTime === t.time ? 'bg-[#17A966] text-white' : 'bg-[#F9F9F9] text-black'}
                            time_text rounded-lg px-5 py-3 border
                             border-[#D6D6D6] cursor-pointer`}
                            >
                                <button type='button'>10:30 AM - 11:30 AM</button>
                            </div>
                            ))}
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p className='content'>For any convenient slot {" "}
                            <Link href={"/"}>
                                <a className='text-[#7C79F6]'>Schedule a Batch Timing</a>
                            </Link>
                        </p>
                    </div>
                    <div className='mt-3'>
                        <span onClick={() => setAgree(!agree)} className='flex gap-2 items-center'>
                            <div>
                                <div className='h-6 w-6 rounded-lg bg-[#F9F9F9]
                             border border-[#D6D6D6] cursor-pointer'>
                                    {agree && <CheckIcon />}
                                </div>
                            </div>
                            <label className='confirm_text'>I will attend this session on a Laptop / PC</label>
                        </span>
                    </div>
                    {/* submti form btn */}
                    <div className='mt-6'>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
                            <div>
                                <button type='reset'
                                    className='btn border-2 border-[#288890] rounded-lg px-4 py-3 w-full text-[#288890] bg-[#F9F9F9]'>Back</button>
                            </div>
                            <div>
                                <button type='submit'
                                    className='btn border-2 border-[#288890] rounded-lg px-4 py-3 w-full text-white bg-[#288890]'>Add To Cart</button>
                            </div>
                        </div>
                    </div>
                    <div className='mt-4'>
                        <p className='filling_text'><span className='hurry_up'>Hurry up!</span> Slots are filling fast</p>
                    </div>
                </form >
            </div >
        </div >
    )
}
