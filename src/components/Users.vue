<template>
  <div class="container">
    <input type="text" class="form-control mt-4" v-model="id" />
    <input type="text" class="form-control mt-4" v-model="name" />
    <input type="text" class="form-control mt-4" v-model="userName" />
    <input type="text" class="form-control mt-4" v-model="email" />
    <br />
    <button class="btn-primary" @click="add">AGREGAR</button>
    <hr />
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
          <th scope="row">{{ user.id }}</th>
          <td>{{ user.name }}</td>
          <td>{{ user.username }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { ref } from "vue";
import axios from "axios";
export default {
  name: "Users",
  setup() {
    let data = ref([]);
    let id = ref("");
    let name = ref("");
    let userName = ref("");
    let email = ref("");

    const list = () => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          data.value = response.data;
        });
    };

    const add = () => {
      if (
        id.value == "" ||
        name.value == "" ||
        userName.value == "" ||
        email.value == ""
      ) {
        window.Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Error",
          text: "Todos los campos son requeridos",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        data.value.push({
          id: id.value,
          name: name.value,
          username: userName.value,
          email: email.value,
        });
        id.value = "";
        name.value = "";
        userName.value = "";
        email.value = "";

        window.Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Registro exitoso",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    };

    list();
    return { data, add, id, name, userName, email };
  },
};
</script>