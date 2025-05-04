function Header() {
    return ( 
        <header style={{
            backgroundColor: '#0f172a',
            padding: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white'
        }}>
            <h1>Fit and Travel</h1>
            <nav>
                <a href="#" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Home</a>
                <a href="#" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none' }}>Blog</a>
                <a href="#" style={{ margin: '0 1rem', color: 'white', textDecoration: 'none'}}>Über</a>
            </nav>
            </header>
    )
}

export default Header
