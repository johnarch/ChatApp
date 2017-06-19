/**
 * Created by johnarchambault on 6/18/17.
 */
import React, { Component } from 'react';
import './MainChatApp.css';
import ChannelsNav from './ChannelsNav'
import ThreadPannel from './ThreadPanel'

class MainChatApp extends Component {


  render() {
    debugger
    return (
      <div className="main-chat-app">
        <ChannelsNav changeThread={this.props.changeThread} users={this.props.users}
          activeThread={this.props.activeThread} activeUser={this.props.activeUser} threads={this.props.threads} />
        <ThreadPannel postChatMessage={this.props.postChatMessage} threads={this.props.threads}
          activeThread={this.props.activeThread} activeUser={this.props.activeUser} users={this.props.users} />
      </div>
    )
  }
}

export default MainChatApp;
