<?php

use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\ActividadesController;
use  App\Http\Controllers\ReservaController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Ruta GET para obtener datos de actividades
Route::get('/', [ActividadesController::class, 'index'])->name('actividades.index');
Route::get('/obtener_solicitudes', [ActividadesController::class, 'obtener_solicitudes'])->name('obtener_solicitudes');
Route::get('/obtener_actividad_detalle/{id}', [ActividadesController::class, 'obtenerDetalles'])->name('obtener_actividad_detalle');

// Ruta para guardar datos de reservas
Route::post('/reservas', [ReservaController::class, 'guardar_reservas'])->name('reservas');

// Ruta para mostrar detalles de una actividad específica
Route::get('/actividades/{id}', [ActividadController::class, 'show'])->name('show');


