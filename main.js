const display = document.getElementById("display");
    const numberBoard = document.getElementById("numberBoard");

    let pool = [];
    let rolling = false;

    function init() {
      pool = Array.from({ length: 80 }, (_, i) => i + 1);
      shuffle(pool);
      display.textContent = "--";
      renderBoard();
    }

    function shuffle(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    function renderBoard() {
      numberBoard.innerHTML = "";
      for (let i = 1; i <= 80; i++) {
        const div = document.createElement("div");
        div.className = "num";
        div.id = "num-" + i;
        div.textContent = i;
        numberBoard.appendChild(div);
      }
    }

    function draw() {
      if (pool.length === 0 || rolling) return;
      rolling = true;

      let interval = setInterval(() => {
        display.textContent = Math.floor(Math.random() * 80) + 1;
      }, 50);

      setTimeout(() => {
        clearInterval(interval);
        const result = pool.pop();
        display.textContent = result;
        document.getElementById("num-" + result).classList.add("called");
        rolling = false;
      }, 2200);
    }

    function resetGame() {
      init();
    }

    init();