import Container from '@/Components/Container'
import Header from '@/Components/Header'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Home() {
    return (
        <div>
            {/* <Head title={import.meta.env.VITE_APP_NAME} /> */}
            <Head title={import.meta.env.VITE_APP_NAME} />
            <Header>
                <Header.Title>
                    Consectetur
                </Header.Title>
                <Header.Subtitle>
                    Lorem ipsum, dolor sit amet consectetur adipisicing.
                </Header.Subtitle>
                <Header.Content>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis esse similique aperiam illo quidem fugiat eligendi, labore iure numquam rerum, vero ea et obcaecati maiores! Sit neque pariatur eos sequi.
                </Header.Content>
            </Header>

            <Container>
                Home
            </Container>
        </div>
    )
}

Home.layout = page => <App children={page} />
