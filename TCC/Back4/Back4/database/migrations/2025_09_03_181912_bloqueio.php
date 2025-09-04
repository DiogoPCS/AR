<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('bloqueio', function (Blueprint $table) {
            $table->id();
            $table->dateTime('data_inicial');
            $table->dateTime('data_final');
            $table->string('dia_semana');
            $table->integer('recorrencia');
            $table->string('pista');
            $table->timestamps(); //cria automaticamente o campo created_at e updated_at
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('bloqueio');
    }
};
