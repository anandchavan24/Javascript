document.addEventListener('DOMContentLoaded', fetchData());

async function fetchData() {
    const userTableBody = document.getElementById('userTableBody');
    const searchInput = document.getElementById('searchInput');
    const loadingDiv = document.getElementById('loading');

    // Fetch users from mock API
    const fetchUsers = async () => {
        try {
            loadingDiv.style.display = 'block';

            const response = await fetch('https://reqres.in/api/users');
            const data = await response.json();
            loadingDiv.style.display = 'none';

            return data.data; // Assuming the API response has a 'data' property containing the user list
        } catch (error) {
            loadingDiv.style.display = 'none';
            console.error('Error fetching users:', error);
            return [];
        }
    };

    // Render users in the table
    const renderUsers = async () => {
        const users = await fetchUsers();
        userTableBody.innerHTML = '';

        users.forEach(user => {
            const row = userTableBody.insertRow();
            row.innerHTML = `<td>${user.first_name} ${user.last_name}</td><td>${user.email}</td>`;
        });
    };

    // Sort the table by name
    // window.sortTable = (column) => {
    //     const table = document.getElementById('userTable');
    //     const rows = Array.from(table.rows).slice(1); // Exclude header row

    //     rows.sort((a, b) => {
    //         const nameA = a.cells[column].textContent.trim();
    //         const nameB = b.cells[column].textContent.trim();

    //         return nameA.localeCompare(nameB);
    //     });

    //     table.tBodies[0].append(...rows);
    // };

    // As  requested I have added the table ref to sort the column

    document.getElementById('userTable').sortTable = (column) => {
        const table = document.getElementById('userTable');
        const rows = Array.from(table.rows).slice(1); // Exclude header row

        rows.sort((a, b) => {
            const nameA = a.cells[column].textContent.trim();
            const nameB = b.cells[column].textContent.trim();

            return nameA.localeCompare(nameB);
        });

        table.tBodies[0].append(...rows);
    };
    searchInputByUser(searchInput)
    // Initial render of users
    await renderUsers();
}


function searchInputByUser(searchInput) {
    // Filter the table by search input
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const rows = userTableBody.rows;

        // Array.from(rows).forEach(row => {
        //     const name = row.cells[0].textContent.toLowerCase();
        //     if (name.includes(filter)) {
        //         row.style.display = '';
        //     } else {
        //         row.style.display = 'none';
        //     }
        // });

        Array.from(rows).forEach(row => {
            const name = row?.cells[0]?.textContent.toLowerCase(); // Optional chaining added here
            if (name?.includes(filter)) { // Optional chaining added here
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });

    });
}
