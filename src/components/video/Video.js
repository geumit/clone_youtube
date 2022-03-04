import React from 'react';
import './video.css'
import {Link} from 'react-router-dom'

function Video({display,onVideoClick,videoItem}) {
    const container = 'container';
    const displayClass = display === 'rowlist' ? 'list-h' : 'list-v' ;

    return (
        <li className={`${container} ${displayClass}`}>
            <Link to='/watch'>        
            <div className='video' onClick={()=>{onVideoClick(videoItem)}}>
                <img className='thumimg' src={videoItem.snippet.thumbnails.medium.url} alt='video thumbnail'alt='thumbnail img'/>
                <div className='titledata'>
                    <div className='channelImg'>
                        <img className='channelImg-thum' src={videoItem.snippet.thumbnails.default.url} alt='video thumbnail'alt='thumbnail img'/>
                    </div>
                    <div>
                        <p className='title'>{videoItem.snippet.title}</p>
                        <p className='channelTitle'>{videoItem.snippet.channelTitle}</p>
                        <p className='title'>{videoItem.statistics.viewCount}</p>
                    </div>
                    
                </div>
            </div>
            </Link>       
        </li>
    )
}
export default Video;