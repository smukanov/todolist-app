import React from 'react';  
import AddTodoBar from './Add-Todo-Bar/AddTodoBar';
import './App.css'
import Header from './Header/Header';
import InteractiveBar from './Interactive-Bar/InteractiveBar';
import TodoList from './Todo-List/TodoList';
import { capitalize, checkStringOnSpace, searchItems } from '../Service/service';

const ALL = 'all';
const ACTIVE = 'active';
const DONE = 'done';

class App extends React.Component {
    generatorId = 0

    state = {
        todosData: [], // тудушки
        newTodoText: "", // имя новой тудушки
        termText: "", // искаемая тудушка
        filter: ALL,
    }

    changeFilter = (type) => {
       this.setState({
           filter: type,
       })
    };

    changeText = (type, text) => {
        this.setState({
            [type]: text,
        })
    }

    searchByFilter = (items, filter) => {
        switch(filter) {
            case ALL:
                return items;
            case ACTIVE:
                return items.filter(item => !item.done);
            case DONE:
                return items.filter(item => item.done);
            default:
                return items;
        }
    }

    addTodo = () => {
        this.setState(state => {
            // если строка содержит пробелы спереди или сзади, то обрезаем их
            let todoName = checkStringOnSpace(state.newTodoText) ? 
                state.newTodoText.trim() : state.newTodoText;

            if (todoName.length === 0){ // если строка пуста, то ничего не добавляем
                return state;
            }

            return {
                todosData: [
                    ...state.todosData,
                    {
                        id: this.generatorId++, 
                        name: capitalize(todoName), 
                        important: false, 
                        done: false,
                    }
                ],
                newTodoText: "",
            }
        });
    }

    changeTodo = (type, id) => {
        switch(type){
            case "deleted":
                this._deleteTodo(id);
                break;
            case "done":
                this.setState(state => {
                    const newTodosData = state.todosData.map(item => {
                        if (item.id === id){
                            return {
                                ...item,
                                done: !item.done
                            }
                        }
                        return {
                            ...item
                        }
                    });
                    return {
                        todosData: newTodosData
                    }
                });
                break;
            case "important":
                this.setState(state => {
                    const newTodosData = state.todosData.map(item => {
                        if (item.id === id && !item.done){
                            return {
                                ...item,
                                important: !item.important
                            }
                        }
                        return {
                            ...item
                        }
                    });
                    return {
                        todosData: newTodosData
                    }
                });
                break;
            default:
                break;
        }
    }

    _deleteTodo = (id) => { // удалить задачу
        this.setState(({todosData}) => {
            const idx = todosData.findIndex(el => el.id === id);
            const newArray = [
                ...todosData.slice(0, idx),
                ...todosData.slice(idx + 1)
            ];
            return {
                todosData: newArray
            }
        })
    }

    render(){
        const {todosData: todosList, newTodoText: todoText, termText, filter} = this.state;
        const {changeTodo, addTodo, changeText, searchByFilter, changeFilter} = this;

        const visibleItems = searchByFilter(searchItems(todosList, termText), filter);// тудушки, соответсвущие критерию поиска
        
        const doneCount = todosList.filter(item => item.done).length; // количество выполненных заданий
        const todoCount = todosList.length - doneCount; //  количество предстоящих заданий

        return (
            <div className = "App">
                <div className = "container"> {/*ограничивающий ширину контейнер*/}
                    <Header todoCount = {todoCount} doneCount = {doneCount}/>

                    <InteractiveBar changeTerm = {changeText} 
                                    term = {termText} 
                                    filterValue = {filter}
                                    changeFilter = {changeFilter}/>

                    <TodoList todosList = {visibleItems} changeTodo = {changeTodo}/>

                    <AddTodoBar onAdd = {addTodo} onChangeText = {changeText} todoText = {todoText}/>
                </div>
            </div>
        )
    }
}

export default App;
