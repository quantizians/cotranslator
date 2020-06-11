<script lang="typescript">
  import { onMount, getContext } from "svelte";
  export let depth;   
  export let editable = getContext('editable') ?? false;

  if (!Number.isInteger(depth) || depth < 1 || depth > 6) {
    throw new Error('Depth must be an integer from 1 to 6 (h1 - h6).');
  }

  let element;
  let content;

  onMount(() => {
    element.setAttribute('contenteditable', editable);
  })

</script>

<style>
  [contenteditable]:focus {
    border-radius: 5px;
    outline: none;
    background-color: blanchedalmond;
  }
</style>

{#if depth === 1}
  <h1 
    bind:this={element}
    contenteditable="false"
    bind:textContent={content}
  >
    <slot></slot>
  </h1>
<!-- {:else if depth === 2}
{:else if depth === 3}
{:else if depth === 4}
{:else if depth === 5} -->
{:else}
  <h6 
    bind:this={element}
    contenteditable="false"
    bind:textContent={content}
  >
    <slot></slot>
  </h6>
{/if}