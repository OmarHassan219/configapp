import React,{Suspense} from 'react';
// import ReactDOM from 'react-dom/client';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import i18n from "i18next";
import { useTranslation, initReactI18next } from "react-i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpApi from 'i18next-http-backend';

i18n
  .use(initReactI18next) 
  .use(LanguageDetector)
  .use(HttpApi)
  .init({
    supportedLngs:['en','ru','fr'],
    fallbackLng: "en",
    detection:{
        order: ['path','cookie', 'htmlTag',  'localStorage', 'subdomain'],
        caches:['cookie']

    },
    backend:{
        loadPath: '/assets/locales/{{lng}}/translation.json',

    },
    

   
  });
const loadingMarkup =(
  <div >Loading...</div>
)
const root = document.getElementById('root')
render(

 <Suspense fallback={loadingMarkup}>
<BrowserRouter>
<App/>
</BrowserRouter>
  </Suspense>,
root

)

// root.render(
 
  
//     <App />
  
  
// );

