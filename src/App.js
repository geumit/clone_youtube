import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import {BrowserRouter,Routes, Route } from 'react-router-dom';
import VideoList from './components/videolist/VideoList';
import Searchbar from './components/searchbar/Searchbar';
import Videoview from './components/videoview/Videoview';
import Home from './pages/Home';
import Search from './pages/Search';
import Watch from './pages/Watch';

function App({youtube}) {

  // const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;
  const [videoItems, setVideoItems] = useState([]);
  const [selectView,setSelectView] =useState(null);
  const selectVideo=(video)=>{
    setSelectView(video); //비디오가 받아지면 setSelectView 함수를 이용해서 state 값 받아진 비디오로 업데이트
  }
  const search =(searchValueTxt)=>{
    setSelectView(null)
    // var requestOptions ={
    //   method: 'GET',
    //   redirect: 'follow'
    // }
    youtube.searchResult(searchValueTxt).then()

    // fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&regionCode=kr&type=video&maxResults=20&q=${searchValueTxt}&key=${API_KEY}`, requestOptions)
    //   .then(response => response.json())
    //   .then(result => result.items.map(item=>({...item, id:item.id.videoId})))
    //   .then(items => setVideoItems(items)) 
    //   .catch(error => console.log('error', error));

  // search 함수 끝
  };


  useEffect(() => {
    // const requestOptions = {
    //   method: 'GET',
    //   redirect: 'follow'
    // };
    youtube.mostPopular().then(videos=>setVideoItems(videos))
    },[]);

  //   fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=statistics&chart=mostPopular&maxResults=20&regionCode=kr&key=${API_KEY}`, requestOptions)
  //     .then(response => response.json())
  //     .then(result => setVideoItems(result.items)) //items 받아와서 setVideoItems에 전달
  //     .catch(error => console.log('error', error));
  // }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Searchbar searchResult={search} />
        <Routes>
          <Route path="/" element={<Home videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
          <Route path="/search" element={<Search videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
          <Route path="/watch" element={<Watch videoItems={videoItems} onVideoClick={selectVideo} selectView={selectView} />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
