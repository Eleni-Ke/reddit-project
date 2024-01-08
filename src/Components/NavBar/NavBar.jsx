import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="navBar">
      <div className="navBar__logo">
        <img src="logo" alt="logo" />
      </div>
      <SearchBar />
      <div className="navBar__menu">
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul> */}
      </div>
    </div>
  );
};

export default NavBar;
