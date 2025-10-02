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
        RisksAndPrevention: string,
        Prevention: string,
        Instruction : string,
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
            description: string,
            examples: string[],
            prevention: {
                description: string,
                examples: string[]
            }
        },
        mechanical: {
            title: string,
            subtitle: string,
            description: string,
            examples: string[],
            prevention: {
                description: string,
                examples: string[]
            }
        },
        chemical: {
            title: string,
            subtitle: string,
            description: string,
            examples: string[],
            prevention: {
                description: string,
                examples: string[]
            }
        },
        noise: {
            title: string,
            subtitle: string,
            description: string,
            examples: string[],
            prevention: {
                description: string,
                examples: string[]
            }
        },
        fireExplosion: {
            title: string,
            subtitle: string,
            description: string,
            examples: string[],
            prevention: {
                description: string,
                examples: string[]
            }
        },
        falls: {
            title: string,
            subtitle: string,
            description: string,
            examples: string[],
            prevention: {
                description: string,
                examples: string[]
            }
        },
    },
    instructions: {
        description: string,
        list: {
            title: string,
            eplaination: string
        }[]
    },
    Conclusion: {
        paragraphs: string[]
    },
    footer: {
        createdBy: string,
        Copyright: string,
    },
    sideMatters: {
        example: string,
        examples: string,
        risk: string,
        prevention: string,
        myName: string,
    }
    
}

export type SectionTypes = "hero" | "introduction" | "risks" | "prevention" | "Instruction " | "conclusion";

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
        chinese: string,
        street: string,
    },
    subtitles: {
        english: string,
        arabic: string,
        french: string,
        chinese: string,
        street: string, 
    },
    description: {
        english: string,
        arabic: string,
        french: string,
        chinese: string,
        street: string,
    },
    examples: {
        english: string[],
        arabic: string[],
        french: string[],
        chinese: string[],
        street: string[],
    },
    prevention: {
        description: {
            english: string,
            arabic: string,
            french: string,
            chinese: string,
            street: string,    
        },
        examples: {
            english: string[],
            arabic: string[],
            french: string[],
            chinese: string[],
            street: string[],    
        }

    }
}

export type ConstructionsType = {

}