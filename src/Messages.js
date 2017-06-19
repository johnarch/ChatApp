/**
 * Created by johnarchambault on 6/18/17.
 */
import React, { Component } from 'react';
import './Messages.css';

class Messages extends Component {

  handleInputKeyup(event) {
    const { activeThread, activeUser, users, postChatMessage } = this.props

    if (event.keyCode === 13 ) {
      if (document.getElementById('message-to-post').value.length > 0) {

        let currentUser = {}
        users.map((user, i) => {
          if (user.userId === activeUser) {
            currentUser = user
          }
        })

        let messageBlob = {
          messageSender: currentUser.userName,
          senderIcon: currentUser.userIcon,
          messageTime: '2:17 PM',
          messageText: document.getElementById('message-to-post').value
        }
        debugger
        postChatMessage(activeThread, messageBlob)
      }
    }
  }

  render() {
    const { messages } = this.props
    debugger
    return (
      <div className="messages">
        {messages &&
          messages.map((message, i) => {
            return(
              <div key={i} className="message-wrapper">
                <div className="message-sender-icon">{message.senderIcon}</div>
                <div className="message-details">
                  <div className="message-details-header">
                    <div className="message-sender">{message.messageSender}</div>
                    <div className="message-time">{message.messageTime}</div>
                  </div>
                  <div className="message-text">{message.messageText}</div>
                </div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default Messages;
