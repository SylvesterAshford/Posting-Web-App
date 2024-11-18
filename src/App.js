import logo from './logo.svg';
import image from './assets/3037903.webp'
import './App.css';
import Navbar from './components/Navbar/index';
import PostsList from './components/PostList/index';
import PostForm from './components/PostForm/index';
import Modal from './components/Modal/index';
import { useState } from 'react';

function App() {

  let [showModal, setShowModal] = useState(false);

  let [name, setName] = useState("Elon Musk") //func က[getter, setterFun]ကို returnတယ်။

  let [posts,setPosts] = useState([
    {
      id: 1,
      title: 'First post',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Second post',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Third post',
      status: 'upcoming'
    },
    {
      id: 4,
      title: 'Forth post',
      status: 'upcoming'
    }
  ]);
  

  // add post
  let addPost = (post) => {
    setPosts((prevState)=> [...prevState,post])
    setShowModal(false);
  } 



  let changeName = () => {
    // name = "Min Bhone San";
    setName('Min Bhone San');
    console.log(name);
  }


  /* State Update */
  let [count, setCount] = useState(0);

  let increment = () => {
    setCount((prevState)=>prevState+1); // 0+1=1
    setCount((prevState)=>prevState+1); // 1+1=2
    setCount((prevState)=>prevState+1); // 2+1=3
    setCount((prevState)=>prevState+1); // 3+1=4
  }



  // delete post 

  let deletePost = (id) => {
    setPosts((prevState) => prevState.filter(post => post.id !== id)) 
  } // posts ကိုသုံးလို့လဲရ။





  return (
    // <div className="App">
    //   <h1>Hello {name}</h1>
    //   <button onClick={changeName}>change name</button>


    //   <h1>Posts</h1>
    //   <ul>
    //     {!!posts.length && posts.map((post) => ( // returnကိုမရေးတော့ပဲ () ပဲရေးလိုက်တာ။ // posts.length ရှိမှ နောက်က code တွေrun မယ်။
    //       <li key={post.id}>
    //         {post.title}
    //         <button onClick={()=>deletePost(post.id)}>delete</button>
    //       </li> 
    //     ))}
    //     {!posts.length && <p>No Post Available</p>}
    //   </ul>

      
    //   {/* 1st way - public folder way */}

    //   {/* absolute path */}
    //   {/* <img src='http://localhost:3000/3037903.webp'/> */}
    //   {/* realative path */}
    //   {/* <img src="/3037903.webp"></img> */}

    //   {/* 2nd way - import */}

    //   {/* <img src={image} /> */}



    //   <h1>Counter</h1>
    //   <h3>Count - {count}</h3>
    //   <button onClick={increment} className='width'>Increment</button>

    // </div>
  


    // Using Different Components
    <> 
      {/* Ep-18-React-Fragment-and-props */}
      {/* React component မှာ Div ၂ခုကို ပြိုင်ပြီး ယှဉ်ရေးလို့မရပါဘူး။ parent root element or div တခုအမြဲအုပ်ပေးရပါတယ်။ အဲ့ပြသာနာကို ဖြေရှင်းမို့ React Fragment ကိုကြည့်ကြည့်ရအောင်။ */}
      <Navbar setShowModal={setShowModal}/>
      <PostsList posts={posts}/>
      {showModal && <Modal danger setShowModal={setShowModal}>
        {/* modal content */}
        {/* <h1>Zoom class is available now.</h1> */}
        {/* <p>feel free to join</p> */}
        


        {/* Splitting Component */}

        <PostForm addPost={addPost}/>

      </Modal>}
    </>
  );
}

export default App;
