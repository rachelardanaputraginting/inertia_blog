import Container from '@/Components/Container';
import Pagination from '@/Components/Pagination';
import Table from '@/Components/Table';
import useSwal from '@/Hooks/useSwal';
import App from '@/Layouts/App';
import { Head, Link } from '@inertiajs/react';
import React from 'react'

export default function ArticleTable(props) {
    const { data: articles, meta, links } = props.articles;
    const { ask } = useSwal();
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
                                    <div className="flex gap-x-1">
                                        {article.tags.map((tag, i) => (
                                            <span className='bg-gray-100 hover:bg-gray-300 transition font-medium py-1 px-2 text-xs rounded' key={i} href={tag.url}>{tag.name}</span>
                                        ))}
                                    </div>
                                </Table.Td>
                                <td>
                                    <Table.Dropdown>
                                        <Table.DropdownItem href={route('articles.show', article.slug)}>View</Table.DropdownItem>
                                        <Table.DropdownItem href={route('articles.edit', article.slug)}>Edit</Table.DropdownItem>
                                        <Table.DropdownButton onClick={() => {
                                            ask({
                                                url: route('articles.destroy', article.slug),
                                                method: "delete",
                                                message: "You sure you want to delete it?"
                                            })
                                        }} className='hover:bg-rose-50 hover:text-rose-500'>Delete</Table.DropdownButton>
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
