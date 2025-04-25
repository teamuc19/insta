



<script>

    let { data } = $props();

</script>

{#if data.user}
<h1>
    {data.user.username}
</h1>
{/if}



