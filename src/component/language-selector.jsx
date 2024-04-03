import { useEffect } from "react"
import { useTranslation } from "react-i18next"

const Languages = [

    {code:"en",lang:"English"},
    {code:"fr",lang:"French"},
    {code:"es",lang:"Spanish"},
    {code:"de",lang:"German"},
    {code:"hi",lang:"Hindi"},
    {code:"zh",lang:"Chinese"},
    {code:"ar",lang:"Arabic"},
    {code:"ja",lang:"Japanese"},
    {code:"ru",lang:"Russian"},
]
const LanguaheSelectorButton = ()=>{
    const {i18n} = useTranslation()
    const handleClick = (lang)=>{
        i18n.changeLanguage(lang)
        console.log(lang,"code for Language")
        console.log("Language Selected")
    }
    useEffect(()=>{
document.body.dir = i18n.dir()
    },[i18n,i18n.language])
 return(
    <div>
        {
        Languages.map((lang)=>(
            <button key={lang.code} onClick={()=>{handleClick(lang.code)}}>{lang.lang}</button>
        ))
        }
    </div>
 ) 


}

export default LanguaheSelectorButton