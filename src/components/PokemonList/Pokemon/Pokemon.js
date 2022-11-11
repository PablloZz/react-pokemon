import React, { useEffect, useState } from "react"
import { NavLink } from "react-router-dom"
import "./Pokemon.css"

function Pokemon({ url, name }) {
  const [currentUrl, setCurrentUrl] = useState(0)
  useEffect(() => {
    function getUrl(url) {
      const matches = url.match(/\d+/g)
      setCurrentUrl(matches[matches.length - 1])
    }

    getUrl(url)
  }, [url, currentUrl])

  return (
    <NavLink to={`${name}/${currentUrl}`} className="link">
      {name}
    </NavLink>
  )
}

export default Pokemon
