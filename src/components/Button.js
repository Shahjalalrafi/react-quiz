import classes from "../styles/Button.module.css";

export default function Button({ children }) {
  return (
    <button className={classes.button}>
      <span>{children}</span>
    </button>
  );
}
