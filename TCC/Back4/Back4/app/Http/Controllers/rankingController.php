<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Ranking;
class rankingController extends Controller
{

    public function index()
    {
        return Ranking::all();
    }
    public function store(Request $request)
    {
        $request->validate([
    'Nome' => 'required|string|max:255',
    'qnt_pontos' => 'required|integer',
    'categoria' => 'required|in:homem,mulher,crianca',
    ]);

        $ranking = Ranking::create([
    'Nome' => $request->Nome,
    'qnt_pontos' => $request->qnt_pontos,
    'categoria' => $request->categoria,
    ]);


        return response()->json($ranking, 201);
    }

    public function show($id)
    {
        return Ranking::find($id);
    }

    public function update(Request $request, $id)
    {
        $ranking = Ranking::find($id);
        $ranking-> nome = $request->input('Nome');
        $ranking-> qnt_pontos= $request->input('qnt_pontos');
        $ranking-> categoria= $request->input('categoria');
        $ranking->save();
        return $ranking;
    }

    public function destroy($id)
    {
        $ranking = Ranking::find($id);
        $ranking->delete();

        return 'jogador deletado';
    }
}


