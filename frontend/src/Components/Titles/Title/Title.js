import React , {useState} from 'react';
import './Title.scss';
import axios from 'axios';

function Title({titles, titleDeleteOneHandler}) {
    //Hover
    const [hover , setHover] = useState(false);


    //If title deleted, delete all content as well
    const axiosDeleteHandler = async (_id) => {

        let all = 'all';
        let single = 'single';
        try {
            //Delete title first
            const findDelete = await axios.delete('http://localhost:5000/title', {data:{_id}})
            //Then delete the related contents
            .then(() =>{axios.delete('http://localhost:5000/content', {data:{all, single, title_id:_id}})})
            .then(()=>{titleDeleteOneHandler(_id)})
            .catch((err) => alert(err))

        } catch (error) {
            alert(error)
        }

    }


    //Ask for confirm when user click the delete button of titles. 
    const deleteTitleHandler = (id) => {
        
        const youSure = prompt('Are you sure you want to delete? Y/N')
        return youSure === 'Y' || youSure === 'y'   ? axiosDeleteHandler(id):''
         

    }

    return (
        <div onMouseLeave={()=>setHover(false)} onMouseMove={()=>{setHover(true)}} className='title-container'>
            {titles.title}
            <i onClick={()=>{deleteTitleHandler(titles._id)}} className={`fas fa-trash-alt ${hover === true && 'hover'}`}></i>
        </div>
    )
}

export default Title
