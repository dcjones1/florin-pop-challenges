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
    marginBottom: '45%'
  },
  navTile: {
    backgroundColor: 'white',
    height: '100px',
    width: '450px',
    borderBottomLeftRadius: '25px',
    borderBottomRightRadius: '25px',
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
        <i class="fas fa-home"></i><button onClick={() => setBodyColor('rgb(91, 55, 183)')}>Home</button>
        <button onClick={() => setBodyColor('rgb(201, 55, 157)')}>Likes</button>
        <button onClick={() => setBodyColor('rgb(230, 169, 25)')}>Search</button>
        <button onClick={() => setBodyColor('rgb(28, 150, 162)')}>Profile</button>
      </div>
    </div>
  )
}

export default withStyles(styles)(Navigation)
