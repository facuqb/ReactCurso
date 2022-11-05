import { Routes, Route, Navigate, Link } from "react-router-dom"
import { AboutPage } from "./AboutPage"
import { UserProvider } from "./Context/UserProvider"
import { HomePage } from "./HomePage"
import { LoginPage } from "./LoginPage"
import { NavBar } from "./NavBar"

export const MainApp = () => {
  return (
    <UserProvider>      
        <NavBar />
      
        <hr />
        

        <Routes>
      
          <Route path="/" element= {<HomePage />} />
          <Route path="login" element= {<LoginPage />} />
          <Route path="about" element= {<AboutPage />} />
          <Route path="/*" element= {<Navigate to="/login" />} />

        </Routes>
    </UserProvider>
  )
}
