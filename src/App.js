import React, { Component } from 'react';
import './App.css';
import UserToggler from './UserToggler'
import MainChatApp from './MainChatApp'

class App extends Component {

  constructor(props) {

    super(props)

    this.state = {
      activeThread: 1,
      activeUser: 1,
      threads: [
        {
          threadName: 'fabFourGroupChat',
          threadType: 'channel',
          threadId: 1,
          threadUsers: [],
          messages: [
            {
              messageSender: 'John',
              senderIcon: 'J',
              messageTime: '1:30 PM',
              messageText: 'Think it is time to get the group back together :-)'
            },
            {
              messageSender: 'Paul',
              senderIcon: 'P',
              messageTime: '1:40 PM',
              messageText: 'Not so sure . . .'
            },
            {
              messageSender: 'George',
              senderIcon: 'G',
              messageTime: '1:50 PM',
              messageText: 'Why?'
            }
          ]
        },
        {
          threadName: null,
          threadType: 'directMessage',
          threadId: 2,
          threadUsers: [1, 2],
          messages: [
            {
              messageSender: 'John',
              senderId: 1,
              senderIcon: 'J',
              messageTime: '1:35 PM',
              messageText: 'Hey Paul, how are you?'
            }
          ]
        },
        {
          threadName: null,
          threadType: 'directMessage',
          threadId: 3,
          threadUsers: [1, 3],
          messages: [
            {
              messageSender: 'George',
              senderId: 3,
              senderIcon: 'G',
              messageTime: '1:45 PM',
              messageText: 'Hey John, how are you?'
            }
          ]
        },
        {
          threadName: null,
          threadType: 'directMessage',
          threadId: 4,
          threadUsers: [1, 4],
          messages: [
            {
              messageSender: 'John',
              senderIcon: 'J',
              messageTime: '1:50 PM',
              messageText: 'Hey Ringo, how are you?'
            }
          ]
        },
        {
          threadName: null,
          threadType: 'directMessage',
          threadId: 5,
          threadUsers: [2, 3],
          messages: [
            {
              messageSender: 'Paul',
              senderIcon: 'P',
              messageTime: '2:00 PM',
              messageText: 'Hey George, how are you?'
            }
          ]
        },
        {
          threadName: null,
          threadType: 'directMessage',
          threadId: 6,
          threadUsers: [2, 4],
          messages: [
            {
              messageSender: 'Ringo',
              senderIcon: 'R',
              messageTime: '2:05 PM',
              messageText: 'Hey Paul, how are you?'
            }
          ]
        },
        {
          threadName: null,
          threadType: 'directMessage',
          threadId: 7,
          threadUsers: [3, 4],
          messages: [
            {
              messageSender: 'George',
              senderIcon: 'G',
              messageTime: '2:10 PM',
              messageText: 'Hey Ringo, how are you?'
            }
          ]
        },
      ],
      users: [{
        userName: 'John',
        userId: 1,
        userIcon: 'J'
      },
      {
        userName: 'Paul',
        userId: 2,
        userIcon: 'P'
      },
      {
        userName: 'George',
        userId: 3,
        userIcon: 'G'
      },
      {
        userName: 'Ringo',
        userId: 4,
        userIcon: 'R'
      }],
    }

    this.changeThread = this.changeThread.bind(this)
    this.changeUser = this.changeUser.bind(this)
    this.postChatMessage = this.postChatMessage.bind(this)
  }

  changeThread(threadId) {
    debugger
    this.setState({activeThread: threadId})
  }

  changeUser(userId) {
    this.setState({activeUser: userId, activeThread: 1})
  }

  postChatMessage(threadId, messageBlob) {
    debugger
    let currentThreads = this.state.threads

    currentThreads.map((thread, i) => {
      if (thread.threadId === threadId) {
        debugger
        thread.messages.push(messageBlob)
      }
    })
    debugger
    this.setState({threads: currentThreads})
    document.getElementById('message-to-post').value = ''
  }

  render() {
    debugger
    return (
      <div className="App">
        <UserToggler changeUser={this.changeUser} activeUser={this.state.activeUser} users={this.state.users} />
        <MainChatApp changeThread={this.changeThread} postChatMessage={this.postChatMessage}
          threads={this.state.threads} users={this.state.users} activeThread={this.state.activeThread}
          activeUser={this.state.activeUser} />
      </div>
    )
  }
}

export default App;
