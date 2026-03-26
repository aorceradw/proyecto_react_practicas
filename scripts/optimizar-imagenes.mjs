import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const DIRECTORIO_ENTRADA = './src/assets/images';
const DIRECTORIO_SALIDA = './src/assets/images/optimized_temp';

async function optimizarImagenes() {
  try {
    // Crear directorio de salida si no existe
    await fs.mkdir(DIRECTORIO_SALIDA, { recursive: true });

    const archivos = await fs.readdir(DIRECTORIO_ENTRADA);
    const archivosImagen = archivos.filter(archivo => {
      const ext = path.extname(archivo).toLowerCase();
      // Ignorar la propia carpeta de salida si está dentro
      return ['.jpg', '.jpeg', '.png', '.webp'].includes(ext);
    });

    console.log(`\n--- OPTIMIZACIÓN AGRESIVA ---\n`);
    console.log(`Se han encontrado ${archivosImagen.length} imágenes para procesar.`);

    for (const archivo of archivosImagen) {
      const rutaEntrada = path.join(DIRECTORIO_ENTRADA, archivo);
      const rutaSalida = path.join(DIRECTORIO_SALIDA, archivo);

      console.log(`Optimizando: ${archivo}...`);

      const imagen = sharp(rutaEntrada);
      const metadatos = await imagen.metadata();

      let pipeline = imagen;

      // Redimensionar a 1280px de ancho máximo para mayor velocidad
      if (metadatos.width > 1280) {
        pipeline = pipeline.resize(1280);
      }

      // Ajustes de optimización agresiva (Calidad 60)
      if (metadatos.format === 'webp') {
        pipeline = pipeline.webp({ quality: 60, effort: 6 });
      } else if (metadatos.format === 'png') {
        pipeline = pipeline.png({ compressionLevel: 9, palette: true });
      } else if (['jpg', 'jpeg'].includes(metadatos.format)) {
        pipeline = pipeline.jpeg({ quality: 60, mozjpeg: true });
      }

      await pipeline.toFile(rutaSalida);
      
      const tamanoAntiguo = (await fs.stat(rutaEntrada)).size;
      const tamanoNuevo = (await fs.stat(rutaSalida)).size;
      const reduccion = ((tamanoAntiguo - tamanoNuevo) / tamanoAntiguo * 100).toFixed(2);
      
      console.log(`  Listo: ${archivo} (${(tamanoNuevo / 1024).toFixed(0)} KB, Reducción: ${reduccion}%)`);
    }

    console.log('\n¡Optimización completada!');

  } catch (error) {
    console.error('Error al optimizar las imágenes:', error);
  }
}

optimizarImagenes();
