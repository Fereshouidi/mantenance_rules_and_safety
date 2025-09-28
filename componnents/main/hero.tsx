import { headerHeight } from '@/constent'
import { LanguageContext } from '@/contexts';
import React, { useContext } from 'react';
import { motion } from 'framer-motion';


const Hero = () => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;

  return (
    <div
        id='hero'
        className='section w-full h-full flex items-center justify-center'
        style={{    
            height: `calc(100vh - ${headerHeight}px)`,
            // backgroundImage: `url('/hero.jpg')`,
            // backgroundRepeat: "no-repeat",
            // backgroundPosition: "",
            // backgroundSize: "cover",
            // backgroundAttachment: "fixed"
        }}
    >
        <img 
            src="/hero.jpg" 
            alt="Hero Image" 
            className={`object-cover w-full h-full bg-fixed bg-no-repeat auto-direction fixed -z-10`}
            style={{top: `${headerHeight}px`}}
        />

            {/* bg-gradient-to-l from-gray-500 to-gray-500 to-transparent */}

        <div
            className={`absolute top-0 w-full h-full flex items-center justify-end
                ${activeLanguage?.label == "العربية" 
                ? "bg-[linear-gradient(to_right,#000000d4,#1f1f1f96,#1f1f1f96,transparent,transparent)]" 
                : "bg-[linear-gradient(to_left,#000000d4,#1f1f1f96,#1f1f1f96,transparent,transparent)]"}
            `}
            style={{paddingTop: `${headerHeight}px`}}
        >
            <div className='w-[50%] h-full flex flex-col items-center justify-center gap-14 py-10 font-bold'>

                <h6 
                    className='text-2xl text-gray-400'
                >{activeLanguage?.hero?.recognise}</h6>

                <h1 
                    className='text-7xl font-extrabold text-transparent bg-clip-text bg-[linear-gradient(to_bottom,yellow,yellow)] font-courier'
                >{activeLanguage?.hero?.ruleAndSafety}</h1>

                <h6
                    className='text-2xl text-gray-400'
                >
                    {activeLanguage?.hero?.inTheFieldOf} 
                </h6>

                <h2
                    className=' text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-green-600 to-red-600 '
                >{activeLanguage?.hero?.industrialMaintenance}</h2>

                <a href="#introduction" className='min-w-20 text-center bg-yellow-300 px-4 py-3 rounded-full text-md text-gray-700 hover:text-gray-500 hover:scale-110 duration-300'>{activeLanguage?.hero?.start}</a>
            </div>
        </div>
      {/* hero */}
    </div>
  )
}

export default Hero
