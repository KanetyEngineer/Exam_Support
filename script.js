{
    const update = () => {
      // 日本時間の timezone 付きで指定
      const targetTime = new Date('2025-01-18T09:30+09:00').getTime();
      const diff = targetTime - Date.now();
      const numbers = [
        diff / 1000 / 60 / 60 / 24,
        (diff / 1000 / 60 / 60) % 24,
        (diff / 1000 / 60) % 60,
        (diff / 1000) % 60,
      ];
      Array.from(document.querySelectorAll('#container > .num'), (elm, i) => {
        elm.textContent = `${Math.floor(numbers[i])}`.padStart(2, 0);
      });
    };
    update();
    setInterval(update, 1000);
  }
