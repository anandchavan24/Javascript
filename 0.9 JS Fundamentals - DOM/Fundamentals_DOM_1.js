document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blogForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const blogData = {};
        formData.forEach((value, key) => {
            blogData[key] = value;
        });

        try {
            const response = await fetch('https://reqres.in/api/posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(blogData),
            });

            const data = await response.json();
            responseDiv.innerHTML = `<p>Blog submitted successfully! ID: ${data.id}</p>`;
        } catch (error) {
            responseDiv.innerHTML = '<p>Error submitting blog. Please try again later.</p>';
        }
    });
});