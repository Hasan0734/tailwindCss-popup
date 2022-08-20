import React, { useState } from 'react'
import { Listbox } from '@headlessui/react'

const people = [
    { id: 1, name: 'Durward Reynolds', unavailable: false },
    { id: 2, name: 'Kenton Towne', unavailable: false },
    { id: 3, name: 'Therese Wunsch', unavailable: false },
    { id: 4, name: 'Benedict Kessler', unavailable: true },
    { id: 5, name: 'Katelyn Rohan', unavailable: false },
]


export default function AddCart() {
    const [selectedPerson, setSelectedPerson] = useState(people[0])
  return (
      <div className='col-span-2 md:col-span-1 flex justify-center'>
          <div className='w-full max-w-[530px] p-6 bg-[#F9F9F9] rounded-xl add_cart_card'>
              <div>
                  <h3 className='title'>Book a Demo for Live Class</h3>
                  <p className='sub_title mt-2'>Select 30 Minutes Demo Slot</p>
              </div>
              <form className='mt-6'>
                  <div>
                      <label className='label_text'>The Child you want trial session for</label>
                      <div className='mt-1'>
                          <Listbox value={selectedPerson} onChange={setSelectedPerson}>
                              <Listbox.Button className="trial_select">
                                  {selectedPerson.name}
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10" fill="none">
                                      <path d="M1.625 1.625L8 8.375L14.375 1.625" stroke="black" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                              </Listbox.Button>
                              <Listbox.Options className="bg-transparent py-2">
                                  {people.map((person) => (
                                      <Listbox.Option
                                          className="trial_select"
                                          key={person.id}
                                          value={person}
                                          disabled={person.unavailable}
                                      >
                                          {person.name}
                                      </Listbox.Option>
                                  ))}
                              </Listbox.Options>
                          </Listbox>
                     </div>
                  </div>
              </form>
          </div>
    </div>
  )
}
