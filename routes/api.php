<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/textarea-list', [ProductController::class, 'textareadata'])->name('textarea.list');
Route::post('/textarea-store', [ProductController::class, 'textareadata_store'])->name('textarea.store');
Route::get('/textarea-view/{id}', [ProductController::class, 'textareadata_view'])->name('textarea.show');
Route::post('/textarea-update', [ProductController::class, 'textareadata_update'])->name('textarea.update');
Route::get('/textarea-delete/{id}', [ProductController::class, 'textareadata_destroy'])->name('textarea.delete');


Route::get('/product', [ProductController::class, 'index'])->name('product.index');
Route::post('/product-search', [ProductController::class, 'search'])->name('product.search');

Route::get('/stream', [ProductController::class, 'stream'])->name('stream.index');


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
