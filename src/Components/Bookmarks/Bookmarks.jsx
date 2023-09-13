import Bookmark from "../Bookmark/Bookmark";




const Bookmarks = ({bookmarks, readingTime}) => {


    return (
        <div className="md:w-1/3 bg-gray-300 ml-4 mt-2 pt-4">
            <div className="bg-purple-400 p-4 rounded-xl m-4">
                <h3 className="text-4xl font-bold">Reading Time : {readingTime}</h3>
            </div>
            <h2 className="text-3xl text-center ">Bookmarks : {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, index) => <Bookmark key={index} bookmark={bookmark} ></Bookmark>)
            }
        </div>
    );
};

export default Bookmarks;