import React from "react";
import {
  FaArrowLeft,
  FaVideo,
  FaPhoneAlt,
  FaEllipsisV,
  FaRegSmile,
  FaCamera,
  FaMicrophone,
  FaCheckDouble,
} from "react-icons/fa";
const Chat = () => {
  return (
    <div className="main-container">
      {/*Container de Whatsapp*/}
      <div class="card text-white bg-success mb-3 whatsapp-chat-container">
        {/*HEADER*/}
        <div class="card-header bar-container">
          {/*HEADER LADO IZQUIERDO*/}
          <div className="bar-chat-left-side">
            {" "}
            <div className="arrow-chat">
              <FaArrowLeft />
            </div>
            <img
              className="profile-picture"
              src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80"
              alt="profile-picure"
            />
            <h4 className="user-name-chat">Friend</h4>
          </div>
          {/*HEADER LADO DERECHO*/}
          <div className="bar-chat-right-side">
            <div className="video-chat">
              <FaVideo />
            </div>
            <div className="phone-chat">
              <FaPhoneAlt />
            </div>
            <div className="more-options-chat">
              <FaEllipsisV />
            </div>
          </div>
        </div>
        {/*CUERPO DEL CHAT */}
        <div class="card-body overflow-auto whatsapp-chat-content">
          {/*GLOBO DE MENSAJE REMITENTE*/}
          <div class="alert alert-success globo-send" role="alert">
            <h4 class="alert-heading user-name-send ">Me</h4>
            <div>
              <p className="text-message-chat-send">Hola que tal?</p>
              <p class="mb-0 time-send">
                13:00 <FaCheckDouble className="check-chat" />
              </p>
            </div>
          </div>
          {/*GLOBO DE MENSAJE DESTINATARIO*/}
          <div class="alert alert-success globo-received" role="alert">
            <h4 class="alert-heading user-name-received">Friend</h4>
            <div>
              <p className="text-message-chat-received">hola</p>
              <p class="mb-0 time-received">13:05</p>
            </div>
          </div>
        </div>

        {/*INPUT TEXTO*/}
        <div className="input-chat-container">
          <div class="col-sm-10 input-chat-bar">
            <div className="emoticons-log">
              <FaRegSmile />
            </div>
            <input
              type="email"
              class="form-control form-control-sm input-main"
              id="colFormLabelSm"
              placeholder=""
            />
            <div className="camera-log">
              <FaCamera />
            </div>
          </div>
          <div className="voice-note-chat">
            <FaMicrophone />
          </div>
        </div>
      </div>

      {/*AREA DE SELECCION DE REMITENTE*/}
      <div className="user-select-container">
        <h2 className="select-user-title">Select User</h2>
        {/*USUARIO 1*/}
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Me
          </label>
        </div>
        {/*USUARIO 2*/}
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Friend
          </label>
        </div>
      </div>
      {/*LODO DE WHATSAPP*/}
      <div>
        <img
          className="ws-logo"
          src="https://cdn.usbrandcolors.com/images/logos/whatsapp-logo.svg"
          alt="asdad"
        />
      </div>
    </div>
  );
};
export default Chat;

//
