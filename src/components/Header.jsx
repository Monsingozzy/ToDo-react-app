import React from "react";
import '../App.scss';
import todologo from '../assestes/images/todologo.jpg'

const Header = () => {
  return <div className="headerr">
    <nav>
      <div className="logo">
<img src={todologo} alt="todo logo" />
</div>
</nav>
  </div>;
};
export default Header