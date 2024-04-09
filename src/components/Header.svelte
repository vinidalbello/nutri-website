<script lang="ts">
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faUser } from "@fortawesome/free-solid-svg-icons";
  import {
    Navbar,
    NavBrand,
    NavLi,
    NavUl,
    NavHamburger,
  } from "flowbite-svelte";
</script>

<Navbar class="bg-[#99CDA9] text-[#D1E9D2]">
  <NavBrand href="/">
    <FontAwesomeIcon icon={faUser} class="mr-2 h-6 w-6" />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
      >Bianca Salvador</span
    >
  </NavBrand>
  <NavHamburger />
  <NavUl>
    <NavLi class="text-[#E5F4E7]" href="/">Home</NavLi>
    <NavLi class="text-[#E5F4E7]" href="/about">About</NavLi>
    <NavLi class="text-[#E5F4E7]" href="/docs/components/navbar">Navbar</NavLi>
    <NavLi class="text-[#E5F4E7]" href="/pricing">Pricing</NavLi>
    <NavLi class="text-[#E5F4E7]" href="/contact">Contact</NavLi>
  </NavUl>
</Navbar>
