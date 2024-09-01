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
        <div class="guest-list"></div>
        <input type="text" class="guest-input" placeholder="Guest Name">
        <button class="add-guest">Add Guest</button>
      `;
      roomMap.appendChild(roomDiv);
    }

    // Add event listeners for adding guests
    document.querySelectorAll('.add-guest').forEach(button => {
      button.addEventListener('click', function() {
        const guestInput = this.previousElementSibling;
        const guestName = guestInput.value.trim();
        if (guestName) {
          const guestList = this.parentElement.querySelector('.guest-list');
          const guestItem = document.createElement('div');
          guestItem.textContent = guestName;
          guestList.appendChild(guestItem);
          guestInput.value = ''; // Clear input
        }
      });
    });
  }
});
