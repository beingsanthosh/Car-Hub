
import { CarProps } from "@/types";
import { FilterProps } from "@/types";
export async function fetchCars(filters:FilterProps){
  const {manfacturer,year,model,limit,fuel}=filters;
    const headers= {
		'x-rapidapi-key': '6781b6d43amshb20379a19eeb0eep132327jsna83e4cc080df',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}
  const response =await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manfacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,{
      headers:headers,
    });
    const result=await response.json();
    return result;
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
export const generateCarImageUrl=(car:CarProps,angle?:string)=>{
    const url=new URL('https://cdn.imagin.studio/getimage');
    const{make,year,model}=car;
    url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;

}
export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};