import React, { Component } from 'react'
import withStyles from 'react-jss'

const styles = {
  slider: {
    // marginTop: '15vh',
    display: 'flex',
    height: '70vh',
    textAlign: 'center',
    alignItems: 'center',
    background: 'linear-gradient(to right, #ff4b2b, #ff416c)',
    color: 'white',
    zIndex: 1,
    // border: '1px solid black',
    borderRadius: '10px',
    margin: '15vh 1vh',
  },
  leftSide: {
    flex: 1,
    marginLeft: '3%',
    marginRight: '3%',
  },
  leftSideTop: {
    flex: 1,
    color: 'black',
    backgroundColor: 'white',
    // height: '100%',
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  },
  // rightSide: {
  //   flex: 1,
  //   marginLeft: '3%',
  //   marginRight: '3%',
  //   // backgroundColor: 'white',
  // },
  // rightSideTop: {
  //   width: '100%',
  //   flex: 1,
  //   color: 'black',
  //   backgroundColor: 'white',
  //   height: '100%',
  //   borderTopLeftRadius: '10px',
  //   borderBottomLeftRadius: '10px',
  // },
  button: {
    width: '40%',
    height: '50px',
    fontSize: '20px',
    color: 'white',
    background: 'transparent',
    border: '2px solid white',
    borderRadius: '50px',
  },
  formButton: {
    width: '40%',
    height: '50px',
    fontSize: '20px',
    color: 'white',
    background: '#ff4b2b',
    border: '2px solid white',
    borderRadius: '50px',
  }
}

class SignInForm extends Component {
  state = {
    signIn: true
  }

  componentDidMount() {
    document.querySelector('body').style.backgroundColor = 'grey'
  }

  render() {
    const { classes } = this.props
    return (
      <div className={classes.slider}>
        {this.state.signIn ? (

          <React.Fragment>
            <div className={classes.leftSideTop}>
              <h1>Sign in</h1>
              <form>
                <input type="email" placeholder="email" /><br />
                <input type="password" placeholder="password" />
              </form>
              <button className={classes.formButton}>SIGN IN</button>
            </div>
            <div className={classes.rightSide}>
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start your journey with us</p>
              <button className={classes.button}>SIGN UP</button>
            </div>
          </React.Fragment>

        ) : (

          <React.Fragment>
            <div className={classes.leftSide}>
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login with your personal info</p>
              <button className={classes.button}>SIGN IN</button>
            </div>
            <div className={classes.rightSideTop}>
              <h1>Sign Up</h1>
              <form>
                <input type="name" placeholder="Name" /><br />
                <input type="email" placeholder="Email" /><br />
                <input type="password" placeholder="Password" />
              </form>
              <button className={classes.formButton}>SIGN IN</button>
            </div>
          </React.Fragment>

        )}
      </div>
    )
  }
}

export default withStyles(styles)(SignInForm)
