<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Pista extends Model
{
    protected $fillable = [
        'id',
        'num_pista',
        'horario_dispo',
       
    ];
     public function pedidos()
    {
        return $this->hasMany(Pedido::class);
    }
}
