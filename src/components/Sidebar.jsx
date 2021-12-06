import React from "react";
import "./sidebar.scss";
import { FaInbox, FaRegCalendarAlt, FaRegCalendar } from "react-icons/fa";

const Sidebar = ({ selectedTab, setselectedTab }) => {
  return (
    <div className="side-bar">
      <div
        className={selectedTab === "INBOX" ? "active" : ""}
        onClick={() => setselectedTab("INBOX")}
      >
        <FaInbox className="icon" /> Inbox
      </div>

      <div
        className={selectedTab === "TODAY" ? "active" : " "}
        onClick={() => setselectedTab("TODAY")}
      >
        <FaRegCalendarAlt className="icon" />
        Today
      </div>

      <div
        className={selectedTab === "NEXT_7" ? "active" : " "}
        onClick={() => setselectedTab("NEXT_7")}
      >
        <FaRegCalendar className="icon" />
        Next 7 day
      </div>
    </div>
  );
};
export default Sidebar;
