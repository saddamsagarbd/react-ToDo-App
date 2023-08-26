import React from 'react';

const VideoPlayer = ( props ) => {
    const { videoId, title, description } = props;
    return (
        <>
            <div className='video'>
                <iframe
                    height={468}
                    width="100%"
                    src={`https://www.youtube.com/embed/${ videoId }`}
                    frameBorder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;'
                    allowFullScreen
                ></iframe>

            </div>
            <div className='details'>
                <div>
                    <h6>{ title }</h6>
                    <div>
                        <p>{ description }</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default VideoPlayer;