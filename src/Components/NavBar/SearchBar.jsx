const SearchBar = () => {
  return (
    <div className="input-group mb-3 search-bar bg-search">
      <div className="input-group-prepend ">
        <span className="input-group-text text-white" id="basic-addon1">
          <i className="bi bi-search"></i>{" "}
          {/* Placeholder for magnifying glass icon */}
        </span>
      </div>
      <input type="text" className="form-control" placeholder="Search Reddit" />
    </div>
  );
};
export default SearchBar;
