import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link to="/">
              <img className="img-logo" src="/3.png" alt="Logo do Sasa Cats API" />
            </Link>
        </header>
    )
}