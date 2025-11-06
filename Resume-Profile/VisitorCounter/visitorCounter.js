<script>
        async function updateCounter() {
            const apiUrl = 'https://867ng1dbg0.execute-api.us-east-1.amazonaws.com/counter';

            try {
                let response = await fetch(apiUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }

                let data = await response.json();
                let count = data.count || 0;

                count += 1;

                response = await fetch(apiUrl, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'  
                    },
                    body: JSON.stringify({ id: 'counter', count: count })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText);
                }

                document.getElementById('counter').innerText = count;

            } catch (error) {
                console.error('There was a problem with the fetch operation:', error);
            }
        }

        // Call the function when the page loads
        window.onload = updateCounter;
    </script>