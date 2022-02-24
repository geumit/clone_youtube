import React from 'react';
import Video from '../video/Video';

function VideoList(props) {
    return (
        <div>
            {
                props.videoItems.map(videoItem => (
                    <Video videoItem={videoItem} key={videoItem.id} />
                ))
            }
        </div>
    )
}
export default VideoList;