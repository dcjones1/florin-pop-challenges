import React, { useState } from 'react'
import withStyles from 'react-jss'

const styles = {
  container: {
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    height: '100vh',
    flexDirection: 'column',
  },
  header: {
    marginBottom: '45%',
    color: 'white',
  },
  navTile: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: '100px',
    width: '450px',
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px',
    '& i': {
      marginRight: '15px',
    }
  }
}

const Navigation = (props) => {
  const [bodyColor, setBodyColor] = useState('rgb(91, 55,183)')

  const { classes } = props
  return (
    <div className={classes.container} style={{backgroundColor: bodyColor}}>
      <h1 className={classes.header}>
        Weekly Coding Challenge #3 - Navigation
      </h1>
      <div className={classes.navTile}>
        <i className="fas fa-home" onClick={() => setBodyColor('rgb(91, 55, 183)')}>&nbsp;Home</i>

        <i className="far fa-heart" onClick={() => setBodyColor('rgb(201, 55, 157)')}><b>&nbsp;Likes</b></i>

        <i className="fas fa-search" onClick={() => setBodyColor('rgb(230, 169, 25)')}>&nbsp;Search</i>

        <i className="far fa-user" onClick={() => setBodyColor('rgb(28, 150, 162)')}><b>&nbsp;Profile</b></i>
      </div>
    </div>
  )
}

export default withStyles(styles)(Navigation)
