import React from 'react'

const TabButton = (props) => {

  return (
    <div>
      <li>
        <button className={props.isSelected ? 'active' : undefined} onClick={props.onSelect}>
          {props.children}
        </button>
      </li>
    </div>
  )
}

export default TabButton