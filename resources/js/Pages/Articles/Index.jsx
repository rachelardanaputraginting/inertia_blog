import ArticleBlock from '@/Components/ArticleBlock'
import Container from '@/Components/Container'
import Grid from '@/Components/Grid'
import Header from '@/Components/Header'
import Pagination from '@/Components/Pagination'
import App from '@/Layouts/App'
import { Head } from '@inertiajs/react'
import React from 'react'

export default function Index({ category, ...props }) {
    const { data: articles, meta, links } = props.articles;
    return (
        <div>
            <Head title="The Articles" />
            <Header>
                <Header.Title>The Articles</Header.Title>
                <Header.Subtitle>Read if you ned it!</Header.Subtitle>
            </Header>

            <Container>
                {articles.length ?
                    <>
                        <Grid>
                            {articles.map((article) => <ArticleBlock article={article} key={article.slug} />)}
                        </Grid>
                        <Pagination {...{ meta, links }} />
                    </>
                    : <p>No article yet!</p>}
            </Container>
        </div>
    )
}


Index.layout = page => <App children={page} />
