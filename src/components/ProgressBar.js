import classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

import { Link } from "react-router-dom";

export default function ProgressBar() {
  return (
    <div className={classes.progressBar}>
      <Link to = "/" className={classes.backButton}>
        <span className="material-icons-outlined"> arrow_back </span>
      </Link>
      <div className={classes.rangeArea}>
        <div className={classes.tooltip}>24% Cimplete!</div>
        <div className={classes.rangeBody}>
          <div className={classes.progress} style={{ width: "20%" }}></div>
        </div>
      </div>
      <Link to="/result">
        <Button className={classes.next}>
          <span>Next Question</span>
          <span className="material-icons-outlined"> arrow_forward </span>
        </Button>
      </Link>
    </div>
  );
}
