import { Languages, LanguagesDispo } from '@/constent/languages';
import { LanguageContext } from '@/contexts'
import { LanguageTypes } from '@/types';
import React, { useContext } from 'react'

const LanguageSelector = () => {

    const setActiveLanguage = useContext(LanguageContext)?.setActiveLanguage;

    

    if (!setActiveLanguage) return;

  return (
    <div>
        <select 
            name="language" 
            id="language" 
            className='p-4 rounded-md outline-none cursor-pointer'
            onChange={(e) => {setActiveLanguage(LanguagesDispo.find(lang => lang.label === e.target.value) as LanguageTypes)}}
        >
            {LanguagesDispo.map((lang, index) => (
                <option
                    key={index}
                    className='outline-none border-none cursor-pointer' 
                    value={lang.label}
                >{lang.label}</option>     
            ))}
        </select>
    </div>
  )
}

export default LanguageSelector


        // <option
        //     className='outline-none border-none' 
        //     value="en"
        // >EN</option>
        // <option
        //     className='outline-none border-none' 
        //     value="fr"
        // >FR</option>
        // <option
        //     className='outline-none border-none' 
        //     value="ar"
        // >AR</option>
        // <option
        //     className='outline-none border-none' 
        //     value="street"
        // >شارع</option>     