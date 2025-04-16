import React, { useState } from "react";
import "./Message.css";

const message = {
  image: "",
  name: "",
  time: "",
  content: "",
  likes: true,
};

export function Message() {
  const [messageInfo, setMessageinfo] = useState(message);
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setInfo(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
            <input
              type="file"
              id="fileInput"
              name="image"
              className="inputProfile"
              style={{ display: "none" }}
              accept="image/*"
              onChange={handleChange}
            />
            <div
              className="inputProfile"
              style={{ backgroundImage: image ? `url(${image})` : "none" }}
              onClick={(e) => setImage(e.currentTarget)}
            >
              {!image && <span></span>}
            </div>
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
