import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="navBar d-flex justify-content-between align-items-center h-100">
      <div className="navBar__logo  d-flex align-items-center">
        <img src="/Reddit_Icon.png" alt="logo" className="h-100 w-auto" />
        <p className="">reddit</p>
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
