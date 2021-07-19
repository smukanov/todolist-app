import React from 'react';

const ALL = 'all';
const ACTIVE = 'active';
const DONE = 'done';

const Filter = ({filterValue, onChangeFilter}) => {
    const buttons = [
        {name: ALL, label: "All"},
        {name: ACTIVE, label: "Active"},
        {name: DONE, label: "Done"}
    ];

    const elements = buttons.map(({name, label}) => {
        const isActive = (filterValue === name) ? "Filter__btn_active" : "";
        console.log(isActive);
        return (
            <button className = {`Filter__btn ${isActive}`}
                    key = {name}
                    onClick = {() => {onChangeFilter(name)}}>
                {label}
            </button>
        )
    });

    return (
        <div className = "Filter">
            {elements}
        </div>
    )
}

export default Filter;