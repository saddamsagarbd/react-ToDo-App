import React from 'react';

import Videothumb from './VideoThumb.component';

const VideosList = (props) => {
    const { videos, handleSelect } = props;

    return ( 
        <>
            {
                videos.map((video, index) => {
                    return <Videothumb 
                        key = {index}
                        index={ index }
                        handleSelect = { handleSelect }
                        videoId={ video.id.videoId } 
                        title={ video.snippet.title } 
                        channelTitle={ video.snippet.channelTitle } 
                        thumbImg={ video.snippet.thumbnails.high.url } 
                    />
                })
            }
        </>
    );
}

export default VideosList;