<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pedido extends Model
{
    protected $fillable = [
        'horario_inicial',
        'horario_final',
        'clienteID',
        'dia',
        'preco',
        'pistaID',
    ];

    public function cliente()
    {
        return $this->belongsTo(Cliente::class, 'clienteID');
    }

    public function pista()
    {
        return $this->belongsTo(Pista::class, 'pistaID');
    }
}
