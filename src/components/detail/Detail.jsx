import React from 'react'
import './detail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleUp, faDownload } from '@fortawesome/free-solid-svg-icons'
import { auth, db } from '../../lib/firebase'
import { useChatStore } from '../../lib/chatStore'
import { useUserStore } from '../../lib/userStore'
import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore'

const Detail = () => {
  const { user, isCurrentUserBlocked, isReceiverBlocked, changeBlock } = useChatStore();

  const { currentUser } = useUserStore();

  const handleBlock = async () => {
    if (!user) return;

    const userDocRef = doc(db, "users", currentUser.id)

    try {
      await updateDoc(userDocRef, {
        blocked: isReceiverBlocked ? arrayRemove(user.id) : arrayUnion(user.id),
      });
      changeBlock();
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className='detail'>
      <div className="user">
        <img src={user?.avatar || "/user.png"} alt="img" />
        <h3>{user?.username}</h3>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <FontAwesomeIcon className='iconsize' icon={faAngleUp} />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Privacy & help</span>
            <FontAwesomeIcon className='iconsize' icon={faAngleUp} />
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <FontAwesomeIcon className='iconsize' icon={faAngleDown} />
          </div>
          <div className="photos">
            <div className="photoItem">
              <div className="photoDetails">
                <img src="/background.jpg" alt="img" />
                <span>photo_2024_2.png</span>
              </div>
              <FontAwesomeIcon className='iconsize' icon={faDownload} />
            </div>

            <div className="photoItem">
              <div className="photoDetails">
                <img src="/background.jpg" alt="img" />
                <span>photo_2024_2.png</span>
              </div>
              <FontAwesomeIcon className='iconsize' icon={faDownload} />
            </div>

            <div className="photoItem">
              <div className="photoDetails">
                <img src="/background.jpg" alt="img" />
                <span>photo_2024_2.png</span>
              </div>
              <FontAwesomeIcon className='iconsize' icon={faDownload} />
            </div>
          </div>
        </div>

        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <FontAwesomeIcon className='iconsize' icon={faAngleUp} />
          </div>
        </div>

        <button onClick={handleBlock}>
          {
            isCurrentUserBlocked ? "You are Blocked!" : isReceiverBlocked ? "Unblock user" : "Block User"
          }
        </button>
        <button className='logout' onClick={() => auth.signOut()}>Logout</button>
      </div>
    </div>
  )
}

export default Detail