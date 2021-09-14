import { React, useEffect, useState } from "react";
import axios from "axios";
import PostList from "./PostList";

const Main = () => {
  const [content, setContent] = useState([]);

  async function getContent() {
    const response = await axios.get("http://localhost:3001/api/dogs");
    setContent(response);
    console.log(content)
  }
  
  useEffect(() => getContent(), [])

  return (
    <main>
      {content ? <PostList content={content}/> : 'Undefined'}
    </main>
  );
};

export default Main;
