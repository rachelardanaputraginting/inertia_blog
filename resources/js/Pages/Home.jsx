import ArticleBlock from '@/Components/ArticleBlock'
import Container from '@/Components/Container'
import Grid from '@/Components/Grid'
import Header from '@/Components/Header'
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Home({ articles }) {
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
                {articles.length ?
                    <>
                        <Grid className='items-start'>
                            {articles.map((article) => <ArticleBlock article={article} key={article.slug} />)}
                        </Grid>
                        <Link className="text-blue-600 block mt-10" href={route('articles.index')}>Show more articles.</Link>
                    </>
                    :
                    <p>No article yet!</p>}
            </Container>
        </div>
    )
}

Home.layout = page => <App children={page} />
