<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reserva extends Model
{
    use HasFactory;

    protected $fillable = [
        'actividad_id',
        'numero_personas',
        'precio_reserva',
        'total',
        'fecha_reserva'
    ];
    public function actividad()
    {
        return $this->belongsTo(Actividad::class);
    }
}
