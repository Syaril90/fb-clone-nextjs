function SeeAllStories() {
    return (
        <div className="w-28 h-48 bg-gray-2 border-gray-200 border flex flex-col flex-1 justify-center items-center rounded-lg text-center hover:bg-gray-200" >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 rounded-full bg-gray-300 p-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <h3 className="mt-2">See All Stories</h3>
        </div>
    )
}

export default SeeAllStories
