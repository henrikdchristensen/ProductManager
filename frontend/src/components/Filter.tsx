import { log } from 'console';
import React, { useState } from 'react'
import { FiPlus } from 'react-icons/fi';

const Filter = () => {

    const [active, setActive] = useState(0);
    const fruits: string[] = ['Produkter', 'Enheder', 'Bugs'];

    let activeDropdown = fruits.map((item, i) => {
        return <li key={i} className={"text-gray-700 block px-4 py-2 text-base " + (active == i ? "bg-gray-100" : "hover:bg-gray-100")} onClick={() => {
            setActive(i);
        }}>{item}</li>
    });

    return (
        <div className="flex justify-center mt-28 space-x-10 w-full items-center">
            <div className='flex space-x-3 items-center'>
                <label className="text-base text-gray-500 font-semibold">Kategori:</label>
                <div>
                    <div className="group inline-block">
                        <button className="outline-none focus:outline-none items-center min-w-32 inline-flex justify-center gap-x-1.5 rounded-3xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 w-32">
                            <span className="pr-1 font-semibold flex-1">{fruits[active]}</span>
                            <span>
                                <svg className="fill-current h-4 w-4 transform group-hover:-rotate-180 transition duration-150 ease-in-out" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                            </span>
                        </button>
                        <div className='transform scale-0 group-hover:scale-100 absolute transition duration-150 ease-in-out origin-top w-32 '>
                            <ul className="bg-white border text-center divide-y divide-gray-300 rounded-md shadow-lg mt-2">
                                {activeDropdown}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="group inline-block">
                    <button type="button" className="inline-flex justify-center items-center gap-x-1 rounded-3xl bg-white px-3 py-2 text-base font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Tilføj
                        <FiPlus className="text-black" />
                    </button>
                </div>
            </div>

            <form>
                <div className="relative text-center">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </div>
                    <input type="" id="default-search" className="block p-2.5 w-58 pl-10 pr-14 z-20 text-sm bg-white shadow-sm rounded-3xl border border-gray-300 outline-none"
                        placeholder={"Søg efter " + fruits[active].toLowerCase()} required />
                    <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium bg-gray-200 rounded-r-3xl border order-gray-300 hover:bg-gray-300 border-gray-400">
                        <span className="">Søg</span>
                    </button>

                </div>
            </form>
        </div>
    )
}

export default Filter

