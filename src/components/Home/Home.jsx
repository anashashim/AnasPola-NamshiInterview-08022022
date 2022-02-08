import React, {useState, useEffect} from 'react';
import Countries from '../Countries/Countries';
import { getNews } from '../../services/newsService';

const Home = () => {
    const [news, setNews] = useState([]);
    const [country, setCountry] = useState('in');
    const selectedCountry = (country) => {
        console.log(country);
        setCountry(country);
    }
    useEffect(() => {
        getNews(country).then((data) => {
            console.log(data.data);
            setNews(data.data.articles);
        });
    }, [country]);
    return (
        <>
            <div>
                <Countries selectedCountry={selectedCountry}></Countries>
                <div>
                    {news && news.map((value, index) => <div className='news'>
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                    </div>)}
                    {news.length===0 && <h3>No data</h3>}
                </div>
            </div>
        </>
    )
};

export default Home;