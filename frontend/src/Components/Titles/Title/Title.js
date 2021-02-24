import React from 'react'
import './Title.scss'

function Title({titles}) {
    return (
        <div className='title-container'>
            {titles.title}
        </div>
    )
}

export default Title
