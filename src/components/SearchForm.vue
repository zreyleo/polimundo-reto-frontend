<template>
    <v-form v-model="valid">
        <v-container>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="firstname" :rules="nameRules" :counter="50" label="Ciudad origen" required>
                    </v-text-field>
                </v-col>

                <v-col cols="12" md="6">
                    <v-text-field v-model="lastname" :rules="nameRules" :counter="50" label="Ciudad destino" required>
                    </v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <DatePicker label="Fecha de salida" />
                <DatePicker label="Fecha de retorno" />
            </v-row>
            <v-btn color="primary" elevation="4" large :to="{ name: 'Results' }">Buscar</v-btn>
        </v-container>
    </v-form>
</template>

<script>
import DatePicker from './DatePicker.vue';
export default {
    data: () => ({
        valid: false,
        firstname: "",
        lastname: "",
        nameRules: [
            v => !!v || "Ciudad es requerida",
            v => v.length <= 50 || "El nombre de ciudad debe ser menos de 50 caracteres",
        ]
    }),
    components: { DatePicker }
}
</script>