function StoryRailOption({ imgUrl, name, profilePicUrl }) {
    return (
        <div className="relative w-28 h-48 transform transition duration-500 hover:scale-105">
            <img className="rounded-lg object-cover w-28 h-48" src={imgUrl} alt={name} />
            <img className="w-9 h-9 rounded-full absolute top-2 left-2 ring-4 ring-blue-500" src={profilePicUrl} alt={name} />
            <h3 className="absolute bottom-2 left-2 text-md font-semibold text-white">{name}</h3>
        </div>
    )
}

export default StoryRailOption
