
import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog, handleAddToBookmark}) => {

    const {title, cover, author, author_img, posted_date, reading_time, hashtags} = blog;
    console.log(blog)
    return (
        <div className='mb-20 '>
            <img className='w-full mb-8' src={cover}alt={`cover picture of the pic ${title}`} />
            <div className="flex justify-between mb-4">
                <div className='flex'>
                      <img className='w-14' src={author_img}alt="" />
                      <div className='ml-6' >
                        <h3 className='text-2xl'>
                           {author}
                        </h3>
                        <p>{posted_date}</p>

                      </div>
                     
                </div>
                <div className='flex items-center gap-4'>
                     <span>{reading_time} min read</span>
                     <button onClick={() => handleAddToBookmark(blog)} className='bg-white text-2xl'><FaBookmark></FaBookmark></button>
                </div>

            </div>
            <h2 className="text-4xl"> {title}</h2>
            <p>
                {
                    hashtags.map((hash, index) => <span key={index}> <a href=""></a> #{hash} </span>)
                }
            </p>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired, 
    handleAddToBookmark: PropTypes.func.isRequired
}

export default Blog;