<template>
  <v-app id="inspire" theme="dark">
    <v-app-bar flat>
      <v-container class="mx-auto d-flex align-center justify-center">
        <v-avatar class="me-4" color="grey-darken-1" size="32"></v-avatar>

        <v-btn
          v-for="link in links"
          :key="link"
          :text="link"
          variant="text"
        ></v-btn>

        <v-spacer></v-spacer>
      </v-container>
    </v-app-bar>

    <v-main class="bg-grey-darken-4">
      <v-container>
        <v-row>
          <v-col cols="2">
            <v-sheet rounded="lg" class="bg-grey-darken-3">
              <v-list rounded="lg" class="bg-grey-darken-3">
                <v-list-item to="/login" title="Login" link></v-list-item>

                <v-list-item title="냉장고 파먹기" link></v-list-item>

                <v-list-item title="레시피 검색" link></v-list-item>
              </v-list>
            </v-sheet>
          </v-col>

          <v-col>
            <v-sheet min-height="70vh" rounded="lg" class="bg-grey-darken-3">
              <router-view></router-view>
            </v-sheet>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
const links = ["Dashboard", "Messages", "Profile", "Updates"];
</script>
