import { useContext, useEffect, useState } from "react";
import ChatBox from "../../components/ChatBox/ChatBox";
import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import RightSidebar from "../../components/RightSidebar/RightSidebar";
import "./Chat.css";
import { AppContext } from "../../context/AppContext";

const Chat = () => {
  const { chatsData, userData } = useContext(AppContext); //TODO: chatData
  const [loading, setLoading] = useState(true);

  useEffect(() => {
if (chatsData && userData) { //TODO: chatData
  setLoading(false)
}
  }, [chatsData, userData]) //TODO: chatData

  return (
    <div className="chat">
      {loading ? (
        <p className="loading">Loading...</p>
      ) : (
        <div className="chat-container">
          <LeftSidebar />
          <ChatBox />
          <RightSidebar />
        </div>
      )}
    </div>
  );
};

export default Chat;
