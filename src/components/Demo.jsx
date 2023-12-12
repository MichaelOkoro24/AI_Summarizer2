import { useState, useEffect } from 'react';

import { copy, linkIcon, loader, tick } from '../assets'

const Demo = () => {
  // State for the article object.
  const [article, setArticle] = useState({
    url: '',
    summary:'',
  });

  // Arrow function which we make the API request.
  const handleSubmit = async (e) => {
    // An alert that tells you the button was clicked and the request was submitted.
    alert('Submitted');
  }

  return (
    <section className="mt-16 w-full max-w-xl">
      {/* Search */}
      <div  className="flex flex-col w-full gap-2">
        <form 
          className="relative flex justify-center items-center"
          onSubmit={(handleSubmit) => {}}
        >
          <img
            src={linkIcon}
            alt="link_icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter a URL"
            value={article.url}
            // e.target.value is the value of the input field.
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700"
          >
            
          </button>
        </form>
          {/* Browse URL History */}
      </div>
        {/* Display Summary */}


    </section>

  )
}

export default Demo