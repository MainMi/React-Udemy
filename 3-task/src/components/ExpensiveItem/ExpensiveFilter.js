import React from 'react';

import './ExpensiveFilter.css';

const ExpensesFilter = (props) => {

    const bubleFilterYearHandler = (ev) => props.onChangeFilter(ev.target.value);
    return (
        <div className='expenses-filter'>
            <div className='expenses-filter__control'>
            <label>Filter by year</label>
            <select value={props.selected} onChange={bubleFilterYearHandler}>
                <option value='2023'>2023</option>
                <option value='2022'>2022</option>
                <option value='2021'>2021</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                <option value='select'>select</option>
            </select>
            </div>
        </div>
    );
};

export default ExpensesFilter;