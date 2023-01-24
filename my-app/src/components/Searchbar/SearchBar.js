import classes from "./SearchBar.module.css";
const SearchBar = (props) => {
  return (
    <div className={classes.search}>
      <input type="text" placeholder=" Search"></input>
    </div>
  );
};
export default SearchBar;
