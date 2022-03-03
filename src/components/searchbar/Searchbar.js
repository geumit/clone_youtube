import React from 'react';
import './searchbar.css'
import {useRef} from 'react'

function Searchbar({searchResult}){
    const inputRef=useRef();
    //enter 클릭시 호출될 공통함수
    const searchFnc=()=>{
        const value=inputRef.current.value ; //input의 value값을 가져옴        
        searchResult(value);
    }
    // searchbtn 클릭시 호출 될 함수
    const inputClick =()=>{
        searchFnc();
    }
    // input box에 enter시 호출될 함수
    const inputEnter=(e)=>{
        if(e.key === 'Enter'){
            searchFnc();
        }
    }
    return (     
        <div className='searchArea'>
            {/* 왼쪽 */}
            <div className='logoarea'>
                <button className='btn-leftmenu'>
                <i className="fa-solid fa-bars"></i>
                </button>
                <h1><img src='/images/logo.png' alt='youtube' className='logoimg'/></h1>
            </div>
            {/* 가운데 */}
            <div className='searchInputarea'>
                <input 
                    type='search'
                    placeholder='검색'
                    className='searchInput' 
                    onKeyPress={inputEnter} 
                    ref={inputRef} 
                />
                <button className='searchbtn' onClick={inputClick}>
                    <img src='/images/searchicon.png' alt='search'/>
                </button>
                <button className='micbtn'>
                <i className="fa-solid fa-microphone"></i>
                </button>
            </div>
            {/* 오른쪽 */}
            <div className='topMenurea'>
                <button className='btn-rightmenu'>
                    <i className="fa-solid fa-table-cells"></i>
                </button>
                <button className='btn-rightmenu'>
                    <i className="fa-solid fa-ellipsis-vertical"></i>   
                </button>
                <button className='btn-rightmenu'>
                    <i className="fa-solid fa-user"></i>
                </button>
            </div>
        </div>
    )
}
export default Searchbar;