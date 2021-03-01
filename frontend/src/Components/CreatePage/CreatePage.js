import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './CreatePage.scss';
import axios from 'axios';
import {connect} from 'react-redux';
import {setPages} from '../Redux/pageReducer/page.action'
import CreatedPages from './CreatedPages/CreatedPages';
function CreatePage({setPages}) {

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
            
            //On link click, set redux page as its id. 
            return page.map((pages) => <Link onClick={()=>{setPages(pages._id)}} to={'/'+pages._id}><CreatedPages pages={pages} /></Link>  )

        }

    }



    return <div className="create-page-container">
       <div className="add-box" onClick={postPageHandler}>CREATE A PAGE</div>
        {!empty ? returnPageHandler() : 'NO CONTENT'}

    </div>
}

const mapDispatchToProps = (dispatch) => ({

    setPages: pageId => dispatch(setPages(pageId))


})

export default connect(null,mapDispatchToProps)(CreatePage)
