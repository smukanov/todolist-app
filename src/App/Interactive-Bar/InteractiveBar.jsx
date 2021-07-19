import React from 'react';
import Filter from './Filter';
import SearchBar from './SearchBar';

const InteractiveBar = ({changeTerm, term, filterValue, changeFilter}) => {
    return (
        <div className = "InteractiveBar InteractiveBar-block">
            <SearchBar onSearchTodo = {changeTerm} searchText = {term}/>
            <Filter filterValue = {filterValue} onChangeFilter = {changeFilter}/>
        </div>
    )
}

export default InteractiveBar;