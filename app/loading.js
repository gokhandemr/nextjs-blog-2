export default function Loading() {
    // Or a custom loading skeleton component
    return <div style={{ width: '100%', margin: '0 auto 30px', textAlign: 'center' }}>
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
}