import React from 'react'
import Card from '../../components/Card/Card'
import BankImage from '../../components/Icons/BankImage'
import CurrentUser from '../../features/CurrentUser'
import './Home.css'

export default function Home() {
  return (
    <div className="home container">
      <div className="row">
        <div className="col-sm-8">
          <Card
            txtcolor="black"
            header={
              <div>
                Welcome to the Bank <CurrentUser />
              </div>
            }
            text="Here for you!"
            body={<BankImage />}
          />
        </div>
      </div>
    </div>
  )
}
