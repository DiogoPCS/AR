<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\clienteController;
use App\Http\Controllers\pedidoController;
use App\Http\Controllers\pistaController;
use App\Http\Controllers\rankingController;
use App\Http\Controllers\ReservaController;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::apiResource('reservas', ReservaController::class);

Route::get('reservas/disponiveis/{pista}/{data}', [ReservaController::class, 'disponiveis']);

Route::apiResource('/pedidos', pedidoController::class);

Route::apiResource('/clientes', clienteController::class);

Route::apiResource('/pistas', pistaController::class);


Route::apiResource('/rankings', rankingController::class);
