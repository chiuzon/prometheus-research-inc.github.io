<script lang="ts">
  import Routes from "../constants/Routes";
  import Config from "../constants/Config";

  export let pathname: string = "";

  function toggleMenu() {
    console.log(document.querySelector("html"));
    document.querySelector("html")?.classList.toggle("menu-on");
  }
</script>

<div class="dimmer" />
<div class="sidebar">
  <div class="logo-container">
    <img src="imgs/logo-prometheus.svg" alt="Logo" />
    <h1>Prometheus</h1>
  </div>
  <div>
    <img
      alt="On Menu"
      src="imgs/icon-menu.svg"
      class="mobile-menu-btn open"
      on:click={toggleMenu}
    />
    <img
      alt="Off Menu"
      src="imgs/icon-arrow.svg"
      class="mobile-menu-btn close"
      on:click={toggleMenu}
    />
  </div>
  <div class="menu">
    <div class="sidebar-links">
      {#each Object.keys(Routes) as routeId}
        <a
          class:active={pathname === routeId}
          href={routeId}
          class="nav-tab"
          sveltekit:prefetch>{Routes[routeId].label}</a
        >
      {/each}
    </div>
    <div class="sidebar-footer">
      {#each Object.keys(Config.FOOTER_LINKS) as footerLinkId}
        <a href={Config.FOOTER_LINKS[footerLinkId].href} target="_blank"
          >{Config.FOOTER_LINKS[footerLinkId].label}</a
        >
      {/each}
      <p>{Config.COPYRIGHT}</p>
    </div>
  </div>
</div>
