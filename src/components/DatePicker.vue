<template>
    <v-col cols="6">
        <v-menu ref="menu" v-model="menu" :close-on-content-click="false" :return-value.sync="date"
            transition="scale-transition" offset-y min-width="auto">
            <template v-slot:activator="{ on, attrs }">
                <v-text-field v-model="date" v-bind:label="label" prepend-icon="mdi-calendar" readonly v-bind="attrs"
                    v-on="on"></v-text-field>
            </template>
            <v-date-picker v-model="date" no-title scrollable>
                <v-spacer></v-spacer>
                <v-btn text color="primary" @click="menu = false">
                    Cancelar
                </v-btn>
                <v-btn text color="primary" @click="$refs.menu.save(date)">
                    OK
                </v-btn>
            </v-date-picker>
        </v-menu>
    </v-col>
</template>

<script>
export default {
    props: ['label'],
    data: () => ({
        date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
        menu: false,
        modal: false,
        menu2: false,
    }),
}
</script>