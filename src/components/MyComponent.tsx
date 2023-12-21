import { memo } from 'react';

const MyComponent = () => {
    console.log("MYCOMPONENT");

    return (
        <div>MyComponent</div>
    );
};

export default memo(MyComponent);