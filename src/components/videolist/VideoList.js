import React from 'react';
import Video from '../video/Video';
import './videolist.css'

function VideoList(props) {
    return (
        <ul className='videolist'>
            {
                props.videoItems.map(videoItem => (
                    <Video videoItem={videoItem} key={videoItem.id} />
                ))
            }
        </ul>
    )
}
export default VideoList;