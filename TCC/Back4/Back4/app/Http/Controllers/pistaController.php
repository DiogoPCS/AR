<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pista;
class pistaController extends Controller
{
    public function index()
    {
        return Pista::all();
    }

    public function store(Request $request)
    {
           $pista = Pista::create($request->all());


        return response()->json($pista, 201); 
    }
    public function show($id)
    {
        return Pista::find($id);
    }

    public function update(Request $request, $id)
    {
        $pista = Pista::find($id);
        $pista-> num_pista = $request->input('num_pista');
        $pista-> horario_dispo= $request->input('horario_dispo');
        $pista->save();

        return $pista;
    }

    public function destroy($id)
    {
        $pista = Pista::find($id);
        $pista->delete();

        return 'Pista deletada';
    }
}
