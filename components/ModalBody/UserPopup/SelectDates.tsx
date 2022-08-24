import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import DatePicker from 'react-datepicker';
import dateFormat from 'dateformat';
import OutsideClickHandler from 'react-outside-click-handler';

export default function SelectDates() {
    const [isOpen, setIsOpen] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (e: any) => {
        setIsOpen(false);
        setStartDate(e);
    };
    const handleClick = (e: any) => {
        setIsOpen(!isOpen);
    };

    console.log(isOpen)
    return (

        <div className="relative ">
            <OutsideClickHandler
                onOutsideClick={() => {
                    setIsOpen(false);
                }}
            >
                <button onClick={(e: any) => handleClick(e)}
                    className="dates_btn px-4 py-3 flex gap-2 items-center justify-between w-full">

                    <div className='flex flex-col' >
                        <span className='uppercase dates_text'>Dates</span>
                        <span className='month'>{dateFormat(startDate, 'mmm dd')}</span>
                    </div>
                    <ChevronDownIcon width={25} />
                </button>
                {isOpen && (
                    <div className="absolute z-10 bg-white w-full -left-[34px]">


                        <DatePicker
                            inline

                            renderCustomHeader={({
                                monthDate,
                                customHeaderCount,
                                decreaseMonth,
                                increaseMonth,

                            }) => (
                                <div>
                                    <button
                                        type="button"
                                        aria-label="Previous Month"
                                        className={
                                            "react-datepicker__navigation react-datepicker__navigation--previous"
                                        }
                                        style={customHeaderCount === 1 ? { visibility: "hidden" } : {}}
                                        onClick={decreaseMonth}
                                    >
                                        <span
                                            className={
                                                "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                            }
                                        >
                                            {"<"}
                                        </span>
                                    </button>
                                    <span className="react-datepicker__current-month">
                                        {monthDate.toLocaleString("en-US", {
                                            month: "long",
                                            year: "numeric",
                                        })}
                                    </span>
                                    <button
                                        type='button'
                                        aria-label="Next Month"
                                        className={
                                            "react-datepicker__navigation react-datepicker__navigation--next"
                                        }
                                        style={customHeaderCount === 0 ? { visibility: "hidden" } : {}}
                                        onClick={increaseMonth}
                                    >
                                        <span
                                            className={
                                                "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                            }
                                        >
                                            {">"}
                                        </span>
                                    </button>
                                </div>
                            )}
                            selected={startDate}
                            onChange={(date) => handleChange(date)}
                            monthsShown={2}
                        />
        
                 
                    
                </div>
                )}
            </OutsideClickHandler>



        </div>
    )
}
