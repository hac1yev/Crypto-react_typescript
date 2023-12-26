import { memo } from "react";

type FilterProps = {
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CryptoFilterForm: React.FC<FilterProps> = ({ handleFilterChange }) => {
    console.log('CRYPTO FILTER FORM');
    
    return (
        <input 
            onChange={handleFilterChange} 
            placeholder="Filter" 
            type="text"  
            name="first-name" 
            id="first-name" 
            autoComplete="given-name" 
            className="my-2.5 w-3/6 px-2 block mx-auto rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
        />
    );
};

export default memo(CryptoFilterForm);