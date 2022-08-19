import React, { useState } from 'react'
import DatePicker from "react-datepicker";
import dateFormat from "dateformat";
import { Popover } from '@headlessui/react'

export default function UserModal() {

    const [startDate, setStartDate] = useState(new Date());
    const [startTime, setStartTime] = useState(new Date());

    const handleDateChange = (e: any) => {
        setStartDate(e);
    };

    const handleTimeChange = (e: any) => {
        setStartTime(e);
    };


    console.log(startDate)
    return (
        <div className='pt-[60px] pb-[21px] px-[42px]'>

            {/* info-section like image, name*/}
            <div className='flex gap-5'>
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
            <div className='horizental_line mt-5 mb-4'></div>

            <form className='date_group_area'>
                <div>
                    <label className='label_title'>Tell me your preffered date and group size</label>
                    <div className='mt-2 grid grid-cols-2 gap-x-3 gap-y-4'>
                        <Popover className="relative">
                            <Popover.Button className="input_box w-full px-6 py-2 flex justify-between items-center">
                                {dateFormat(startDate, "dd mmm")}
                                <span className='chevron'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </Popover.Button>
                            <Popover.Panel className="absolute z-10">
                                <DatePicker selected={startDate} onChange={handleDateChange} inline />
                            </Popover.Panel>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="input_box w-full px-6 py-2 flex justify-between items-center">
                                {dateFormat(startTime, "h: MM")}
                                <span className='chevron'>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </Popover.Button>
                            <Popover.Panel className="absolute z-10">
                                <DatePicker selected={startTime}
                                    onChange={handleTimeChange}
                                    inline
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"
                                    dateFormat="h:mm"
                                />
                            </Popover.Panel>
                        </Popover>
                        <Popover className="relative">
                            <Popover.Button className="input_box w-full pl-1 pr-6 py-[0.4rem]  flex justify-between items-center">
                                <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="black" fillOpacity="0.3" />
                                    </svg>
                                    4 Adults
                                </div>
                                <span className="chevron">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </Popover.Button>
                            <Popover.Panel className="absolute z-10">

                            </Popover.Panel>
                        </Popover>

                        <Popover className="relative">
                            <Popover.Button className="input_box w-full pl-1 pr-6 py-[0.4rem] flex justify-between items-center">
                                <div className='flex items-center gap-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} viewBox="0 0 16 16" fill="none">
                                        <path d="M8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8ZM8 10C5.33 10 0 11.34 0 14V16H16V14C16 11.34 10.67 10 8 10Z" fill="black" fillOpacity="0.3" />
                                    </svg>
                                    0 Children
                                </div>
                                <span className="chevron">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </Popover.Button>
                            <Popover.Panel className="absolute z-10">

                            </Popover.Panel>
                        </Popover>

                        
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
    )
}
