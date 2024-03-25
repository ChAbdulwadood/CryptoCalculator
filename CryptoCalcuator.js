async function calculate() {
    const amount = document.getElementById('amount').value;
    const crypto = document.getElementById('crypto').value;
    
    try {
        const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${crypto}&vs_currencies=usd`);
        const data = await response.json();
        
        const rate = data[crypto].usd;
        const result = amount * rate;
        
        document.getElementById('result').innerHTML = `Equivalent in USD: $${result.toFixed(2)}`;
    } catch (error) {
        console.error('Error fetching data:', error);
        document.getElementById('result').innerHTML = 'Error fetching data';
    }
}