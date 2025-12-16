// i18n.ts
import { createI18n } from 'vue-i18n';

type MessageFormat = { [key: string]: { [key: string]: string } };
function loadLocaleMessages(): MessageFormat {
    const messages: MessageFormat = {};

    // Vite-compatible import of all JSON files in /locales
    const modules = import.meta.glob('./locales/**/*.json', { eager: true });

    for (const path in modules) {
        const matched = path.match(/\/([A-Za-z0-9-_]+)\.json$/i);
        if (matched && matched[1]) {
            const locale = matched[1].toLowerCase(); // normalize
            // JSON modules are exported as default
            messages[locale] = (modules[path] as any).default;
        }
    }

    return messages;
}

// get supported locales from loaded messages
const messages = loadLocaleMessages();
const supportedLocales = Object.keys(messages); // ['en','si']

// Determine locale from URL, environment, or navigator
let locale =
    new URLSearchParams(window.location.search).get('lang') || // ?lang=fr
    import.meta.env.VITE_I18N_LOCALE || // .env variable
    navigator.language.split('-')[0] || // browser language
    'en';

// Normalize locale: lowercase and strip region if needed
locale = locale.toLowerCase(); // e.g., en-us
if (!supportedLocales.includes(locale)) {
    const baseLocale = locale.split('-')[0]; // 'en-us' → 'en'
    locale = supportedLocales.includes(baseLocale) ? baseLocale : 'en';
}

export default createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages,
});
