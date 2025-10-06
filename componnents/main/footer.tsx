import { colors, headerHeight } from '@/constent'
import { Socials } from '@/constent/data';
import { LanguageContext } from '@/contexts';
import React, { useContext } from 'react'

const Footer = () => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;

  return (
    <div 
        className='flex justify-between items-center px-14'
        style={{
            height: headerHeight,
            backgroundColor: colors.primary[500],
            color: colors.dark[300]
        }}
    >

        
        <h4 className='flex-1'>{activeLanguage?.footer.Copyright}</h4>

        <p className='flex-1 text-center text-[14px] font-semibold'>
            {activeLanguage?.footer.createdBy + ' : '}
            <strong className='font-semibold text-[17px]'>{activeLanguage?.sideMatters.myName}</strong>
        </p>

        <div className='flex flex-1 flex-row justify-end items-center gap-3'>
            {Socials.map((social, index) => (
                <a 
                    key={index} 
                    href={social.url}
                    target="_blank"
                >
                    <img 
                        src={social.src} 
                        alt={social.name}
                        className='w-5 h-5'
                    />
                </a>
            ))}
        </div>
    </div>
  )
}

export default Footer
