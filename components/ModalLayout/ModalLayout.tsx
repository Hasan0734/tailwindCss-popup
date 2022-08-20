import React, { useState } from 'react'
import { Dialog } from '@headlessui/react'

export default function ModalLayout({ isOpen, setIsOpen, children, style }:
    {
        isOpen: boolean, setIsOpen: any, children: any, style:
        { center: string, size: number, boxShadow:string, background:string }
    }) {

    return (
        <Dialog
            open={isOpen}
            onClose={() => setIsOpen(false)}
            className="relative z-50"
        >

            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

            <div className={`fixed inset-0 flex  justify-center p-4 
             h-screen overflow-scroll scrollbar-hide ${style.center}`}>
                <Dialog.Panel className={`w-full`} style={{maxWidth: style.size}}>
                
                
                    <div className={` ${style.background} rounded ${style.boxShadow}`}>
                        {children}
                    </div>
                </Dialog.Panel>
            </div>

        </Dialog>
    )
}
