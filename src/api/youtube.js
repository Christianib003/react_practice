import axios from 'axios';

const KEY = 'AIzaSyCvLpVvvOQUXzRjGAWXDH_EsD18sDzthEs';

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: 'snippet',
    maxResults: '5',
    key: KEY
  }
});