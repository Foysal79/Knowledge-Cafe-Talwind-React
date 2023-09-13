
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {

  const [boorkmarks, setBoorkmarks ] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddToBookmark = (blog) => {
    const newBoorkmarks = [...boorkmarks, blog];
    setBoorkmarks(newBoorkmarks);
  }

  const handleMarkAsRead = (id, time) => {
     setReadingTime(readingTime + time);

     /// remove the read blog from bookmark
     const remainingBookmarks = boorkmarks.filter(bookmark => bookmark.id !== id );
     setBoorkmarks(remainingBookmarks);
  }

  return (
    <>
      
      <Header></Header>
      <div className="md:flex gap-4 max-w-7xl mx-auto">
      <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} ></Blogs>
      <Bookmarks readingTime={readingTime} bookmarks={boorkmarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
