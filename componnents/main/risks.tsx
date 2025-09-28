"use client";
import { headerHeight } from '@/constent';
import React, { useContext } from 'react';
import { risks } from '@/constent/data';
import { div } from 'framer-motion/client';
import { LanguageContext } from '@/contexts';
import RiskCard from '../sub/riskCard';

const Risks = () => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;

    return (
        <div 
            id='risks'
            className='section w-full bg-gray-100 flex flex-col justify-center items-center gap-10 px-10 sm:px-30 py-5 sm:py-24 '
            style={{minHeight: `calc(100vh - ${headerHeight}px)`}}
        >
            <h1 className='section-title'>{activeLanguage?.nav.Risks}</h1>

            <div className='w-full flex flex-wrap justify-center items-center gap-10 sm:px-20 py-7'>{

                risks.map((risk, index) => (
                    <RiskCard
                        key={risk.key}
                        risk={risk}
                        index={index}
                    />
                ))

            }</div>
            
        </div>
    )
}

export default Risks
