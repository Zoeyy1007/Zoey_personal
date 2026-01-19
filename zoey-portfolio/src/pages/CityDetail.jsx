import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const S3_PHOTO_DATA = {
    "guangzhou":[
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/Guangzhou/guangzhou1.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/Guangzhou/guangzhou2.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/Guangzhou/guangzhou3.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/Guangzhou/guangzhou4.webp"
    ],
    "las-vegas":[
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/LasVegas/LasVegas1.webp"
    ],
    "bay-area":[
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/BayArea/bay1.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/BayArea/bay2.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/BayArea/bay3.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/BayArea/bay4.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/BayArea/bay5.webp"
    ],
    "new-york":[
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/NewYork/newyork1.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/NewYork/newyork2.webp",
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/NewYork/newyork3.webp"
    ]
}

export default function CityDetail() {
    const {cityName} = useParams();
    const photos = S3_PHOTO_DATA[cityName?.toLowerCase()] || [];
    const navigate = useNavigate();

    //state to track the currently selected image index
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log("Current city slug:", cityName);
    console.log("Found photos:", S3_PHOTO_DATA[cityName]);

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
            <div className="w-full bg-zinc-80/20 py-6 backdrop-blur-md">
                <div className="flex flex-row gap-4 no-scrollbar overflow-x-auto px-10 items-center justify-start md:justify-center">
                    {photos.map((url, index) => (
                        <button key={index} onClick={() => setSelectedIndex(index)}
                            className={`w-32 h-20 flex-shrink-0 transition-all duration-300 ${
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
            </div>
        </div>
        </>
    );
}

