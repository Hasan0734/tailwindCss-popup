import React, { useState } from 'react'
import { Switch } from '@headlessui/react'
export default function CookieModal() {
    const [enabled, setEnabled] = useState(false)
    return (
        <div className='pt-[21px] px-[19px]  pb-[7px] cookie_modal'>
            <div>
                <h3 className='title'>Cookie settings</h3>
                <p className='content_text mt-[6px]'>We use cookies, some of them are essential, others are optional.</p>
            </div>
            <div className='bg-[#D2D2D2] h-[1px] mt-4'></div>

            <div className="mt-4">
                <div className='flex justify-between items-center'>
                    <h3 className='title'>Strictly Necessary</h3>
                    <div className='necessary_lock flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width={6} height={8} viewBox="0 0 6 8" fill="none">
                            <path d="M6 4C6 3.5588 5.66363 3.2 5.25 3.2H4.875V2C4.875 0.8972 4.03387 0 3 0C1.96613 0 1.125 0.8972 1.125 2V3.2H0.75C0.336375 3.2 0 3.5588 0 4V7.2C0 7.6412 0.336375 8 0.75 8H5.25C5.66363 8 6 7.6412 6 7.2V4ZM1.875 2C1.875 1.3384 2.37975 0.8 3 0.8C3.62025 0.8 4.125 1.3384 4.125 2V3.2H1.875V2Z" fill="#86909C" />
                        </svg>
                    </div>
                </div>
                <p className='content_text mt-[6px]'>
                    These cookies are necessary for the website and can’t be deactivated.
                </p>
            </div>

            <div className="mt-4">
                <h3 className='title'>Marketing & Analytics</h3>
                <p className='content_text mt-[6px]'>
                    These cookies can be set by our advertising partnes through our websites.
                </p>
            </div>

            <div className="mt-4">
                <div className='flex justify-between items-center'>
                    <h3 className='title'>Preferences</h3>
                    <div className=' flex items-center'>
                        <Switch
                            checked={enabled}
                            onChange={setEnabled}
                            className={`${enabled ? 'bg-gray-400' : 'bg-gray-300'
                                } relative inline-flex h-[14px] w-[24px] items-center rounded-full`}
                        >
                            <span className="sr-only">Enable notifications</span>
                            <span
                                className={`${enabled ? 'translate-x-[11px]' : 'translate-x-[2px]'
                                    } inline-block h-3 w-3 transform rounded-full bg-gray-200`}
                            />
                        </Switch>
                    </div>
                </div>
                <p className='content_text mt-[6px]'>
                    To individualize your content, we use tools that personalize your web experience.
                </p>

            </div>
            <div className='mt-4'>
                <button className='cookie_accept py-2'>Accept all cookies</button>
                <br />
                <button className='cookie_save py-2 mt-3'>Save settings</button>
            </div>
        </div>
    )
}
