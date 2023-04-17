import Container from '@/Components/Container';
import Pagination from '@/Components/Pagination';
import Table from '@/Components/Table';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/react';
import React from 'react'

export default function ArticleTable(props) {
    const { data: articles, meta, links } = props.articles;
    return (
        <Container>
            <Head title='Table' />
            <Table>
                <Table.Thead>
                    <tr>
                        <Table.Th>#</Table.Th>
                        <Table.Th>Title</Table.Th>
                        <Table.Th>Category</Table.Th>
                        <Table.Th>Tags</Table.Th>
                        <th></th>
                    </tr>
                </Table.Thead>
                <Table.Tbody>
                    {articles.length ?
                        articles.map((article, i) => (
                            <tr key={article.id}>
                                <Table.Td>{meta.from + i}</Table.Td>
                                <Table.Td>
                                    <Link href={article.url}>{article.title}</Link>
                                </Table.Td>
                                <Table.Td>
                                    <Link href={article.category.url}>{article.category.name}</Link>
                                </Table.Td>
                                <Table.Td>
                                    {article.tags.map((tag, i) => (
                                        <span key={i} href={tag.url}>{tag.name}</span>
                                    ))}
                                </Table.Td>
                                <td>
                                    <Table.Dropdown>
                                        <Table.DropdownItem href={route('articles.show', article.slug)}>View</Table.DropdownItem>
                                        <Table.DropdownItem href={route('articles.edit', article.slug)}>Edit</Table.DropdownItem>
                                        <Table.DropdownItem className='hover:bg-rose-50 hover:text-rose-500' href={``}>Delete</Table.DropdownItem>
                                    </Table.Dropdown>
                                </td>
                            </tr>
                        ))
                        :
                        <tr>
                            <Table.Td>
                                <p>You don't have articles yet.</p>
                            </Table.Td>
                        </tr>
                    }
                </Table.Tbody>
            </Table>
            <Pagination {...{ meta, links }} />
        </Container>
    )
}

ArticleTable.layout = page => <App children={page} />
