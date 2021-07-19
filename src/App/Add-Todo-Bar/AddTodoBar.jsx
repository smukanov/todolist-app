import React from 'react';

const AddTodoBar = ({onAdd, onChangeText, todoText}) => {
    return (
        <div className = "AddTodoBar InteractiveBar-block">
            <div className = "AddTodoBar__input-wrapper input-wrapper-block">
                <input className = "AddTodoBar__input input-block" 
                    placeholder = "What needs to be done"
                    value = {todoText}
                    onChange = {(e) => onChangeText("newTodoText", e.target.value)}/>
            </div>
            <div className = "AddTodoBar__btn-wrapper">
                <button className = "AddTodoBar__btn" onClick = {onAdd}>Add</button>
            </div>
        </div>
    )
}

export default AddTodoBar;