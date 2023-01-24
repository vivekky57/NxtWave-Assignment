import { Fragment } from "react";
import classes from "./AddButton.module.css";
const AddButton = (props) => {
  return (
    <Fragment>
      <div className={classes.a}>
        <a href="http://localhost:3000/create-item">ADD ITEM</a>
      </div>
    </Fragment>
  );
};

export default AddButton;
