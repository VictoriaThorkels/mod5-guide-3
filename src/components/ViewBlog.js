import { useEffect, useState } from 'react';

export default ()=> {
  const [blogs, setBlogs] = useState([]);
  useEffect(()=>{
    const getData = async ()=>{
      const response = await fetch('https://mod5-guide-3-backend-7s6533aen-victoriathorkels.vercel.app/m/blogs');
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }
    getData();
  },[])
  return (
    <>
      here is something:
      { blogs.map((blog)=>{
        return (
        <>
        <h1>{blog.title}</h1>
        <img src={blog.picture_url}></img>
        <p>{blog.text}</p>
        </>
      ) } ) }
    </>
  )
}