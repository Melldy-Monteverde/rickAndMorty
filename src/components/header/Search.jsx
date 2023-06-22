import imageRickMorty from '../../assets/img/rickMortyLogo.png'
import { useState, useEffect } from "react"
import Characters from "../characters/Characters"


const Search = () => {

  const [characters, setCharacters] = useState(null)
  const [currentPage, setCurrentPage] = useState(1);


  const reqApi = async () => {
    const URL = `https://rickandmortyapi.com/api/character/?page=${currentPage}`
    const api = await fetch(URL)
    const charactersApi = await api.json()
    // console.log(charactersApi)

    setCharacters(charactersApi.results)
  }

  const reset = () => {
    setCurrentPage(1)
  }

  const nextPage = () => {
    setCurrentPage(currentPage + 1)
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  useEffect(() => {
    reqApi();
  }, [currentPage]);


  // console.log(characters)

  return (
    <div className="search-container">
      {characters
        ? (<Characters characters={characters} setCharacters={setCharacters} nextPage={nextPage} prevPage={prevPage} reset={reset} />)
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
