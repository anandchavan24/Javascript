document.addEventListener('DOMContentLoaded', fetchData);

async function fetchData() {
    console.log("Called");
    const userTableBody = document.getElementById('userTableBody');
    const searchInput = document.getElementById('searchInput');
    const loadingDiv = document.getElementById('loading');

    try {
        loadingDiv.style.display = 'block';
        const users = await fetchUsers();
        renderUsers(users);
        loadingDiv.style.display = 'none';
        setupSearchFunctionality();
    } catch (error) {
        loadingDiv.style.display = 'none';
        console.error('Error fetching and rendering users:', error);
    }
}

async function fetchUsers() {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data.data;
}

function renderUsers(users) {
    userTableBody.innerHTML = '';
    users.forEach(user => {
        const row = userTableBody.insertRow();
        row.innerHTML = `<td>${user.first_name} ${user.last_name}</td><td>${user.email}</td>`;
    });
}

function setupSearchFunctionality() {
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.trim().toLowerCase();
        const rows = userTableBody.rows;
        Array.from(rows).forEach(row => {
            const name = row.cells[0].textContent.trim().toLowerCase();
            if (name.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });
}

// Sorting function (uncomment if needed)
function sortTable(column) {
    const table = document.getElementById('userTable');
    const rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => {
        const nameA = a.cells[column].textContent.trim().toLowerCase();
        const nameB = b.cells[column].textContent.trim().toLowerCase();
        return nameA.localeCompare(nameB);
    });
    table.tBodies[0].append(...rows);
}

console.log("Called");

