/* eslint-disable prettier/prettier */
import I18n, {getLanguages} from 'react-native-i18n';

// import AsyncStorage from '@react-native-async-storage/async-storage';

import ar from './ar';
import en from './eng';
import fr from './fr';
I18n.fallbacks = true;

I18n.translations = {
  en,
  ar,
  fr,
};

I18n.locale = `fr-Us`

// AsyncStorage.getItem('language').then(res => {
//   console.warn('lanng:'+res)
//   I18n.locale = `${res}-Us`
// })


export default I18n;
