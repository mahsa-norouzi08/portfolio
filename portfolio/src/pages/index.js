import avatar from "../static/avatar.png";
import "../index.css";

export default function Home (){
    return(
        <div>
            <img src={avatar} alt="avatar" className="avatar"/>
        </div>
    )
}

