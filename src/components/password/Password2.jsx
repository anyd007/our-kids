import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineCloseCircle} from 'react-icons/ai';
import "./password.css";

const Password = () => {
  const [testPassword, setTestPassword] = useState([]);
  const [fatal, setFatal] = useState(false);
  const history = useNavigate();

  const handleCheckInput = (e) => {
    setTestPassword(e);
    setFatal(false);
  };
  const handleEnter = (e) =>{
    if (e.key === "Enter"){
        handleCheckPassword()
    }
  }
  const handleCheckPassword = () => {
    if (testPassword !== process.env.REACT_APP_PASSWORD) {
      setFatal(true);
      setTestPassword([]);
    } else {
      history("/kelmentynaVideos");
      setFatal(false);
    }
  };
 
  return (
    <div className="password">
        <div className="backgroundBlur"></div>
        <AiOutlineCloseCircle onClick={()=>history("/")} className="closeBtn"/>
      <div>
        <h2 className="passwordTitle">PODAJ HASŁO, ABY ZOBACZYĆ ZARAWTOŚĆ</h2>
      </div>
      <div>
        {fatal && (
          <h4 className="passwordErrorMsg">
            PODANE HASŁO JEST BŁĘDNE...
          </h4>
        )}
        <label htmlFor="passowrdInput">WPROWADŹ HASŁO</label>
        <br />
        <input
          className="passwordInput"
          name="passowrdInput"
          id="passowrdInput"
          type="text"
          value={testPassword}
          onKeyDown={handleEnter}
          onChange={(e) => handleCheckInput(e.target.value)}
        />
      </div>
      <div className="openVideoBtnDiv">
        <button className="btn openVideoBtn" onClick={handleCheckPassword} type="button">
          ZATWIERDŹ
        </button>
      </div>
    </div>
  );
};
export default Password;