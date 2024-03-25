// filtro.js

export function filtrarEnfermedades(enfermedades, sexo, calculoEdad) {
    if (sexo === 'NO' && calculoEdad) {
      const { valor, unidad } = calculoEdad;
      const edadConcatenada = `${valor < 10 ? '00' : valor < 100 ? '0' : ''}${valor}${unidad}`;
      return enfermedades.filter(enfermedad => enfermedad.linf <= edadConcatenada && enfermedad.lsup >= edadConcatenada);
    } else if (sexo === 'HOMBRE' || sexo === 'MUJER') {
      return enfermedades.filter(enfermedad => enfermedad.lsex === sexo);
    } else {
      return enfermedades;
    }
  }
  