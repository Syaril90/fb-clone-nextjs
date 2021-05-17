function HeaderCenterOption({ Icon, active }) {
    return (
        <div className={`flex flex-1 justify-center items-center ${active && 'text-blue-500 border-b-2 border-blue-500'}`}>
            <Icon className={`flex-1 h-10 w-10 p-2 rounded-lg stroke-1 hover:bg-gray-100 cursor-pointer`} />
        </div>

    )
}

export default HeaderCenterOption
