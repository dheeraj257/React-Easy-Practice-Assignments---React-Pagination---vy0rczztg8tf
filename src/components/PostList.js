import React, { useEffect, useState } from 'react'
import { useCallback } from 'react/cjs/react.development'
import { PaginationButtonsList } from './PaginationButtonsList'
import { Post } from './Post'

const Loader = () => <div className='col-lg-12 justify-center' id="loader">Loading...</div>

const PostList = () => {
  const [Data, setData] = useState([])
  const [loading, setloading] = useState(true)
  const [Page, setPage] = useState(0);
 
  const getData = async () => {
    const rawData = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${Page}&_limit=5`)
    return rawData.json()
  }

  const pageChanger = (Page) => {  
    document.getElementById(`button-${Page-1}`).classList.remove('active-btn')
    document.getElementById(`button-${Page}`).classList.add('active-btn')
      setPage(Page);
      setloading(true)
    }

  useEffect(() => {

    getData().then((data) => {
      setData(data)
      setloading(false);

    },[])

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
      <PaginationButtonsList handleClick={pageChanger} />
    </div>
    
  )
    }


export { PostList };
