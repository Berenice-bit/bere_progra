<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Actividad;

class ActividadesController extends Controller
{
    public function index(){
        return view("actividades.actividad");
    }

    public function obtener_solicitudes(Request $request)
    {
        $query = Actividad::query();

        // Filtros por fechas
        if ($request->has('fechasinicio') && $request->fechasinicio && $request->has('fechasfinal') && $request->fechasfinal) {
            $query->whereBetween('fecha_inicio', [$request->fechasinicio, $request->fechasfinal]);
        }

        if ($request->has('numero') && $request->numero) {
            $query->where('id', $request->numero);
        }

        // Ordenar por indicador de popularidad
        $query->orderBy('indicador_popularidad', 'desc');

        $actividades = $query->with('reservas')->get();

        return response()->json($actividades);
    }


}
