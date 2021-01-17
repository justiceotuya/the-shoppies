import React, { useEffect, useState } from 'react'
import { Search } from '../../components'
import Layout from '../../components/layout'
import { useLocalStorageState } from '../../hooks'
import { debounce } from '../../utils'
import {
    EmptyContainerComponent,
    ErrorContainerComponent,
    LoadingContainerComponent,
    MovieContainerComponent,
    NominationList,
    ScrollToTopComponent
} from './components'
import { StyledHome } from './Home.style'
import { ToastContainer, toast } from 'react-toastify';


export const Home = () => {

    const [searchText, setSearchText] = useState<string | undefined>('')
    const [movies, setMovies] = React.useState<Array<any>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<null | string>(null)
    const [isFetching, setIsFetching] = useState<boolean>(false);
    const [showTop, setShowTop] = useState<boolean>(false);
    const [pagination, setPagination] = useState({
        currentPage: 1,
        totalResultsCount: 0,
        totalPage: 0
    })
    const [nominatedList, setNominatedList] = useLocalStorageState('nominatedList', [])
    const [isNominatedPageOpen, setIsNominatedPageOpen] = useState<boolean>(false)

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
                //add nominated flag to the data
                // handleAddNominatedFlag()
                let resultWithNominatedFlag = response.Search.map((data: any) => {
                    nominatedList.forEach((test: any) => {
                        if (test.imdbID === data.imdbID) {
                            data = { ...data, nominated: true }
                            return data
                        } else {
                            data = { ...data, nominated: false }
                            return data
                        }
                    })
                    return data
                }

                )
                //if we are fetching additiional data, append to current data
                //else use new data
                isFetchingAdditionalData ? setMovies([...movies,
                ...resultWithNominatedFlag]) : setMovies([...resultWithNominatedFlag])
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

    //

    const handleAddMovieToNominatedList = (item: any) => {
        let newMovies = movies.map(data => {
            if (item.imdbID === data?.imdbID) {
                if (nominatedList === null) {
                    data = { ...data, nominated: true }
                    setNominatedList([item])
                } else if (nominatedList.length < 5) {
                    data = { ...data, nominated: true }
                    setNominatedList([...nominatedList, item])
                    return data
                } else {
                    toast.error("You can only nominate 5 Movies", {
                        position: toast.POSITION.TOP_CENTER
                      });
                    return data
                }
            }
            return data
        })
        setMovies([...newMovies])
    }

    const handleRemoveMovieFromNominatedList = (item: any) => {
        //remove data from localstorage and nomination list
        let newNominatedList = nominatedList.filter((movie: any) => movie.imdbID !== item.imdbID)
        setNominatedList([...newNominatedList])

        //change movie status on main page
        let newMovies = movies.map(data => {
            if (item.imdbID === data?.imdbID) {
                data = { ...data, nominated: false }
                return data
            } else {
                return data
            }
        })

        setMovies([...newMovies])
    }

    const handleToggleNominatedPage = () => {
        setIsNominatedPageOpen(!isNominatedPageOpen)
    }

    return (
        <Layout>
            <StyledHome>

                <Search
                    getData={debounce(getData, 1000)}
                    nominatedListCount={nominatedList ? nominatedList.length : 0}
                    handleClickNominatedIcon={handleToggleNominatedPage}
                />


                <div>
                    {loading && <LoadingContainerComponent />}
                    {error && <ErrorContainerComponent error={error} />}
                    {(!loading && !error && movies?.length === 0) && <EmptyContainerComponent
                        description="Search for movie to nominate your favourite"
                    />}
                    {(movies.length > 0) &&
                        <div className="movies_container">
                            <MovieContainerComponent
                                movies={movies}
                                handleClickCardButton={handleAddMovieToNominatedList}
                            />
                        </div>
                    }
                </div>
                {
                    showTop && <ScrollToTopComponent handleScrollToTop={handleScrollToTop} />
                    }
            </StyledHome>

            {
                isFetching && (pagination.currentPage - 1 !== pagination.totalPage) && <p style={{ textAlign: 'center' }}> Fetching more Movies ...</p>
            }

<NominationList
isNominatedPageOpen={isNominatedPageOpen}
handleToggleNominatedPage={handleToggleNominatedPage}
nominatedList={nominatedList}
handleRemoveMovieFromNominatedList={handleRemoveMovieFromNominatedList}
/>
      </Layout>
    )
}
