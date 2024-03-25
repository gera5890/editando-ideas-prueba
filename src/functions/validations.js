// En el archivo validations.js

export const validations = {
    nombre: [
      value => !!value || 'El nombre completo es requerido',
      value => (value && value.length <= 100) || 'El nombre debe tener menos de 100 caracteres'
    ],
    sexo:[
        value => !!value || 'El campo sexo es requerido'
    ],
    fechaNacimiento: [
      value => !!value || 'La fecha y hora de nacimiento es requerida'
    ],
    temperatura: [
      value => !!value || 'La temperatura es requerida',
      value => !isNaN(value) || 'La temperatura debe ser un número'
    ],
    estatura: [      
      value => !!value || 'La estatura es requerida',
      value => !isNaN(value) || 'La estatura debe ser un número'
    ],
    peso: [
      value => !!value || 'El peso es requerido',
      value => !isNaN(value) || 'El peso debe ser un número'
    ],
    saturacionOxigeno: [
      value => !!value || 'La saturación de oxígeno es requerida',
      value => !isNaN(value) || 'La saturación de oxígeno debe ser un número'
    ],
    motivoConsulta: [
      value => !!value || 'El motivo de consulta es requerido'
    ],
    diagnostico: [
      value => !!value || 'El diagnóstico es requerido'
    ]
  };
  