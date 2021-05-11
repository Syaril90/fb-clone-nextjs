function SidebarOption({ imageUrl, text }) {
    return (
        <div className="flex flex-1 w-full items-center space-x-2 py-2 px-4 rounded-md hover:bg-gray-200">
            <img className="h-7 w-7 rounded-full" src={imageUrl} alt={text}/>
            <h3 className="text-base truncate font-normal">{text}</h3>
        </div>
    )
}

export default SidebarOption
