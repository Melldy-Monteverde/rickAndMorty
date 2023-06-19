const Card = () => {

  return (
    <div className="card">
      <div className="infos">
        <div className="image"></div>
        <div className="info">
          <div>
            <p className="name">
              John Doe
            </p>
            <p className="function">
              Front-end dev
            </p>
          </div>
          <div className="stats">
            <p className="flex flex-col">
              Articles
              <span className="state-value">
                34
              </span>
            </p>
            <p className="flex">
              Followers
              <span className="state-value">
                455
              </span>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
