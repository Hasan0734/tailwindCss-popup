import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import dateFormat from "dateformat";
import { Listbox } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { ClockIcon } from '@heroicons/react/outline'
import ModalLayout from '../ModalLayout/ModalLayout';
import { Popover } from '@headlessui/react'


const childrens = [
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
    { id: 4, value: 3 },
    { id: 5, value: 4 },
]
const adults = [
    { id: 1, value: 0 },
    { id: 2, value: 1 },
    { id: 3, value: 2 },
    { id: 4, value: 3 },
    { id: 5, value: 4 },
]

export default function UserModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {

    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());
    const [selectedChildren, setSelectedChildren] = useState(childrens[0])
    const [selectedAdult, setSelectedAdult] = useState(adults[0])

    const handleDateChange = (e: any) => {
        setStartDate(e);
    };
    const handleTimeChange = (e: any) => {
        setStartTime(e);
    };

    return (
        <ModalLayout style={{
            size: 433, center: '', boxShadow:
                'drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]',
            background: 'bg-white',
            rounded: 'rounded'
        }}
            isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='pt-[60px] pb-[21px] px-[42px]'>
                {/* info-section like image, name*/}
                <div className='flex gap-5 flex-col items-center sm:flex-row sm:items-start'>
                    <div>
                        <img className='w-[84px] h-[80px] rounded-full user_img' src='/assets/images/userImg.png' />
                    </div>
                    <div>
                        <h2 className='user_name'>Hello!</h2>
                        <p className='sub_title'>Thanks for getting in touch.</p>
                        <p className='sub_title'>Let’s Personalize your experience</p>
                        <h4 className='question_title mt-3'>
                            Or just ask me a question
                        </h4>
                    </div>
                </div>
                {/* horizantal line */}
                <div className='h-[1px] bg-[#AEAEAE] mt-5 mb-4'></div>

                <form className='date_group_area'>
                    <div>
                        <label className='label_title'>Tell me your preffered date and group size</label>
                        <div className='mt-2  border border-[#AEAEAE] rounded-[10px]
                        '>
                            <div className='flex gap-2 w-full divide-x divide-[#AEAEAE]'>
                                <div className='w-full'>
                                    <Popover className="relative ">
                                        <Popover.Button className="dates_btn px-6 py-3 flex 
                                        gap-2 items-center justify-between w-full">
                                            <div className='flex flex-col'>
                                                <span className='uppercase dates_text'>Dates</span>
                                                <span className='month'>Aug</span>
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
                                <div className='w-full'>
                                    <Popover className="relative">
                                        <Popover.Button className="select_btn px-4 py-3 flex
                                        gap-2 items-center justify-between w-full">
                                            <ClockIcon strokeWidth="0.06rem" className='text-[#3D3838]' width={25} />
                                            <span className='content'>Select time</span>
                                            <ChevronDownIcon width={25} />
                                        </Popover.Button>
                                        <Popover.Panel className="absolute z-10">
                                           
                                        </Popover.Panel>

                                    </Popover>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mt-7'>
                        <label className='label_title'>
                            Is there anything you’d like me to customise for your <br /> exprience
                        </label>
                        <textarea
                            defaultValue={'Hi! We’d like to add some local tastings to this experience.'}
                            className='w-full outline-none mt-4 resize-y'
                        ></textarea>
                    </div>
                    <div className='mt-10'>
                        <label className='label_title'>
                            With whom will you be joining?
                        </label>
                        <textarea
                            defaultValue={'We will be travelling with my girlfriend and another couple. We are all about 30 year old and are very interested in art!'}
                            className='w-full outline-none mt-4 resize-y'
                        ></textarea>
                    </div>
                    <div className='mt-11'>
                        <button className='offer_btn w-full py-[9px]'>Request a personalized offer</button>
                    </div>
                </form>

            </div>
        </ModalLayout>
    )
}
