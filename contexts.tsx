import { createContext } from "react";
import { LanguageContextType, SectionContextType } from "./types";

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined)
export const SectionContext = createContext<SectionContextType | undefined>(undefined)