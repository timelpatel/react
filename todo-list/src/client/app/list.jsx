import React, { PropTypes } from 'react'
import items from './reducers/items.js'
import Item from './item.jsx'

const List = ({ items, onTodoClick }) => (
    <ul>
        {items.map(item =>
            <Item
                key={item.id}
                {...item}
                onClick={() => onTodoClick(item.id)}
            />
        )}
    </ul>
)

List.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        completed: PropTypes.bool.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onTodoClick: PropTypes.func.isRequired
}

export default List;
