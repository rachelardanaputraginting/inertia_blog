import Container from '@/Components/Container'
import Header from '@/Components/Header'
import Markdown from '@/Components/Markdown'
import App from '@/Layouts/App'
import { Head, Link } from '@inertiajs/react'
import React from 'react'

export default function Show(props) {
    const { data: article, related: articles } = props.article;
    return (
        <div>
            <Head title={article.title} />

            <Header>
                <div className="mb-4">
                    <div className='text-gray-400 text-sm mb-4'> Fill in : <Link className='text-white underline' href={route('categories.show', article.category.slug)}>{article.category.name}</Link></div>
                    {article.tags.length ?
                        <div className='flex items-center gap-x-2'>
                            {article.tags.map(tag => (
                                <Link className='bg-gray-700 text-white px-2 py-1 text-xs font-medium hover:bg-gray-600 transition duration-200 rounded shadow border-t border-gray-600' key={tag.slug} href={route('tags.show', tag.slug)}>{tag.name}</Link>
                            ))}
                        </div>
                        : null
                    }
                </div>
                <Header.Title>{article.title}</Header.Title>
                <Header.Subtitle>{article.teaser}</Header.Subtitle>
            </Header>
            <Container>
                <div className="grid grid-cols-12 gap-16">
                    <div className="col-span-8">
                        {article.picture ?
                            <img className='rounded mb-6 w-full' src={article.picture} alt=""></img>
                            : null}
                        <Markdown>{article.body}</Markdown>
                    </div>
                    <div className="col-span-4">
                        <h4 className='w-full text-xl font-semibold text-black border-b pb-2 mb-4'>More about {article.category.name}</h4>
                        {articles.length ?
                            <ul className='space-y-2'>
                                {articles.map(article => (
                                    <li key={article.slug}><Link className='line-clamp-1 text-blue-600 decoration-blue-500 underline' href={route('articles.show', article.slug)}>{article.slug}</Link></li>
                                ))}
                            </ul>
                            : null}
                    </div>
                </div>
            </Container>
        </div>
    )
}

Show.layout = page => <App children={page} />
