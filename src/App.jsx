
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'


function App() {

  const [boorkmarks, setBoorkmarks ] = useState([]);

  const handleAddToBookmark = (blog) => {
    const newBoorkmarks = [...boorkmarks, blog];
    setBoorkmarks(newBoorkmarks);
  }

  return (
    <>
      
      <Header></Header>
      <div className="md:flex gap-4 max-w-7xl mx-auto">
      <Blogs handleAddToBookmark={handleAddToBookmark} ></Blogs>
      <Bookmarks bookmarks={boorkmarks}></Bookmarks>
      </div>
      
      
    </>
  )
}

export default App
