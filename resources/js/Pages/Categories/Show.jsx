import Header from '@/Components/Header'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Show({category}) {
    return (
        <div>
            <Head title="" />
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>This page will show you the articles about {category.name}</Header.Subtitle>
            </Header>
        </div>
    )
}


Show.layout = page => <App children={page} />
