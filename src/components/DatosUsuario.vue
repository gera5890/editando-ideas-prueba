<template>
    <v-dialog v-model="dialogoActivo" max-width="500">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn v-bind="activatorProps" color="primary" text>Ver detalles del usuario</v-btn>
      </template>
      <v-card title="Detalles del Usuario">
        <v-card-text>
          <p><strong>Nombre:</strong> {{ nombre }}</p>
          <p><strong>Fecha de Nacimiento:</strong> {{ fechaNacimiento }}</p>
          <p><strong>Sexo:</strong> {{ sexo }}</p>
          <p><strong>Temperatura:</strong> {{ temperatura }}</p>
          <p><strong>Estatura:</strong> {{ estatura }}</p>
          <p><strong>Peso:</strong> {{ peso }}</p>
          <p><strong>Saturación de Oxígeno:</strong> {{ saturacionOxigeno }}</p>
          <p><strong>Motivo de la Consulta:</strong> {{ motivoConsulta }}</p>
          <p><strong>Diagnóstico:</strong> {{ diagnostico }}</p>

        </v-card-text>
        
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text @click="dialogoActivo = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </template>
  
  <script>
  import { ref } from 'vue';
  
  export default {
    props: {
      nombre: String,
      fechaNacimiento: String,
      sexo: String,
      temperatura: String,
      estatura: String,
      peso: String,
      saturacionOxigeno: String,
      motivoConsulta: String,
      diagnostico: String
    },
    setup() {
      const dialogoActivo = ref(false);
      return { dialogoActivo };
    }
  }
  </script>