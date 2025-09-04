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
    Schema::create('pedidos', function (Blueprint $table) {
    $table->id();
    $table->time('horario_inicial');
    $table->time('horario_final');
    $table->date('dia');
    $table->decimal('preco', 10, 2);
    
  
   $table->foreignId('clienteID')->constrained('clientes')->onDelete('cascade');

    $table->foreignId('pistaID')->constrained('pistas')->onDelete('cascade');

    $table->timestamps();
});

        
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pedidos');
    }
};
