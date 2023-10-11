import { Navigate, Route, Routes } from "react-router-dom"
import { Info } from "../pages/Info"
import { Home}  from "../Home"


export const AppRouter = () => {
  return (
   <>
        <Routes>

            <Route path="home" element= { <Home /> } />

            <Route path="info" element={ <Info /> } />

            <Route path="/*" element={ <Navigate to="/home"/> }/>

        </Routes>
   </>
  )
}
