import { memo } from "react";

type FilterProps = {
    handleFilterChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const CryptoFilterForm: React.FC<FilterProps> = ({ handleFilterChange }) => {
    console.log('CRYPTO FILTER FORM');
    
    return (
        <input onChange={handleFilterChange} placeholder="Filter" type="text" />
    );
};

export default memo(CryptoFilterForm);