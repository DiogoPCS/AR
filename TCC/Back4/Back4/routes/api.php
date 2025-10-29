<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\clienteController;
use App\Http\Controllers\pedidoController;
use App\Http\Controllers\pistaController;
use App\Http\Controllers\rankingController;
use App\Http\Controllers\ReservaController;
use App\Http\Controllers\BloqueioController;

use App\Http\Controllers\AlunoController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('reservas', ReservaController::class);

Route::get('reservas/disponiveis/{pista}/{data}', [ReservaController::class, 'disponiveis']);

Route::apiResource('/pedidos', pedidoController::class);

Route::apiResource('/clientes', clienteController::class);

Route::apiResource('/pistas', pistaController::class);


Route::apiResource('/rankings', rankingController::class);

Route::post('/bloqueio/adicionar', [BloqueioController::class, 'adicionar']);

Route::get('/bloqueio/todos', [BloqueioController::class, 'todos']);


//API de Exemplo CRUD
Route::post('/aluno/cadastrar', [AlunoController::class, 'cadastrar']);
Route::get('/aluno/todos', [AlunoController::class, 'todos']);
Route::post('/aluno/filtrar-por-idade', [AlunoController::class, 'filtrarPorIdade']);
Route::put('/aluno/editar', [AlunoController::class, 'editar']);
Route::delete('/aluno/remover/{id}', [AlunoController::class, 'remover']);
