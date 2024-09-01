document.getElementById('generate-map').addEventListener('click', function() {
  const totalRooms = parseInt(document.getElementById('total-rooms').value);
  const roomMap = document.getElementById('room-map');
  roomMap.innerHTML = ''; // Clear previous map

  if (totalRooms > 0) {
    for (let i = 1; i <= totalRooms; i++) {
      const roomDiv = document.createElement('div');
      roomDiv.classList.add('room');
      roomDiv.innerHTML = `
        <h3>Room ${i}</h3>
        <input type="text" placeholder="Guest Name">
      `;
      roomMap.appendChild(roomDiv);
    }
  }
});
