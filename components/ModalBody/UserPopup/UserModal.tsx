import React, { useState } from 'react'


import ModalLayout from '../../ModalLayout/ModalLayout';

import SelectPerson from './SelectPerson';
import SelectDates from './SelectDates';
import InfoTop from './InfoTop';

export default function UserModal({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: any }) {


    return (
        <ModalLayout style={{
            size: 433, center: 'items-start', boxShadow:
                'drop-shadow-[0_1px_4px_rgba(0,0,0,0.25)]',
            background: 'bg-white',
            rounded: 'rounded'
        }}
            isOpen={isOpen} setIsOpen={setIsOpen}>
            <div className='pt-[60px] pb-[21px] px-[25px] xs:px-[42px]'>
                {/* info-section like image, name*/}
                <InfoTop />
                {/* horizantal line */}
                <div className='h-[1px] bg-[#AEAEAE] mt-5 mb-4'></div>


                <div className='date_group_area'>
                    <label className='label_title'>Tell me your preffered date and group size</label>
                    <div className='mt-2  border border-[#AEAEAE] rounded-[10px]
                        '>
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-2 w-full 
                        divide-y sm:divide-y-0 sm:divide-x divide-[#AEAEAE]'>
                            <SelectDates />
                            <SelectPerson />
                        </div>

                    </div>
                </div>

                <form className='date_group_area'>

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
                         w-full py-[9px] text-[15px]'>
                            Request a personalized offer
                        </button>
                    </div>
                </form>

            </div>
        </ModalLayout>
    )
}
