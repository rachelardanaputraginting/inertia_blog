import Button from '@/Components/Button'
import Container from '@/Components/Container'
import Editor from '@/Components/Editor'
import Header from '@/Components/Header'
import Input from '@/Components/Input'
import InputFile from '@/Components/InputFile'
import InputLabel from '@/Components/InputLabel'
import MultipleSelect from '@/Components/MultipleSelect'
import Select from '@/Components/Select'
import Textarea from '@/Components/Textarea'
import App from '@/Layouts/App'
import { Head, useForm } from '@inertiajs/react'
import React from 'react'

export default function Create({ tags, categories }) {
    const { data, setData, post, errors } = useForm({
        title: '',
        teaser: '',
        category_id: '',
        body: '',
        picture: '',
        tags: [tags[0], tags[1]]

    })

    console.log(tags)

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(data)
    }

    return (
        <div>
            <Head title={'Create new Article'} />

            <Header>
                <Header.Title>{data.title || 'The title..'}</Header.Title>
                <Header.Subtitle>{data.teaser || 'The teaser..'}</Header.Subtitle>
            </Header>
            <Container>
                <form onSubmit={onSubmit}>
                    <div className="mb-6">
                        <InputLabel htmlFor="picture" value="Picture" />
                        <InputFile name='picture' id='picture' onChange={(e) => setData('picture', e.target.file[0])} />
                    </div>
                    <div className="grid grid-cols-12 gap-6 mb-6">
                        <div className="col-span-4">
                            <InputLabel htmlFor='category_id' value="Category" />
                            <Select value={data.category_id} data={categories} onChange={(e) => setData('category_id', e)} />
                        </div>
                        <div className="col-span-8">
                            <InputLabel htmlFor='tags' value="Category" />
                            <MultipleSelect selectedItem={data.tags} data={tags} onChange={(e) => setData('tags', e)} />
                        </div>
                    </div>
                    <div className="mb-6">
                        <InputLabel htmlFor="title" value="Title" />
                        <Input name='title' id='title' onChange={onChange} value={data.title} />
                    </div>
                    <div className="mb-6">
                        <InputLabel htmlFor="teaser" value="Teaser" />
                        <Textarea name='teaser' id='teaser' onChange={onChange} value={data.teaser} />
                    </div>
                    <div className="mb-6">
                        <InputLabel htmlFor="body" value="Body" />
                        <Editor name='body' id='body' onChange={onChange} value={data.body} />
                    </div>
                    <Button type="submit">Create</Button>
                </form>
            </Container>
        </div>
    )
}

Create.layout = page => <App children={page} />
