import {Language} from "../const";

export const getAnotherLanguage = (language) => language === Language.Ru ? Language.En : Language.Ru;
