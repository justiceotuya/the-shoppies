import React, { useEffect, useState } from 'react'
import { MovieCard, Search } from '../../components'
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

export const Home = () => {

    const [searchText, setSearchText] = useState<string | undefined>('')
    const [movies, setMovies] = React.useState<Array<IMoviesObjs>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | string>(null)
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalResultsCount: 0,
        totalPage: 0
    })



    const handleSubmit = (e: any) => {
        e.preventDefault()
        console.log(e.target[0].value)
    }



    const getData = (data: string | undefined) => {
        setSearchText(data)
        setMovies([])
        setPagination({
            ...pagination,
            currentPage: 1,
            totalResultsCount: 0,
            totalPage: 0
        })
    }

    useEffect(() => {
        // currentPage: 1,
        // totalResultsCount: 0,
        // totalPage: 0
        const { currentPage, totalPage } = pagination
        //current page -1 is equal to totalpage and totalpage is not zero STOP
        if ((currentPage - 1 === totalPage) && (totalPage !== 0 || searchText === "")) {
            return
        } else {

            handleFetchData()
        }
    }, [searchText, !!isFetching])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
        console.log('scrolled')
        setIsFetching(true)
        //    if(pagination.currentPage !== pagination.totalPage) handleFetchData()
    }



    const handleGetTotalPage = (value: number) => {
        if (value % 10 === 0) {
            return value / 10
        } else {
            return Math.floor(value / 10) + 1
        }
    }

    const handleFetchData = async (more?: boolean) => {
        //    more === false && () => (
        //     setMovies([])
        //     setLoading(true)
        //     setError(null)
        //    )
        try {
            const request = await fetch(`https://www.omdbapi.com/?s=${searchText}&type=movie&page=${pagination.currentPage}&apikey=da4d5e4e`)
            const response = await request.json()
            if (response.Response === 'True') {
                setMovies([...movies, ...response.Search])
                console.log()
                setPagination({
                    ...pagination,
                    currentPage: pagination.currentPage + 1,
                    totalResultsCount: response.totalResults,
                    totalPage: handleGetTotalPage(response.totalResults)
                })
                setError(null)
            } else {
                setMovies([])
                setPagination({
                    ...pagination,
                    currentPage: 1,
                    totalResultsCount: 0,
                    totalPage: 0
                })
                setError(response.Error)
            }
            setLoading(false)
            setIsFetching(false)
        } catch (error) {
            setMovies([])
            setPagination({
                ...pagination,
                currentPage: 1,
                totalResultsCount: 0,
                totalPage: 0
            })
            setLoading(false)
            setIsFetching(false)
            setError(error.message)
            console.log(error.message)
        }
    }

    return (
        <Layout>
            <StyledHome>

                <Search
                    onSubmit={handleSubmit}
                    getData={debounce(getData, 1000)}
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
                        (movies && movies?.length > 0) && movies.map(item => {
                            const {
                                Poster,
                                Title,
                                Year,
                                imdbID,
                            } = item
                            return (
                                <MovieCard
                                    key={imdbID}
                                    movieRating="8.0"
                                    movieTitle={Title}
                                    movieYear={Year}
                                    movieGenre="Action, Thriller, Animation"
                                    movieImage={Poster}
                                />
                            )
                        })
                    }
                </div>
            </StyledHome>
            {
                isFetching && (pagination.currentPage - 1 !== pagination.totalPage) && <p style={{ textAlign: 'center' }}> Fetching more Movies ...</p>
            }
        </Layout>
    )
}
