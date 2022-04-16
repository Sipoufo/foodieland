import React, { useState } from "react"
import './App.css';
import { useTranslation } from 'react-i18next';
import { Language } from './translate/enums/Language';

function App() {
const { t } = useTranslation();
const { i18n } = useTranslation();
const [lang, setLang] = useState(Language);

let changeLanguage = (event) => {
    let language = event.target.value;

    switch (language) {
        case Language.EN:
            setLang(Language.EN);
            i18n.changeLanguage(Language.EN);
            break;
        case Language.FR:
        default:
            setLang(Language.FR);
            i18n.changeLanguage(Language.FR);
            break;
    }
}
return (
    <div className="App">
    <header className="App-header">
    <div>
            <div>
                <select value={lang} name="language" onChange={changeLanguage}>
                    <option value={Language.FR}>FR</option>
                    <option value={Language.EN}>EN</option>
                </select>
            </div>
        </div>
        <p>{t('common.translated-text')}</p>
    </header>
    </div>
);
}

export default App;
