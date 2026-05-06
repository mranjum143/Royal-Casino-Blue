<!DOCTYPE html>
<html lang="ur">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Royal Casino Blue</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { background: radial-gradient(circle, #001d3d 0%, #000814 100%); color: white; overflow-x: hidden; }
        
        /* پریمیم گولڈن بٹن اور اینیمیشن */
        .gold-gradient { background: linear-gradient(180deg, #ffc300 0%, #ff9500 100%); }
        .royal-card { 
            background: linear-gradient(145deg, #003566, #001d3d);
            border: 2px solid #ffc300;
            box-shadow: 0 0 15px rgba(255, 195, 0, 0.3);
            border-radius: 20px;
            position: relative;
            overflow: hidden;
        }
        .royal-card::before {
            content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
            background: rgba(255,255,255,0.1); transform: rotate(45deg); pointer-events: none;
        }
        .glow-text { text-shadow: 0 0 10px #ffc300; }
        
        /* لوڈنگ اسکرین کا اصلی ڈیزائن */
        #loader { background: #000; display: flex; flex-direction: column; align-items: center; justify-content: center; position: fixed; inset: 0; z-index: 100; }
        .loading-bar { width: 80%; height: 12px; background: #111; border-radius: 10px; border: 1px solid #ffc300; overflow: hidden; margin-top: 20px; }
        .progress { height: 100%; background: linear-gradient(90deg, #ffc300, #fff); width: 0%; transition: 0.1s; }
    </style>
</head>
<body>

    <div id="loader">
        <div class="text-7xl animate-bounce">👑</div>
        <h1 class="text-4xl font-black gold-text glow-text mt-4">ROYAL CASINO</h1>
        <p class="text-blue-400 tracking-widest uppercase text-sm">Loading Premium Assets...</p>
        <div class="loading-bar"><div class="progress" id="p-bar"></div></div>
    </div>

    <div id="app" class="hidden">
        <div class="flex justify-between items-center p-4 border-b border-yellow-600 bg-black/50">
            <div class="flex items-center gap-2">
                <div class="w-10 h-10 rounded-full border-2 border-yellow-500 overflow-hidden">
                    <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmad" alt="User">
                </div>
                <div>
                    <p class="text-xs text-gray-400">Welcome,</p>
                    <p class="text-sm font-bold gold-text">Ahmad Nafees</p>
                </div>
            </div>
            <div class="bg-blue-900/50 px-4 py-2 rounded-xl border border-yellow-500 flex items-center gap-2">
                <span class="text-yellow-400">💰</span>
                <span class="font-black text-lg">₨ 70.00</span>
            </div>
        </div>

        <div class="m-4 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-600">
            <div class="gold-gradient p-4 text-black flex justify-between items-center">
                <div>
                    <h3 class="font-black text-xl italic">MEGA BONUS!</h3>
                    <p class="text-xs font-bold uppercase">First Deposit + 77 Free</p>
                </div>
                <button class="bg-black text-white px-4 py-2 rounded-full text-xs font-bold animate-pulse">CLAIM NOW</button>
            </div>
        </div>

        <div class="grid grid-cols-2 gap-4 p-4">
            <div onclick="playGame('Dragon Tiger')" class="royal-card h-40 flex flex-col items-center justify-center group">
                <div class="text-4xl group-active:scale-125 transition">🐉 🆚 🐯</div>
                <p class="mt-2 font-black text-sm uppercase glow-text">Dragon vs Tiger</p>
                <div class="absolute top-0 right-0 bg-red-600 text-[10px] px-2 py-1 rounded-bl-lg font-bold">HOT</div>
            </div>

            <div onclick="playGame('Mines')" class="royal-card h-40 flex flex-col items-center justify-center">
                <div class="text-4xl">💣</div>
                <p class="mt-2 font-black text-sm uppercase glow-text">Mines</p>
            </div>

            <div onclick="playGame('Teen Patti')" class="royal-card h-40 flex flex-col items-center justify-center">
                <div class="text-4xl">🃏</div>
                <p class="mt-2 font-black text-sm uppercase glow-text">Teen Patti</p>
            </div>

            <div onclick="playGame('Roulette')" class="royal-card h-40 flex flex-col items-center justify-center">
                <div class="text-4xl">🎡</div>
                <p class="mt-2 font-black text-sm uppercase glow-text">Roulette</p>
            </div>
        </div>

        <div class="fixed bottom-0 w-full grid grid-cols-4 bg-black/90 border-t border-yellow-700 p-2">
            <button class="flex flex-col items-center text-yellow-500"><span class="text-xl">🏠</span><p class="text-[10px]">Lobby</p></button>
            <button onclick="openDeposit()" class="flex flex-col items-center text-gray-400"><span class="text-xl">💳</span><p class="text-[10px]">Deposit</p></button>
            <button class="flex flex-col items-center text-gray-400"><span class="text-xl">🎁</span><p class="text-[10px]">Promos</p></button>
            <button class="flex flex-col items-center text-gray-400"><span class="text-xl">👤</span><p class="text-[10px]">Support</p></button>
        </div>
    </div>

    <script>
        // Smooth Loader Logic
        let p = 0;
        let pBar = document.getElementById('p-bar');
        let loader = document.getElementById('loader');
        let app = document.getElementById('app');

        let interval = setInterval(() => {
            p += 1;
            pBar.style.width = p + '%';
            if(p >= 100) {
                clearInterval(interval);
                loader.style.display = 'none';
                app.style.display = 'block';
            }
        }, 30);

        function openDeposit() {
            // جاز کیش آٹو لنک
            window.location.href = "intent://transfer?number=03037264598&amount=100#Intent;scheme=jazzcash;package=com.techlogix.mobilinkcustomer;end";
        }

        function playGame(name) {
            alert("Entering " + name + " Table... [Kill Logic Active]");
        }
    </script>
</body>
</html>
