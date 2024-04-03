import i18n, { init } from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    lng: "fr",
    fallbackLng:"en",
    resources: {
        en: {
          translation: {
            intro: "My name is Nikhil, and I am a Computer Science {{Degree}}. I completed my BTech in CSE in 2023 and am now working as a MERN stack developer.",
          },
        },
        fr: {
          translation: {
            intro: "Je m'appelle Nikhil et je suis ingénieur en informatique. J'ai terminé mon BTech en CSE en 2023 et je travaille maintenant en tant que développeur MERN stack.",
          },
        },
        es: {
          translation: {
            intro: "Me llamo Nikhil y soy ingeniero en ciencias de la computación. Completé mi BTech en CSE en 2023 y ahora estoy trabajando como desarrollador de MERN stack.",
          },
        },
        de: {
          translation: {
            intro: "Mein Name ist Nikhil, und ich bin ein Informatikingenieur. Ich habe meinen BTech in CSE im Jahr 2023 abgeschlossen und arbeite jetzt als MERN-Stack-Entwickler.",
          },
        },
        hi: {
          translation: {
            intro: "मेरा नाम निखिल है और मैं एक कंप्यूटर साइंस इंजीनियर हूँ। मैंने 2023 में अपनी BTech CSE पूरी की और अब मैं एक MERN स्टैक डेवलपर के रूप में काम कर रहा हूँ।",
          },
        },
        zh: {
          translation: {
            intro: "我的名字是尼基尔，我是一名计算机科学工程师。我在2023年完成了我的计算机科学与工程学士学位，并且现在我正在作为一个MERN栈开发者工作。",
          },
        },
        ar: {
          translation: {
            intro: "اسمي نيخيل وأنا مهندس علوم الحاسوب. أكملت بكالوريوس التكنولوجيا في CSE في عام 2023 وأعمل الآن كمطور لـ MERN stack.",
          },
        },
        ja: {
          translation: {
            intro: "私の名前はニキルで、コンピュータサイエンスのエンジニアです。2023年にCSEのBTechを卒業し、現在はMERNスタック開発者として働いています。",
          },
        },
        ru: {
          translation: {
            intro: "Меня зовут Нихил, и я инженер-компьютерщик. Я закончил бакалавриат по специальности КСЕ в 2023 году и теперь работаю разработчиком на стеке MERN.",
          },
        },
      }
      
      
  });
