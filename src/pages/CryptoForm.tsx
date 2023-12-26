import { memo } from "react";

type CryptoFormProps = {
    handleSubmit: (e: React.FormEvent) => void;
    handleNameChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleIconUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSymbolChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handlePriceChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
    iconUrl: string
    symbol: string
    price: string
}

const CryptoForm = ({ 
  handleSubmit, 
  handleNameChange, 
  handleIconUrlChange, 
  handleSymbolChange, 
  handlePriceChange, 
  name,
  iconUrl,
  symbol,
  price 
}: CryptoFormProps) => {    
    
    console.log("CRYPTO FORM");

    return (
        <form className="flex justify-center sm:col-span-3 w-full" onSubmit={handleSubmit}>
          <div className="flex justify-between gap-1 mt-2 w-3/6">
            <input onChange={handleNameChange} placeholder="Add coin name!" type="text" name="first-name" id="first-name" value={name} autoComplete="given-name" className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <input onChange={handleIconUrlChange} placeholder="Add coin iconUrl!" type="url" name="first-name" id="first-name" value={iconUrl} autoComplete="given-name" className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <input onChange={handleSymbolChange} placeholder="Add coin symbol!" type="text" name="first-name" id="first-name" value={symbol} autoComplete="given-name" className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <input onChange={handlePriceChange} placeholder="Add coin price!" type="text" name="first-name" id="first-name" value={price} autoComplete="given-name" className="block w-full p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            <button type="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add</button>
          </div>
        </form>
    );
};

export default memo(CryptoForm);