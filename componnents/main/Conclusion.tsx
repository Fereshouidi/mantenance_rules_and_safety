import { headerHeight } from '@/constent'
import { LanguageContext } from '@/contexts';
import React, { useContext } from 'react'

const Conclusion = () => {

    const activeLanguage = useContext(LanguageContext)?.activeLanguage;

  return (
    <div 
        id='conclusion'
        className='section w-full bg-gray-100 flex flex-col justify-center items-center gap-10'
        style={{minHeight: `calc(100vh - ${headerHeight *2}px)`}}
    >
      
      <h1 className='section-title'>{activeLanguage?.nav.Conclusion}</h1>

      {activeLanguage?.Conclusion.paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}


    </div>
  )
}

export default Conclusion
