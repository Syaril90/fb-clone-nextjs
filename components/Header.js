import { SearchIcon, HomeIcon, VideoCameraIcon, ShoppingBagIcon, UserGroupIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import { TemplateIcon, ChatAltIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function Header() {
    return (
        <nav className="flex p-1 shadow">
            <div className="flex items-center w-3/12 space-x-2">
                <Image className="object-cover" width={40} height={40} src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
                <div className="flex space-x-1 p-2 items-center bg-gray-100 rounded-full">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                    <input className="w-52 bg-transparent outline-none font-light text-gray-900" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="flex flex-1  justify-between items-center text-gray-600">
                <HomeIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100" />
                <VideoCameraIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100" />
                <ShoppingBagIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100" />
                <UserGroupIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100" />
                <ViewGridAddIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100" />
            </div>

            <div className="flex flex-1 justify-end w-3/12">
                <div className="flex items-center hover:bg-gray-300 rounded-full p-2">
                    <Image
                        className="rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1542178243-bc20204b769f?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwZmFjZXxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                    <h3 className="pl-2 pr-4">Syaril</h3>
                </div>
                <div className="flex items-center space-x-2">
                    <TemplateIcon className="w-10 h-10 bg-gray-100 py-2 rounded-full hover:bg-gray-300" />
                    <ChatAltIcon className="w-10 h-10 bg-gray-100 py-2 rounded-full hover:bg-gray-300" />
                    <BellIcon className="w-10 h-10 bg-gray-100 py-2 rounded-full hover:bg-gray-300" />
                    <ChevronDownIcon className="w-10 h-10 bg-gray-100 py-2 rounded-full hover:bg-gray-300" />
                </div>

            </div>
        </nav>
    )
}

export default Header
