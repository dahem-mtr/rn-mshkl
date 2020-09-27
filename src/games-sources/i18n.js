import i18n from 'i18n-js';
import ar from './translations/ar.json';
import en from './translations/en.json';


  i18n.translations = { ar , en};
// i18n.locale = "en";

  // When a value is missing from a language it'll fallback to another language with the key present.
  i18n.fallbacks = true;
  export default i18n;