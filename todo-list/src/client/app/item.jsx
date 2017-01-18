import React, { PropTypes } from 'react'

const Item = ({ text }) => (

    <li>
        <input type="checkbox" />
        {text}
    </li>

)

Item.propTypes = {
  // onClick: PropTypes.func.isRequired,
  // completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Item;
