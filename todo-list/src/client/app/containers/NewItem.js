import { connect } from 'react-redux'
import NewItem from '../new-item.jsx'
import { addTodo } from '../actions'

export default connect(
  () => ({}),
  (dispatch) => {
      return {
          onClick: (text) => dispatch(addTodo(text))
      }
  }
)(NewItem)
