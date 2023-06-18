const Characters = (props) => {
  const { characters, setCharacters } = props
  console.log(characters)

  const resetCharacters = () => {
    setCharacters(null)
  }

  return (
    <div className="main_container">
      <h1>Characters</h1>
      <span className="btn-home" onClick={resetCharacters}>Back home</span>

      <div className="characters-container">
        {characters.map((character, id) => (
          <div className="character-card" key={id}>
            <img src={character.image} alt={character.name} className="card-img" />
            <div className="card-body">
              <h3 className="character-name">{character.name}</h3>
              <h6>
                {character.status === 'Alive' ? (
                  <>
                    <span className="alive">Alive</span>
                  </>
                ) : (
                  <>
                    <span className="dead">Dead</span>
                  </>
                )}
              </h6>
              <p className="episode">
                <span>Episodes:</span>
                <span>{character.episode.length}</span>
              </p>
              <p className="character-specie">{character.species}</p>
            </div>
          </div>
        ))}
      </div>
      <span className="btn-home" onClick={resetCharacters}>Back home</span>
    </div>
  )
}

export default Characters
