import { useParams } from "react-router-dom";
import { useState } from "react";


export default function CityDetail() {
    const {cityName} = useParams();
    const photos = S3_PHOTO_DATA[cityName] || [];

    //state to track the currently selected image index
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log("Current city slug:", cityName);

    if (photos.length === 0){
        return <div className="pt-32 px-10"><h1>{cityName}</h1><p>No photos yet. </p></div>;
    }

    return (
        <>
        <div className="bg-zinc-400 min-h-screen pt-32 px-10 flex flex-col items-center">
            

        </div>
        </>
    );
}

const S3_PHOTO_DATA = {
    "guangzhou":[
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/Guangzhou/guangzhou1.webp"
    ],
    "las-vegas":[
        "https://zoey-photography-storage.s3.us-east-2.amazonaws.com/LasVegas/LasVegas1.webp"
    ]
}