"use client";
import React, { createContext, useEffect, useState } from 'react';
import Image from "next/image";
import Header from '@/componnents/main/header';
import { LanguageTypes, SectionTypes } from '@/types';
import { LanguageContext } from '@/contexts';
import { SectionContext } from '@/contexts';
import { Languages } from '@/constent/languages';
import Hero from '@/componnents/main/hero';
import Introduction from '@/componnents/main/introduction';
import { headerHeight } from '@/constent';
import Risks from '@/componnents/main/risks';
import Regulations from '@/componnents/main/Instruction';
import Conclusion from '@/componnents/main/Conclusion';
import Footer from '@/componnents/main/footer';

const Main = () => {

    const [activeLanguage, setActiveLanguage] = useState<LanguageTypes>(Languages.english);
    const [activeSection, setActiveSection] = useState<SectionTypes>("hero");



    useEffect(() => {
        if (activeLanguage.label === "العربية") {
            document.body.style.direction = "rtl";
            document.querySelectorAll(".auto-direction").forEach((el) => {
                (el as HTMLElement).style.direction = "rtl";
                (el as HTMLElement).classList.add("flipX");
            });
        } else {
            document.body.style.direction = "ltr";
            document.querySelectorAll(".auto-direction").forEach((el) => {
                (el as HTMLElement).style.direction = "ltr";
                (el as HTMLElement).classList.remove("flipX");
            });
        }
    }, [activeLanguage])

    useEffect(() => {
        document.querySelectorAll(".section").forEach((el) => {
            (el as HTMLElement).style.scrollMarginTop = headerHeight + "px";
        });
        
    }, [])

  return (
    <main className={`w-full h-full ${activeLanguage?.label == "العربية" && "flex-row-reverse"}`}>
        <LanguageContext.Provider value={{activeLanguage: activeLanguage, setActiveLanguage: setActiveLanguage}} >
            <SectionContext.Provider value={{activeSection: activeSection, setActiveSection: setActiveSection}} >
                <Header/>
                <Hero/>
                <Introduction/>
                <Risks/>
                <Regulations/>
                <Conclusion/>
                <Footer/>
            </SectionContext.Provider>
        </LanguageContext.Provider>
    </main>
  )
}

export default Main
