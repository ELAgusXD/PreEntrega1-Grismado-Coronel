import './Item.css'
import React from "react"

const Item = ({info}) => {
    return (
        <a href='' className='film'>
        <img src={info.Image} alt='' />
        <p>{info.title}</p>
        </a>
    );
}

export default Item
