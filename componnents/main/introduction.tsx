import { headerHeight } from '@/constent';
import { LanguageContext } from '@/contexts';
import React, { useContext } from 'react'

const Introduction = () => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;

    return (
        <div
            id='introduction'
            className='section w-full bg-white flex flex-col justify-center items-center gap-10'
            style={{minHeight: `calc(100vh - ${headerHeight}px)`}}
        >
          <h1 className='section-title'>{activeLanguage?.nav.introduction}</h1>

          <p>{activeLanguage?.introduction.partOne}</p>
          <p>{activeLanguage?.introduction.partTwo}</p>
          <p>{activeLanguage?.introduction.partThree}</p>

          <div className='flex gap-10 flex-row justify-center items-center'>
            <img 
                src="/electrical-danger.png" 
                alt="Introduction Image" 
                className={`object-cover w-20 h-20`}
            />
            <img 
                src="/crushing.png" 
                alt="Introduction Image" 
                className={`object-cover w-20 h-20`}
            />
            <img 
                src="/fire_danger.png" 
                alt="Introduction Image" 
                className={`object-cover w-20 h-20`}
            />
            <img 
                src="/chemistry_danger.png" 
                alt="Introduction Image" 
                className={`object-cover w-20 h-20`}
            />
          </div>

        </div>
      )
}

export default Introduction;
