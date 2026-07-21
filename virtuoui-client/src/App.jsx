import  { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setAllComponents, setAllUsers, setUserData } from "./redux/userSlice";
import Generate from "./pages/Generate";
import AdminDashboard from "./pages/AdminDashboard";
import AllComponents from "./pages/AllComponents";
import MyComponents from "./pages/MyComponents";
import Pricing from "./pages/Pricing";
import AdminRoute from "./components/AdminRoutes";
import ProtectedRoute from "./components/ProtectedRoutes";
import { Navigate } from "react-router-dom";

export const ServerUrl = "https://virtuoui-library-project.onrender.com"

function App() {

  const dispatch = useDispatch();
  const {userData} = useSelector((state)=>state.user);
  const [authChecked, setAuthChecked] = useState(false);

  useEffect(()=>{
    const fetchUser = async() => {
      try{
        const res = await axios.get(ServerUrl + "/api/v1/user/current-user",
          {withCredentials:true},
          
        )
        //console.log("Response:", res.data);
        dispatch(setUserData(res.data)); 
        setAuthChecked(true);
      }
      catch(error) {
        console.log("Error in fetching user:",error);
        dispatch(setUserData(null));
        setAuthChecked(true);
      }
    }

    fetchUser();
  },[]);

  useEffect(()=>{
    if(!userData) {
      return;
    }

    const fetchAllUsers = async() => {
      try{
        const usersRes = await axios.get(ServerUrl + "/api/v1/user/all-users",
          {withCredentials:true},
          
        )
        //console.log("Response:", usersRes.data);
        dispatch(setAllUsers(usersRes.data)); 
      }
      catch(error) {
        console.log("Error in fetching all users:",error);
        dispatch(setAllUsers([]));
      }
    }

    const fetchAllComponents = async() => {
      try{
        const componentsRes = await axios.get(ServerUrl + "/api/v1/component/all-components",
          {withCredentials:true}, 
        )
        //console.log("Response:", componentsRes.data);
        dispatch(setAllComponents(componentsRes.data)); 
      }
      catch(error) {
        console.log("Error in fetching all components:",error);
        dispatch(setAllComponents([]));
      }
    }

    fetchAllUsers();
    fetchAllComponents();

  },[userData, dispatch]);


  return (
    <>
    {
      !authChecked && (
        <div className="fixed top-0 left-0 w-full h-1 bg-[#35ebff] animate-pulse z-50">
        </div>
      )
    }
    <Routes>
      
      

      <Route path='/admin' element={
        <AdminRoute>
          <AdminDashboard/>
        </AdminRoute>
      }/>

      <Route path='/generate' element={
        <ProtectedRoute>
          <Generate/>
        </ProtectedRoute>
      }/>

      <Route path='/my-components' element={
        <ProtectedRoute>
          <MyComponents/>
        </ProtectedRoute>
      }/>

      <Route path='/pricing' element={
        <ProtectedRoute>
          <Pricing/>
        </ProtectedRoute>
      }/>

      <Route path='/' element={<Home/>}/>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route path='/components' element={<AllComponents/>}/>
    </Routes>
    </>
  )
}


export default App;
