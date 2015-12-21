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

        Schema::drop('article_file');
        Schema::drop('files');
    }
}
