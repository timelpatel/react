import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import List from '../list.jsx'

const getVisibleTodos = (items, filter = 'SHOW_ALL') => {
  switch (filter) {
    case 'SHOW_ALL':
      return items
    case 'SHOW_COMPLETED':
      return items.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return items.filter(t => !t.completed)
  }
}

const mapStateToProps = (state) => {
  return {
    items: getVisibleTodos(state.items, state.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    }
  }
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(List)

export default VisibleTodoList
