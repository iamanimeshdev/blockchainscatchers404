<!-- src/routes/index.svelte -->
<script>
    import { isAdmin, currentUser } from '$lib/stores';
    import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import { connectPhantomWallet } from '$lib/blockchain';

  let errorMessage = '';

  async function handleConnectWallet() {
    try {
      const walletAddress = await connectPhantomWallet();
      currentUser.set({ name: "User", wallet: walletAddress });
      errorMessage = ''; // Clear any previous errors
    } catch (error) {
      errorMessage = 'Please install the Phantom wallet extension.';
      console.error(error);
    }
  }
  
    $: if ($currentUser) {
      // Simulated admin check
      if ($currentUser.wallet === "uyMPqLDR8iP7kbWRLfgo35bjxzYThvPberg1dF7nFF3") {
        isAdmin.set(true);
        goto('/admin');
      } else {
        goto('/user');
      }
    }
  </script>
  
  <h1>Welcome to the Event Registration App</h1>

{#if !$currentUser}
  <button on:click={handleConnectWallet}>Connect Phantom Wallet</button>
  {#if errorMessage}
    <p style="color: red;">{errorMessage}</p>
  {/if}
{:else}
  <p>Signed in as: {$currentUser.name}</p>
  <p>Wallet Address: {$currentUser.wallet}</p>
  <!-- Further logic for logged-in users -->
{/if}
  