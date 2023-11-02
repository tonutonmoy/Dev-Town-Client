import { Fragment, useContext, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../AuthProvider/AuthProvider'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Category() {

  const { setSortPrice,setRange } = useContext(AuthContext);
  const buttonHandler=()=>{
    setSortPrice([])

    console.log('hello')
    
    setRange(0)

    useEffect(()=>{
    
      setTimeout(()=>{
        window.location.reload();
      },1000)
    },[])
  }
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
         Category
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
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
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                 to={`/`}
                 onClick={buttonHandler}
                  className={classNames(
                    active ? 'bg-pink-500 text-white  w-full block' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 All product
                </Link>
              )}
            </Menu.Item>
            </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                 to={`/CategoryPage/Toy`}
                 onClick={buttonHandler}
                  className={classNames(
                    active ? 'bg-pink-500 text-white w-full block' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Toy
                </Link>
              )}
            </Menu.Item>
            </div>
            <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                  <Link
                  to={`/CategoryPage/Bag`}
                  onClick={buttonHandler}
                  className={classNames(
                    active ? 'bg-pink-500 text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Bag
                </Link>
              )}
            </Menu.Item>
            </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                 <Link
                 to={`/CategoryPage/Skin`}
                 onClick={buttonHandler}
                  className={classNames(
                    active ? 'bg-pink-500 text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Skin Care
                </Link>
              )}
            </Menu.Item>
            </div>
            <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                to={`/CategoryPage/Sunglass`}
                onClick={buttonHandler}
                  className={classNames(
                    active ? 'bg-pink-500 text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Sunglass
                </Link>
              )}
            </Menu.Item>
            </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                 <Link
                 to={`/CategoryPage/Shoes`}
                 onClick={buttonHandler}
                  className={classNames(
                    active ? 'bg-pink-500 text-white' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Shoes
                </Link>
              )}
            </Menu.Item>
            
          </div>
         
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
