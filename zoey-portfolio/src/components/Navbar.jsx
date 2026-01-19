import React, {useState} from "react";
import { Link } from 'react-router-dom';

const Navbar = () =>{
    const [SideBarIsOpen, setSideBarIsOpen] = useState(false);

    const menuItem = [
        {name:'HOME', path: '/'},
        {name: 'My CS Projects', path:'/projects'},
        {name: 'Gallery', path:'/gallery'}
    ];

    return (
        <>
            {/* The top navigation bar */}
            <nav className="flex items-center justify-between bg-slate-200 md:px-8 py-4 md:py-6">
                {/* The Hamburger button */}
                <button onClick={()=>setSideBarIsOpen(true)} 
                    className="flex flex-col hover:opacity-70 tracking-widest">
                    <span className="w-6 h-0.5 bg-slate-400 py-0.5"></span>
                    <span className="w-6 h-0.5 bg-slate-400"></span>
                    <span className="w-6 h-0.5 bg-slate-400 py-0.5"></span>
                </button>
                <Link to="/" className="cursor-pointer hover:opacity-70 transition-opacity">
                    <h1 className="text-lg text-stone-400 font-bold">ZOEY YANG</h1>
                </Link>
            
                {/* Placeholder for the right empty space */}
                <div className="w-10"></div>
            </nav>

            {/* The backdrop (Dimming effect) */}
            <div className={`fixed inset-0 bg-black/70 backdrop-blur-sm z-[70] transition-opacity duration-500 ${
                    SideBarIsOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setSideBarIsOpen(false)}
            />

            {/* The Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full w-full md:w-80 bg-slate-400 text-white shadow-2xl z-[80]
                    transition-transform duration-500 ease-in-out transform ${SideBarIsOpen ? 'translate-x-0':'-translate-x-full'}`}>
                <div className="p-10 flex flex-col h-full">
                    <button onClick={() => setSideBarIsOpen(false)} className="self-end text-2xl">x</button>

                    <nav className="mt-10 flex flex-col space-y-8">
                        {menuItem.map((item) => (
                            <Link key={item.name} to={item.path} onClick={() =>setSideBarIsOpen(false)}>
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </aside>
        </>
    );
};

export default Navbar;