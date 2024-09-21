
<h1>Vitcoin - Decentralized CryptoCurrency</h1>
<p>
    <strong>Vitcoin</strong> is a decentralized, student-led marketplace built on the Solana blockchain, exclusively for VIT students. It allows students to engage in various activities like renting, academic help, and gaming competitions using Vitcoin, VIT's cryptocurrency.
</p>
<br>
<p>Open vitcoin/index.html to run the application</p>
<h2>Features</h2>
<ul>
    <li><strong>Vitcoin Rentals:</strong> Rent or lend items securely using Vitcoin on campus.</li>
    <li><strong>Assignment Helper:</strong> Hire peers for academic help and pay with Vitcoin. Browse profiles, view their experience, and see their rates.</li>
    <li><strong>Campus Games:</strong> Participate in games and earn Vitcoins as rewards.</li>
</ul>

<h2>Tech Stack</h2>
<ul>
    <li><strong>Frontend:</strong> HTML, CSS, Tailwind CSS, JavaScript</li>
    <li><strong>Backend:</strong> Node.js, Express</li>
    <li><strong>Blockchain:</strong> Solana, Phantom Wallet integration</li>
    <li><strong>Database:</strong> MongoDB</li>
    <li><strong>Version Control:</strong> Git, GitHub</li>
</ul>

<h2>Prerequisites</h2>
<ul>
    <li><strong>Node.js:</strong> Install Node.js <a href="https://nodejs.org/">here</a>.</li>
    <li><strong>MongoDB:</strong> Set up a MongoDB instance locally or use a cloud service like MongoDB Atlas.</li>
    <li><strong>Phantom Wallet:</strong> Install and configure the Phantom Wallet for Solana transactions.</li>
</ul>

<h2>Installation</h2>
<p>Clone this repository:</p>
<pre><code>
git clone https://github.com/yourusername/vitcoin.git
cd vitcoin
</code></pre>

<p>Install dependencies for the backend:</p>
<pre><code>
cd backend
npm install
</code></pre>

<p>Install dependencies for the frontend:</p>
<p>(You can add frontend build steps if applicable)</p>

<h2>Running the Project</h2>
<p>Start the backend server:</p>
<pre><code>
cd backend
node server.js
</code></pre>

<p>Open <strong>frontend/index.html</strong> in your browser.</p>

<p>Make sure your Phantom Wallet is installed and linked to interact with the Solana blockchain.</p>

<h2>API Endpoints</h2>
<ul>
    <li><strong>POST /auth/link-wallet:</strong> Link user's Phantom wallet to the Vitcoin platform.</li>
    <li><strong>POST /assignment-request:</strong> Upload assignment details and send requests to assignment doers.</li>
</ul>

</body>
</html>
