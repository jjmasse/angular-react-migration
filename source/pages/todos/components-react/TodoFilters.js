import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  title: PropTypes.string,
}

const defaultProps = {
  title: 'Available Filters'
}

const TodoFilters = ({
  title,
  handleDidClick,
  handleDoneClick,
  handleAllClick
}) => (
  <div>
    <h3>{title}</h3>
    <button onClick={handleDidClick}>Things you did</button>
    <button onClick={handleDoneClick}>Things you are about to do</button>
    <button onClick={handleAllClick}>All of the things</button>
  </div>
)

TodoFilters.propTypes = propTypes
TodoFilters.defaultProps = defaultProps

export default TodoFilters
