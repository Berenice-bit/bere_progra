<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Actividad extends Model
{
    use HasFactory;

    protected $table = 'actividades';

    protected $fillable = [
        'titulo',
        'descripcion',
        'fecha_inicio',
        'fecha_fin',
        'precio_por_persona',
        'indicador_popularidad'
    ];

    public function reservas()
    {
        return $this->hasMany(Reserva::class, 'actividad_id');
    }
}
