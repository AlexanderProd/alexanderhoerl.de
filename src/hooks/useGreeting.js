import { useState, useEffect } from 'react'

const dict = {
  "af": "Goeie dag",
  "sq": "Tungjatjeta",
  "ar": "Ahlan bik",
  "zh": "Nín hao",
  "hr": "Zdravo",
  "cs": "Nazdar",
  "da": "Hallo",
  "nl": "Hallo",
  "en": "Hello",
  "de": "Hallo",
  "fi": "Hei",
  "fr": "Bonjour",
  "el": "Geia",
  "he": "Shalóm",
  "hi": "Namasté",
  "hu": "Szia",
  "is": "halló",
  "id": "Hai",
  "ga": "Dia duit",
  "it": "Buongiorno",
  "ja": "Kónnichi wa",
  "kn": "Hello",
  "ko": "Annyeonghaseyo",
  "la": "Ave",
  "lv": "Es mīlu tevi",
  "lt": "Sveiki",
  "lb": "Hallo",
  "no": "Hallo",
  "fa": "Salâm",
  "pl": "Witajcie",
  "pt": "Olá",
  "pa": "ਹੈਲੋ",
  "ro": "Romanian",
  "ru": "Privét",
  "sr": "ćao",
  "sk": "Nazdar",
  "sl": "Zdravo",
  "es": "Hola",
  "sv": "Hej",
  "tr": "Merhaba",
  "uk": "Pryvít",
  "vi": "Chào"
}

const useGreeting = () => {
  const [greeting, setGreeting] = useState('Hello')

  useEffect(() => {
    const lang = navigator.language || window.navigator.language

    Object.keys(dict).forEach(elem => {
      if (lang.includes(elem)) {
      return setGreeting(dict[elem])
      }
    })
  }, [])

  return greeting
}

export default useGreeting