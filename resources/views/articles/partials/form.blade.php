
<div class="column medium-6 medium-centered">
  <label>
    Title
    {!! Form::text('title', null) !!}
  </label>
</div>
<div class="column medium-6 medium-centered">
  <label>
    Content
    {!! Form::textarea('body') !!}
  </label>
</div>
<div class="column medium-6 medium-centered">
  <label>
    Publish Date
    {!! Form::input('date', 'published_at', $article->published_at) !!}
  </label>
</div>
<div class="column medium-6 medium-centered">{!! Form::submit($submitButtonText, ['class' => 'button']) !!}</div>