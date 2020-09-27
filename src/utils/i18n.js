

import i18n from 'i18n-js';

import ar from '../translations/ar.json';
import en from '../translations/en.json';


// const ar = {
//   screens: screensAr,
 
// };

// const en = {
//   screens: screensEn ,
// };
i18n.translations = { ar, en };
i18n.fallbacks = true;

// export const i18n
export const strings = { ...i18n}
export default i18n;