<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link :to="{ name: 'tutorials' }" class="navbar-brand">Young Grasshopper</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{ name: 'add'}" class="nav-link">Add New Tutorial</router-link>
      </li>
    </div>
  </nav>
</template>