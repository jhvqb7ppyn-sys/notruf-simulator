<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8">
  <title>Notruf Simulation</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="app">
  <h1>🚨 Notruf Simulation</h1>

  <!-- CHAT -->
  <div id="chat"></div>

  <!-- BUTTONS -->
  <div id="answers"></div>

  <!-- 👉 INPUT FELD (DAS FEHLT BEI DIR) -->
  <div class="input-area">
    <input type="text" id="userInput" placeholder="Antwort eingeben...">
    <button onclick="sendText()">Senden</button>
  </div>

  <!-- PDF BUTTON -->
  <button id="exportBtn" onclick="exportPDF()">📄 Gespräch als PDF</button>
</div>

<!-- SCRIPTS GANZ UNTEN -->
<script src="flow.js"></script>
<script src="app.js"></script>

</body>
</html>
