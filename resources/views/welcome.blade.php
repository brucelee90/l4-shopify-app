@extends('shopify-app::layouts.default')

@section('content')
<link
  rel="stylesheet"
  href="https://unpkg.com/@shopify/polaris@6.6.0/dist/styles.css"
/>

    <!-- You are: (shop domain name) -->
    {{-- <p>You are: {{ $shopDomain ?? Auth::user()->name }}</p> --}}
    <div id="root"></div>

@endsection

@section('scripts')
    @parent
    <script src="{{asset('js/app.js')}}"></script> 

    <script>
        actions.TitleBar.create(app, { title: 'Welcome' });
    </script>
@endsection
