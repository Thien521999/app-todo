import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import './style.scss';

Todo.propTypes = {
    todoList: PropTypes.array,
    onTodoClick: PropTypes.func,
    onDelete: PropTypes.func,
};

function Todo({ todoList = [], onTodoClick = null, onDelete = null }) {

    const handleTodoClick = (todo, idx) => {
        if (!onTodoClick) return;
        onTodoClick(todo, idx);
    }

    const handleDeleteTodo = (todo, idx) => {
        if (!onTodoClick) return;
        onDelete(todo, idx);
    }

    const todoItemStyle = {
        background: '#f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
    }

    const deleteButtonStyle = {
        background: '#ff0000',
        color: '#fff',
        border: 'none',
        padding: '5px 9px',
        borderRadius: '50%',
        cursor: 'pointer',
        float: 'right'
      }

    return (
        <div className="todo-list">
            {
                todoList.map((todo, idx) =>
                    <div style={todoItemStyle} key={todo.id}>
                        <input type="checkbox" onChange={() => handleTodoClick(todo, idx)} checked={todo.completed} />
                        <span className={classNames({
                            'todo-Item': true,
                            completed: todo.status === 'completed'
                        })}>
                            {todo.title}
                        </span>
                        <button style={deleteButtonStyle} onClick={() => handleDeleteTodo(todo, idx)} >Delete</button>
                    </div>
                )
            }
        </div>
    );
}

export default Todo;