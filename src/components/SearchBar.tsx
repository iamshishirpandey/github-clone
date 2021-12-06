function SearchBar(props: any) {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Search" />
      <button>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
export default SearchBar;
