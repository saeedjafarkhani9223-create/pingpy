<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>Pingpy | دستیار حقوقی ایران</title>

  <!-- PWA -->
  <link rel="manifest" href="manifest.json">
  <meta name="theme-color" content="#0f172a">

  <style>
    body{
      margin:0;
      font-family:sans-serif;
      background:#0f172a;
      color:#e5e7eb;
      height:100vh;
      display:flex;
      justify-content:center;
      align-items:center;
    }
    .app{
      width:100%;
      max-width:420px;
      height:90vh;
      background:#020617;
      border-radius:16px;
      display:flex;
      flex-direction:column;
      overflow:hidden;
    }
    header{
      padding:14px;
      text-align:center;
      border-bottom:1px solid #1e293b;
      font-weight:bold;
    }
    .chat{
      flex:1;
      padding:12px;
      overflow:auto;
    }
    .msg{
      margin-bottom:10px;
      line-height:1.6;
    }
    .user{color:#38bdf8;text-align:right}
    .bot{color:#facc15;text-align:left}
    footer{
      display:flex;
      border-top:1px solid #1e293b;
    }
    input{
      flex:1;
      padding:12px;
      background:#020617;
      color:#fff;
      border:none;
      outline:none;
    }
    button{
      background:#2563eb;
      color:#fff;
      border:none;
      padding:0 18px;
    }
  </style>
</head>

<body>
  <div class="app">
    <header>Pingpy | دستیار حقوقی ایران</header>

    <div class="chat" id="chat"></div>

    <footer>
      <input id="q" placeholder="سؤال حقوقی‌ات را بنویس…" />
      <button onclick="ask()">ارسال</button>
    </footer>
  </div>

<script>
function add(text, cls){
  const d = document.createElement('div');
  d.className = 'msg ' + cls;
  d.innerText = text;
  chat.appendChild(d);
  chat.scrollTop = chat.scrollHeight;
}

function ask(){
  const q = document.getElementById('q').value.trim();
  if(!q) return;
  add(q,'user');

  let a = 'من فقط درباره حقوق ایران پاسخ می‌دهم.';
  if(q.includes('چک')) a = 'چک طبق قانون تجارت سند تجاری لازم‌الاجراست.';
  if(q.includes('قرارداد')) a = 'قرارداد طبق ماده ۱۰ قانون مدنی معتبر است.';
  if(q.includes('سفته')) a = 'سفته سند تجاری است ولی تابع شرایط خاص است.';

  setTimeout(()=>add(a,'bot'),500);
  document.getElementById('q').value='';
}

/* Service Worker */
if('serviceWorker' in navigator){
  navigator.serviceWorker.register('sw.js');
}
</scri
