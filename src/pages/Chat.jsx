// require("dotenv").config();
import React from 'react'
import { Sidebar } from "../components"
import { useState } from 'react'
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = process.env.REACT_APP_API_KEY;

const systemMessage = {
  "role": "system", "content": "Explain things like you're talking to a software professional with 2 years of experience."
}

function Chat() {

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your Partner! Ask me anything!",
      sentTime: "just now",
      sender: "Partner"
    }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
  };

  async function processMessageToChatGPT(chatMessages) {
    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "Partner") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });

    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  
        ...apiMessages 
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "Partner"
      }]);
      setIsTyping(false);
    });
  }

  return (
    <>
      <div className='flex'>
        <div className='h-screen sticky top-0'>
          < Sidebar />
        </div>
        <div style={{ position:"relative" , width: "800px", paddingTop:"4px", margin:"auto"  }} className='h-screen ' >
          <MainContainer>
            <ChatContainer>       
              <MessageList 
                scrollBehavior="smooth" 
                typingIndicator={isTyping ? <TypingIndicator content="Partner is typing" /> : null}
              >
                {messages.map((message, i) => {
                  return <Message key={i} model={message} />
                })}
              </MessageList>
              <MessageInput placeholder="Type message here" onSend={handleSend} />        
            </ChatContainer>
          </MainContainer>
        </div>
      </div>
    </>
  )
}

export default Chat