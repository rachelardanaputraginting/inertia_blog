import React from 'react'
import InputLabel from './InputLabel'
import Error from './Error'
import Textarea from './Textarea'
import Editor from './Editor'
import MultipleSelect from './MultipleSelect'
import Select from './Select'
import InputFile from './InputFile'
import { usePage } from '@inertiajs/react'
import Input from './Input'

export default function ArticleForm({ data, setData }) {
    const {errors, tags, categories} = usePage().props;

    const onChange = (e) => {
        setData(e.target.name, e.target.value)
    }
    return (
        <>
            <div className="mb-6">
                <InputLabel htmlFor="picture" value="Picture" />
                <InputFile name='picture' id='picture' onChange={(e) => setData('picture', e.target.files[0])} />
                {errors.picture ? <Error className='' value={errors.picture} /> : null}
            </div>
            <div className="grid grid-cols-12 gap-6 mb-6">
                <div className="col-span-4">
                    <InputLabel htmlFor='category_id' value="Category" />
                    <Select value={data.category_id} data={categories} onChange={(e) => setData('category_id', e)} />
                    {errors.category_id ? <Error className='' value={errors.category_id} /> : null}
                </div>
                <div className="col-span-8">
                    <InputLabel htmlFor='tags' value="Category" />
                    <MultipleSelect selectedItem={data.tags} data={tags} onChange={(e) => setData('tags', e)} />
                    {errors.tags ? <Error className='' value={errors.tags} /> : null}
                </div>
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="title" value="Title" />
                <Input name='title' id='title' onChange={onChange} value={data.title} />
                {errors.title ? <Error className='' value={errors.title} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="teaser" value="Teaser" />
                <Textarea name='teaser' id='teaser' onChange={onChange} value={data.teaser} />
                {errors.teaser ? <Error className='' value={errors.teaser} /> : null}
            </div>
            <div className="mb-6">
                <InputLabel htmlFor="body" value="Body" />
                <Editor name='body' id='body' onChange={onChange} value={data.body} />
                {errors.body ? <Error className='' value={errors.body} /> : null}
            </div>
        </>
    )
}
