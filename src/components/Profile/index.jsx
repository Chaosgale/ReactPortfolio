import classes from './index.module.css';

function Profile() {
    return (
        <div className={classes.main}>
            <div className={classes.submain}>
                <h6 className={classes.sublogo}>ASPIRING SOFTWARE DEVELOPER</h6>
                <h1 className={classes.logo}>Yan Ashe</h1>
                <img src="https://drive.google.com/file/d/1YvA8MF2_VoE1tWJPNfgQVb4m2_VSeAe3/view?usp=sharing" alt="Guy in the jacket" width="400" height="600" />

            </div>
        </div>
    );
  }
  
  export default Profile;
  
