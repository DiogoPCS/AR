<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Aluno;

class AlunoController extends Controller
{
    function cadastrar(Request $request) {
        // Validando os dados recebidos do front
        $dados = $request->validate([
            'nome' => 'required|string|max:150',
            'idade' => 'required|integer|min:5|max:100', //Conforme regra do BD de char, varchar, etc.
        ]);

        $aluno = Aluno::create($request->all()); //Cadastrar no banco
        
        return response()->json([ //resposta pro front
            'message' => 'Aluno adicionado com sucesso!',
            'aluno' => $aluno
        ], 201);

        //Consulte https://dolomite-daisy-5e8.notion.site/Inclus-o-de-Registro-POST-1-1c817e19e0cb808bb7a5de995f4559dd
        //Consulte https://dolomite-daisy-5e8.notion.site/Eloquent-Inserir-Registros-Create-Fillable-1-1c817e19e0cb80f7a42dc2f71a871787
    }

    function todos() {
        $lista_alunos = Aluno::all();

        return response()->json([
            'message' => 'Listagem de alunos carregada com sucesso',
            'lista_alunos' => $lista_alunos
        ], 201);

        //Consulte https://dolomite-daisy-5e8.notion.site/Sele-o-de-Registro-GET-1-1c817e19e0cb8038ae65eafcfda96982
    }

    function filtrarPorIdade(Request $request) {

        $lista_alunos = Aluno::where('idade', '=',  $request['idade'])->get();

        return response()->json([
            'message' => 'Filtro por idade foi aplicado com sucesso!',
            'lista_alunos' => $lista_alunos
        ], 201);

        //Consulte https://dolomite-daisy-5e8.notion.site/Eloquent-Sele-o-com-Where-1-1c817e19e0cb806c98a8ec567d8827a6
    }

    function editar(Request $request) {
        $lista_alunos = Aluno::where('id', '=', $request['id'])->update(['nome' => $request['nome'], 'idade' => $request['idade']]);

        return response()->json([
            'message' => 'Registro Atualizado com Sucesso'
        ], 201);

        // Consulte https://dolomite-daisy-5e8.notion.site/Eloquent-Atualizando-Registros-Where-e-Update-1-1c817e19e0cb800ca7b4ddaf16f37c11
     }

    function remover($id) {
        Aluno::where('id', $id)->delete();

        return response()->json([
            'message' => 'Aluno removido com sucesso'
        ], 201);

        //Consulte https://dolomite-daisy-5e8.notion.site/Eloquent-Deletando-Registros-delete-e-destroy-1-1c817e19e0cb80a6b0b6cfd026e67edf
     }
}
