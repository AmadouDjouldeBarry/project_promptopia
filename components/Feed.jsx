'use client'
import { useState, useEffect } from "react"
import PromptCard from "./PromptCard"

const PromptCardList = ({data, handleTagClick})=>{
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post)=>{
        <PromptCard key={post._id} post={post} handleTagClick={handleTagClick}/>
      })}

    </div>
  )
}
const Feed = () => {
  const [searchText, setsearchText] = useState("");
  const [posts, setposts] = useState([]);
  const handleSearchChange = (e)=>{

  }

  useEffect(()=>{
    const fetchPosts = async()=>{
      const response = await fetch('api/prompt');
      const data =  response.json();
      setposts(data);

    }
    fetchPosts();
  })
  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input type="text" placeholder="Search for prompt"
        value={searchText}
        onChange={handleSearchChange} required 
        className="search_input peer"/>
      </form>
      <PromptCardList data={posts}
      handleTagClick ={()=>{}}>
      </PromptCardList>
    </section>
  )
}

export default Feed