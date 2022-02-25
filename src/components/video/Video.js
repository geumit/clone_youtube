import React from 'react';
import './video.css'

function Video(props) {
    return (
        <li className='videoContainer'>
            <div className='video'>
                <img className='thumimg' src={props.videoItem.snippet.thumbnails.medium.url} alt='video thumbnail'alt='thumbnail img'/>
            </div>
            <div className='titledata'>
                <p className='title'>{props.videoItem.snippet.title}</p>
                <p className='channelTitle'>{props.videoItem.snippet.channelTitle}</p>
            </div>
            
        </li>
    )
}
export default Video;