import React from 'react';
import "../styling/home.css"
export default function Sidebar(props) {
    const { pageTitleList, selectedIndex, setSelectedIndex } = props;    
    function selectTitle(index) {
        setSelectedIndex(index)
    }
    return (
        <nav class="sidebar">
            <ul>
                {pageTitleList.map((title, index) => 
                    <li 
                        class={index === selectedIndex ? "selectedTitle" : null} 
                        onClick={(e) => selectTitle(index)}>{title.toUpperCase()}
                    </li>
                )}
            </ul>
        </nav>
    )
}