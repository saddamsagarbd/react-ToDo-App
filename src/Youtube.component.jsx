import React, { useEffect, useState } from 'react';
import axios from 'axios';

import VideoPlayer from './common/videoPlayer.component';
import VideosList from './common/VideosList.component';
import Input from './common/input.component';
import Form from './common/Form.component';


function Youtube() {

    const [ searchQuery, setSearchQuery ] = useState('');
    const [ videos, setVideos ] = useState('');
    const [ videoId, setVideoId ] = useState('');

    const formStyle = {
        float: 'left',
        width: '90%'
    };
    
    const inputStyle = {
        float: 'left',
        width: '70%'
    };

    const mainList = {
        paddingLeft: '.5em',
        width: '100%',
        listStyle: 'none'
    }

    useEffect(() => {
        console.log(searchQuery);
    }, [searchQuery]);

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    }

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();

            const baseUrl = 'https://www.googleapis.com/youtube/v3/search',
            key = 'AIzaSyDuDUcl-xAyd9MWinC-v0PuLmA65iD6_CU',
            type = 'video',
            part = 'snippet';

            const { data } = await axios.get(`${ baseUrl }?part=${ part }&type=${ type }&q=${searchQuery}&key=${ key }`);

            setVideos(data.items);

        } catch (error) {
            console.log(error);
        }
    }
    
    return ( 
        <div className='container my-3'>
            <header className="navbar navbar-light bg-light justify-content-between">
                <a href='/youtube' className="navbar-brand">Youtube</a>
                <Form classN='d-flex' onSubmit={ handleSubmit }> 
                    <Input
                        type='text'
                        id="searchQuery"
                        className = "form-control col-md-6 mx-2"
                        value={ searchQuery }
                        event={ handleSearch }
                        style={ inputStyle }
                    />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </Form>
            </header>
            
            <main className='container-fluid my-3'>

                <div className='row'>
                    <div className="col-md-7">
                        <VideoPlayer />
                    </div>
                    <div className="col-md-5">
                        <ul style={ mainList }>
                            {
                                videos.length > 0 && <VideosList videos={ videos } />  
                            }             
                        </ul>
                    </div>
                </div>

            </main>
        </div>
     );
}

export default Youtube;