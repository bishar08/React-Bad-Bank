import React, { useContext, useEffect } from 'react'
import Card from '../../components/Card/Card'
import CurrentUser from '../../features/CurrentUser'

export default function Logout(props) {
  useEffect(() => {
    if (props.loggedInUser !== undefined) {
      props.setLoggedInUser(undefined) // Reset LoggedIn
    }
  })
  return (
    <div className="logout">
      <Card bgcolor="info" header={<div> Log out </div>}>
        <h5>
          Successfully Logged Out <CurrentUser />
        </h5>
      </Card>
    </div>
  )
}
