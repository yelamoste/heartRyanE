import React, { useState } from "react";
import "./Message.css";

const message = {
  image: "",
  name: "",
  time: "",
  content: "",
  likes: true,
};

export const Message = () => {
  const [messageInfo, setMessageinfo] = useState(message);
  const [image, setImage] = useState(null);

  const handleClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
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
          <form className="formMessage">
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
              onClick={handleClick}
            >
              {!image && <span>Click to upload</span>}
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
                required
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

            <button>Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

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
