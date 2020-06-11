<script>
  import { getContext, onMount } from 'svelte';
  import Typography from './Typography.svelte';
  export let editable = getContext('editable');
  export let content = '';
  let element;
  let typography;

  onMount(() => {
    console.log(element);
    element.setAttribute('contenteditable', editable);
    console.log(typography.toMarkdown());
  });
</script>

<style>
  [contenteditable]:focus {
    border-radius: 5px;
    outline: none;
    background-color: blanchedalmond;
  }
</style>

<h1
  bind:this={element}
  contenteditable="false"
  bind:textContent={content}
>
  {content}
</h1>

<p>
  <span>{content}</span>
  Other content
</p>

<Typography bind:this={typography} component="h1" />