import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Posts></Posts>
    </div>
  );
}

function Counter(){

  const [count, SetCount] = useState(0);
  const handleIncrease= () =>{ const newCount = count+1; SetCount(newCount)}
  const handleDecrease= () =>{ const newCount = count-1; SetCount(newCount)}
  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>DeCrease</button>
    </div>
  );
}

function Posts(){
  const [posts, setPosts] = useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))


  },[])
  return (
    <div>
      <h1>SEE ALL POSTS</h1>
      <h3>Total Posts: {posts.length}</h3>
      {
        posts.map(post => <Comment title={post.title} body={post.body}></Comment>)
      }
    </div>
  );
}

function Comment(props){
  return(
    <div className='comment'>
      <h4>Title: {props.title}</h4>
      <p>Body: {props.body}</p>
    </div>
  );
}

export default App;
