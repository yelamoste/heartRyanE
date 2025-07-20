import React, { useEffect, useState } from "react";
import "./MessageBoard.css";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import MessageContainer from "../MessageContainer/MessageContainer";

const MessageBoard = () => {
  const defaultImage = "/user.webp";
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "messages"));

        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
          setData(list);
        });
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  function formatTime(timestamp) {
    return new Date(timestamp.seconds * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  }

  return (
    <div className="mBContainer">
      {data.length === 0 ? (
        <p>No messages yet...</p>
      ) : (
        data?.map((item) => (
          <div className="mCContainer" key={item.id}>
            <MessageContainer
              image={defaultImage}
              name={item.username || "Anon"}
              time={item.timeStamp ? formatTime(item.timeStamp) : "N/A"}
              content={item.messages || "No Message"}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default MessageBoard;
