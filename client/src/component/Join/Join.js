import "./Join.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useState } from "react";

let user;

const sendUser = () => {
  user = document.getElementById("joinInput").value
  document.getElementById("joinInput").value = "";
}

const Join = () => {

    const [ name, setName ] = useState("");

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={Logo} alt="Logo" />
        <h1>Hey Chat</h1>
        <input onChange={(e) => setName(e.target.value)} type="text" placeholder="enter username" id="joinInput" />
        <Link onClick={(event)=> !name ? event.preventDefault():null} to = "/chat">
          <button onClick={sendUser} className="joinBtn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export {user};