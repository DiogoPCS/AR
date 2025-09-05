<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Aluno extends Model
{
    protected $table = 'aluno'; //Nome da tabela igual da migration e do banco
    protected $fillable = ['nome', 'idade'];
}
