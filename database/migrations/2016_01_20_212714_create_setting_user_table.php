<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateSettingUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('setting_user', function(Blueprint $table) {
            $table->integer('setting_id')->unsigned()->index();
            $table->foreign('setting_id')
                    ->references('id')
                    ->on('settings');

            $table->integer('user_id')->unsigned()->index();
            $table->foreign('user_id')
                    ->references('id')
                    ->on('users');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('setting_user', function(Blueprint $table) {
            $table->dropForeign(['setting_id']);
            $table->dropForeign(['user_id']);
        });

        Schema::drop('setting_user');
    }
}
