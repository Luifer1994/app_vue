<template>
  <div class="container">
    <h1>Usuarios</h1>
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
          <th scope="col">USER NAME</th>
          <th scope="col">EMAIL</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in data" :key="user">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table>
  </div>
  {{ data }}
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Users",
  setup() {
    let data = ref([]);
    const list = () => {
     axios.get("https://jsonplaceholder.typicode.com/users")
     .then((response =>{
         data.value = response.data;
     }))
    };

    list();
    return { data };
  },
};
</script>