<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Pedido;
use Illuminate\Support\Facades\DB;


class PedidoController extends Controller
{

    public function index()
    {

        $results = DB::table('pedidos')
            ->join('clientes', 'clientes.id', '=', 'pedidos.clienteID')
            ->join('pistas', 'pistas.id', '=', 'pedidos.pistaID')
            ->select(
                'clientes.nome as cliente_nome',
                'clientes.telefone as cliente_telefone',
                'pedidos.horario_inicial',
                'pedidos.horario_final',
                'pedidos.dia',
                'pistas.num_pista'
            )
            ->orderBy('pedidos.dia')
            ->get();

        return response()->json($results);

    }

    public function store(Request $request)
    {
        $request->validate([
            'clienteID' => 'required|exists:clientes,id',
            'pistaID' => 'required|exists:pistas,id',
            'horario_inicial' => 'required|string',
            'horario_final' => 'required|string',
            'dia' => 'required|date',
            'preco' => 'required|numeric'
        ]);


        $pedido = Pedido::create($request->all());


        return response()->json($pedido, 201);


    }

    public function show($id)
    {
        $pedido = Pedido::with(['cliente', 'pista'])->findOrFail($id);
        return response()->json($pedido);
    }

    public function update(Request $request, $id)
    {
        try {
            $pedido = Pedido::findOrFail($id);

            $request->validate([
                'horario_inicial' => 'sometimes|required|string',
                'horario_final' => 'sometimes|required|string',
                'dia' => 'sometimes|required|date',
                'preco' => 'sometimes|required|numeric'
            ]);

            if ($request->has('horario_inicial')) {
                $pedido->horario_inicial = $request->input('horario_inicial');
            }
            if ($request->has('horario_final')) {
                $pedido->horario_final = $request->input('horario_final');
            }
            if ($request->has('dia')) {
                $pedido->dia = $request->input('dia');
            }
            if ($request->has('preco')) {
                $pedido->preco = $request->input('preco');
            }

            $pedido->save();

            return response()->json($pedido);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        }
    }



    public function destroy($id)
    {
        $pedido = Pedido::findOrFail($id);
        $pedido->delete();

        return response()->json(['message' => 'Pedido deletado'], 200);
    }
}
