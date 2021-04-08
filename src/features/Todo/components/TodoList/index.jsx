import React, { useState } from 'react';
import Todo from '../Todo';
import TodoForm from '../TodoForm';
import './style.scss';

TodoList.propTypes = {

};

function TodoList() {
    const initTodoList = [
        {
            id: 1,
            title: "Eat",
            status: "new",
        },
        {
            id: 2,
            title: "Sleep",
            status: "completed",
        },
        {
            id: 3,
            title: "Code",
            status: "new",
        },
    ];

    const [todoList, setTodoList] = useState(initTodoList);

    const handleTodoClick = (todo, idx) => {
        const newTodoList = [...todoList];

        const newTodo = {
            ...newTodoList[idx],
            status: newTodoList[idx].status === 'new' ? 'completed' : 'new'
        };

        newTodoList[idx] = newTodo;
        setTodoList(newTodoList);
    };

    const handleDeleteTodo = (todo, idx) => {
        //Cách 1
        const newTodoList = [...todoList];
        newTodoList.splice(idx, 1);
        setTodoList(newTodoList);

        //Cách 2: neu ko co idx tu con truyen len thi lam cach nay
        /*
        const index = todoList.findIndex(x => x.id === todo.id);

        if(index<0) return;
        const newTodoList = [...todoList];
        newTodoList.splice(index, 1)
        setTodoList(newTodoList);
        */
    }

    const handleTodoFormSubmit = (values) => {
        console.log('Form submit:', values);
    }

    return (
        <div >
            <h3 className="title">Todo List</h3>
            <TodoForm onSubmit={handleTodoFormSubmit} />
            <Todo todoList={todoList} onTodoClick={handleTodoClick} onDelete={handleDeleteTodo} />
        </div>
    );
}

export default TodoList;