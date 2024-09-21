<!-- src/routes/user/+page.svelte -->
<script>
    import { events, currentUser } from '$lib/stores';
    import { onMount } from 'svelte';
    import { Connection, PublicKey } from '@solana/web3.js';
    import { transferVitcoin, getVitcoinBalance } from '$lib/blockchain';
  
    let connection;
    const vitcoinMintAddress = "FJc4TTGfHbEBYgHaDzL155dUTMKWqCqNAEgFePdMjScT"; // Replace with actual mint address
  
    onMount(() => {
      const connection = new Connection('https://api.devnet.solana.com');
; // Or testnet
    });
  
    async function registerForEvent(eventName) {
      const user = $currentUser;
  
      if (!user) return alert('Please connect your wallet.');
  
      // Check user's Vitcoin balance
      const balance = await getVitcoinBalance(connection, user.wallet, vitcoinMintAddress);
      if (balance < 10 * 1e9) {
        return alert('Insufficient Vitcoin balance.');
      }
  
      // Transfer Vitcoin to admin
      try {
        await transferVitcoin(connection, user.wallet, "uyMPqLDR8iP7kbWRLfgo35bjxzYThvPberg1dF7nFF3", vitcoinMintAddress, 10 * 1e9);
        events.update(evts => evts.map(event => event.name === eventName ? { ...event, registeredUsers: [...event.registeredUsers, user] } : event));
        alert('Registered successfully!');
      } catch (error) {
        console.error('Transaction failed:', error);
        alert('Transaction failed.');
      }
    }
  </script>
  
  <h1>User Dashboard</h1>
  
  <div>
    <h2>Available Events</h2>
    <ul>
      {#each $events as event}
        <li>
          {event.name} - {event.date}
          {#if event.registeredUsers.includes($currentUser)}
            <span>(Registered)</span>
          {:else}
            <button on:click={() => registerForEvent(event.name)}>Register (10 Vitcoin)</button>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
  