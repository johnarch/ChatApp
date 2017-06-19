/**
 * Created by johnarchambault on 6/18/17.
 */
import React, { Component } from 'react';
import './ChannelsNav.css';

class ChannelsNav extends Component {


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
              let userName = ''
              let userId = ''
              let bgColor = (thread.threadId === activeThread) ? '#4c9689' : ''
              let textColor = (thread.threadId === activeThread) ? '#ffffff' : '#ab9ba9'
              function getUserId(user) {
                return user !== activeUser
              }
              userId = thread.threadUsers.find(getUserId)
              function getUserName(uId) {
                let uName = ''
                users.map((user, i) => {
                  if (user.userId === uId) {
                    uName = user.userName
                  }
                })
                return uName
              }
              userName = getUserName(userId)
              return(<div className="channels-nav-element" style={{backgroundColor: bgColor, color: textColor}}
                key={i} onClick={ () => changeThread(thread.threadId) }>{userName}</div>
              )
            }
          })
        }
      </div>
    )
  }
}

export default ChannelsNav;
