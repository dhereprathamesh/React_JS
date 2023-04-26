import React from 'react'
import Sidebar from '../../components/AdminPage/SideBar/Sidebar'
import Overview from '../Overview/Overview'
import './AdminPage.css'
import { Typography } from '@mui/material'

function AdminPage() {
  return (
    <div className="main-section">

      
      <div className="side-bar-page">
      </div>

      <div className="overview-page">
        {/* <Overview/> */}
        <Typography>Admin</Typography>
      </div>


      {/* <main className="main-div">
        <div className="conatiner">
            <div className="box-row">
                <div>
                <Card/>
                </div>
                <div>
                <Card/>
                </div>
                <div>
                <Card/>
                </div>
            </div>
            <div>
              <div>
                abc
              </div>
              <div>
                123
              </div>
            </div>
        </div>   
      </main>   */}
    </div>
  )
}

export default AdminPage;
