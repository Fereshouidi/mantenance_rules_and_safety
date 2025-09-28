'use client';
import { LanguageContext } from '@/contexts';
import { RiskType } from '@/types';
import React, { act, useContext, useEffect, useRef, useState } from 'react'

type Params = {
    risk: RiskType
    index: number
    className?: string
}

const RiskCard = ({
    risk,
    index,
    className
}: Params) => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;

    const frameRef = useRef<HTMLDivElement>(null);

    const [activeInterface, setActiveInterface] = useState<"front" | "back">("front");

    const toggleInterface = (interface_: "front" | "back") => {

        if (!frameRef.current) return; 

        if (interface_ === "back") {
            frameRef.current.classList.add("risk-card-frame-clicked");
        } else {
            frameRef.current.classList.remove("risk-card-frame-clicked");
        }

        if (interface_ === "front") {
            setActiveInterface("front");
        } else {
            setActiveInterface("back");
        }
    }

    // useEffect(() => {

    //     const el = document.getElementById(risk.key);

    //     if (!el) return;

    //     (el as HTMLElement).style.transform = "rotateY(180deg)";

    //     ;
    // }, [activeInterface])
    
  return (
        <div 
            className='risk-card-frame_ relative w-[300px] h-[300px] hover:scale-110 hover:z-10 duration-500'
            onClick={() => toggleInterface(activeInterface == "front" ? "back" : "front")}
            ref={frameRef}
            // onMouseEnter={() => toggleInterface("back")}
            onMouseLeave={() => toggleInterface("front")}
        >
            
            {
                activeInterface == 'front' ?

                    <div 
                        className={`risk-card card-front w-full h-full bg-white rounded-2xl hover:shadow-xl flex flex-col items-center cursor-pointer gap-5 p-5 duration-500`}
                        // ref={cardRef}
                        // id={risk.key}
                    >
                        <img 
                            className='w-24 h-24 object-contain'
                            src={risk.icon}
                        />
                        <p>
                            {activeLanguage && risk.titles[activeLanguage.language as keyof typeof risk.titles]}
                        </p>

                    <p
                        className='text-gray-500 text-[13px] text-center px-2'
                    >
                        {activeLanguage && risk.subtitles[activeLanguage.language as keyof typeof risk.subtitles]}
                    </p>

                    <p>{index+1}</p>

                    </div>
                :
                    <div 
                        className='risk-card card-back w-full h-full bg-white rounded-2xl shadow-2xl flex flex-col items-center gap-5 p-5 duration-500'
                        // ref={cardRef}
                    >
                        <div className='w-full h-full rotate-y-180 flex items-center justify-center'>back</div>
                    </div>
                
            }


        </div>
  )
}

export default RiskCard;
