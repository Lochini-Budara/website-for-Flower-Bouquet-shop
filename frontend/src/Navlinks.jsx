import React from 'react'

function Navlinks(props) {
  return (
  <a href={props.url} className="navlink" > {props.linkname} </a>
  )
}

export default Navlinks