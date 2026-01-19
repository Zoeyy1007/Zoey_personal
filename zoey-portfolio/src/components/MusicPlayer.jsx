import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';

const MusicPlayer = ({ playlistID }) => {
    const [player, setPlayer] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const onPlayerReady = (event) => {
        setPlayer(event.target);
        event.target.setShuffle(true);
        event.target.playVideoAt(Math.floor(Math.random()*10));
        event.target.pauseVideo();
    };

    const toggleMusic = () => {
        if (!player) return;

        if(isPlaying) {
            player.pauseVideo();
        } else {
            player.playVideo();
        }
        setIsPlaying(!isPlaying);
    };

    const opts = {
        height: '0',
        width:'0',
        playerVars: {
            listType:'playlist',
            list: playlistID,
            autoplay: 0,
        },
    };

    return (
        <div className='absolute top-28 left-40 z-50'>
            <YouTube opts={opts} onReady={onPlayerReady}/>
            <button className= 'text-white bg-black/30 px-4 rounded-lg hover:bg-black' onClick={toggleMusic}>
                {isPlaying ? '⏸ Pause' : 'Play'}
            </button>
        </div>
    );
};

export default MusicPlayer;