document.addEventListener("DOMContentLoaded", () => {
    const saveButton = document.getElementById("saveButton");
    const nameInput = document.getElementById("name");
    const amountInput = document.getElementById("amount");
    const nameError = document.getElementById("nameError");
    const amountError = document.getElementById("amountError");
    const utangList = document.getElementById("nakautangs");
    const emptyListItem = document.getElementById("emptyList");
    
    saveButton.addEventListener("click", () => {
      const name = nameInput.value.trim();
      const amount = parseFloat(amountInput.value);
  
      let valid = true;
      nameError.textContent = "";
      amountError.textContent = "";
  
      if (!name) {
        nameError.textContent = "Pakilagay ang pangalan.";
        valid = false;
      }
  
      if (isNaN(amount) || amount <= 0) {
        amountError.textContent = "Pakilagay ang tamang halaga.";
        valid = false;
      }
  
      if (!valid) return;
  
      if (emptyListItem) {
        emptyListItem.remove();
      }
  
      const li = document.createElement("li");
      li.textContent = `${name} - ₱${amount.toFixed(2)}`;
      utangList.appendChild(li);
  
      nameInput.value = "";
      amountInput.value = "";
    });
  });
  