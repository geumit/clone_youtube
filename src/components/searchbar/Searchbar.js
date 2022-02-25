import React from 'react';
import './searchbar.css'
import {useRef} from 'react'

function Searchbar(){
    return (     
        <div className='searchArea'>
            {/* 왼쪽 */}
            <div className='logoarea'>
                <h1><img src='/images/logo.png' alt='youtube' className='logoimg'/></h1>
            </div>
            {/* 가운데 */}
            <div className='searchInputarea'>
                <input type='search'placeholder='검색'className='searchInput'/>
                <button className='searchbtn'>
                    <img src='/images/searchicon.png' alt='search'/>
                </button>
            </div>
            {/* 오른쪽 */}
            <div className='topMenurea'>
                <button className='gridmenubtn'>
                    <img src='/images/gridmenuicon.png' alt='topmenu'/>
                </button>
            </div>
        </div>
    )
}
export default Searchbar;