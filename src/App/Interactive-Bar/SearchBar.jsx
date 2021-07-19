import React from 'react';

const SearchBar = ({onSearchTodo, searchText}) => {
    return (
        <div className = "SearchBar input-wrapper-block">
            <input 
                className = "SearchBar__input input-block" 
                placeholder = "type to search"
                value = {searchText}
                onChange = {(e) => {onSearchTodo("termText", e.target.value)}}/>
        </div>
    )
}

export default SearchBar;