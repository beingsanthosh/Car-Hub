
"use client";
import React from 'react'
import { ShowMoreProps } from '@/types';
import {useRouter} from 'next/navigation';
import CustomButton from './CustomButton';
import { SearchParams } from 'next/dist/server/request/search-params';
import { updateSearchParams } from '@/utils';
const ShowMore = ({pageNumber,isNext}:ShowMoreProps) => {
    const router=useRouter();
    const handleNavigation=()=>{
        const newLimit = (pageNumber + 1) * 10;

    // Update the "limit" search parameter in the URL with the new value
    const newPathname = updateSearchParams("limit", `${newLimit}`);
    
    router.push(newPathname);
    };

  return (
    <div className='w-full flex-center gap-5 mt-10'>
        {!isNext && (
            <CustomButton

            title="Show More"
            btnType="button"
            containerStyles="bg-primary-blue rounded-full text-white"
            handleClick={handleNavigation}
            />
        )}
    </div>
  )
}

export default ShowMore