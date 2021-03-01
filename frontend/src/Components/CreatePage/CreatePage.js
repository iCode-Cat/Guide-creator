import React, {useState, useEffect} from 'react';
import './CreatePage.scss';
import axios from 'axios';
import CreatedPages from './CreatedPages/CreatedPages';
function CreatePage() {

    const [page , setPage] = useState();
    //If no content manage err code or alert
    const [empty , setEmpty] = useState(false);


    //UseEffect 

   useEffect(() => {
   fetchPostHandler()
   }, [])




    //Page handlers
    const postPageHandler = async () => {
        try {
            const post = await axios.post('http://localhost:5000/page', {username:'admin', page_name:'UNNAMED'})
            //If no error set post again
            setPage([...page, post.data])
            setEmpty(false)
        } catch (error) {
            alert(error)
        }
    }

    const fetchPostHandler = async () => {

        try {
            
            const fetch = await axios.get('http://localhost:5000/page')
            setPage(fetch.data)
            if(fetch.data.length === 0) {
                setEmpty(true)
            }
          

        } catch (error) {
            alert(error + 'CANNOT FETCH THE PAGES')
        }
        
    }

    //return the pages
    const returnPageHandler = () => {

        if(page) {

            return page.map((pages) => <CreatedPages pages={pages} />  )

        }

    }



    return <div className="create-page-container">
       <div className="add-box" onClick={postPageHandler}>CREATE A PAGE</div>
        {!empty ? returnPageHandler() : 'NO CONTENT'}

    </div>
}

export default CreatePage
