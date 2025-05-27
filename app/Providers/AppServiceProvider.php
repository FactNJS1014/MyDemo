<?php

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\App;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Set log path to /tmp
        Log::useFiles('/tmp/laravel.log');

        // Set paths to tmp if running on Vercel
        if (App::environment('production')) {
            config([
                'view.compiled' => '/tmp',
                'cache.stores.file.path' => '/tmp',
                'session.files' => '/tmp',
            ]);
        }
    }

    public function register() {}
}
