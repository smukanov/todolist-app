import React from 'react';

const Todo = ({id, name, important, done, onChangeTodo}) => {
    let classNames = "Todo__span"

    if(important){
        classNames += " Todo__span-important";
    }

    if(done){
        classNames += " Todo__span-done";
    }

    return (
        <div className = "Todo">
            <div className = "Todo__span-wrapper" onClick = {() => onChangeTodo("done", id)}>
                <span className = {classNames}>{name}</span>
            </div>
            <div className = "Todo__btns">
                <div className = "Todo__btn Todo__delete-btn" onClick = {() => onChangeTodo("deleted", id)}>
                    <img className = "Todo__delete-img" src="/images/bin.png" alt="" />
                </div>
                <div className = "Todo__btn Todo__important-btn" onClick = {() => onChangeTodo("important", id)}>
                    <img className = "Todo__important-img" src="/images/important.png" alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Todo;