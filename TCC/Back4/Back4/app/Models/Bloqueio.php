<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Bloqueio extends Model
{
    protected $table = 'bloqueio'; //Nome da tabela igual da migration e do banco
    protected $fillable = ['data_inicial', 'data_final', 'dia_semana', 'recorrencia', 'pista'];

    //Deixar o laravel converter automaticamente o campo timestamp para datetime
    protected $casts = [
        'data_inicial' => 'datetime',
        'data_final'   => 'datetime',
    ];
}
