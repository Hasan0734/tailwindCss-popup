import React, { useState } from 'react'


import ModalLayout from '../../ModalLayout/ModalLayout';

import SelectTime from './SelectTime';
import SelectPerson from './SelectPerson';
import SelectDates from './SelectDates';
import InfoTop from './InfoTop';


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
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedChildren, setSelectedChildren] = useState(childrens[0])
    const [selectedAdult, setSelectedAdult] = useState(adults[0])

    const handleDateChange = (e: any) => {
        setStartDate(e);
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
                <InfoTop />
                {/* horizantal line */}
                <div className='h-[1px] bg-[#AEAEAE] mt-5 mb-4'></div>

                <form className='date_group_area'>

                    <div>
                        <label className='label_title'>Tell me your preffered date and group size</label>
                        <div className='mt-2  border border-[#AEAEAE] rounded-[10px]
                        '>
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full divide-x divide-[#AEAEAE]'>

                                <div className='w-full'>
                                    <SelectDates />
                                </div>
                                <div className='w-full relative border-t sm:border-t-0  border-[#AEAEAE]'>
                                    <SelectTime selectedTime={selectedTime}
                                        setSelectedTime={setSelectedTime} />
                                </div>
                            </div>
                            <div className='border-t  border-[#AEAEAE]'>
                                <SelectPerson />
                            </div>
                        </div>
                    </div>
                    {/* textara input section*/}

                    <div className='mt-7'>
                        <label className='label_title'>
                            Is there anything you’d like me to customise for your <br /> exprience
                        </label>
                        <textarea
                            defaultValue={'Hi! We’d like to add some local tastings to this experience.'}
                            className='w-full outline-none mt-4 resize-y'
                        ></textarea>
                    </div>
                    {/* textara input section  With whom will you be joining?*/}

                    <div className='mt-10'>
                        <label className='label_title'>
                            With whom will you be joining?
                        </label>
                        <textarea
                            defaultValue={'We will be travelling with my girlfriend and another couple. We are all about 30 year old and are very interested in art!'}
                            className='w-full outline-none mt-4 resize-y'
                        ></textarea>
                    </div>

                    {/* submit button */}
                    <div className='mt-11'>
                        <button className='offer_btn
                         w-full py-[9px]'>
                            Request a personalized offer
                        </button>
                    </div>
                </form>

            </div>
        </ModalLayout>
    )
}
