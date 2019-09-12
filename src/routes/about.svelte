<style lang="scss">
  $color: tomato;

  h1 {
    color: $color;
  }

  .testing {
    display: flex;
    background-color: $color;
    > p {
      color: gold;
      &:first-child {
        color: green;
      }
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About this site</h1>
<div class="testing">
  <p>This is the 'about' page. There's not much here.</p>
</div>
