<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <v-simple-table>
        <template v-slot:default>
          <tbody>
            <tr v-for="task in tasks" :key="task.id">
              <td>
                {{ task.title }}
                <v-icon @click="remove(task.id)" right>{{ icons.mdiDelete }}</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <v-text-field @keydown.enter="add" v-model="input" :counter="10" label="やること"></v-text-field>
    </v-flex>
  </v-layout>
</template>

<script>
import { mdiDelete } from "@mdi/js";

export default {
  data() {
    return {
      tasks: [
        { id: 1, title: "task1" },
        { id: 2, title: "task2" },
        { id: 3, title: "task3" }
      ],
      input: "",
      icons: {
        mdiDelete
      }
    };
  },
  methods: {
    add() {
      // 日本語入力中のEnterキー操作は無効にする
      if (event.keyCode !== 13) {
        return;
      }

      const task = {
        id: this.tasks.length + 1,
        title: this.input
      };
      this.tasks.push(task);
    },
    remove(taskId) {
      this.tasks = this.tasks.filter(el => el.id !== taskId);
      console.log("test");
    }
  }
};
</script>
