import { Navigate, Route, Routes } from "react-router-dom"

const AppRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<span>home</span>}/>
            <Route path="/user-profile" element={<span>user-profile-page</span>}/>
            <Route path="*" element={<Navigate to="/" />}/>
            <Route path="about" element={<span>span</span>}/>
            
            
        </Routes>
    )
}

export default AppRoutes