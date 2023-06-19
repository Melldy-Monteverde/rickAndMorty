import imageRickMorty from '../../assets/img/rickMortyLogo.png'
import { useState } from "react"
import Characters from "../characters/Characters"

const URL = 'https://rickandmortyapi.com/api/character'

const Search = () => {

  const [characters, setCharacters] = useState(null)

  const reqApi = async () => {
    const api = await fetch(URL)
    const charactersApi = await api.json()
    // console.log(charactersApi)

    setCharacters(charactersApi.results)
  }

  // console.log(characters)

  return (
    <div className="search-container">
      {characters
        ? (<Characters characters={characters} setCharacters={setCharacters} />)
        : (
          <>
            <img src={imageRickMorty} alt="Rick & Morty" className="img-header" />
            <button onClick={reqApi} className="btn-search">Looking for character</button>
          </>
        )}
    </div>
  )
}

export default Search
