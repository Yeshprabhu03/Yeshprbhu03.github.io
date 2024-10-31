
// Initialize Chart.js for Engagement Analytics
const ctx = document.getElementById('engagementChart').getContext('2d');
const engagementChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Course 1', 'Course 2', 'Course 3', 'Course 4'],
        datasets: [{
            label: 'Engagement Time (hrs)',
            data: [5, 10, 8, 15], // Sample data
            backgroundColor: '#0077ff',
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});
