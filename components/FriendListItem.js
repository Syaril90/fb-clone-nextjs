function FriendListItem({ imgSrc, name }) {
    return (
        <div className="flex flex-1 space-x-2 items-center my-2 rounded-lg hover:bg-gray-200 p-1">
            <div className="h-9 w-9 relative border rounded-full ">
                <img className="rounded-full border-gray-100" src={imgSrc} alt="" />
                <div className="h-2 w-2 bg-green-600 absolute right-0 bottom-0 m-1 rounded-full ring-2 ring-white"></div>
            </div>
            <h3>{name}</h3>
        </div>

    )
}

export default FriendListItem
