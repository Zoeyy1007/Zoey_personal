import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

const myProjects = [
    {
        id:1,
        title: "Lululemon Inventory Automation Bot", 
        short: "Check Lululemon's website every few minutes for restocks of specific items", 
        long: `Used Selenium to handle the website's loading and made the browser "headless" so it can run invisible in the background. 
            Connected the script to a Telegram Bot to send an instant message to my phone as soon as the "Add to Bag" button appeared. `,
        github: "https://github.com/Zoeyy1007/site_updateTracker"
    },
    {
        id: 2,
        title: "OpenCV Video Player&Editor",
        short: "Media player using Python",
        long: `Used OpenCV to process frames and implemented HSV color space conversion to allow for natural-looking adjustments.
            Developed in C++ that lets users edit video properties like brightness, contrast and saturation. `,
        github: "https://github.com/Zoeyy1007/VideoPlayer_editor"
    }, 
    {
        id: 3,
        title: "Personal Portfolio Website", 
        short: "This is the website you are looking at. ", 
        long: `Architected a responsive website using React and Vite, featuring dynamic routing. 
            Developed a custom, interactive UI using Tailwind CSS. `,
        github: "https://github.com/Zoeyy1007/Zoey_personal"
    }
]


export default function CSProjects(){
    // we track which project ID is currently open
    const [openID, setOpenID] = useState(null);

    const toggle = (id) =>{
        setOpenID(openID === id ? null:id); //close if already open, else open new one
    };
    return (
        <div className="bg-zinc-400 pt-20 px-10 min-h-screen">
                <div className="flex flex-col items-center">
                    <h1 className="font-serif text-4xl font-bold">
                        CS PROJECTS
                    </h1>
                </div>
                <div className='w-full py-5'/>

                {myProjects.map((project) =>(
                    <div key={project.id} className=" text-black rounded-xl py-5">
                        <div className="flex justify-between items-center cursor-pointer" onClick={() => toggle(project.id)}>
                            <div>
                                <h2 className="text-2xl font-bold">{project.title}</h2>
                                <p className='text-zinc-600'>{project.short}</p>
                            </div>
                            <button className='text-2xl transition-transform' style={{ transform: openID === project.id ? 'rotate(180deg)' : 'rotate(0deg)'}}>
                                ▼
                            </button>
                        </div>

                        {/* This part only shows if the ID matches */}
                        {openID === project.id && (
                            <div className='border-zinc-700 border-t mt-4 pt-4 animate-fadeIn whitespace-pre-line'>
                                <p>{project.long}</p>

                                {/* The link to github pages */}
                                <div className='flex gap-4'>
                                    <a href={project.github} target='_blank' rel='noopener noreferrer'
                                        className="flex items-center gap-2 bg-zinc-700 hover:bg-zinc-600 text-white px-4 py-2 rounded-lg transition-colors text-sm font-medium">
                                        <Github size={18}/>Source Code
                                    </a>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
        </div>
    );
}