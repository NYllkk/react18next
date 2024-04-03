import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useTranslation } from 'react-i18next'
import LanguaheSelectorButton from "./component/language-selector"
function App() {
  const {t} = useTranslation()
  const [count, setCount] = useState(0)

  return (
    <>
    <LanguaheSelectorButton/>
      <div>{t("intro",{
        Degree:"lodagegree"
      })}</div>
    </>
  )
}

export default App
