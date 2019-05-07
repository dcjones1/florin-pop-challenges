import React from 'react'
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
    flex: 1,
  },
  navTile: {
    flex: 1,
    backgroundColor: 'white',
  }
}

const Navigation = (props) => {
  const { classes } = props
  return (
    <div className={classes.container}>
      <h1 className={classes.header}>
        Weekly Coding Challenge #3 - Navigation
      </h1>
      <div className={classes.navTile}>
        center me.
      </div>
    </div>
  )
}

export default withStyles(styles)(Navigation)
