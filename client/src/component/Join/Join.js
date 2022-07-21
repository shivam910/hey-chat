import "./Join.css";
import Logo from "../../images/logo.png";
import { Link } from "react-router-dom";

let user;

const Join = () => {

    const sendUser = () => {
        user = document.getElementById("joinInput").value
        document.getElementById("joinInput").value = "";
    }

  return (
    <div className="JoinPage">
      <div className="JoinContainer">
        <img src={Logo} alt="Logo" />
        <h1>Hey Chat</h1>
        <input type="text" placeholder="enter username" id="joinInput" />
        <Link to = "/chat">
          <button onClick={sendUser} className="joinBtn">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
export {user};