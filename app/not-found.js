import Link from 'next/link';

export default function NotFound() {
    return (
        <main style={{ textAlign: 'center', background: '#1b1b1c', borderRadius: '10px', padding: '30px' }}>
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
        </main>
    );
}