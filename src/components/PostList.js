import React, { useEffect, useState } from 'react'
import { useCallback } from 'react/cjs/react.development'
import { PaginationButtonsList } from './PaginationButtonsList'
import { Post } from './Post'

const Loader = () => <div id="loader">Loading...</div>

const PostList = () => {
  const [Data, setData] = useState([])
  const [loading, setloading] = useState(true)
  const [Page, setPage] = useState(1);

  const getData = async () => {
    const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${Page}&_limit=5`)
    const data = await rawData.json()
    return data
  }

  const pageChanger = useCallback(() => {
    if (Page < 20)
      setPage(Page + 1);
  })

  useEffect(() => {

    getData().then(data => {
      setData(data)
      setloading(false);
    }, [])

  }, [Data])


  return (
    <div id="main">
      {
        loading ? <Loader /> :
          Data.map((currElem) => {
            return (
              <Post heading={currElem.title} para={currElem.body} />
            )
          }
          )
      }

      <PaginationButtonsList Page={Page} handleClick={pageChanger} />
    </div>
  )
}


export { PostList };
