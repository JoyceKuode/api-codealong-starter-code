console.log("🌻 Script connected")
// b986da34-7899-41ec-a383-c4c6bea91261
// https://www.dictionaryapi.com/api/v3/references/thesaurus/json/umpire?key=b986da34-7899-41ec-a383-c4c6bea91261
// base url + word + api_key

const API_KEY = "b986da34-7899-41ec-a383-c4c6bea91261"
const BASE_URL = "https://www.dictionaryapi.com/api/v3/references/thesaurus/json"

let word = "cat"

const URL = `${BASE_URL}/${word}?key=${API_KEY}`

//DOM selectors
const wordTitle = document.getElementById("word")
const type = document.getElementById("wordType")
const explanation = document.getElementById("explanation")
const synonymsList = document.getElementById("synonyms")

wordTitle.innerText = word

const updateHTML = (data) => {
  console.log(data)

  const wordType = data[0].fl
  const shortdef = data[0].shortdef[0]
  const synonyms = data[0].meta.syns[0]

  type.innerText = wordType
  explanation.innerText = shortdef

  synonyms.forEach(synonym => {
    synonymsList.innerHTML += `<li>${synonym}</li>`
  })
}

const fetchData = () => {
  fetch(URL)
    .then(response => response.json())
    .then(data => {

      updateHTML(data)
      // console.log(data[0].fl)

    })
}

// fetchData()

const fetchDataAsync = async () => {
  const response = await fetch(URL)
  const data = await response.json()

  updateHTML(data)
}

fetchDataAsync()
