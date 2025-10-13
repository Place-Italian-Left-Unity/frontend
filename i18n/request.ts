import {getRequestConfig} from 'next-intl/server';
//import {routing} from './routing';

export default getRequestConfig(async ({requestLocale}) => {
  const locale = await requestLocale ?? 'en';

  return {
    locale,
    messages: (await import(`../lang/${locale}.json`)).default
  };
});
