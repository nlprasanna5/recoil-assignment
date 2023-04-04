import React from "react";
import { Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Home from "./components/Home";
import Tasks from "./components/Tasks";


export default function App() {
  return (
    <div>
     <RecoilRoot>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/tasks' element={<Tasks/>}></Route>

      </Routes>
     </RecoilRoot>
    </div>
  );
}
