import React from "react";
import { auth } from "../firebase";

const MessageBoard = () => {
  async function handleLogout() {
    try {
      await auth.signOut();
      window.location.href = "/login";
      console.log("User logged out successfully!");
    } catch (error) {
      "Error logging out:", error.message;
    }
  }

  return (
    <div>
      MessageBoard
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default MessageBoard;
