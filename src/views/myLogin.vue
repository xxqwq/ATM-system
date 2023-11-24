<template>
  <div class="flex justify-center items-center">
    <el-input v-model="input" type="password" placeholder="Please input password" show-password clearable/>
    <el-button>登录</el-button>
  </div>
</template>

<script setup>
import { ref } from "vue"
const input = ref("")
</script>

<style scoped></style>
