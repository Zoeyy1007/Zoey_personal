import { Github, Linkedin, Mail} from 'lucide-react';

export default function Home() {
    return (
        <>
        <div className="min-h-screen bg-zinc-400">
            {/*empty container*/}
            <div className="flex flex-col md:flex-row py-15"></div>
            {/*background image container */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <img src="/Bigbear1.webp"
                className="w-full h-full object-cover" alt="Background"/>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-400/20 to-zinc-400"></div>
            </div>

            {/* Text content container */}
            <div className="relative z-10 flex flex-col flex-1 md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center p-10 flex-col">
                    <h1 className="text-5xl font-bold font-serif">
                        ABOUT ME
                    </h1>
                    <p className="text-xl py-5 px-15 font-serif">
                        Hi, this is Zoey Yang. I'm a junior Computer Science major at UC Riverside, where I 
                        spend my time exploring the intersection of code and visual storytelling. This space serves
                        as a digital gallery for my technical projects and a window into the world through 
                        my lens. 
                    </p>
                </div>
                {/* Profile picture */}
                <div className="w-full md:w-1/2 relative h-[400px] md:h-auto px-10">
                <img src="/profile.webp" alt="ProfileImage" 
                    className="w-full h-full rounded-3xl object-cover shadow-2xl opacity-85 transition-opacity hover:opacity-100 duration-500"/>
                </div>
            </div>

            {/* Contact me section */}
            <div className="relative z-10 flex flex-col flex-1 md:flex-row">
                <div className="w-full md:w-1/2 flex items-center justify-center mt-30 flex-col">
                    <h1 className="text-5xl font-bold font-serif">
                        Contact Me
                    </h1>
                    <div className='flex flex-row items-center gap-3 text-xl mt-10'>
                        <Mail size={20} className='text-zinc-800'/>
                        <a href="mailto:zoey.zq.yang@gmail.com" className='hover:underline font-serif'>
                            zoey.zq.yang@gmail.com
                        </a>
                    </div>
                    <div className='flex gap-6 mt-3 flex-row items-center gap-3 mb-10'>
                        <a href="https://github.com/Zoeyy1007" target='_blank' rel='noreferrer'>
                            <Github size={20} className='text-zinc-800 hover:text-black transition-colors cursor-pointer'/>
                        </a>
                        <a href="https://github.com/Zoeyy1007" target='_blank' rel='noreferrer' className='text-xl font-serif hover:underline'>
                            Github: Zoeyy1007
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
        </>
    );
}