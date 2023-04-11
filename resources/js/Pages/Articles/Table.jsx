import Container from '@/Components/Container';
import Pagination from '@/Components/Pagination';
import { Link } from '@inertiajs/react';
import React from 'react'

export default function ArticleTable(props) {
    const { data: articles, meta, links } = props.articles;
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.length ?
                        articles.map((article, i) => (
                            <tr key={article.id}>
                                <td>{meta.from + i}</td>
                                <td>
                                    <Link href={article.url}>{article.title}</Link>
                                </td>
                                <td>
                                    <Link href={article.category.url}>{article.category.name}</Link>
                                </td>
                                <td>
                                    {article.tags.map((tag, i) => (
                                        <span key={i} href={tag.url}>{tag.name}</span>
                                    ))}
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <td>
                                <p>You don't have articles yet.</p>
                            </td>
                        </tr>
                    }
                </tbody>
            </table>
            <Pagination {...{ meta, links }} />
        </Container>
    )
}

ArticleTable.Layout = (page) => <App children={page} />
