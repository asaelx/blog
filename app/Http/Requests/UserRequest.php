<?php

namespace App\Http\Requests;

use App\Http\Requests\Request;

class UserRequest extends Request
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
            'name'        => 'required',
            'email'       => 'required|email',
            'profile_pic' => 'image|max:2048'
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
            'name.required' => 'No puedes dejar tu perfil sin nombre',
            'email.required' => 'No puedes dejar tu perfil sin correo electrónico',
            'email.email' => 'El formato del correo electrónico está incorrecto',
            'profile_pic.image' => 'El archivo tiene que ser una imagen',
            'profile_pic.max' => 'La foto no puede ser mayor de 2MB'
        ];
    }
}
