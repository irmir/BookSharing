import React, { useCallback } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {logout} from '../../redux/authAction.js'

const ProfileAvatarComponent = ({logout}) => {

    const logoutHandler = useCallback(() => {
        logout()
    })
    return (
        <div className="profile-avatar">
            <div className="name">
                <p>Name</p>
                <p>Last Name</p>
            </div>
            <div className="avatar">
                <img src="./img/avatar.jpg" alt="name user"></img>
            </div>
            <div onClick={logoutHandler}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.25 19C11.25 18.5858 11.5858 18.25 12 18.25H18C18.1381 18.25 18.25 18.1381 18.25 18V6C18.25 5.86193 18.1381 5.75 18 5.75H12C11.5858 5.75 11.25 5.41421 11.25 5C11.25 4.58579 11.5858 4.25 12 4.25H18C18.9665 4.25 19.75 5.0335 19.75 6V18C19.75 18.9665 18.9665 19.75 18 19.75H12C11.5858 19.75 11.25 19.4142 11.25 19Z" fill="white" fill-opacity="0.6" />
                    <path d="M15.6116 13.1151C15.6116 13.6674 15.1639 14.1151 14.6116 14.1151H9.75562C9.73269 14.4705 9.70399 14.8257 9.66951 15.1804L9.63985 15.4856C9.59162 15.9819 9.06466 16.279 8.61504 16.0636C6.78712 15.1875 5.13234 13.9888 3.73028 12.5249L3.70032 12.4936C3.43323 12.2147 3.43323 11.775 3.70032 11.4961L3.73028 11.4648C5.13234 10.0009 6.78712 8.80215 8.61504 7.92614C9.06466 7.71066 9.59162 8.00785 9.63985 8.50409L9.66951 8.80929C9.70399 9.16402 9.73269 9.51917 9.75562 9.87459L14.6116 9.8746C15.1639 9.8746 15.6116 10.3223 15.6116 10.8746V13.1151Z" fill="white" fill-opacity="0.6" />
                </svg>
            </div>
        </div>
    )
}

export const ProfileAvatar = connect(
    null,
    (dispatch) => bindActionCreators({
        logout: logout
    }, dispatch)
)(ProfileAvatarComponent)

