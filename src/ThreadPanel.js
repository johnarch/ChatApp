/**
 * Created by johnarchambault on 6/18/17.
 */
import React, { Component } from 'react';
import './ThreadPanel.css';
import Messages from './Messages'

class UserToggler extends Component {

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
        let postDate = new Date().toLocaleTimeString()

        let messageBlob = {
          messageSender: currentUser.userName,
          senderIcon: currentUser.userIcon,
          messageTime: postDate,
          messageText: document.getElementById('message-to-post').value
        }
        debugger
        postChatMessage(activeThread, messageBlob)
      }
    }
  }

  render() {
    const { activeThread, activeUser, threads, postChatMessage, users } = this.props
    debugger

    let currentThread = ''
    let chatParticipantId = ''
    let chatParticipantDetails = {}

    threads.map((thread, i) => {
      if (thread.threadId === activeThread) {
        currentThread = thread
      }
    })

    function getChatParticipantId(userId) {
      return userId !== activeUser
    }
    chatParticipantId = currentThread.threadUsers.find(getChatParticipantId)

    function getUserDetails(uId) {
      let userDetails = ''
      users.map((user, i) => {
        if (user.userId === uId) {
        userDetails = user
      }
    })
      return userDetails
    }
    debugger
    chatParticipantDetails = getUserDetails(chatParticipantId)
    let chatParticipantName = (typeof chatParticipantDetails.userName !== 'undefined')
      ? chatParticipantDetails.userName : 'Fab Four Group Chat'

    return (
      <div className="thread-panel">
        <div className="thread-panel-header">{chatParticipantName}</div>
        {threads &&
          threads.map((thread, i) => {
            debugger
            if (activeThread === thread.threadId) {
              return(<Messages key={i} activeThread={activeThread} activeUser={activeUser}
                messages={thread.messages} postChatMessage={postChatMessage} users={this.props.users} />
              )
            }
          })
        }
        <div className="thread-panel-footer">
          <input type="text"
            id="message-to-post"
            className="post-message"
            placeholder={`Message ${chatParticipantName}`}
            onKeyUp={ (event) => this.handleInputKeyup(event) }/>
        </div>
      </div>
    )
  }
}

export default UserToggler;
