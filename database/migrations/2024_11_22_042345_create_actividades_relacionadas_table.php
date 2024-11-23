<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateActividadesRelacionadasTable extends Migration
{
    public function up()
    {
        Schema::create('actividades_relacionadas', function (Blueprint $table) {
            $table->foreignId('actividad_id')->constrained('actividades');
            $table->foreignId('actividad_relacionada_id')->constrained('actividades');
            $table->primary(['actividad_id', 'actividad_relacionada_id']);
        });
    }

    public function down()
    {
        Schema::dropIfExists('actividades_relacionadas');
    }
}

