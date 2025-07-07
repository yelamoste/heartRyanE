import React, { useState } from "react";
import "./Message.css";
import db from ".././firebase.js";
import { doc, setDoc } from "firebase/firestore";

export function Message() {
  const [messageInfo, setMessageinfo] = useState(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "messages", "cities"), {
      name: "Hehehe",
      content: "Awit lovely",
      likes: true,
    });
  };

  return (
    <>
      <div className="messageMaincont">
        <div className="messageDisplaycont">
          <div className="textDisplaytmp">
            {messageInfo.name}
            <br></br>
            {messageInfo.content}
          </div>
        </div>
        <div className="messageForm">
          <form className="formMessage" onSubmit={handleSubmit}>
            <div className="userNamecont">
              <label for="userName">Message for Hearty</label>
              <input
                type="text"
                id="userName"
                name="name"
                className="inputName"
                minLength={5}
                maxLength={20}
                required="true"
                placeholder="Username"
                value={messageInfo.name}
                onChange={(e) =>
                  setMessageinfo({ ...messageInfo, name: e.target.value })
                }
              />
            </div>
            <textarea
              name="content"
              className="inputContent"
              minLength={5}
              maxLength={255}
              placeholder="Say your 'Hi' to Hearty."
              value={messageInfo.content}
              onChange={(e) =>
                setMessageinfo({
                  ...messageInfo,
                  content: e.currentTarget.value,
                })
              }
            />

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}

// const messageDup = {
//   profileImage: "",
//   name: "Employee",
//   message: "34",
//   time: "",
//   isLiked: false,
// };
// const messageDup3 = {
//   profileImage: "",
//   name: "Non-existent",
//   message: "56",
//   time: "",
//   isLiked: true,
// };

// const [info, setInfo] = useState("");

// {messageInfo.name} <br></br>
// {info}
// <br></br>
// {messageInfo.message}
// <br></br>
// <input
// type="text"
// value={info}
// onChange={(e) => setInfo(e.currentTarget.value)}
// />

// info == "a"
// ? setMessageinfo(message)
// : info == "b"
// ? setMessageinfo(messageDup)
// : setMessageinfo(messageDup3)

// <input
//         type="text"
//         placeholder="name"
//         value={messageInfo.name}
//         onChange={(e) =>
//           setMessageinfo({ ...messageInfo, name: e.currentTarget.value })
//         }
//       />
