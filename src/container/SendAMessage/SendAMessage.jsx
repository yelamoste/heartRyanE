import React, { useEffect, useState } from "react";
import "./SendAMessage.css";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebase";
import { userInputs } from "./New";
import { Navigate } from "react-router-dom";

const SendAMessage = ({ display }) => {
  const [data, setData] = useState();
  const [withVal, setwithVal] = useState(null);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;

    setData({ ...data, [id]: value });
    setwithVal(value);
  };
  console.log(userInputs);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "messages"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      alert("Success");
      display;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mainCont">
      <form onSubmit={handleAdd}>
        {userInputs?.map((input) => (
          <div className="formInput" key={input.id}>
            <label>{input.label}</label>
            <input
              id={input.id}
              type={input.type}
              placeholder={input.placeholder}
              onChange={handleInput}
            />
          </div>
        ))}
        <button type="submit" disabled={withVal !== null && withVal < 100}>
          Submit
        </button>
      </form>
      <button onClick={display}>Close</button>
    </div>
  );
};

export default SendAMessage;
