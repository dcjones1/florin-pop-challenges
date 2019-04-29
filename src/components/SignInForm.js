import React, { Component } from 'react'
import withStyles from 'react-jss'

const styles = {
  slider: {
    marginTop: '15vh',
    display: 'flex',
    height: '70vh',
    textAlign: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
    color: 'white',
  },
  leftSide: {
    flex: 1,
    marginLeft: '3%',
    marginRight: '3%',
    // backgroundColor: 'red',
  },
  rightSide: {
    flex: 1,
    marginLeft: '3%',
    marginRight: '3%',
    // backgroundColor: 'white',
  },
  button: {
    width: '40%',
    height: '50px',
    fontSize: '20px',
    color: 'white',
    background: 'transparent',
    border: '2px solid white',
    borderRadius: '50px',
  }
}

class SignInForm extends Component {

  render() {
    const { classes } = this.props
    return (
      <div className={classes.slider}>
        <div className={classes.leftSide}>
          <h1>Welcome Back!</h1>
          <p>To keep connected with us please login with your personal info</p>
          <button className={classes.button}>SIGN IN</button>
        </div>
        <div className={classes.rightSide}>
          <h1>Hello, Friend!</h1>
          <p>Enter your personal details and start your journey with us</p>
          <button className={classes.button}>SIGN UP</button>
        </div>
      </div>
    )
  }
}

export default withStyles(styles)(SignInForm)
