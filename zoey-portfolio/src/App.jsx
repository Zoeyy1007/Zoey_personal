import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="bg-zinc-400 min-h-screen relative">
      <div className="relative z-50">
        <Navbar />
      </div>
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
    </div>
  )
}

export default App