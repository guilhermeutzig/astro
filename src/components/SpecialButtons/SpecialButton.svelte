<script>
    function onClick() {
        alert('Clicked on Svelte button!')
    }
</script>

<button on:click={onClick}><slot /></button>