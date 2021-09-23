<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

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

// Route::get('/', function () {
//     return view('welcome');
// })->middleware(['verify.shopify'])->name('home');

/*
Route::get('/{path?}', function () {
    return view('welcome');
})->where('path', '.*')->middleware(['verify.shopify'])->name('home');
*/

// Route::get('/{?}', [HomeController::class, 'index'])->middleware(['verify.shopify'])->name('home');

Route::get('/{any}', function ($any) {

    // any other url, subfolders also
    return view('welcome');
})->where('any', '.*');
