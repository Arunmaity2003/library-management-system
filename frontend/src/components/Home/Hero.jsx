// import React from 'react'
// import { Link } from 'react-router-dom'

// const Hero = () => {
//   return (
//     <div className='h-[75vh] flex flex-col md:flex-row items-center justify-center'>
//         <div className='w-full mb-12 md:mb-0 lg:w-3/6 flex flex-col items-center lg:items-start justify-center'>
//             <h1 className="text-4xl lg:text-6xl font-semibold text-amber-200 lg:left-left">
//                 Discover Your Next great Read.
//             </h1>
//             <p className="mt-4 text-xl text-zinc-300 text-center lg:text-left">
//                 Explore inspiring stories and insightful reads, thoughtfully selected to enrich your mind and imagination.
//             </p>
//             <div className='mt-8'>
//                 <Link 
//                 to="/all-books"
//                 className='text-yellow-100 text-xl lg:text-2xl font-semibold border border-yellow-100 px-10 py-3 hover:border-zinc-800 rounded-full'>Discover books</Link>
//             </div>
//         </div>
//         <div className='w-full lg:w-3/6 h-auto lg:h-full flex items-center justify-center'>
//             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeq7f5H-DDsshlAfdxZlrVKGCnBjoEW8cEA&s" alt="hero image" />
//         </div>
//     </div>
//   )
// }

// export default Hero



import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
    // The image URL provided
    const heroBgImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFeq7f5H-DDsshlAfdxZlrVKGCnBjoEW8cEA&s";

    return (
        // Main Container with Background Image setup
        <div
            className='relative h-[80vh] w-full flex items-center justify-center bg-cover bg-center bg-no-repeat bg-fixed'
            style={{ backgroundImage: `url(${heroBgImage})` }}
        >
            {/* Overlay Layer:
           1. Gives the "bluish black" tint (bg-slate-950 with opacity).
           2. Adds a slight blur to hide the low resolution of the original image.
        */}
            <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-[2px]"></div>

            {/* Content Container (z-10 puts it above the overlay) */}
            <div className='relative z-10 w-full px-4 md:w-4/6 lg:w-3/6 flex flex-col items-center text-center'>

                {/* Main Heading - Changed to bluish-white tone */}
                <h1 className="text-4xl md:text-6xl font-bold text-sky-100 drop-shadow-lg leading-tight">
                    Discover Your Next Great Read.
                </h1>

                {/* Subtext - Changed to cool slate tone */}
                <p className="mt-6 text-lg md:text-xl text-slate-300 font-medium max-w-2xl drop-shadow-md">
                    Explore inspiring stories and insightful reads, thoughtfully selected to enrich your mind and imagination.
                </p>

                {/* Button Section - Updated to bluish theme with better hover effects */}
                <div className='mt-10'>
                    <Link
                        to="/all-books"
                        className='
                  inline-block
                  text-sky-50 text-xl font-semibold 
                  bg-sky-600 hover:bg-sky-500
                  px-12 py-4 
                  rounded-full 
                  transition-all duration-300 ease-in-out
                  hover:scale-105 hover:shadow-lg hover:shadow-sky-500/30
                '>
                        Discover books
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero