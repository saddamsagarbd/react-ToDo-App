import React from 'react';

const Videothumb = (props) => {

    const { title, channelTitle, thumbImg, index, videoId, handleSelect } = props;

    const media = {
        float: 'left',
        paddingBottom: '1.1em',
        borderBbottom: '1px solid #e8e8e8',
    }

    const pullLeft = {
        float: 'left',
        width: '160px',
        cursor: 'pointer',
    }

    const mediaBody = {
        float: 'left',
        width: 'calc(100% - 170px)',
    }

    const thumbImage = {
        float: 'left',
        width: '150px',
    }

    const videoTitle = {
        fontSize: '14px',
        fontWeight: '500',
        textAlign: 'left',
        cursor: 'pointer',
    }

    const byAuthor = {
        fontSize: '12px',
        fontWeight: 'normal',
        textAlign: 'left',
    }

    return ( 

        <li style= { media } key={ index }>
                <a style={ pullLeft } onClick={ () => handleSelect( videoId ) }>
                    <img style={ thumbImage } src={ thumbImg } alt={ title } />
                </a>
                <div style={ mediaBody }>
                    <h4 style={ videoTitle } onClick={ () => handleSelect( videoId ) }>{ title }</h4>
                    <p style={ byAuthor }>By { channelTitle }</p>
                </div>
        </li>
    );
}

export default Videothumb;