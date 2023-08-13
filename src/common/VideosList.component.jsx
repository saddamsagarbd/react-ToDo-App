import React from 'react';

import Videothumb from './VideoThumb.component';

const VideosList = (props) => {
    const { videos } = props;

    return ( 
        <>
            {
                videos.map((video, index) => {
                    return <Videothumb title={ video.snippet.title } channelTitle={ video.snippet.channelTitle } thumbImg={ video.snippet.thumbnails.high.url } key={ index } />
                })
            }
        </>
    );
}

export default VideosList;