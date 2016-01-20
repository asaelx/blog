<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UserNetworksRequest extends Request
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
            'twitter' => 'url',
            'facebook' => 'url',
            'instagram' => 'url',
            'youtube' => 'url'
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
            'twitter.url' => 'Twitter tiene que tener una url válida',
            'facebook.url' => 'Facebook tiene que tener una url válida',
            'instagram.url' => 'Instagram tiene que tener una url válida',
            'youtube.url' => 'Youtube tiene que tener una url válida'
        ];
    }
}
