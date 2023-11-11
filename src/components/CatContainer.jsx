import { Link } from "react-router-dom"

const CatContainer = props => {
    return (
        <Link to={`/cat/${props.id}/${props.name}`}>
          <article className="cat-card card">
            <img src={props.img} alt={`${props.name} ${props.breed}`} />
            <h2>{props.name}</h2>
            <p>{props.breed}</p>
          </article>
        </Link>
    )
}

export default  CatContainer