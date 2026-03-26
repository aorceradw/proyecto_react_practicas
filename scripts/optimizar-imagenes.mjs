import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const DIRECTORIO_ENTRADA = './src/assets/images';
const DIRECTORIO_SALIDA = './src/assets/images/optimized'; // Se guardan aquí temporalmente para evitar problemas de sobrescritura

async function optimizarImagenes() {
  try {
    // Crear directorio de salida si no existe
    await fs.mkdir(DIRECTORIO_SALIDA, { recursive: true });

    const archivos = await fs.readdir(DIRECTORIO_ENTRADA);
    const archivosImagen = archivos.filter(archivo => {
      const ext = path.extname(archivo).toLowerCase();
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    console.log(`Se han encontrado ${archivosImagen.length} imágenes para optimizar.`);

    for (const archivo of archivosImagen) {
      const rutaEntrada = path.join(DIRECTORIO_ENTRADA, archivo);
      const rutaSalida = path.join(DIRECTORIO_SALIDA, archivo);

      console.log(`Optimizando: ${archivo}...`);

      const imagen = sharp(rutaEntrada);
      const metadatos = await imagen.metadata();

      let pipeline = imagen;

      // Redimensionar si es muy grande (ancho máximo 1920)
      if (metadatos.width > 1920) {
        pipeline = pipeline.resize(1920);
      }

      // Ajustes de optimización según el formato
      if (metadatos.format === 'webp') {
        pipeline = pipeline.webp({ quality: 80 });
      } else if (metadatos.format === 'png') {
        pipeline = pipeline.png({ compressionLevel: 9 });
      } else if (['jpg', 'jpeg'].includes(metadatos.format)) {
        pipeline = pipeline.jpeg({ quality: 80 });
      }

      await pipeline.toFile(rutaSalida);
      
      const tamanoAntiguo = (await fs.stat(rutaEntrada)).size;
      const tamanoNuevo = (await fs.stat(rutaSalida)).size;
      const reduccion = ((tamanoAntiguo - tamanoNuevo) / tamanoAntiguo * 100).toFixed(2);
      
      console.log(`  Listo: ${archivo} (${(tamanoNuevo / 1024 / 1024).toFixed(2)} MB, -${reduccion}%)`);
    }

    console.log('\n¡Optimización completada! Las imágenes optimizadas están en src/assets/images/optimized');
    console.log('Ahora puedes revisarlas y reemplazar las originales si estás conforme.');

  } catch (error) {
    console.error('Error al optimizar las imágenes:', error);
  }
}

optimizarImagenes();
