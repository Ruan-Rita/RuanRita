import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { FaXmark } from "react-icons/fa6";
import { HiBars3 } from "react-icons/hi2";
import { useLanguage } from '../../context/language-context';
import Trans from '../../helper/language/trans';
import Image from 'next/image';
import ProfilePicutre from '../../../public/profile.jpg'
import FlagBr from '../../../public/flag-brazil.png'
import FlagUs from '../../../public/flag-us.png'


const navigation = [
  { name: 'home', href: '/RuanRita', current: false },
  { name: 'works', href: '#WORK-Section', current: false },
  { name: 'about', href: '#ABOUT-Section', current: false },
  { name: 'contacts', href: '#CONTACTS', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function NavBar() {
  const {language, changeLanguage} = useLanguage();

  return (
    <Disclosure as="nav" className="bg-white fixed w-full z-10">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-24 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <FaXmark Icon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <HiBars3 className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex gap-4 items-center">
                <Image width={60} className="border border-black rounded-full" alt='Profile picture' src={ProfilePicutre}/>
                <h1 className="text-slate-600 font-bold text-xl">
                  RUAN RITA
                </h1>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start mr-3">
                  <div className="hidden sm:ml-6 sm:block">
                    <div className="flex space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current ? 'bg-gray-900 text-black' : 'text-cyan-500 hover:bg-gray-700 hover:text-black',
                            'rounded-md px-3 py-2 text-lg font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {Trans(item.name).toUpperCase()}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none  focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="text-primary text-md font-bold flex gap-2"><small>{language}</small><Image className="rounded" alt="flag brazil" src={language == 'en'?FlagUs:FlagBr} width={32} height={32}/></span>
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        <a
                          href="#"
                          onClick={() => changeLanguage('pt')}
                          className={classNames(language === 'pt' ? 'bg-primary text-white' : '', 'px-4 py-2 text-sm text-gray-700 flex gap-2')}
                        >
                          <Image className="rounded" alt="flag brazil" src={FlagBr} width={32} height={32}/><small>Portuguese</small>
                        </a>
                      </Menu.Item>
                      <Menu.Item>
                        <a
                          href="#"
                          onClick={() => changeLanguage('en')}
                          className={classNames(language === 'en' ? 'bg-primary text-white' : '', 'px-4 py-2 text-sm text-gray-700 flex gap-2')}
                        >
                          <Image className="rounded" alt="Flag United States" src={FlagUs} width={32} height={32}/><small>English</small>
                        </a>
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-black' : 'text-gray-300 hover:bg-gray-700 hover:text-black',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
