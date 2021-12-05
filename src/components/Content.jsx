import React, {useState} from "react";
import Task from "./Task";
import Sidebar from './Sidebar';
import './content.scss'

let Content = () => {
    const [selectedTab, setselectedTab] = useState("INBOX")
  return (
  <div className="content">

      <div>
          <Sidebar selectedTab={selectedTab} setselectedTab={setselectedTab} />
      </div>


      <div> 
          <Task/>
      </div>


  </div>);
};
export default Content;
