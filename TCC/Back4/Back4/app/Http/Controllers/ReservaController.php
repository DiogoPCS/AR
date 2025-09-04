<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reserva;
use Carbon\Carbon;

class ReservaController extends Controller
{
    public function index(Request $request){
        return Reserva::all();
    }
   public function store(Request $request)
{
    $request->validate([
        'pista_id' => 'required|integer',
        'data_hora_inicio' => 'required|date_format:Y-m-d H:i:s',
        'data_hora_fim' => 'required|date_format:Y-m-d H:i:s|after:data_hora_inicio'
    ]);

    $existe = Reserva::where('pista_id', $request->pista_id)
        ->where(function ($query) use ($request) {
            $query->where('data_hora_inicio', '<', $request->data_hora_fim)
                  ->where('data_hora_fim', '>', $request->data_hora_inicio);
        })
        ->exists();

    if ($existe) {
        return response()->json(['erro' => 'Conflito de horário!'], 400);
    }

    $reserva = Reserva::create($request->all());

    return response()->json($reserva, 201);
}

    // horarios disponíveis para uma pista em um dia
  public function disponiveis($pistaId, $data)
{
    // horarios de funcionamento da pista (fixos)
    $horarios = [
        '14:00', '15:00', '16:00', '17:00',
        '18:00', '19:00', '20:00', '21:00'
    ];

    //  todas as reservas da pista nesse dia
    $reservas = Reserva::where('pista_id', $pistaId)
        ->whereDate('data_hora_inicio', $data)
        ->get(['data_hora_inicio', 'data_hora_fim'])
        ->map(fn($reserva) => [
            'inicio' => Carbon::parse($reserva->data_hora_inicio)->format('H:i'),
            'fim'    => Carbon::parse($reserva->data_hora_fim)->format('H:i')
        ])
        ->toArray();

    // filtra horários que não estão em nenhum intervalo reservado
    $disponiveis = array_filter($horarios, function($hora) use ($reservas) {
        foreach ($reservas as $reserva) {
            if ($hora >= $reserva['inicio'] && $hora < $reserva['fim']) {
                return false; // horário ocupado
            }
        }
        return true; // horário livre
    });

    return response()->json([
        'data' => $data,
        'pista_id' => $pistaId,
        'disponiveis' => array_values($disponiveis)
    ]);
}

  public function destroy($id)
    {
        $reserva = Reserva::find($id);
        $reserva->delete();

        return 'Reserva deletada';
    }

}
