const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function generateFavicons() {
  const sourceLogo = path.join(__dirname, '../public/logo.png');
  const outputDir = path.join(__dirname, '../public');
  
  // Asegurar que el directorio existe
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  try {
    // Generar favicon-16x16.png
    await sharp(sourceLogo)
      .resize(16, 16)
      .png()
      .toFile(path.join(outputDir, 'favicon-16x16.png'));

    // Generar favicon-32x32.png
    await sharp(sourceLogo)
      .resize(32, 32)
      .png()
      .toFile(path.join(outputDir, 'favicon-32x32.png'));

    // Generar apple-touch-icon.png (180x180)
    await sharp(sourceLogo)
      .resize(180, 180)
      .png()
      .toFile(path.join(outputDir, 'apple-touch-icon.png'));

    // Generar icon-512x512.png
    await sharp(sourceLogo)
      .resize(512, 512)
      .png()
      .toFile(path.join(outputDir, 'icon-512x512.png'));

    // Generar safari-pinned-tab.svg (simplificado)
    const svgContent = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
      <circle cx="8" cy="8" r="8" fill="#20B266"/>
      <text x="8" y="11" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-size="10" font-weight="bold">IS</text>
    </svg>`;
    
    fs.writeFileSync(path.join(outputDir, 'safari-pinned-tab.svg'), svgContent);

    console.log('✅ Favicons generados exitosamente!');
    console.log('📁 Archivos creados:');
    console.log('  - favicon-16x16.png');
    console.log('  - favicon-32x32.png');
    console.log('  - apple-touch-icon.png');
    console.log('  - icon-512x512.png');
    console.log('  - safari-pinned-tab.svg');
    
  } catch (error) {
    console.error('❌ Error generando favicons:', error);
  }
}

generateFavicons();
