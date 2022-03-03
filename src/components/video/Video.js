import React from 'react';
import './video.css'

function Video({display,onVideoClick,videoItem}) {
    const container = 'container';
    const displayClass = display === 'rowlist' ? 'list-h' : 'list-v' ;

    return (
        <li className={`${container} ${displayClass}`}>
            <div className='video' onClick={()=>{onVideoClick(videoItem)}}>
                <img className='thumimg' src={videoItem.snippet.thumbnails.medium.url} alt='video thumbnail'alt='thumbnail img'/>
                <div className='titledata'>
                    <p className='title'>{videoItem.snippet.title}</p>
                    <p className='channelTitle'>{videoItem.snippet.channelTitle}</p>
                </div>
            </div>         
        </li>
    )
}
export default Video;