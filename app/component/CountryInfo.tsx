interface CountryInfoProps {
    name:string;
    population:string;
    capital:string;
}

const CountryInfo=({name,population,capital}:CountryInfoProps)=>{
    return(
        <div className="border p-4 rouonded-lg shadow-md bg-violet-900">
        <h1 className="text-2xl font-bold mb-4">{name}</h1>
        <p className="text-lg"><strong>Population:</strong>{population}</p>
        <p className="text-lg"><strong>Capital:</strong>{capital}</p>

        </div>
    )
};

export default CountryInfo;