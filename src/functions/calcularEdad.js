// calculoEdad.js

export function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const fechaNac = new Date(fechaNacimiento);
  
    let edadAnios = hoy.getFullYear() - fechaNac.getFullYear();
    const mesActual = hoy.getMonth();
    const mesNacimiento = fechaNac.getMonth();
  
    if (mesActual < mesNacimiento || (mesActual === mesNacimiento && hoy.getDate() < fechaNac.getDate())) {
      edadAnios--;
    }
  
    let edadMeses = hoy.getMonth() - fechaNac.getMonth();
    if (edadMeses < 0 || (edadMeses === 0 && hoy.getDate() < fechaNac.getDate())) {
      edadMeses = 12 + edadMeses; 
    }
  
    let edadDias = hoy.getDate() - fechaNac.getDate();
    if (edadDias < 0) {
      const ultimoDiaMesAnterior = new Date(hoy.getFullYear(), hoy.getMonth(), 0).getDate();
      edadMeses--; 
      edadDias = ultimoDiaMesAnterior + edadDias; 
    }
  
    let edadHoras = Math.floor((hoy - fechaNac) / (1000 * 60 * 60));
    edadHoras %= 24;
  
    if (edadAnios > 0) {
      return { valor: edadAnios, unidad: 'A' };
    } else if (edadMeses > 0) {
      return { valor: edadMeses, unidad: 'M' };
    } else if (edadDias > 0) {
      return { valor: edadDias, unidad: 'D' };
    } else if (edadHoras > 0) {
      return { valor: edadHoras, unidad: 'H' };
    } else {
      return null; 
    }
  }
  