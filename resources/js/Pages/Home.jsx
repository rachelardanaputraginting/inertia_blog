import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Home() {
    return (
        <div>
            {/* <Head title={import.meta.env.VITE_APP_NAME} /> */}
            <Head title="What's happening..." />
        </div>
    )
}

Home.layout = page => <App children={page} />
