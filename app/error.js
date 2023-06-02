'use client'; // Error components must be Client Components

import { useEffect } from 'react';

export default function Error({ error, reset }) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    return (
        <main style={{ textAlign: 'center', background: '#1b1b1c', borderRadius: '10px', padding: '30px' }}>
            <h2>Something went wrong!</h2>
            <button style={{ color: 'black', marginTop: '20px', padding: '0 20px', border: 'none', cursor: 'pointer' }} onClick={() => reset()}>Try again</button>
        </main>
    );
}