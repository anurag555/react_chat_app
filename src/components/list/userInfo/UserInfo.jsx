import React from 'react'
import './userInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faVideo, faEllipsis } from '@fortawesome/free-solid-svg-icons'
import { useUserStore } from '../../../lib/userStore'

const UserInfo = () => {

  const { currentUser} = useUserStore()

  return (
    <div className='userInfo'>
      <div className="user">
        <img src={currentUser.avatar || "/user.png"} alt="img" />
        <h3>{currentUser.username}</h3>
      </div>
      <div className="icons">
        <FontAwesomeIcon className='iconsize' icon={faEllipsis} />
        <FontAwesomeIcon className='iconsize' icon={faVideo} />
        <FontAwesomeIcon className='iconsize' icon={faEdit} />
      </div>
    </div>
  )
}

export default UserInfo