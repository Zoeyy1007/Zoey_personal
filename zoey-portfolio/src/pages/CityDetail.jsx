import { useParams } from "react-router-dom";
import { useState,useRef } from "react";
import { useNavigate } from "react-router-dom";
import MusicPlayer from '../components/MusicPlayer';
import { CITY_PHOTO } from "../data/cities";




export default function CityDetail() {

    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current){
            const {scrollLeft, clientWidth} = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft -clientWidth
                : scrollLeft +clientWidth;

            scrollRef.current.scrollTo({left: scrollTo, behavior: 'smooth'});
        }
    };

    const {cityName} = useParams();
    const photos = CITY_PHOTO[cityName?.toLowerCase()] || [];
    const navigate = useNavigate();

    const activePlaylistId = CITY_PLAYLIST[cityName];

    //state to track the currently selected image index
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log("Current city slug:", cityName);
    console.log("Found photos:", CITY_PHOTO[cityName]);

    if (photos.length === 0){
        return <div className="pt-32 px-10"><h1>{cityName}</h1><p>No photos yet. </p></div>;
    }

    return (
        <>
        <div className="bg-gradient-to-b from-slate-300 to-slate-100 min-h-screen pt-25 px-10 flex flex-col items-center">
            <button 
                onClick={() => navigate(-1)} //-1 goes back one step in history
                className="absolute top-28 left-10 text-white bg-black/30 px-4 rounded-lg hover:bg-black z-50">
                    ← Back
            </button>
            {/* The main view */}
            <div className="w-full max-w-5xl h-[70vh] px-10 mb-10 flex justify-center items-center">
                <a href={photos[selectedIndex]} target="_blank" rel="noreferrer" className="h-full">
                    <img src={photos[selectedIndex]} alt="Selected view" 
                        className="h-full object-contain rounded-2xl shadow-2xl transition-all duration-500" />
                </a>
            </div>
        

        {/* The thunbnail bar (scroll view) */}
            <div className="w-full bg-zinc-80/20 py-4 backdrop-blur-md h-32">
                <button onClick={() => scroll('left')}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white z-10 p-2 rounded-full">
                        &lt;
                </button>
                <div ref={scrollRef} className="flex flex-row gap-4 overflow-x-auto px-10 items-center md:justify-center">
                    {photos.map((url, index) => (
                        <button key={index} onClick={() => setSelectedIndex(index)}
                            className={`w-32 h-20 flex-shrink-0 transition-all overflow-hidden duration-300 ${
                                selectedIndex === index
                                ? 'scale-110 ring-4 ring-white rounded-lg shadow-xl'
                                : 'opacity-50 hover:opacity-100 scale-90'
                                }`}
                        >
                            <img src={url} className="h-24 w-32 object-cover rounded-md pointer-events-none" />
                                <img src={url} alt="" />
                        </button>
                    ))}
                </div>
                <button onClick={() => scroll('right')}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white z-10 p-2 rounded-full">
                        &gt;
                </button>
            </div>

            {activePlaylistId ? (
                <MusicPlayer playlistID={activePlaylistId}/>
            ) : (
                <p>No music for this city yet!</p>
            )}
        </div>
        </>
    );
}

const CITY_PLAYLIST ={
    "guangzhou": "PLH-ynIF0ZSW9Xq0E_8Et90xmP6ipZQFiZ"
}
