<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Reserva;

class ReservaController extends Controller
{
    public function guardar_reservas(Request $request)
    {

        $validatedData = $request->validate([
            'actividad_id' => 'required|integer',
            'numero_personas' => 'required|integer',
            'precio_por_persona' => 'required|numeric',
            'total' => 'required|numeric',
            'fecha_reserva' => 'required|date',
        ]);

        // Crear la reserva
        $reserva = Reserva::create([
            'actividad_id' => $validatedData['actividad_id'],
            'numero_personas' => $validatedData['numero_personas'],
            'precio_reserva' => $validatedData['precio_por_persona'],
            'total' => $validatedData['total'],
            'fecha_reserva' => $validatedData['fecha_reserva'],
        ]);

        return response()->json($reserva, 201);
    }
}
