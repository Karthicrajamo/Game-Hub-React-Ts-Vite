import React from 'react'
import useGenres, { Genres } from './Hooks/useGenres'
import useData from './Hooks/useData'

const GenresList = () => {
    // const {genres} = useGenres()
    const {data} = useData<Genres>('/genres')
  return (
    <div>{data.map((gen, index)=> <h1 className='dark:text-white text-black' key={gen.id}>{gen.name}</h1>)}</div>
  )
}

export default GenresList