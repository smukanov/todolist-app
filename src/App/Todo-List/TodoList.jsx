import React from 'react';
import Todo from './Todo';

const TodoList = ({todosList, changeTodo}) => {
    const todos = todosList.map((elem) => {
        const {id} = elem;
        return <Todo key = {id} {...elem} onChangeTodo = {changeTodo}/>
    });

    return (
        <div className = "TodoList">
            {todos}
        </div>
    )
}

export default TodoList;