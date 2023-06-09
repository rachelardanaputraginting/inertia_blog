import ArticleBlock from '@/Components/ArticleBlock'
import Container from '@/Components/Container'
import Grid from '@/Components/Grid'
import Header from '@/Components/Header'
import Pagination from '@/Components/Pagination'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Show({ category, ...props }) {
    const { data: articles, meta, links } = props.articles;
    return (
        <div>
            <Head title={category.name} />
            <Header>
                <Header.Title>{category.name}</Header.Title>
                <Header.Subtitle>This page will show you the articles about {category.name}</Header.Subtitle>
            </Header>

            <Container>
                {articles.length ?
                    <>
                        <Grid className='items-start'>
                            {articles.map((article) => <ArticleBlock article={article} key={article.slug} />)}
                        </Grid>
                        <Pagination {...{ meta, links }} />
                    </>
                    : <p>No article yet!</p>}
            </Container>
        </div>
    )
}


Show.layout = page => <App children={page} />
