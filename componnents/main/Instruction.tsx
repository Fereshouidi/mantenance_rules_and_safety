"use client";
import { colors, headerHeight } from '@/constent';
import { directionVideos } from '@/constent/data';
import { LanguageContext } from '@/contexts';
import React, { useContext } from 'react';

const Instruction  = () => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;
    
    return (
        <div 
            id='instruction'
            className='section w-full bg-white flex flex-col items-center gap-10 px-10 sm:px-30 py-5 sm:py-24 '
            style={{minHeight: `calc(100vh - ${headerHeight}px)`}}
        >
            
            <h1 className='section-title'>{activeLanguage?.nav.Instruction  }</h1>

            <p className='leading-loose'>{activeLanguage?.instructions.description}</p>

            <ul className='gap-10'>
                {activeLanguage?.instructions.list.map((i, index) => (
                    <li
                        key={index}
                        className='leading-loose flex flex-row gap-10 my-2'
                    >
                        <p>
                            <strong className='flex-1'>{i.title + " : "}</strong>
                            {i.eplaination}
                        </p>
                    </li>
                ))}
            </ul>

            <div className=' w-full flex justify-center items-center gap-10  rounded-4xl'>
                {directionVideos.map((viedeo, index) => (

                    <div 
                        key={index}
                        className='w-[300px] min-h-[400px] flex flex-col justify-start items-center gap-4 p-2 rounded-4xl' 
                    >

                        <video 
                            controls={true}
                            className='w-[300px] h-[300px] rounded-4xl shadow-lg'
                            style={{
                                borderTop: `5px solid ${colors.primary[700]}`,
                                borderRight: `5px solid ${colors.dark[100]}`,
                                borderBottom: `5px solid ${colors.primary[700]}`,
                                borderLeft: `5px solid ${colors.dark[100]}` 
                            }}
                        >
                            <source src={viedeo.src} />
                        </video>

                        <p className=' text-center text-sm opacity-90'>{viedeo.title[activeLanguage?.language as keyof typeof viedeo.title]}</p>

                    </div>
                    
                ))}
            </div>

        </div>
    )
}

export default Instruction 
