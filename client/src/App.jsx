import { Suspense, useState } from "react";
import "./App.css";
import { NavLink} from "react-router-dom"
import Layout from "./components/Layout/Layout";
import Website from "./pages/Website";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Properties from "./pages/Properties/Properties";
import {QueryClient, QueryClientProvider} from 'react-query'
// import {ReactQueryDevtools} from "react-query/devtools"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Property from "./pages/Property/Property";
import UserDetailContext from "./components/Context/UserDetailContext";
import Baat from "./pages/Baat/Baat.jsx"
import AddGuide from "./pages/AddGuide/AddGuide.jsx";
import List from "./pages/List/List.jsx";
import Pay from "./components/Pay/Pay.jsx"

function App() {

  const queryClient = new QueryClient();
const [userDetails,setuserDetails]=useState({token:null,})
  return (
    <UserDetailContext.Provider value={{userDetails , setuserDetails}}>
    <QueryClientProvider client={queryClient}>
    <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}> 
      <Routes>
        
        <Route element={<Layout />}>
        <Route path="/" element={<Website />} />
        {/* <Route path="/place" element={<Properties />}/> */}
        <Route path="/place">
        <Route index element={<Properties/>}/>
        <Route path=":placeid" element={<Property/>} />
        </Route>
        <Route path="/guide">
        <Route index element={<List/>}/>
        <Route path=":guideid" element={<Pay/>} />
        </Route>
        {/* <Route path="/bookguide" element={<List></List>} />
        <Route path="/pay" element={<Pay></Pay>} /> */}
        <Route path="/addguide" element={<AddGuide/>} />
        <Route path="/baat" element={<Baat/>} />
        </Route>
      </Routes>
    </Suspense>
    </BrowserRouter>
    <ToastContainer/>
   </QueryClientProvider>
    </UserDetailContext.Provider>
  );
}

export default App;