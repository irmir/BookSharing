import React, { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { useHttp } from '../../hooks/http.hook.js'

import { logout } from '../../redux/authAction.js'
import { getUserData } from '../../redux/queryAction'

const ProfileAvatarComponent = ({ logout, token, getUserData, nameUser, lastNameUser, img  }) => {

    const {request} = useHttp()

    useEffect(async() => {
        const data = await request('/api/user', 'GET', {}, {Authorization: `Bearer ${token}`} )
        getUserData(data)
    })

    const logoutHandler = useCallback(() => {
        logout()
    })
    return (
        <div className="profile-avatar">
            <div className="name">
                <p>{nameUser}</p>
                <p>{lastNameUser}</p>
            </div>
            <div className="avatar">
                <img src="./img/avatar.jpg" alt="name user"></img>
            </div>
            <div onClick={logoutHandler} className="logout">
                <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11 19l1-1h6V6h-6a1 1 0 010-2h6l2 2v12l-2 2h-6l-1-1z" fill="#fff" fill-opacity=".6" />
                    <path d="M16 13l-1 1h-5v1l-1 1-5-3v-2l5-3 1 1v1h5l1 1v2z" fill="#fff" fill-opacity=".6" />
                </svg>
            </div>
        </div>
    )
}

export const ProfileAvatar = connect(
    (state) => ({
        nameUser: state.query.nameUser,
        lastNameUser: state.query.lastNameUser,
        img: state.query.img
    }),
    (dispatch) => bindActionCreators({
        logout,
        getUserData
    }, dispatch)
)(ProfileAvatarComponent)

