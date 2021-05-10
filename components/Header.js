import { SearchIcon, HomeIcon, VideoCameraIcon, ShoppingBagIcon, UserGroupIcon, ViewGridAddIcon } from '@heroicons/react/outline'
import { TemplateIcon, ChatAltIcon, BellIcon, ChevronDownIcon } from '@heroicons/react/solid'
import Image from 'next/image'

function Header() {
    return (
        <nav className="flex px-3 py-1 shadow">
            <div className="flex items-center w-3/12 space-x-2">
                <Image className="object-cover" width={40} height={40} src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" />
                <div className="flex space-x-1 p-2 items-center bg-gray-100 rounded-full">
                    <SearchIcon className="h-5 w-5 text-gray-500" />
                    <input className="w-52 bg-transparent outline-none font-light text-gray-900" placeholder="Search Facebook" />
                </div>
            </div>

            <div className="flex w-full max-w-2xl  justify-center items-center text-gray-600">
                <HomeIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100 cursor-pointer" />
                <VideoCameraIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100 cursor-pointer" />
                <ShoppingBagIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100 cursor-pointer" />
                <UserGroupIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100 cursor-pointer" />
                <ViewGridAddIcon className="flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100 cursor-pointer" />
            </div>

            <div className="flex flex-1 justify-end w-3/12">
                <div className="flex items-center hover:bg-gray-300 rounded-full p-2 cursor-pointer">
                    <Image
                        className="rounded-full object-cover"
                        src="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p148x148/134099197_104736451567861_27448157104481838_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=lVCSydGdU7cAX_Avgym&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ecf7da5a1a9e1078c68b785654769b49&oe=60BD5C4E"
                        alt="Picture of the author"
                        width={30}
                        height={30}
                    />
                    <h3 className="pl-2 pr-4">Syaril</h3>
                </div>
                <div className="flex items-center space-x-2">
                    <TemplateIcon className="w-10 h-10 bg-gray-100 py-2 rounded-full hover:bg-gray-300 cursor-pointer" />
                    <ChatAltIcon className="w-10 h-10 bg-gray-100 py-2 rounded-full hover:bg-gray-300 cursor-pointer" />
                    <BellIcon className="w-10 h-10 bg-gray-100 py-2 rounded-full hover:bg-gray-300 cursor-pointer" />
                    <ChevronDownIcon className="w-10 h-10 bg-gray-100 py-2 rounded-full hover:bg-gray-300 cursor-pointer" />
                </div>

            </div>
        </nav>
    )
}

export default Header
