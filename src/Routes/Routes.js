import React from "react"
import LayoutComponent from "../Layout/Layout"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import { JobProvider } from "../Context/JobContext"
import DataForm from "../Pages/DataForm"
import Register from "../auth/register"
import Login from "../auth/login"
import ChangePass from "../Pages/ChangePass"
import LayoutDashboard from "../Layout/LayoutDashboard"
import Dashboard from "../Pages/Dashboard"
import Home from "../Pages/Home"
import DetailJob from "../Pages/DetailJob"
import Cookies from 'js-cookie'
import Redirect from "react-router-dom/Redirect"
import FooterDetail from "../Component/FooterDetail"
import Navbar from "../Component/Navbar"
import NotFoundPage from "../Pages/NotFoundPage"

const Routes = () => {
  const DashboardRoute = ({ ...props }) => {
    if (Cookies.get('token') === undefined) {
      return <Redirect to={'/login'} />
    } else if (Cookies.get('token') !== undefined) {
      return <Route {...props} />
    }
  }

  return (
    <>
      <Router>
        <JobProvider>
          <Switch>

            <Route path="/" exact>
              <LayoutComponent content={<Home/>} />
            </Route>

            <Route path="/job-vacancy/:slug" exact>
              <Navbar/>
              <FooterDetail />
              {<DetailJob/>}
            </Route>

            <Route path="/dashboard" exact>
              <DashboardRoute>
              <LayoutDashboard>
                <Dashboard/>
              </LayoutDashboard>
              </DashboardRoute>
            </Route>

            <Route path="/dashboard/list-job-vacancy/form" exact>
            <LayoutDashboard>
                <DataForm/>
              </LayoutDashboard>
            </Route>

            <Route path="/dashboard/list-job-vacancy" exact>
            <LayoutDashboard>
                <Dashboard/>
              </LayoutDashboard>
            </Route>

            <Route path="/list-job-vacancy/edit/:Id" exact>
            <LayoutDashboard>
                {<DataForm/>}
              </LayoutDashboard>
            </Route>

            <Route path="/register" exact>
              <Register/>
            </Route>

            <Route path="/login" exact>
              <Login/>
            </Route>

            <Route path="/change-password" exact>
            <LayoutDashboard>
              <ChangePass/>
            </LayoutDashboard>
            </Route>

            <Route path="*" exact>
              <NotFoundPage />
            </Route>

          </Switch>
        </JobProvider>
      </Router>
    </>
  )

}

export default Routes