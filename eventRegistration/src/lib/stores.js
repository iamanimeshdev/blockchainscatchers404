// src/lib/stores.js
import { writable } from 'svelte/store';

// Stores for user and event information
export const users = writable([]);
export const events = writable([]);
export const currentUser = writable(null);
export const isAdmin = writable(false);
