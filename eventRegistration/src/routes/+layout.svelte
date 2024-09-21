<!-- src/routes/+layout.svelte -->
<script>
    import { currentUser } from '$lib/stores';
    import { onMount } from 'svelte';
    import { connectPhantomWallet } from '$lib/blockchain';
  
    onMount(async () => {
      
          try {
                  const response = await window.solana.connect();
                  window.solana.request({method:"connect"})
                  return response.publicKey.toString(); // Returns the wallet address as a string
                } catch (err) {
                  console.error('User rejected the connection request:', err);
                  throw new Error('Connection request rejected. Please try again.');
                }
        });
  </script>
  
  <slot></slot>
  