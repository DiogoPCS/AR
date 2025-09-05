<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bloqueio;

class BloqueioController extends Controller
{
    function adicionar(Request $request) {
        // Você pode nesse momento fazer as validações dos dados no back
        // $dados = $request->validate([
        //     'name' => 'required|string|max:255',
        //     'email' => 'required|string|email|max:255|unique:users',
        //     'password' => 'required|string|min:6|confirmed'
        // ]);

        $bloqueio = Bloqueio::create($request->all());

        $bloqueios = Bloqueio::all();

        return response()->json([
            'message' => 'Blqoueio adicionado com sucesso!',
            'bloqueio' => $bloqueio,
            'bloqueios' => $bloqueios
        ], 201);
    }

    function todos() {

        $bloqueios = Bloqueio::all();

        return response()->json([
            'bloqueios' => $bloqueios
        ], 201);
    }
}
