<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ArticleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            "picture" => ['nullable', 'mimes:png,jpg, jpeg', 'image'],
            "title" => ['required', 'string', 'min:3'],
            "teaser" => ['required', 'string', 'min:3'],
            "body" => ['required', 'string', 'min:3'],
            "category_id" => ['required', 'exists:categories,id'],
            "tags" => ['required', 'array']
        ];
    }
}
