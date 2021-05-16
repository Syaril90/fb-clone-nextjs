import SidebarOption from './SidebarOption';

function Sidebar() {
    return (
        <div className="flex flex-1 pl-2 flex-col overflow-y-auto overflow-x-hidden divide-y divide-gray-300">
            <div className="mt-4">
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-1/p148x148/134099197_104736451567861_27448157104481838_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=dbb9e7&_nc_ohc=lVCSydGdU7cAX_Avgym&_nc_ht=scontent.fkul14-1.fna&tp=6&oh=ecf7da5a1a9e1078c68b785654769b49&oe=60BD5C4E" text="Syaril Nazirul" />
                <SidebarOption imageUrl="https://www.facebook.com/rsrc.php/v3/yi/r/FZK_jEWapM0.png" text="COVID-19 Information Center" />
                <SidebarOption imageUrl="https://www.facebook.com/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" text="Friends" />
                <SidebarOption imageUrl="https://www.facebook.com/rsrc.php/v3/yj/r/Im_0d7HFH4n.png" text="Groups" />
                <SidebarOption imageUrl="https://www.facebook.com/rsrc.php/v3/y4/r/MN44Sm-CTHN.png" text="Marketplace" />
                <SidebarOption imageUrl="https://www.facebook.com/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" text="Watch" />
                <SidebarOption imageUrl="https://www.kindpng.com/picc/m/421-4211806_drop-down-arrow-registered-trademark-logo-svg-hd.png" text="See More" />
            </div>
            {/* <div className="border ml-2"></div> */}
            <div className="">
                <h3 className="px-4 py-2 font-semibold text-gray-500 text-medium">Your Shortcuts</h3>
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c168.0.411.411a/s75x225/155402650_10159054577601971_5979912003395139079_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ca434c&_nc_ohc=_jhkQ3yi4YsAX_Bf24O&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=4e7630199a84b776bd61f81dbb8a25d9&oe=60BCC8D6" text="Mobile Apps Development" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c342.0.1365.1365a/s75x225/118175627_2678422345760396_9092539944577781001_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ca434c&_nc_ohc=BQ1ce4cSX6gAX_SA0oH&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=d6e01464644b8e0db0d6a4d4936dc12a&oe=60BFBB39" text="Javascript with React" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c164.0.422.422a/s75x225/82627190_1235770976614549_8102199368586625024_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ca434c&_nc_ohc=rQu-h9TDWIQAX-5z6Dk&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=fcb5950fa6035e3ba7480b08a1cd8d15&oe=60BD72A7" text="Learn HTML" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c120.0.721.721a/s75x225/80753428_2683955975023386_4622595351323344896_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=ca434c&_nc_ohc=xubc2eiOmzkAX-Nvgrj&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=eae9a2e5a094792cd66b8773beb279aa&oe=60BE72B8" text="Javascript Developer" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c168.0.411.411a/s75x225/155402650_10159054577601971_5979912003395139079_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ca434c&_nc_ohc=_jhkQ3yi4YsAX_Bf24O&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=4e7630199a84b776bd61f81dbb8a25d9&oe=60BCC8D6" text="Mobile Apps Development" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c342.0.1365.1365a/s75x225/118175627_2678422345760396_9092539944577781001_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ca434c&_nc_ohc=BQ1ce4cSX6gAX_SA0oH&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=d6e01464644b8e0db0d6a4d4936dc12a&oe=60BFBB39" text="Javascript with React" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c164.0.422.422a/s75x225/82627190_1235770976614549_8102199368586625024_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ca434c&_nc_ohc=rQu-h9TDWIQAX-5z6Dk&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=fcb5950fa6035e3ba7480b08a1cd8d15&oe=60BD72A7" text="Learn HTML" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c120.0.721.721a/s75x225/80753428_2683955975023386_4622595351323344896_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=ca434c&_nc_ohc=xubc2eiOmzkAX-Nvgrj&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=eae9a2e5a094792cd66b8773beb279aa&oe=60BE72B8" text="Javascript Developer" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c120.0.721.721a/s75x225/80753428_2683955975023386_4622595351323344896_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=ca434c&_nc_ohc=xubc2eiOmzkAX-Nvgrj&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=eae9a2e5a094792cd66b8773beb279aa&oe=60BE72B8" text="Javascript Developer" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c168.0.411.411a/s75x225/155402650_10159054577601971_5979912003395139079_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=ca434c&_nc_ohc=_jhkQ3yi4YsAX_Bf24O&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=4e7630199a84b776bd61f81dbb8a25d9&oe=60BCC8D6" text="Mobile Apps Development" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c342.0.1365.1365a/s75x225/118175627_2678422345760396_9092539944577781001_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ca434c&_nc_ohc=BQ1ce4cSX6gAX_SA0oH&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=d6e01464644b8e0db0d6a4d4936dc12a&oe=60BFBB39" text="Javascript with React" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c164.0.422.422a/s75x225/82627190_1235770976614549_8102199368586625024_n.jpg?_nc_cat=105&ccb=1-3&_nc_sid=ca434c&_nc_ohc=rQu-h9TDWIQAX-5z6Dk&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=fcb5950fa6035e3ba7480b08a1cd8d15&oe=60BD72A7" text="Learn HTML" />
                <SidebarOption imageUrl="https://scontent.fkul14-1.fna.fbcdn.net/v/t1.6435-0/cp0/c120.0.721.721a/s75x225/80753428_2683955975023386_4622595351323344896_n.jpg?_nc_cat=1&ccb=1-3&_nc_sid=ca434c&_nc_ohc=xubc2eiOmzkAX-Nvgrj&_nc_ht=scontent.fkul14-1.fna&tp=28&oh=eae9a2e5a094792cd66b8773beb279aa&oe=60BE72B8" text="Javascript Developer" />
            </div>
        </div>

    )
}

export default Sidebar
