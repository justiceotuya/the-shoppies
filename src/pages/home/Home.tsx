import React from 'react'
import { Button, MovieCard, Search } from '../../components'
import Layout from '../../components/layout'
import { debounce } from '../../utils'
import { StyledHome } from './Home.style'
interface IMoviesObjs {
    Poster: string
    Title: string
    Type: string
    Year: string
    imdbID: string
}

interface IMoviesProps {
    movies: IMoviesObjs[];
}

export const Home = () => {

    const [searchText, setSearchText] = React.useState<string |undefined>('')
    const [movies, setMovies] = React.useState<null | Array<IMoviesObjs>>([]);
const [loading, setLoading] = React.useState<boolean>(false)
const [error, setError] = React.useState<null | string>(null)


    const handleSubmit = (e:any) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }



    const getData = (data:string|undefined) => {
setSearchText(data)
}

React.useEffect(() => {
    const handleFetchData = async () => {
        setMovies([])
        setLoading(true)
        setError(null)
        try {
          const request =  await fetch(`https://www.omdbapi.com/?s=${searchText}&type=movie&page=1&apikey=da4d5e4e`)
          const response = await request.json()
          if(response.Response === 'True'){
              setMovies(response.Search)
              setError(null)
            }else {
                setMovies(null)
              setError(response.Error)
          }
          setLoading(false)
        } catch (error) {
            setMovies([])
            setLoading(false)
          setError(error.message)
    console.log(error.message)
        }
        }
        searchText !== "" && handleFetchData()
    //   debounce(handleFetchData, 3000)()
}, [searchText])


console.log({movies})

    return (
        <Layout>
        <StyledHome>

<Search
onSubmit={handleSubmit}
getData={getData}
/>

{/* <h1>Search result for '{searchText}'</h1> */}

<div className="movies_container">
    {
        loading && <div className="fullPage">
        <h1> Loading Data ...</h1>
        </div>
    }
    {
        error && <div className="fullPage">
        <h1> Error: {error}</h1>
        <p>Please retry searching</p>
        </div>
    }
    {
       (!loading && movies?.length === 0) && <div className="fullPage">
            <h1> No Movies, Search for movie to nominate your favourite</h1>
            </div>
    }
{
 ( movies && movies?.length > 0) && movies.map(item =>{
      const {
        Poster,
        Title,
        Type,
        Year,
        imdbID,
      } = item
  return (
<MovieCard
movieRating="8.0"
movieTitle={Title}
movieYear={Year}
movieGenre="Action, Thriller, Animation"
movieImage={Poster}
/>
  )})
}
  </div>
        </StyledHome>
        </Layout>
    )
}
