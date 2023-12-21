import { memo } from "react";

type CryptoFormProps = {
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name: string
}

const CryptoForm = ({ handleSubmit, handleChange, name }: CryptoFormProps) => {    
    
    console.log("CRYPTO FORM");

    return (
        <form style={{ margin: '20px 0' }} onSubmit={handleSubmit}>
            <input onChange={handleChange} value={name} type="text" />
            <button>Add</button>
        </form>
    );
};

export default memo(CryptoForm);