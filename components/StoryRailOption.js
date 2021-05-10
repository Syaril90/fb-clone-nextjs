function StoryRailOption({ imgUrl, name, profilePicUrl }) {
    return (
        <div className="relative">
            <img className="w-32 h-52 rounded-lg" src={imgUrl} alt={name} />
            <img className="w-12 h-12 rounded-full absolute top-0 m-3" src={profilePicUrl} alt={name} />
            <h3 className="absolute bottom-0 m-2 text-md text-white">{name}</h3>
        </div>
    )
}

export default StoryRailOption
