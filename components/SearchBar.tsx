"use client";
import React from 'react'
import { useRouter } from 'next/navigation';
import SearchManfacturer from './SearchManfacturer';
import { useState } from 'react';
import Image from 'next/image';
const SearchButton=({otherClasses}:{otherClasses:string})=>{
  return(
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
       src="/magnifying-glass.svg"
       alt="magnifying glass"
       width={40}
       height={40}
       className="object-contain"
      >

      </Image>
  </button>
  );
}
const SearchBar = ({setManfacturer,setModel}) => {
    const[searchManfacturer,setSearchManfacturer]=useState('');
    const[searchModel,setSearchModel]=useState('');
    const router=useRouter();
    const handleSearch=(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault();
      if(searchManfacturer==="" && searchModel==="")
      {
        return alert('Please fill in the search bar');
      }
      // updateSearchParams(searchModel.toLowerCase(),searchManfacturer.toLowerCase());
      setModel(searchModel)
      setManfacturer(searchManfacturer)
    }
  return (
    <form className='searchbar' onSubmit={handleSearch}>
        <div className='searchbar__item'>
            <SearchManfacturer
            selected ={searchManfacturer}
            setSelected={setSearchManfacturer}
            />
            <SearchButton otherClasses="sm:hidden"/>
        </div>
        <div className='searchbar__item'>
            <Image
            src="/model-icon.png"
            width={25}
            height={25}
            className="absolute w-[20px] h-[20px] ml-4"
            alt="" 
            />
            <input
              type='text'
              name="model"
              value={searchModel}
              onChange={(e)=>setSearchModel(e.target.value)}
              placeholder='Tiguan'
              className='searchbar__input'
            />
            <SearchButton otherClasses="sm:hidden"/>

            

            
        </div>
        <SearchButton otherClasses="max-sm:hidden"/>

    </form>
  )
}

export default SearchBar