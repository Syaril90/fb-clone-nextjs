import FriendListItem from "./FriendListItem";

function FriendList() {
    return (
        <div className="flex flex-1 flex-col px-5 overflow-y-auto relative">
            <div className="flex justify-between pt-3 items-center">
                <div className="">
                    <h3 className="text-gray-500 text-lg">Contact</h3>
                </div>

                <div className="flex w-24 justify-evenly">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 rounded-full hover:bg-gray-200 p-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="-9 w-9 rounded-full hover:bg-gray-200 p-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" className="-9 w-9 rounded-full hover:bg-gray-200 p-2" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                </div>
            </div>
            <div className="divide-y divide-gray-300">
                <div className="">
                    <FriendListItem imgSrc="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p148x148/134099197_104736451567861_27448157104481838_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=lVCSydGdU7cAX_Avgym&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ecf7da5a1a9e1078c68b785654769b49&oe=60BD5C4E" name="Syaril" />
                    <FriendListItem imgSrc="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p148x148/134099197_104736451567861_27448157104481838_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=lVCSydGdU7cAX_Avgym&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ecf7da5a1a9e1078c68b785654769b49&oe=60BD5C4E" name="Syaril" />
                    <FriendListItem imgSrc="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p148x148/134099197_104736451567861_27448157104481838_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=lVCSydGdU7cAX_Avgym&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ecf7da5a1a9e1078c68b785654769b49&oe=60BD5C4E" name="Syaril" />
                    <FriendListItem imgSrc="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p148x148/134099197_104736451567861_27448157104481838_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=lVCSydGdU7cAX_Avgym&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ecf7da5a1a9e1078c68b785654769b49&oe=60BD5C4E" name="Syaril" />
                    <FriendListItem imgSrc="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p148x148/134099197_104736451567861_27448157104481838_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=lVCSydGdU7cAX_Avgym&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ecf7da5a1a9e1078c68b785654769b49&oe=60BD5C4E" name="Syaril" />

                </div>
                <div className="p-2">
                    <h3 className="text-gray-500 text-lg">Group Conversation</h3>
                    <div className="flex items-center space-x-2 mt-1 p-2 rounded-lg hover:bg-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 p-2 rounded-full bg-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        <h3>Create New Conversation</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FriendList
