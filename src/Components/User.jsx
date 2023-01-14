import React, { useEffect, useState } from "react";
import "./User.css";
function User() {
  // time limit for lab access
  const timeLimit = 10;
  // state to keep track of remaining time
  const [remainingTime, setRemainingTime] = useState(timeLimit);
  // state to keep track of error message
  const [ErrorMessage, SetErrorMessage] = useState("");

  // state to keep track of user Login
  const [UsreLoggedIn, setUsreLoggedIn] = useState(false);

  //User Password
  const user = {
    password: "zubair123",
  };
  const HandleSubmit = (event) => {
    const UerPassword = event.target.password.value;
    console.log(UerPassword);
    event.preventDefault();
    if (UerPassword === user.password) {
      setUsreLoggedIn(true);
    } else {
      SetErrorMessage(
        "you have entered an incorrect password. Please try again"
      );
    }
  };

  // exit button event handler
  const handleExit = () => {
    setUsreLoggedIn(false);
    setRemainingTime(timeLimit);
  };

  // timer function
  useEffect(() => {
    if (UsreLoggedIn) {
      const intervalId = setInterval(() => {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
        if (remainingTime === 0) {
          handleExit();
        }
      }, 2000);
      return () => clearInterval(intervalId);
    }
  }, [UsreLoggedIn, remainingTime, handleExit]);

  return (
    <>
      <div className="main">
        <div className="MainCircle">
          {UsreLoggedIn ? (
            <div className="lab">
              <div>
                <div className="left_door"></div>
                <h1>
                  Timer:
                  <span style={{ fontsize: "20px" }}>{remainingTime}</span>{" "}
                </h1>

                <button onClick={handleExit}>Exit</button>
                <div className="right_door"></div>
              </div>
            </div>
          ) : (
            <div>
              <div className="finger_print">
                <img
                  src="https://user-images.githubusercontent.com/101566430/212470407-3cda4116-ae8b-4a8c-8946-41c1b2161049.jpeg"
                  alt="fingerprint"
                />
              </div>
              <div className="formbox">
                <form onSubmit={HandleSubmit}>
                  <label>ENTER YOUR PILEARNING PASSWORD</label>
                  <input className="password" type="password" name="password" />
                  <br />
                  <input className="submit" type="submit" value="Enter Lab" />
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default User;
