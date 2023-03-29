<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Laravel React : Google Translate</title>
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link rel="stylesheet" href="//cdn.quilljs.com/1.2.6/quill.snow.css">
</head>
<body>
    <!-- React root DOM -->
    <div id="example">
    </div>
    <!-- React JS -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    {{-- <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>
  <script type="text/javascript">
    function googleTranslateElementInit() {
      new google.translate.TranslateElement(
        {
          pageLanguage: "en",
          layout: window.google.translate.TranslateElement.InlineLayout.VERTICAL,
        }, 
        'google_translate_element'
      );
    }
  </script> --}}
  <style>
    body{
        top: 0px !important; 
        position: static !important; 
    }
    .goog-te-banner-frame{
        display:none !important
    }
    .goog-te-combo{
        width: 100%;
        height: 40px;
        border-radius: 5px;
    }
    .goog-te-gadget {
        color: #040f1c00;
    }
    .goog-logo-link, .goog-logo-link:link, .goog-logo-link:visited, .goog-logo-link:hover, .goog-logo-link:active {
     font-size: 12px;
     font-weight: bold;
     color: #040f1c00;
     text-decoration: none;
     visibility: hidden;
    }
    .VIpgJd-ZVi9od-ORHb-OEVmcd{
     display: none;
    }
    .VIpgJd-ZVi9od-l4eHX-hSRGPd{
     display: none;
    }
 </style>
</body>
</html>