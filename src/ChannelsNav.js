/**
 * Created by johnarchambault on 6/18/17.
 */
import React, { Component } from 'react';
import './ChannelsNav.css';

class ChannelsNav extends Component {

  /**
   * @todo clean this up - maybe change root data structure in the app state.
   */
  getChatParticipantName(thread) {

    const { activeUser, users } = this.props
    let chatParticipantUserId = ''

    function getUserId(user) {
      return user !== activeUser
    }

    chatParticipantUserId = thread.threadUsers.find(getUserId)
    debugger

    /**
     * of the two chat participants in this thread,
     * get the name of the one who is not the active user
     */
    function getChatParticipantUserName(uId) {
      let uName = ''
      users.map((user, i) => {
        if (user.userId === uId) {
          uName = user.userName
        }
      })
      return uName
    }

    return getChatParticipantUserName(chatParticipantUserId)
  }

  render() {
    const { activeThread, activeUser, users, threads, changeThread } = this.props
    debugger
    return (
      <div className="channels-nav">
        <div className="channels-nav-header">CHANNELS</div>
        {threads &&
          threads.map((thread, i) => {
            if (thread.threadType === 'channel') {
              let bgColor = (thread.threadId === activeThread) ? '#4c9689' : ''
              let textColor = (thread.threadId === activeThread) ? '#ffffff' : '#ab9ba9'
              return(<div className="channels-nav-element" key={i}
                style={{backgroundColor: bgColor, color: textColor}} onClick={ () => changeThread(1) }>
                {thread.threadName}
                </div>
              )
            }
          })
        }
        <div className="channels-nav-header">DIRECT MESSAGE</div>
        {threads &&
          threads.map((thread, i) => {
            if (thread.threadType === 'directMessage' && thread.threadUsers.indexOf(activeUser) !== -1) {

              let bgColor = (thread.threadId === activeThread) ? '#4c9689' : ''
              let textColor = (thread.threadId === activeThread) ? '#ffffff' : '#ab9ba9'

              let chatParticipantUserName = this.getChatParticipantName(thread)

              return(<div className="channels-nav-element" style={{backgroundColor: bgColor, color: textColor}}
                key={i} onClick={ () => changeThread(thread.threadId) }>{chatParticipantUserName}</div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default ChannelsNav;
