const CatContainer = props => {
    return (
        <article className="cat-card card">
          <img src={props.img} alt={`${props.name} ${props.breed}`} />
          <h2>{props.name}</h2>
          <p>{props.breed}</p>
        </article>
    )
}

export default  CatContainer