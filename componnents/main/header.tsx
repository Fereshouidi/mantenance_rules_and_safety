"use client";
import React, { useContext } from 'react';
import { colors, headerHeight } from '@/constent/index';
import Nav from '../sub/nav';
import LanguageSelector from '../sub/languageSelector';
import { LanguageContext, SectionContext } from '@/contexts';

const Header = () => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;

  return (
    <div 
        className={`w-full flex items-center justify-between px-10 fixed top-0 left-0 z-50`}
        style={{backgroundColor: colors.primary[500], height: `${headerHeight}px`}}
    >
      <a href="#hero"
        className='font-extrabold uppercase'
        style={{color: colors.dark[200]}}
      >
        {activeLanguage?.nav.myName}
      </a>

      <Nav/>

      <LanguageSelector/>

    </div>
  )
}

export default Header
