// src/lib/blockchain.js
import { Connection, PublicKey, Transaction } from '@solana/web3.js';
import { getOrCreateAssociatedTokenAccount, transfer, TOKEN_PROGRAM_ID } from '@solana/spl-token';

export async function connectPhantomWallet() {
  
    try {
      const response = await window.solana.connect();
      window.solana.request({method:"connect"})
      return response.publicKey.toString(); // Returns the wallet address as a string
    } catch (err) {
      console.error('User rejected the connection request:', err);
      throw new Error('Connection request rejected. Please try again.');
    }
  }




export async function getVitcoinBalance(connection, walletPublicKey, mintAddress) {
  const tokenAccount = await getOrCreateAssociatedTokenAccount(
    connection,
    walletPublicKey,
    new PublicKey(mintAddress),
    walletPublicKey
  );
  return tokenAccount.amount;
}

export async function transferVitcoin(connection, fromWallet, toWallet, mintAddress, amount) {
  const fromTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, new PublicKey(mintAddress), fromWallet);
  const toTokenAccount = await getOrCreateAssociatedTokenAccount(connection, fromWallet, new PublicKey(mintAddress), toWallet);

  const transaction = new Transaction().add(
    transfer(
      fromTokenAccount.address,
      toTokenAccount.address,
      fromWallet,
      amount
    )
  );
  const signature = await window.solana.signAndSendTransaction(transaction);
  await connection.confirmTransaction(signature);
}
