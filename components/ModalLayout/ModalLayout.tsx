import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function ModalLayout({ isOpen, setIsOpen, children }: { isOpen: boolean, setIsOpen: any, children: any }) {

    console.log(isOpen)
    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >

            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className="fixed inset-0 flex justify-center p-4  h-screen overflow-scroll scrollbar-hide">
                <Dialog.Panel className="
                w-full  max-w-[433px] modal_popup
                ">
                    <div className=' rounded bg-white'>
                        {children}
                    </div>
                </Dialog.Panel>
            </div>

        </Dialog>
    )
}
