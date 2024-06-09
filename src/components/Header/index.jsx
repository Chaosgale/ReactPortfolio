import classes from './index.module.css';

function Header(props) {

  return (
    <header className={classes.main}>
      {props.children}
    </header>
  );
}

export default Header;
