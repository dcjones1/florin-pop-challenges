import React from 'react'
import withStyles from 'react-jss'

const styles = {
  headers: {
    textAlign: 'center',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  img: {
    width: '30%',
    height: 'auto',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '15px',
    borderRadius: '6%',
  },
  '@media (max-width: 1000px)': {
    img: {
      width: '45%',
    },
  },
  '@media (max-width: 750px)': {
    img: {
      width: '90%',
    },
  },
}

const Portfolio = (props) => {
  const { classes } = props
  return (
    <div className={classes.headers}>
      <h1>Weekly Coding Challenge #7 - Portfolio</h1>
      <p>
        Listed below are my submissions for the&nbsp;
        <a href="https://www.florin-pop.com/blog/2019/03/weekly-coding-challenge/">
          weekly coding challenge
        </a>
        &nbsp;hosted by Florin Pop
      </p>

      <div className={classes.container}>
        <img
          className={classes.img}
          src="https://www.florin-pop.com/static/b631a2f043273a179ec3b0473cdd7eb3/ff993/double-slider-sign-in-up-form.png"
          alt="weekly challenge 1"
        />
        <img
          className={classes.img}
          src="https://www.florin-pop.com/static/343f9f04e63c640a7dc42776e45a4b1e/ff993/full-page-slider.png"
          alt="weekly challenge 2"
        />
        <img
          className={classes.img}
          src="https://www.florin-pop.com/static/98f31bcaaa1f125ba4038f0477bba10b/ff993/tab-bar-navigation.png"
          alt="weekly challenge 3"
        />
        <img
          className={classes.img}
          src="https://www.florin-pop.com/static/d494f226e6dedca77ea26c18e6782a5c/ff993/interwind-loading-animation.png"
          alt="weekly challenge 4"
        />
      </div>


    </div>
  )
}

export default withStyles(styles)(Portfolio)
