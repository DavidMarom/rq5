import React from 'react';

interface Page01Props {
    title: string;
    description: string;
}

const Page01: React.FC<Page01Props> = () => {
    return (
        <div>
            <h1>Page01</h1>
        </div>
    );
};

export default Page01;