<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Reserva extends Model
{
    protected $fillable = [
        "pista_id",
        "data_hora_inicio",
        "data_hora_fim"
    ];
    
    public function Pista()
    {
        return $this -> HasMany(Pista::class);
    }
}
