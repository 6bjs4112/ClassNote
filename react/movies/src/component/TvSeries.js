import React, { useEffect, useState } from 'react'
import axios from 'axios'

let clickCount = 1;

export default function TvSeries() {
    const [tvData, setTvData] = useState([]);
    const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 추가

    const dbData = axios.create({
        baseURL: 'https://api.themoviedb.org/3',
        params: {api_key:'f89a6c1f22aca3858a4ae7aef10de967'}
    })
    
    useEffect(function(){
        dbData
        .get('/tv/top_rated')
        .then(res=>{
            const tvSer = res.data;
            console.log(tvSer);
            setTvData(tvSer.results);
        })
    },[])

    const handleSearch = () => {
        // 검색 버튼 클릭 시 호출되는 함수
        dbData
        .get(`/search/tv?query=${searchQuery}`) // 검색어를 포함하여 API 호출
        .then((res) => {
            const tvSer = res.data;
            setTvData(tvSer.results);
        })
    };
       //더보기 버튼 
    function more(){
        clickCount+=1;
        dbData.get(`/tv/top_rated?page=${clickCount}`)
        .then((res) => {
            const tvMore = res.data;
            // console.log(tvMore);
            setTvData([...tvData,...tvMore.results])
        })
    }

    return (
        <>
        <section className='serMov'>
            <h1>TV Series</h1>
            <div>
                <input type='text'placeholder='Enter keyword'
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>search</button>
            </div>
            <ul>
                {tvData.map((tv) => (
                <li key={tv.id}>
                    <img src={`https://image.tmdb.org/t/p/w200${tv.poster_path}`}/>
                    <h2>{tv.name}</h2>
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

