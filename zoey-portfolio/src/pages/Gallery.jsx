import { Link } from 'react-router-dom';

const cities = [
    {id: 1, name: "Los Angeles", slug: "los-angeles"}, 
    {id: 2, name: "Bay Area", slug: "bay-area"}, 
    {id: 3, name: "Guangzhou", slug:"guangzhou"},
    {id: 4, name: "Las Vegas", slug:"las-vegas"}, 
    {id: 5, name:"New York", slug:"new-york"},
    {id: 6, name: "Shenzhen", slug:"shenzhen"}
]

export default function Gallery() {
    return (
        <>
            <div className='absolute inset-0 z-0 pointer-events-none'>
                <img src="/baiyun.webp" alt="Background" className='w-full h-full object-cover' />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-zinc-400/20 to-zinc-400"></div>
            </div>

            <div className=" relative min-h-screen pt-10 px-10 z-10">
                <div className="items-center flex flex-col">
                    <h1 className="text-4xl font-bold font-serif text-gray-700">Gallery</h1>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mt-10'>
                    {cities.map(city => (
                        <Link key={city.id} to={`/gallery/${city.slug}`}>
                            <div className='relative group overflow-hidden rounded-2xl cursor-pointer border-2 border-white/20 p-6 backdrop-blur-md'>
                                <h2 className='text-2xl text-gray-700 font-bold font-serif '>
                                    {city.name}
                                </h2>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
}