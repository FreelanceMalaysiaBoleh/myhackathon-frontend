import React from 'react'
import Header from './Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {

    return (
        <div style={{
            minHeight: '100vh',
        }}>
            <Header />
            <div style={{padding: 30, display: "flex", alignItems: "center", flexDirection: "column"}}>
                {children}
            </div>
        </div>
    )
}

export default MainLayout;