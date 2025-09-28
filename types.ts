// export type LanguageTypes = "ar" | "en" | "fr" | "street"

export type LanguageContextType = {
    activeLanguage: LanguageTypes
    setActiveLanguage: (value: LanguageTypes) => void
}

export type LanguageTypes = {
    language: string,
    label: string,
    nav: {
        myName: string,
        hero: string,
        introduction: string,
        Risks: string,
        Prevention: string,
        Regulations: string,
        Conclusion: string
    },
    hero: {
        recognise: string,
        ruleAndSafety: string,
        inTheFieldOf: string,
        industrialMaintenance: string
        start: string
    }
    introduction: {
        partOne: string,
        partTwo: string,
        partThree: string
    },
    risks: {
        label: string,
        electrical: {
            title: string,
            subtitle: string,
        },
        mechanical: {
            title: string,
            subtitle: string,
        },
        chemical: {
            title: string,
            subtitle: string,
        },
        noise: {
            title: string,
            subtitle: string,
        },
        fireExplosion: {
            title: string,
            subtitle: string,
        },
        falls: {
            title: string,
            subtitle: string,
        },
    },
    
}

export type SectionTypes = "hero" | "introduction" | "risks" | "prevention" | "regulations" | "conclusion";

export type SectionContextType = {
    activeSection: SectionTypes
    setActiveSection: (value: SectionTypes) => void
}

export type RiskType = {
    key: string,
    icon: string,
    titles: {
        english: string,
        arabic: string,
        french: string,
        street: string,
    },
    subtitles: {
        english: string,
        arabic: string,
        french: string,
        street: string, 
    }
}