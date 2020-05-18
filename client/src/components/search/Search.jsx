import React from 'react';
import './Search.scss'

export default class Search extends React.Component {
    render() {
        return (
            <form className="header__form">
                <input placeholder="Search" className="header__search" type="text"/>
            </form>
        )
    }
}