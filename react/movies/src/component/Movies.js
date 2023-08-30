import React, { useEffect, useState } from 'react'
import axios from 'axios'

let clickCount = 1

export default function Movies() {
    const [movieData, setMovieData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 추가

    const dbData = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        params: {api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
    })
    
    //기본 띄우기
    useEffect(function(){
        dbData
        .get(`/movie/upcoming?page=1`,'/movie/popular','/movie/top_rated')
        .then(res=>{
            const movieSer = res.data;
            setMovieData(movieSer.results);
        })
    },[])

    // 검색 기능
    const handleSearch = () => {
        dbData
        .get(`/search/movie?query=${searchQuery}`) // 검색어를 포함하여 API 호출
        .then((res) => {
            const movieSer = res.data;
            setMovieData(movieSer.results);
            movieData.map((movie) => (
                <li key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                    <h2>{movie.title}</h2>
                </li>
            ))
        })
        
    };
    
    //더보기 버튼 
    function more(){
        clickCount+=1;
        dbData.get(`/movie/upcoming?page=${clickCount}`)
        .then((res) => {
            const movieMore = res.data;
            // console.log(movieMore);
            setMovieData([...movieData,...movieMore.results])
        })
    }

    return (
        <>
        <section className='serMov'>
            <h1>Movies</h1>
            <div>
                <input type='text'placeholder='Enter keyword'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>search</button>
            </div>
            <ul>
                {movieData.map((movie) => (
                <li key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}/>
                    <h2>{movie.title}</h2>
                </li>
                ))}
            </ul>
        </section>
        <div className='load'>
            <button className='loadMore' onClick={more}>Load more</button>
        </div>
        </>
    )
}
