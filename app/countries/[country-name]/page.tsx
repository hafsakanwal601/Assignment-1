import { countriesData } from "@/app/data/countriesData";
import CountryInfo from "@/app/component/CountryInfo";

interface CountryPageProps{
    params:{country:string}
}

export default function CountryPage({params}:CountryPageProps){
    const countryName=params.country;
        const country=countriesData [countryName as keyof typeof countriesData];

    


if (!country){
    return
<div className="text-center bg-red-950 text-white text-2xl">Country Not Found!</div>  
    
};


return(
    <div className="min-h-screen flex items-center justify-center bg-green-950">
     <div className="max-w-lg w-full bg-yellow-100 shadow-lg p-8 rounded-lg">
    <h1 className="text-3xl font-bold text-center mb-6">{country.name}</h1>

    <CountryInfo
    name={country.name}
    capital={country.capital}
    population={country.population}
   
    />     
    </div>   
    </div>
)
};
