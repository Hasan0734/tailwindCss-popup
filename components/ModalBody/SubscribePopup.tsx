import React, { useState } from 'react';
import ModalLayout from '../ModalLayout/ModalLayout';
import { Listbox } from '@headlessui/react';



const minutes = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 },
    { id: 6, value: 60 }
]
const days = [
    { id: 1, value: 1 },
    { id: 2, value: 2 },
    { id: 3, value: 3 },
    { id: 4, value: 4 },
    { id: 5, value: 5 },
    { id: 6, value: 6 },
    { id: 7, value: 7 },
]

export default function SubscribePopup({ isOpen, setIsOpen }:
    { isOpen: boolean, setIsOpen: any }) {

    const [selectedMinutes, setSelectedMinutes] = useState(minutes[0]);

    const [selectedDays, setSelectedDays] = useState(days[0]);



    return (
        <ModalLayout style={{
            size: 464, center: 'items-center',
            boxShadow: 'drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]',
            background: 'bg-[#008080]'
        }}
            isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='pt-[49px] pb-[21px] px-[38px] subscribe_popup'>
                <div className='text-center'>
                    <div className='flex justify-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 44 44" fill="none">
                            <path d="M6.76923 0V32.1538C6.76923 33.0931 6.01615 33.8462 5.07692 33.8462C4.13769 33.8462 3.38462 33.0931 3.38462 32.1538V11.8462H5.07692V8.46154H0V32.1538C0 34.9377 2.29308 37.2308 5.07692 37.2308H22C21.6615 36.2154 21.4703 35.0308 21.4703 33.8462H9.83908C10.032 33.3114 10.1555 32.7512 10.1555 32.1538V3.38462H37.2325V22C38.4171 22.3385 39.6017 22.8462 40.6171 23.6923V0H6.76923ZM13.5385 6.76923V13.5385H33.8462V6.76923H13.5385ZM13.5385 16.9231V20.3077H22V16.9231H13.5385ZM25.3846 16.9231V20.3077H33.8462V16.9231H25.3846ZM13.5385 22V25.3846H22V22H13.5385ZM33.8462 23.6923C28.2209 23.6923 23.6923 28.2209 23.6923 33.8462C23.6923 39.4714 28.2209 44 33.8462 44V40.6154C29.9945 40.6154 27.0769 37.6978 27.0769 33.8462C27.0769 29.9945 29.9945 27.0769 33.8462 27.0769C37.6978 27.0769 40.6154 29.9945 40.6154 33.8462C40.6154 35.3151 40.1974 36.6723 39.4511 37.7605L37.2308 35.5385L36.3846 43.1538L44 42.3077L41.8846 40.1923C43.2909 38.4255 44 36.1765 44 33.8462C44 28.2209 39.4714 23.6923 33.8462 23.6923ZM13.5385 27.0769V30.4615H22V27.0769H13.5385Z" fill="white" />
                        </svg>
                    </div>
                    <div>
                        <h4 className='title my-1'>A plan for everyone</h4>
                        <p className='sub_title '>Brief Description</p>
                        <p className='sub_title '>About the Subscription</p>
                    </div>
                </div>
                <form className='mt-11'>
                    <div>
                        <label className='label_title'>Set a weekly schedule</label>

                        <div className='mt-3 grid grid-cols-2 gap-4 '>
                            {/* minutes per day */}
                            <div className='relative bg-[#1D4E60]
                                     rounded-[5px] flex col-span-2 sm:col-span-1 z-30'>
                                <Listbox value={selectedMinutes} onChange={setSelectedMinutes}>
                                    <Listbox.Button
                                        className="
                                    items-center px-3 py-2
                                    flex gap-3 justify-between w-full">
                                        <span className='text-white select_text'>
                                            {selectedMinutes.value} minutes per day
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                                            <path d="M8.76322 0.222057C8.68865 0.151666 8.60007 0.0958202 8.50257 0.0577167C8.40506 0.0196132 8.30053 -3.05749e-08 8.19496 -3.51893e-08C8.0894 -3.98036e-08 7.98487 0.0196132 7.88736 0.0577167C7.78985 0.0958202 7.70128 0.151666 7.62671 0.222057C5.87011 1.87684 3.12848 1.87684 1.37189 0.222057C1.22118 0.080082 1.01677 0.000321169 0.803633 0.000321159C0.590496 0.00032115 0.386087 0.0800819 0.235377 0.222057C0.0846662 0.364032 -2.43294e-08 0.556591 -3.31059e-08 0.757373C-4.18823e-08 0.958156 0.0846662 1.15072 0.235377 1.29269L3.93507 4.77794C4.00964 4.84833 4.09822 4.90418 4.19573 4.94228C4.29323 4.98039 4.39776 5 4.50333 5C4.60889 5 4.71342 4.98039 4.81093 4.94228C4.90844 4.90418 4.99701 4.84833 5.07158 4.77794L8.77128 1.29269C9.07757 1.00415 9.07757 0.51819 8.76322 0.222057Z" fill="white" />
                                        </svg>
                                    </Listbox.Button>

                                    <Listbox.Options className="absolute rounded-br-[5px] rounded-bl-[5px] top-8 bg-[#1D4E60] py-[5px] w-full">
                                        {minutes.map((minute) => (
                                            <Listbox.Option
                                                className=" text-white rounded-[5px] cursor-pointer
                                             px-4 py-[5px] hover:bg-[#1c4250] my-1 select_text"
                                                key={minute.id}
                                                value={minute}
                                            >
                                                {minute.value} minutes per day
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Listbox>
                            </div>
                            {/* days per week */}

                            <div className='relative bg-[#1D4E60]
                                     rounded-[5px] flex col-span-2 sm:col-span-1 z-20'>
                                <Listbox value={selectedDays} onChange={setSelectedDays}>
                                    <Listbox.Button
                                        className="
                                    items-center px-3 py-2
                                    flex gap-3 justify-between w-full">
                                        <span className='text-white select_text'>
                                            {selectedDays.value} days per week
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none">
                                            <path d="M8.76322 0.222057C8.68865 0.151666 8.60007 0.0958202 8.50257 0.0577167C8.40506 0.0196132 8.30053 -3.05749e-08 8.19496 -3.51893e-08C8.0894 -3.98036e-08 7.98487 0.0196132 7.88736 0.0577167C7.78985 0.0958202 7.70128 0.151666 7.62671 0.222057C5.87011 1.87684 3.12848 1.87684 1.37189 0.222057C1.22118 0.080082 1.01677 0.000321169 0.803633 0.000321159C0.590496 0.00032115 0.386087 0.0800819 0.235377 0.222057C0.0846662 0.364032 -2.43294e-08 0.556591 -3.31059e-08 0.757373C-4.18823e-08 0.958156 0.0846662 1.15072 0.235377 1.29269L3.93507 4.77794C4.00964 4.84833 4.09822 4.90418 4.19573 4.94228C4.29323 4.98039 4.39776 5 4.50333 5C4.60889 5 4.71342 4.98039 4.81093 4.94228C4.90844 4.90418 4.99701 4.84833 5.07158 4.77794L8.77128 1.29269C9.07757 1.00415 9.07757 0.51819 8.76322 0.222057Z" fill="white" />
                                        </svg>
                                    </Listbox.Button>

                                    <Listbox.Options className="absolute rounded-br-[5px] rounded-bl-[5px]  top-8 bg-[#1D4E60] py-[5px] w-full">
                                        {days.map((day) => (
                                            <Listbox.Option
                                                className=" text-white rounded-[5px] cursor-pointer
                                             px-4 py-[5px] hover:bg-[#1c4250] my-1 select_text"
                                                key={day.id}
                                                value={day}
                                            >
                                                {day.value} days per week
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Listbox>
                            </div>

                        </div>
                    </div>

                    <div className='mt-7'>
                        <label className='label_title'>Select a commitment level</label>

                        <div className='mt-3 flex gap-2 justify-between'>
                            <div>
                                <button className="label_btn bg-[#228891] py-[13px] px-[31px] 
                                border-dashed border border-[#1D4E60]">1 month</button>
                            </div>
                            <div className='relative'>
                                <button className="label_btn bg-[#228891] py-[13px] px-[31px] 
                                border-dashed border border-[#1D4E60]">3 month</button>
                                <span className='absolute bg-[#FFC200] 
                                px-[8px] py-[2px] z-10 rounded-[10px] right-[5px] -top-[6px] discount_'>10%</span>
                            </div>
                            <div className='relative'>
                                <button className="label_btn bg-[#1D4E60] py-[13px] px-[31px] 
                                ">6 month</button>
                                <span className='absolute bg-[#FFC200] 
                                px-[8px] py-[2px] z-10 rounded-[10px] right-[5px] -top-[6px] discount_'>33%</span>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </ModalLayout>
    )
}
