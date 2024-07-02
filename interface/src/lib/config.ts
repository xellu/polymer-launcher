import { writable, type Writable } from "svelte/store"

export const apiBaseUrl = "http://localhost:7889/polymer/v1"
export let favicon: Writable<string> = writable("/favicon.png")