<?php

namespace App\Models;
use App\Models\Pedido;

use Illuminate\Database\Eloquent\Model;

class Cliente extends Model
{
    protected $fillable = [
        'id',
        'nome',
        'telefone',
        'email',
        'senha',
        
    ];
    public function pedido()
  {
     return $this->hasMany(Pedido::class, 'clienteID');
  }
}
