/**
 * Created by johnarchambault on 6/18/17.
 */
import React, { Component } from 'react';
import './UserToggler.css';

class UserToggler extends Component {


  render() {
    const { changeUser, activeUser, users} = this.props
    debugger
    return (
      <div className="user-toggler">
        {users &&
          users.map((user, i) => {
            let bgColor = (user.userId === activeUser) ? '#4c9689' : ''
            let textColor = (user.userId === activeUser) ? '#ffffff' : ''

            return(
              <div key={i} className="user-tab" style={{backgroundColor: bgColor, color: textColor}}
                onClick={ () => changeUser(user.userId) }>
                {user.userName}'s Slack
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default UserToggler;
