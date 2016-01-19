<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UpdateArticleRequest extends Request
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
     * @return array
     */
    public function rules()
    {
        return [
            'title'        => 'required',
            'body'         => 'required',
            'published_at' => 'required'
        ];
    }

    /**
     * Custom validation messages
     *
     * @return array
     */
    public function messages()
    {
        return [
            'title.required' => 'No le has puesto título a tu artículo',
            'body.required' => 'No has escrito tu artículo',
            'published_at.required' => 'No le has puesto una fecha de publicación a tu artículo'
        ];
    }
}
