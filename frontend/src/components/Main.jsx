import { React, useEffect, useState } from "react";
import axios from "axios";
import PostList from "./PostList";
import MySelect from "./UI/select/MySelect";

const Main = () => {
  const [content, setContent] = useState([]);
  const [selectedSort, setSelectedSort] = useState('')

  async function getContent() {
    const response = await axios.get("http://localhost:3001/api/dogs");
    setContent(response.data);
  }
  
  useEffect(() => getContent(), [])

  const sortDogs = (sort) => {
    setSelectedSort(sort);
    setContent([...content].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <main>
      <MySelect value={selectedSort} onChange={sortDogs} defaultValue="Сортировка по" options={[
        {value: 'title', name: 'По породе'},
        {value: 'breedId', name: 'По заголовку'}
      ]}/>
      {content ? <PostList content={content}/> : 'Undefined'}
    </main>
  );
};

export default Main;
