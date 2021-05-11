function CreateStatus() {
    return (
        <div className="bg-white shadow-md flex-col mt-3 p-3 rounded-md">
            <div className="flex space-x-2 items-center">
                <img className="rounded-full h-10 w-10" src="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p148x148/134099197_104736451567861_27448157104481838_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=lVCSydGdU7cAX_Avgym&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ecf7da5a1a9e1078c68b785654769b49&oe=60BD5C4E" alt="Syaril" />
                <input className="rounded-full bg-gray-100 flex flex-1 outline-none p-2" placeholder="Whats on your mind, Syaril" />
            </div>
            <div className="border my-3"></div>
            <div className="flex justify-evenly">
                <div className="flex space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                    <h3>Live Videos</h3>
                </div>
                <div className="flex space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <h3>Photo/Video</h3>
                </div>
                <div className="flex space-x-2 p-2 hover:bg-gray-100 rounded-lg flex-1 items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3>Feeling/Activity</h3>
            </div>
        </div>

        </div >
    )
}

export default CreateStatus
