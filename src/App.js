import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';
import VideoList from './components/videolist/VideoList';

function App() {
  const [videoItems, setVideoItems] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch("https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=20&key=AIzaSyBnoKp2eRsM2ruwO1raXBiR_b_shZa7bXc&=https://youtube.googleapis.com/youtube/v3/videos?part=snippet%26chart=mostPopular%26maxResults=20%26key=AIzaSyBnoKp2eRsM2ruwO1raXBiR_b_shZa7bXc", requestOptions)
      .then(response => response.json())
      .then(result => setVideoItems(result.items)) //items 받아와서 setVideoItems에 전달
      .catch(error => console.log('error', error));
  }, [])
  return (
    <div className="App">
      <VideoList videoItems={videoItems} />
    </div>
  );
}

export default App;
