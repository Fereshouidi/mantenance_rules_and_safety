import { colors } from '@/constent'
import { LanguageContext, SectionContext } from '@/contexts';
import React, { use, useContext } from 'react'

const Nav = () => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;
    const activeSection = useContext(SectionContext)?.activeSection;
    const setActiveSection = useContext(SectionContext)?.setActiveSection;

    if (!activeLanguage || !setActiveSection) return <></>;

    return (
    <div 
        className='flex gap-6'
        style={{color: colors.dark[400]}}
    >
        <a      
            href="#hero" 
            className={`hover:text-gray-500 ${activeSection === "hero" ? "text-white" : ""}`}
            onClick={() => setActiveSection("hero")}
        >{activeLanguage?.nav.hero}</a>
        <a      
            href="#introduction" 
            className={`hover:text-gray-500 ${activeSection === "introduction" ? "text-white" : ""}`}
            onClick={() => setActiveSection("introduction")}
            
        >{activeLanguage?.nav.introduction}</a>
        <a      
            href="#risks" 
            className={`hover:text-gray-500 ${activeSection === "risks" ? "text-white" : ""}`}
            onClick={() => setActiveSection("risks")}
        >{activeLanguage?.nav.Risks}</a>
        <a      
            href="#prevention" 
            className={`hover:text-gray-500 ${activeSection === "prevention" ? "text-white" : ""}`}
            onClick={() => setActiveSection("prevention")}
            
        >{activeLanguage?.nav.Prevention}</a>
        <a      
            href="#regulations" 
            className={`hover:text-gray-500 ${activeSection === "regulations" ? "text-white" : ""}`}
            onClick={() => setActiveSection("regulations")}
        >{activeLanguage?.nav.Regulations}</a>
        <a      
            href="#conclusion" 
            className={`hover:text-gray-500 ${activeSection === "conclusion" ? "text-white" : ""}`}
            onClick={() => setActiveSection("conclusion")}
        >{activeLanguage?.nav.Conclusion}</a>
    </div>
    )
}

export default Nav
