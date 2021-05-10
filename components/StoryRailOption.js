function StoryRailOption({ imgUrl, name, profilePicUrl }) {
    return (
        <div className="relative w-28 h-48">
            <img className="rounded-lg object-cover w-28 h-48" src={imgUrl} alt={name} />
            <img className="w-12 h-12 rounded-full absolute top-2 left-2" src={profilePicUrl} alt={name} />
            <h3 className="absolute bottom-2 left-2 text-md text-white">{name}</h3>
        </div>
    )
}

export default StoryRailOption
