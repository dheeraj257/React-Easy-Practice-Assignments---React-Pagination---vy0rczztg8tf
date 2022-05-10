import React, { useEffect, useState } from 'react'
import { useCallback } from 'react/cjs/react.development'
import { PaginationButtonsList } from './PaginationButtonsList'
import { Post } from './Post'

const Loader = () => <div id="loader">
  <img width={50}  height={50} src="https://cdn-icons-png.flaticon.com/512/248/248958.png" alt="" />
</div>

const PostList = () => {
  const [Data, setData] = useState([])
  const [loading, setloading] = useState(true)
  const [Page, setPage] = useState(1);

  const getData = async () => {
    const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${Page}&_limit=5`)
    return rawData.json()
  }

  const pageChanger = (Page) => {
    setPage(Page);
    setloading(true);
  }

  useEffect(() => {
    getData().then((data) => {
      setData(data)
      setloading(false);
    }, [])

  },[Page])


  return (
    <>
    <div id="main">
      {
        loading ? <Loader /> :
          Data.map((currElem) => {
            return (
              
              <Post key={currElem.id} heading={currElem.title} para={currElem.body} />
            )
          }
          )

      }
     
    </div>
    <PaginationButtonsList Page={Page} handleClick={pageChanger} />
</>
  )
}


export { PostList };
