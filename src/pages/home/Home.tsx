import React, { useEffect, useState } from 'react'
import { Search } from '../../components'
import Layout from '../../components/layout'
import { debounce } from '../../utils'
import {
    EmptyContainerComponent,
    ErrorContainerComponent,
    LoadingContainerComponent,
    MovieContainerComponent,
    ScrollToTopComponent
} from './components'
import { StyledHome } from './Home.style'
import { IMoviesObjs } from './interfaces'


export const Home = () => {

    const [searchText, setSearchText] = useState<string | undefined>('')
    const [movies, setMovies] = React.useState<Array<[IMoviesObjs]>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | string>(null)
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [showTop, setShowTop] = useState<boolean>(false);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalResultsCount: 0,
        totalPage: 0
    })


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
        const { currentPage, totalPage } = pagination
        if ((currentPage - 1 === totalPage) && (totalPage !== 0)) {
            return
        } else {
            searchText !== "" && handleFetchData(false)
        }
    }, [searchText])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        handleShowScrollButton()
        if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) {
            return
        } else {
            setIsFetching(true)
        }
    }

    const handleScrollToTop = () => {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }

    const handleShowScrollButton = () => {
        if (document.documentElement.scrollTop > 400) {
            setShowTop(true)
        } else {
            setShowTop(false)
        }
    }

    const handleGetTotalPage = (value: number) => {
        if (value % 10 === 0) {
            return value / 10
        } else {
            return Math.floor(value / 10) + 1
        }
    }

    const handleGetFreshData = () => {
        setMovies([])
        setLoading(true)
    }

    useEffect(() => {
        const handleFetching = () => {
            if (isFetching && (pagination.currentPage - 1 !== pagination.totalPage) && searchText !== "") {
                handleFetchData(true)
            }
        }
        handleFetching()
    }, [isFetching, pagination])



    const handleFetchData = async (isFetchingAdditionalData: boolean) => {
        setError(null)
        isFetchingAdditionalData ? setIsFetching(true) : handleGetFreshData();

        try {
            const request = await fetch(`https://www.omdbapi.com/?s=${searchText}&type=movie&page=${pagination.currentPage}&apikey=da4d5e4e`)
            const response = await request.json()
            if (response.Response === 'True') {
                //if we are fetching additiional data, append to current data
                //else use new data
                isFetchingAdditionalData ? setMovies([...movies,
                ...response.Search]) : setMovies([...response.Search])
                setPagination({
                    ...pagination,
                    currentPage: pagination.currentPage + 1,
                    totalResultsCount: response.totalResults,
                    totalPage: handleGetTotalPage(response.totalResults)
                })
                setError(null)
                setIsFetching(false)
                setLoading(false)
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
            setIsFetching(false)
            setLoading(false)
            setError(error.message)
            console.log(error.message)
        }
    }

    return (
        <Layout>
            <StyledHome>

                <Search
                    getData={debounce(getData, 1000)}
                />

                {/* <h1>Search result for '{searchText}'</h1> */}

                <div className="movies_container">
                    {loading && <LoadingContainerComponent />}
                    {error && <ErrorContainerComponent error={error} />}
                    {(!loading && !error && movies?.length === 0) && <EmptyContainerComponent />}
                    {(movies.length > 0) && <MovieContainerComponent movies={movies} />}
                </div>
                {
                    showTop && <ScrollToTopComponent handleScrollToTop={handleScrollToTop} />}
            </StyledHome>

            {
                isFetching && (pagination.currentPage - 1 !== pagination.totalPage) && <p style={{ textAlign: 'center' }}> Fetching more Movies ...</p>
            }
        </Layout>
    )
}
