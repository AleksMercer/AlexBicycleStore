const Header = () => {
  return (
    <header>
       <a href="https://github.com/AleksMercer/AlexBicycleStore" className="logo">
        <h1
          style={{ fontSize: "3rem", fontWeight: "900", letterSpacing: "2px" }}
        >
          Alex K Bikes
        </h1>
       </a>
      <ul className="user-menu">
        <li>
           <span>
            <i className="bx bx-shopping-bag"></i>
           </span>
        </li>
        <li>
           <span>
            <i className="bx bx-user"></i>
           </span>
        </li>
        <li>
           <span>
            <i className="bx bx-search"></i>
           </span>
        </li>
      </ul>
    </header>
  );
};

export default Header;
