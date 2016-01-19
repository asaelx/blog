<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTagsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tags', function (Blueprint $table) {
            $table->increments('id');
            $table->string('name');
            $table->string('slug');
            // $table->boolean('nav');
            $table->timestamps();
        });

        Schema::create('article_tag', function(Blueprint $table) {
            $table->integer('article_id')->unsigned()->index();
            $table->foreign('article_id')
                    ->references('id')
                    ->on('articles');

            $table->integer('tag_id')->unsigned()->index();
            $table->foreign('tag_id')
                    ->references('id')
                    ->on('tags');

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
        Schema::table('article_tag', function(Blueprint $table) {
            $table->dropForeign(['article_id']);
            $table->dropForeign(['tag_id']);
        });

        Schema::drop('article_tag');
        Schema::drop('tags');
    }
}
