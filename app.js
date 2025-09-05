// Simple Market Scanner Demo
function scanMarket() {
  const messages = [
    "📈 Nifty50 showing bullish trend!",
    "📉 BankNifty under selling pressure!",
    "🚀 Reliance breakout incoming!",
    "⚠️ Infosys sideways market!",
    "🔥 Tata Motors high volume spike!"
  ];

  // Random ek message pick karenge
  const result = messages[Math.floor(Math.random() * messages.length)];

  // Result ko HTML me show karenge
  document.getElementById("result").innerText = result;
}
