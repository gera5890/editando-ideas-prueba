<template>
  <v-container>
      <v-sheet class="ma-3 pa-3 text-center">
      <h2>Consulta Médica</h2>
  <form @submit.prevent="submitForm" :lazy-validation="true">
    <!-- Datos del paciente -->
    <h3>Datos del Paciente</h3>
      <v-text-field 
      label="Nombre completo" 
      v-model="nombre"
      :rules="validations.nombre"
      >
    </v-text-field>
    <v-row>
      <v-col>
        <label for="fechaNacimiento">Fecha y Hora de nacimiento</label>
        <div>
          <input type="datetime-local" id="fechaNacimiento" v-model="fechaNacimiento">
        </div>
      </v-col>
      <v-col>
          <v-select
            :items="['NO', 'HOMBRE', 'MUJER']"
            label="Sexo"
            v-model="sexo"
            :rules="validations.sexo"
          ></v-select>
      </v-col>
    </v-row>

    <!-- Datos Antropométricos -->
    <h3>Datos Antropométricos</h3>
    <v-row>
      <v-col>
        <v-text-field
          label="Temperatura °"
          v-model="temperatura"
          type="number"
          :rules="validations.temperatura"
        ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Estatura (cm)"
          v-model="estatura"
          type="number"
          :rules="validations.estatura"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-text-field
        label="Peso (kg)"
        v-model="peso"
        type="number"
        :rules="validations.peso"
      ></v-text-field>
      </v-col>
      <v-col>
        <v-text-field
          label="Saturación de Oxígeno (%)"
          v-model="saturacionOxigeno"
          type="number"
          :rules="validations.saturacionOxigeno"
        ></v-text-field>
      </v-col>
    </v-row>
    <!-- Datos adicionales -->
    <h3 class="ma-4">Datos Adicionales</h3>
    <v-row>
      <v-textarea
        v-model="motivoConsulta"
        textarea
        :rules="validations.motivoConsulta"
      ></v-textarea>
    </v-row>
    <v-btn :disabled="!formularioCompleto" @click="submitForm" elevation="10" flat small color="primary">Guardar</v-btn>  </form>
      </v-sheet>

      <h3>Diagnóstico</h3>
      <v-autocomplete
      :items="enfermedadesFiltradas.map(enfermedad => enfermedad.nombre)"
        label="Buscar diagnóstico"
        item-text="nombre"
        v-model="diagnostico"
      ></v-autocomplete>

      <DialogoUsuario
      v-if="mostrarDialogo"
      :nombre="nombre"
      :fechaNacimiento="fechaNacimiento"
      :sexo="sexo"
      :temperatura="temperatura"
      :estatura="estatura"
      :peso="peso"
      :saturacionOxigeno="saturacionOxigeno"
      :motivoConsulta="motivoConsulta"
      :diagnostico="diagnostico"
      @cerrarDialogo="mostrarDialogo = false"
    />
  </v-container>

</template>

<script setup>

import { ref, reactive, onMounted, toRefs, computed, watch } from 'vue';
import api from '../src/http/api'
import { filtrarEnfermedades} from '../src/functions/filtros'
import { calcularEdad} from '../src/functions/calcularEdad'
import { validations} from '../src/functions/validations'
import DialogoUsuario from './components/DatosUsuario.vue'

const enfermedades = ref([]);

const datosPersonales = reactive({
nombre: '',
fechaNacimiento: '',
sexo: '',
temperatura: '',
estatura: '',
peso: '',
saturacionOxigeno: '',
motivoConsulta: '',
diagnostico: ''
})

const { nombre, fechaNacimiento, sexo, temperatura, estatura, peso, saturacionOxigeno, motivoConsulta, diagnostico} = toRefs(datosPersonales)
const mostrarDialogo= ref(false);

onMounted(async () => {
  const response = await api.get()
  enfermedades.value = response.data
  console.log(enfermedades.value)
})

const calculoEdad = computed(() => {
  return calcularEdad(fechaNacimiento.value);
});

const enfermedadesFiltradas = computed(() => {
  return filtrarEnfermedades(enfermedades.value, sexo.value, calculoEdad.value); // Usa la función de filtro
});

const submitForm = () => {
  mostrarDialogo.value = true
};


const formularioCompleto = computed(() => {
  return nombre.value && fechaNacimiento.value && sexo.value && temperatura.value && estatura.value && peso.value && saturacionOxigeno.value && motivoConsulta.value;
});


</script>

<style scoped>

</style>