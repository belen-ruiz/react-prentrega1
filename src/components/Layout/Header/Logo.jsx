import { Link } from "react-router-dom"

export const Logo = () =>{

    return(
        <Link to="/home" className="noLink">
            <div className="logo">
                <p className="logoo">ElBotanico<span>.</span></p>
            </div>
        </Link>

    )
}