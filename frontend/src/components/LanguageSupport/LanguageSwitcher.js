import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.language);

    const handleLanguageChange = (lang) => {
        i18n.changeLanguage(lang);
        setLanguage(lang);
    };

    return (
        <div>
            <h3>Select Language:</h3>
            <button onClick={() => handleLanguageChange('en')} disabled={language === 'en'}>
                English
            </button>
            <button onClick={() => handleLanguageChange('es')} disabled={language === 'es'}>
                Español
            </button>
            <button onClick={() => handleLanguageChange('fr')} disabled={language === 'fr'}>
                Français
            </button>
        </div>
    );
};

export default LanguageSwitcher;