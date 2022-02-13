<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link :to="{ name: 'tutorials' }" class="navbar-brand">Young Grasshopper</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'tutorials-details', params: { id: 1 }}" class="nav-link">Tutorials</router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{ name: 'add'}" class="nav-link">Add</router-link>
      </li>
    </div>
  </nav>
</template>