import assets from '../../assets/assets';
import './ChatBox.css';

const ChatBox = () => {
  return (
    <div className='chat-box'>
      <div className="chat-user">
        <img src={assets.profile_img} alt="" />
        <p>Richard Sanford <img src={assets.green_dot} alt="" /> </p>
        <img src={assets.help_icon} className='help' alt="" />
      </div>
    </div>
  )
}

export default ChatBox
