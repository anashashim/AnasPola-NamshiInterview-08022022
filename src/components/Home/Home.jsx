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
            setNews(data.articles);
        });
    }, [country]);
    return (
        <>
            <div>
                <Countries selectedCountry={selectedCountry}></Countries>
                <div>
                    {news && news.map((value, index) => <div>
                        <h5>{value.title}</h5>
                        <p>{value.description}</p>
                    </div>)}
                </div>
            </div>
        </>
    )
};

export default Home;