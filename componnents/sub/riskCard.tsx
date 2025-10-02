'use client';
import { colors } from '@/constent';
import { LanguageContext } from '@/contexts';
import { RiskType } from '@/types';
import React, { useContext, useEffect, useRef, useState } from 'react'

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
    const [activeSide, setActiveSide] = useState<"risk" | "prevention">("risk");
    const slideRef = useRef<HTMLDivElement>(null);

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

        setActiveSide("risk")

    }

    useEffect(() => {
        setActiveSide(activeLanguage?.language == "arabic" ? "prevention" : "risk")
    }, [activeLanguage])

    useEffect(() => {

        if (!slideRef.current) return;

        if (activeLanguage?.language == "arabic" || activeLanguage?.language == "street") {

            if (activeSide == 'risk') {
                slideRef.current.style.transform = 'translateX(0)'
            } else {
                slideRef.current.style.transform = 'translateX(50%)'
            }
            
        } else {

            if (activeSide == 'risk') {
                slideRef.current.style.transform = 'translateX(0)'
            } else {
                slideRef.current.style.transform = 'translateX(-50%)'
            }

        }

    }, [activeSide])
    
  return (
        <div 
            className={`risk-card-frame_ relative w-[300px] h-[300px] hover:scale-110 hover:z-10 duration-500 ${className}`}
            // style={{direction: activeLanguage?.language == "arabic" ? "rtl" : "ltr"}}
            onClick={() => toggleInterface(activeInterface == "front" ? "back" : "front")}
            ref={frameRef}
            onMouseLeave={() => toggleInterface("front")}
        >
            
            {
                activeInterface == 'front' ?

                    // front side
                    <div 
                        className={`risk-card card-front w-full h-full bg-white rounded-2xl shadow-2xs hover:shadow-xl flex flex-col items-center cursor-pointer gap-5 p-5 duration-500`}
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

                    // back side

                    <div 
                        className='risk-card card-back bg-white w-full relative overflow-hidden min-h-full rounded-2xl shadow-2xl flex flex-col justify-between items-center duration-500 p-2'
                        onClick={(e) => e.stopPropagation()}
                        // style={{
                        //     backgroundImage: "url('/riskCardBg.png')",
                        //     backgroundRepeat: "no-repeat",
                        //     backgroundSize: "cover",
                        //     backgroundPosition: "right"
                        // }}
                    >
                        
                        <img 
                            src="/riskCardBg.png"
                            className={`object-cover w-full h-full ${activeSide == "prevention" && "rotate-y-180 duration-500"} auto-direction absolute top-0 left-0 bottom-0 -z-10 opacity-50 `}
                        />

                        <div></div>

                        <div className='w-full h-full rotate-y-180 flex flex-col gap-5 overflow-x-scroll scrollbar-hidden justify-center p-2-'>

                            <div    
                                className='slides w-[200%] h-full flex flex-row rounded-4xl duration-500 /p-2'
                                // style={{direction: 'rtl'}}
                                ref={slideRef}
                            >

                                {/* risk */}
                                <div className='flex w-full flex-col  items-center justify-center gap-5 px-5 '>

                                    <h2>{risk.titles[activeLanguage?.language as keyof typeof risk.titles]}</h2>

                                    <p className='text-gray-700 text-[9px] text-center px-2'>
                                        {risk.description[activeLanguage?.language as keyof typeof risk.description]}
                                    </p>

                                    <div className='w-full flex flex-col gap-2'>

                                        <h6 className='text-[11px] font-[12px]'>{activeLanguage?.sideMatters.examples + " : "}</h6>

                                        <ul className='list-disc list-inside text-[10px] text-gray-700 px-2'>
                                            {risk.examples[activeLanguage?.language as  keyof typeof risk.examples].map((example, index) => (
                                                <li key={index} className='text-[8.5px]'>{example}</li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>

                                {/* prevention */}
                                <div className='flex w-full flex-col items-center justify-center gap-5 px-5 '>

                                    <h2>{activeLanguage?.sideMatters.prevention}</h2>

                                    <p className='text-gray-700 text-[9px] text-center px-2'>
                                        {risk.prevention.description[activeLanguage?.language as keyof typeof risk.prevention.description]}
                                    </p>

                                    <div className='w-full flex flex-col gap-2'>

                                        <h6 className='text-[11px] font-[12px]'>{activeLanguage?.sideMatters.examples + " : "}</h6>

                                        <ul className='list-disc list-inside text-[10px] text-gray-700 px-2'>
                                            {risk.prevention.examples[activeLanguage?.language as  keyof typeof risk.examples].map((example, index) => (
                                                <li key={index} className='text-[8.5px]'>{example}</li>
                                            ))}
                                        </ul>

                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className='w-[90%] min-h-5 flex flex-row items-center justify-center rotate-y-180 relative '>

                            <div className='flex justify-center items-center rounded-full gap-2 '>

                                <div 
                                    className={`w-1 h-1 rounded-full ${activeSide == "risk" ? "bg-yellow-500" : "bg-gray-300"} cursor-pointer`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setActiveSide("risk")
                                    }}
                                ></div>
                                <div 
                                    className={`w-1 h-1 rounded-full ${activeSide == "risk" ? "bg-gray-300" : "bg-yellow-500"} cursor-pointer`}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        setActiveSide("prevention")
                                    }}
                                ></div>

                            </div>

                            {
                                activeSide == "risk" ? 
                                    <span 
                                        className='text-[8px] absolute right-0 flex flex-row justify-center items-center gap-1 font-bold cursor-pointer bg-gradient-to-t from-yellow-500 to-black via-yellow-500 bg-clip-text text-transparent'
                                        // style={{color: colors.primary[600]}}
                                        // style={{direction: activeLanguage?.language == "arabic" ? "rtl" : "ltr"}}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setActiveSide("prevention")
                                        }}
                                    >
                                        {activeLanguage?.sideMatters.prevention}
                                        <img 
                                            className='w-2 h-2' 
                                            src={
                                                activeLanguage?.language == "arabic" || activeLanguage?.language == "street" ? 
                                                  "left-arrow.png"
                                                : "right-arrow.png"
                                            } 
                                            alt="" 
                                        />
                                    </span>
                                :
                                    <span 
                                        className='text-[8px]  absolute left-0 flex flex-row justify-center items-center gap-1 font-bold cursor-pointer bg-gradient-to-t  from-yellow-500 to-black via-yellow-500 bg-clip-text text-transparent'
                                        // style={{color: colors.primary[600]}}
                                        // style={{direction: "rtl"}}
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            setActiveSide("risk")
                                        }}
                                    >
                                        
                                        <img 
                                            className='w-2 h-2' 
                                            src={
                                                activeLanguage?.language == "arabic" || activeLanguage?.language == "street" ? 
                                                  "right-arrow.png"
                                                : "left-arrow.png"
                                            } 
                                            alt="" 
                                        />
                                        {activeLanguage?.sideMatters.risk}
                                    </span>
                            }

                        </div>


                    </div>
                
            }


        </div>
  )
}

export default RiskCard;
