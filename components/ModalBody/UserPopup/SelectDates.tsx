import React from 'react';
import { Popover } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';

export default function SelectDates() {
  return (
      <Popover className="relative ">
          <Popover.Button className="dates_btn px-4 py-3 flex 
                                        gap-2 items-center justify-between w-full">
              <div className='flex flex-col'>
                  <span className='uppercase dates_text'>Dates</span>
                  <span className='month'>Aug 7</span>
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
  )
}
