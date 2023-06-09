import Footer from '@/Components/Footer'
import React from 'react'
import Navigation from './Navigation'

export default function App({ children }) {
    return (
        <div>
            <Navigation />
            <div className="pt-8">{children}</div>

            <Footer />
        </div>
    )
}
