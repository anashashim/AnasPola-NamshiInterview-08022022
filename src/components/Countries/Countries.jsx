import { useEffect, useState } from 'react';
import { loadCountries } from '../../services/countriesService';
const countryFields = ["name", "alpha2Code"];

const Countries = ({selectedCountry}) => {
    const [countries, setCountries] = useState([]);
    const [selectCountry, setSelectedCountry] = useState('');
    const changeSelectedCountry = ({target}) =>{
        setSelectedCountry(target.value);
        console.log(target.value)
        selectedCountry(target.value);
    }
    useEffect(() => {
        loadCountries(countryFields).then((data) => {
            setCountries(data);
        });
    }, []);
    return (<div>
        <select
            value={selectCountry}
            onChange={changeSelectedCountry}
        >
            {countries.map((value, index) => <option value={value.alpha2Code} >{value.name}</option>)}
        </select>
    </div>)
}

export default Countries;