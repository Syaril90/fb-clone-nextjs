function SidebarOption({ imageUrl, text }) {
    return (
        <div className="flex flex-1 w-full items-center space-x-2 m-2 p-2 rounded-md hover:bg-gray-200">
            <img className="h-7 w-7 rounded-full" src={imageUrl} alt={text}/>
            <h3 className="text-base font-normal">{text}</h3>
        </div>
    )
}

export default SidebarOption
