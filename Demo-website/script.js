const form = document.getElementById("addProductForm");
const tableBody = document.getElementById("productTableBody");
const editForm = document.getElementById("editProductForm");

let currentRow = null; 


function openAddModal() {
  document.getElementById("addModal").style.display = "flex";
}

function closeAddModal() {
  document.getElementById("addModal").style.display = "none";
}


function openEditModal(button) {
  currentRow = button.closest("tr");

  document.getElementById("editName").value =
    currentRow.children[0].innerText;

  document.getElementById("editType").value =
    currentRow.children[1].innerText;

  document.getElementById("editQty").value =
    currentRow.children[2].innerText;

  const priceText = currentRow.children[3].innerText;
  document.getElementById("editPrice").value =
    priceText.replace(/[^\d]/g, "");

  document.getElementById("editModal").style.display = "flex";
}


function closeEditModal() {
  document.getElementById("editModal").style.display = "none";
}


form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const type = document.getElementById("type").value;
  const quantity = document.getElementById("quantity").value;
  const price = document.getElementById("price").value;

  const newRow = document.createElement("tr");

  newRow.innerHTML = `
    <td>${name}</td>
    <td>${type}</td>
    <td>${quantity}</td>
    <td>₹${price}</td>
    <td>
      <button class="action-btn edit" onclick="openEditModal(this)">
        Edit
      </button>
      <button class="action-btn delete" onclick="deleteRow(this)">
        Delete
      </button>
    </td>
  `;

  tableBody.appendChild(newRow);
  form.reset();
  closeAddModal();
});

editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  if (!currentRow) return;

  currentRow.children[0].innerText =
    document.getElementById("editName").value;

  currentRow.children[1].innerText =
    document.getElementById("editType").value;

  currentRow.children[2].innerText =
    document.getElementById("editQty").value;

  currentRow.children[3].innerText =
    "₹" + document.getElementById("editPrice").value;

  closeEditModal();
});


function deleteRow(button) {
  button.closest("tr").remove();
}
