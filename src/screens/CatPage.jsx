import { useParams } from "react-router-dom"

export default function CatPage() {
    const { id, name } = useParams()

    return (
        <>
            <h1>{id}</h1>
            <p>{name}</p>
        </>
    )
}