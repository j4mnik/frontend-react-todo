import {Fragment} from 'react'
import {Menu, Transition} from '@headlessui/react'
import {Link} from "react-router-dom";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

function Dropdown() {
    return (
        <div>
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button
                        className="inline-flex justify-center items-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500  dark:bg-[#3A3B3C] dark:text-white dark:border-0">
                        Guest
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                             xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                  d="M19 9l-7 7-7-7"/>
                        </svg>
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items
                        className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none  dark:bg-[#3A3B3C] dark:text-white">
                        <div className="py-1">
                            <Link to="/profile">
                                <Menu.Item>
                                    {({active}) => (
                                        <h1
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900 dark:bg-[#242526] dark:text-[#e4e6e5]' : 'text-gray-700',
                                                'block px-4 py-2 text-sm dark:text-white'
                                            )}
                                        >
                                            Profile
                                        </h1>
                                    )}
                                </Menu.Item>
                            </Link>
                            <Link to="/">
                                <Menu.Item>
                                    {({active}) => (
                                        <h1
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900 dark:bg-[#242526] dark:text-[#e4e6e5]' : 'text-gray-700',
                                                'block px-4 py-2 text-sm dark:text-white'
                                            )}
                                        >
                                            Sign out
                                        </h1>
                                    )}
                                </Menu.Item>
                            </Link>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}

export default Dropdown;