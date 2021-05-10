function CreateStoryRail({ profilePicUrl }) {
    return (
        <div className="w-28 h-48 flex-col justify-center items-center bg-white rounded-lg">
            <img className="h-4/6 w-full object-fill rounded-t-lg" src={profilePicUrl} alt="syaril" />
            <div className="flex justify-center -mt-4 w-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 bg-blue-500 rounded-full text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
            </div>

            <h3 className="flex justify-center text-sm text-center px-10 font-medium">Create story</h3>
        </div>
    )
}

export default CreateStoryRail
