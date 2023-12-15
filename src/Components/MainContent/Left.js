import React from 'react'
import "./Left.css"

export default function Left() {
    return (
        <div className='leftSide'>
            <ul>
                <li><a class="active" href="#home">Home</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#contact">Contact</a></li>
                
            </ul>
        </div>
    )
}
