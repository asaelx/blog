<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFilesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('files', function (Blueprint $table) {
            $table->increments('id');
            $table->string('url');
            $table->string('original_name');
            $table->enum('type', [
                'image',
                'audio',
                'video',
                'document',
                'profile_photo',
                'profile_cover',
                'article_cover'
            ]);
            $table->timestamps();
        });

        Schema::create('article_file', function(Blueprint $table) {
            $table->integer('article_id')->unsigned()->index();
            $table->foreign('article_id')
                    ->references('id')
                    ->on('articles');

            $table->integer('file_id')->unsigned()->index();
            $table->foreign('file_id')
                    ->references('id')
                    ->on('files');

            $table->timestamps();
        });

        Schema::create('file_user', function(Blueprint $table) {
            $table->integer('file_id')->unsigned()->index();
            $table->foreign('file_id')
                    ->references('id')
                    ->on('files');

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
        Schema::table('article_file', function(Blueprint $table) {
            $table->dropForeign(['article_id']);
            $table->dropForeign(['file_id']);
        });

        Schema::table('file_user', function(Blueprint $table) {
            $table->dropForeign(['file_id']);
            $table->dropForeign(['user_id']);
        });

        Schema::drop('article_file');
        Schema::drop('file_user');
        Schema::drop('files');
    }
}
