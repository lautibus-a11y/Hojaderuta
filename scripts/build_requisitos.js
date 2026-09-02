/**
 * BUILDER AUTOMATIZADO DE REQUISITOS INMOBILIARIOS
 * Ivana Molina & Asociados Bienes Raíces
 * 
 * Escanea las carpetas de propiedades, extrae texto de PDFs si existen,
 * y compila páginas HTML estáticas ultra-profesionales y responsive
 * en /requisitos/<slug>.html para cada propiedad.
 */

const fs = require('fs');
const path = require('path');

let pdfParse = null;
try {
  pdfParse = require('pdf-parse');
} catch (e) {
  console.log('Nota: pdf-parse no disponible de forma global, se utilizará parser estándar.');
}

const ROOT_DIR = path.resolve(__dirname, '..');
const PROPS_FILE = path.join(ROOT_DIR, 'data', 'propiedades.json');
const REQUISITOS_DIR = path.join(ROOT_DIR, 'requisitos');

if (!fs.existsSync(REQUISITOS_DIR)) {
  fs.mkdirSync(REQUISITOS_DIR, { recursive: true });
}

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Mapeo canónico de slugs limpios y únicos para cada propiedad
const SLUG_MAP = {
  2: 'la-rosalia-simona-alquiler',
  3: 'de-los-franceses-3740',
  4: 'depto-canning',
  5: 'casa-quinta-cosquin-194-alquiler',
  6: 'cosquin-1400-venta',
  7: 'laprida-375-ramos-mejia',
  8: 'ceretti-1300',
  9: 'aguapey-1119',
  10: 'carlos-tejedor-caseros',
  11: 'leopardi-5800-gonzalez-catan',
  12: 'juan-pio-gana-4400',
  13: 'casa-quinta-cevallos',
  14: 'gibraltar-1-pontevedra',
  15: 'gibraltar-2-pontevedra',
  16: 'girardot-1345',
  17: 'castex-y-del-carril',
  18: 'propiedad-6-ambientes-caseros',
  19: 'quinta-el-maestro',
  20: 'cosquin-1120', // Explicit slug from user specification
  21: 'casaquinta-piscina-1500m2-20dejunio',
  22: 'urien-casa-quinta',
  23: 'casa-quinta-california-5900',
  24: 'la-rosalia-simona-venta',
  25: 'departamento-independiente-la-rosalia',
  26: 'terreno-alejo-castex',
  27: 'terreno-pablo-ceretti',
  28: 'cassafousth-terreno',
  29: 'terreno-juan-casacuberta',
  30: 'la-camella-alquiler'
};

/**
 * Encuentra la carpeta física de la propiedad basada en sus imágenes
 */
function findPropertyDirectory(prop) {
  if (prop.imagenes && prop.imagenes.length > 0) {
    const firstImg = prop.imagenes[0];
    const relDir = path.dirname(firstImg);
    const absDir = path.join(ROOT_DIR, relDir);
    if (fs.existsSync(absDir)) {
      return absDir;
    }
  }
  return null;
}

/**
 * Busca archivos PDF en la carpeta de la propiedad
 */
function findPdfInDir(dirPath) {
  if (!dirPath || !fs.existsSync(dirPath)) return null;
  try {
    const files = fs.readdirSync(dirPath);
    const pdfFile = files.find(f => f.toLowerCase().endsWith('.pdf'));
    if (pdfFile) {
      return path.join(dirPath, pdfFile);
    }
    // Buscar en subdirectorios si existieran
    for (const f of files) {
      const fullPath = path.join(dirPath, f);
      if (fs.statSync(fullPath).isDirectory()) {
        const subFiles = fs.readdirSync(fullPath);
        const subPdf = subFiles.find(sf => sf.toLowerCase().endsWith('.pdf'));
        if (subPdf) return path.join(fullPath, subPdf);
      }
    }
  } catch (err) {
    console.error('Error buscando PDF en ' + dirPath, err);
  }
  return null;
}

/**
 * Extrae texto de un archivo PDF
 */
async function extractTextFromPdf(pdfPath) {
  if (!pdfParse || typeof pdfParse !== 'function') return null;
  try {
    const dataBuffer = fs.readFileSync(pdfPath);
    const data = await pdfParse(dataBuffer);
    return data ? data.text : null;
  } catch (err) {
    return null;
  }
}

/**
 * Genera el HTML de requisitos para una propiedad
 */
function generateHtmlPage(prop, slug, pdfContent) {
  if (slug === 'la-rosalia-simona-alquiler' || prop.id === 2) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="description" content="Requisitos de Alquiler para La Rosalía - Ivana Molina & Asociados Bienes Raíces. Casa quinta con pileta en 20 de Junio.">
  <title>Requisitos de Alquiler: La Rosalía | Ivana Molina Bienes Raíces</title>
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="../assets/logo-favicon-.png">
  <link rel="shortcut icon" type="image/png" href="../assets/logo-favicon-.png">
  <link rel="apple-touch-icon" href="../assets/logo-favicon-.png">

  <!-- Estilos base y de requisitos -->
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="requisitos.css">
</head>
<body class="requisitos-page">

  <!-- Aurora Mesh Background -->
  <div class="aurora-bg">
    <div class="aurora-blob aurora-blob-1"></div>
    <div class="aurora-blob aurora-blob-2"></div>
    <div class="aurora-blob aurora-blob-3"></div>
  </div>

  <!-- Header Barra Superior -->
  <header class="app-header">
    <div class="header-container">
      <a href="../index.html" class="brand" title="Volver al Inicio">
        <img src="../assets/logo-favicon-.png" alt="Ivana Molina Bienes Raíces" class="header-logo">
        <div class="brand-info">
          <h1>Hoja de Ruta Inmobiliaria</h1>
          <h2 style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin: 0;">IVANA MOLINA & ASOCIADOS BIENES RAÍCES</h2>
        </div>
      </a>

      <div class="header-actions-right">
        <a href="../index.html" class="btn btn-secondary btn-sm btn-back-home">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Volver a la Web</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Contenedor Principal -->
  <main class="req-main-container">

    <!-- Ficha de Encabezado Corporativo de la Inmobiliaria -->
    <div class="requisitos-card glass-panel" style="margin-bottom: 1.5rem; padding: 1.35rem 1.75rem; border-color: rgba(255, 255, 255, 0.15);">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 1rem;">
        <div>
          <h2 style="font-size: 1.15rem; font-weight: 800; color: #ffffff; margin-bottom: 0.25rem; letter-spacing: 0.02em;">
            IVANA MOLINA & ASOC. BIENES RAÍCES
          </h2>
          <p style="font-size: 0.84rem; color: var(--text-secondary); margin: 0;">
            📍 <strong>Dirección:</strong> Manuel Castro 1420, 20 de Junio, La Matanza.
          </p>
        </div>
        <div style="display: flex; gap: 1.25rem; flex-wrap: wrap; font-size: 0.84rem; color: var(--text-secondary);">
          <div>
            📞 <strong>Tel:</strong> <a href="tel:01168091223" style="color: #ffffff; text-decoration: none;">011-6809 1223</a> / <a href="tel:01144051974" style="color: #ffffff; text-decoration: none;">011-4405 1974</a>
          </div>
          <div>
            ✉️ <strong>Mail:</strong> <a href="mailto:info@molinaivana.com.ar" style="color: #34d399; text-decoration: underline;">info@molinaivana.com.ar</a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Hero Banner de la Propiedad -->
    <div class="req-hero-card glass-panel">
      <div class="req-hero-grid">
        <div class="req-hero-image-wrap">
          <img src="../assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/1.webp" alt="La Rosalía - Casa Quinta con Pileta" class="req-hero-img">
          <div class="req-hero-badges">
            <span class="card-badge-operacion op-alquiler">Alquiler</span>
            <span class="card-badge-status status-lista">Vivienda Permanente</span>
          </div>
        </div>

        <div class="req-hero-info">
          <div class="req-chip-label">
            <span>ALQUILER DE CASA QUINTA CON PILETA</span>
          </div>
          <h1 class="req-prop-title">La Rosalía</h1>
          <p class="req-prop-address">📍 Copahue esquina Rico, 20 de Junio, Partido de La Matanza, Buenos Aires.</p>
          
          <div class="req-quick-specs">
            <div class="spec-box">
              <span class="spec-label">Canon Mensual</span>
              <span class="spec-val highlight">$1.300.000</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Terreno</span>
              <span class="spec-val">2.100 m²</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Ambientes</span>
              <span class="spec-val">5 amb. (3 hab.)</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Acceso</span>
              <span class="spec-val">Ripio</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Período</span>
              <span class="spec-val">2 Años</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Destino</span>
              <span class="spec-val">Vivienda Permanente</span>
            </div>
          </div>

          <div class="req-hero-actions">
            <a href="https://wa.me/541168091223?text=%C2%A1Hola%20Ivana!%20Estuve%20viendo%20los%20requisitos%20para%20la%20propiedad%20%22La%20Rosal%C3%ADa%22%20(Copahue%20esquina%20Rico%2C%2020%20de%20Junio).%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20coordinar%20el%20siguiente%20paso." target="_blank" rel="noopener" class="btn btn-whatsapp">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Consultar por WhatsApp</span>
            </a>
            <a href="../index.html" class="btn btn-secondary">
              Ver en el Catálogo
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido Detallado de Requisitos -->
    <div class="req-content-body">
      
      <!-- Bloque 1: Descripción Detallada de la Casa -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">🏡</div>
          <div>
            <h2>Descripción Detallada de la Casa</h2>
            <p>Características arquitectónicas, distribución de ambientes y equipamiento exterior.</p>
          </div>
        </div>
        
        <div style="color: var(--text-secondary); line-height: 1.7; font-size: 0.95rem;">
          <p style="margin-bottom: 1rem;">
            Casa quinta de <strong>5 ambientes</strong>, desarrollada sobre un amplio terreno con espacios pensados para el descanso y la recreación.
          </p>
          <p style="margin-bottom: 1rem;">
            La propiedad dispone de <strong>tres habitaciones</strong>, un <strong>amplio living con sala de estar</strong>, <strong>cocina-comedor integrada</strong> y un <strong>baño completo</strong>.
          </p>
          <p style="margin-bottom: 1rem;">
            En el exterior cuenta con un <strong>quincho equipado con parrilla</strong> y una <strong>pileta de fibra de vidrio de aproximadamente 8 x 3 metros</strong>, brindando un entorno ideal para disfrutar al aire libre.
          </p>
          <p style="margin-bottom: 0;">
            La distribución de los ambientes ofrece comodidad y funcionalidad, combinando espacios interiores amplios con un sector exterior destinado al esparcimiento.
          </p>
        </div>
      </div>

      <!-- Bloque 2: Requisitos de Alquiler e Ingreso -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">💰</div>
          <div>
            <h2>Requisitos de Alquiler</h2>
            <p>Liquidación inicial de ingreso y conceptos correspondientes a la firma del contrato.</p>
          </div>
        </div>
        
        <div class="requisitos-grid" style="margin-bottom: 1.5rem;">
          <div class="req-item">
            <div class="req-check">✓</div>
            <div>
              <strong>Mes de Ingreso</strong>
              <span>$1.300.000 (primer mes de alquiler)</span>
            </div>
          </div>
          <div class="req-item">
            <div class="req-check">✓</div>
            <div>
              <strong>Mes de Depósito</strong>
              <span>$1.300.000 (garantía contractual)</span>
            </div>
          </div>
          <div class="req-item">
            <div class="req-check">✓</div>
            <div>
              <strong>Mes de Honorarios</strong>
              <span>$1.300.000 (honorarios profesionales de corretaje)</span>
            </div>
          </div>
          <div class="req-item">
            <div class="req-check">✓</div>
            <div>
              <strong>Gastos Administrativos</strong>
              <span>Gastos administrativos y pedidos de informes de dominio e inhibición.</span>
            </div>
          </div>
        </div>

        <!-- Total Liquidación -->
        <div style="background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.35); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #34d399; letter-spacing: 0.05em; display: block;">Liquidación Inicial Requerida</span>
            <strong style="font-size: 1.35rem; color: #ffffff;">TOTAL: $3.900.000</strong>
          </div>
          <span style="font-size: 0.88rem; color: var(--text-secondary);">+ gastos administrativos y pedidos de informes</span>
        </div>
      </div>

      <!-- Bloque 3: Garantías -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">🛡️</div>
          <div>
            <h2>Garantías</h2>
            <p>Opciones de respaldo válidas para la locación.</p>
          </div>
        </div>
        <div class="garantias-list">
          <div class="garantia-box">
            <div class="garantia-header">
              <span class="garantia-tag">Opción 1</span>
              <h3>Garantía Propietaria</h3>
            </div>
            <p>Inmueble de familiar directo con escritura de dominio válida e informes de dominio e inhibición favorables.</p>
          </div>

          <div class="garantia-box">
            <div class="garantia-header">
              <span class="garantia-tag">Opción 2</span>
              <h3>Seguro de Caución</h3>
            </div>
            <p>Póliza de fianza emitida por compañías aseguradoras de primer nivel (Finaer, Premium Group, Garantía Ya, etc.).</p>
          </div>
        </div>
      </div>

      <!-- Bloque 4: Actualización -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">📈</div>
          <div>
            <h2>Actualización del Canon Locativo</h2>
            <p>Modalidad de ajuste periódico estipulada en el contrato.</p>
          </div>
        </div>
        <div style="background: rgba(255, 255, 255, 0.03); border: 1px solid var(--border-subtle); padding: 1.25rem 1.5rem; border-radius: var(--radius-md);">
          <p style="font-size: 0.95rem; color: #ffffff; margin: 0; line-height: 1.6;">
            <strong>Actualización cuatrimestral</strong> según el <strong>Índice de Precios al Consumidor (IPC)</strong>, con un mínimo del <strong>12%</strong>.
          </p>
        </div>
      </div>

      <!-- Bloque 5: Condiciones a Tener en Cuenta -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">⚠️</div>
          <div>
            <h2>Condiciones a Tener en Cuenta</h2>
            <p>Normas de convivencia y obligaciones contractuales particulares del inmueble.</p>
          </div>
        </div>
        <div class="requisitos-grid">
          <div class="req-item" style="border-left: 3px solid #ef4444;">
            <div class="req-check" style="background: rgba(239, 68, 68, 0.15); color: #f87171; border-color: rgba(239, 68, 68, 0.35);">✕</div>
            <div>
              <strong>Eventos Prohibidos</strong>
              <span>No pueden realizarse eventos en la propiedad. Destino exclusivo de vivienda familiar permanente.</span>
            </div>
          </div>

          <div class="req-item" style="border-left: 3px solid #f59e0b;">
            <div class="req-check" style="background: rgba(245, 158, 11, 0.15); color: #fbbf24; border-color: rgba(245, 158, 11, 0.35);">✓</div>
            <div>
              <strong>Seguro Contra Incendios</strong>
              <span>Seguro contra incendios obligatorio durante todo el período de locación.</span>
            </div>
          </div>

          <div class="req-item" style="border-left: 3px solid #3b82f6;">
            <div class="req-check" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.35);">✓</div>
            <div>
              <strong>Tasas Generales</strong>
              <span>El impuesto de Tasas Generales queda a cargo del inquilino.</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Banner Inferior de Contacto & Asesoramiento -->
    <div class="req-footer-contact glass-panel">
      <div class="footer-contact-text">
        <h3>¿Tenés dudas sobre los requisitos o querés coordinar una visita?</h3>
        <p>Nuestro equipo de martilleros y corredores colegiados está a tu disposición para asesorarte en cada paso.</p>
      </div>
      <div class="footer-contact-actions">
        <a href="https://wa.me/541168091223?text=%C2%A1Hola%20Ivana!%20Estuve%20viendo%20los%20requisitos%20para%20la%20propiedad%20%22La%20Rosal%C3%ADa%22%20(Copahue%20esquina%20Rico%2C%2020%20de%20Junio).%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20coordinar%20el%20siguiente%20paso." target="_blank" rel="noopener" class="btn btn-whatsapp">
          <span>Hablar con Ivana Molina</span>
        </a>
        <a href="../index.html" class="btn btn-secondary">
          <span>Volver al Inicio</span>
        </a>
      </div>
    </div>

  </main>

  <!-- Footer Legal -->
  <footer class="app-footer" style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.8rem;">
    <p>Ivana Molina & Asociados Bienes Raíces • Matrícula 1048 • 20 de Junio, Buenos Aires</p>
  </footer>

</body>
</html>`;
  }

  if (slug === 'la-camella-alquiler' || prop.id === 30) {
    return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="description" content="Propuesta y requisitos de alquiler para La Camella - Ivana Molina & Asociados Bienes Raíces. Casa en 20 de Junio con pileta y arboleda.">
  <title>Requisitos de Alquiler: La Camella | Ivana Molina Bienes Raíces</title>
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="../assets/logo-favicon-.png">
  <link rel="shortcut icon" type="image/png" href="../assets/logo-favicon-.png">
  <link rel="apple-touch-icon" href="../assets/logo-favicon-.png">

  <!-- Estilos base y de requisitos -->
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="requisitos.css">
</head>
<body class="requisitos-page">

  <!-- Aurora Mesh Background -->
  <div class="aurora-bg">
    <div class="aurora-blob aurora-blob-1"></div>
    <div class="aurora-blob aurora-blob-2"></div>
    <div class="aurora-blob aurora-blob-3"></div>
  </div>

  <!-- Header Barra Superior -->
  <header class="app-header">
    <div class="header-container">
      <a href="../index.html" class="brand" title="Volver al Inicio">
        <img src="../assets/logo-favicon-.png" alt="Ivana Molina Bienes Raíces" class="header-logo">
        <div class="brand-info">
          <h1>Hoja de Ruta Inmobiliaria</h1>
          <h2 style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin: 0;">IVANA MOLINA & ASOCIADOS BIENES RAÍCES</h2>
        </div>
      </a>

      <div class="header-actions-right">
        <a href="../index.html" class="btn btn-secondary btn-sm btn-back-home">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Volver a la Web</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Contenedor Principal -->
  <main class="req-main-container">

    <!-- Ficha de Encabezado Corporativo e Institucional de la Inmobiliaria -->
    <div class="requisitos-card glass-panel" style="margin-bottom: 1.5rem; padding: 1.5rem 1.75rem; border-color: rgba(255, 255, 255, 0.15);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; flex-wrap: wrap; gap: 1.25rem;">
        <div>
          <h2 style="font-size: 1.2rem; font-weight: 800; color: #ffffff; margin-bottom: 0.35rem; letter-spacing: 0.02em;">
            IVANA MOLINA & ASOC. BIENES RAÍCES
          </h2>
          <div style="display: inline-block; background: rgba(255, 255, 255, 0.08); padding: 0.25rem 0.65rem; border-radius: 4px; font-size: 0.76rem; font-weight: 700; color: var(--text-secondary); margin-bottom: 0.5rem; letter-spacing: 0.04em;">
            MARTILLERA PÚBLICA, CORREDORA INMOBILIARIA Y ADMINISTRADORA DE CONSORCIOS • MATRÍCULA N.º 1048
          </div>
          <p style="font-size: 0.86rem; color: var(--text-secondary); margin: 0;">
            📍 <strong>Dirección:</strong> Manuel Castro 1420, 20 de Junio, La Matanza.
          </p>
        </div>
        <div style="display: flex; flex-direction: column; gap: 0.4rem; font-size: 0.86rem; color: var(--text-secondary);">
          <div>
            📞 <strong>Tel:</strong> <a href="tel:01168091223" style="color: #ffffff; text-decoration: none;">011-6809 1223</a> / <a href="tel:01144051974" style="color: #ffffff; text-decoration: none;">011-4405 1974</a>
          </div>
          <div>
            ✉️ <strong>Mail:</strong> <a href="mailto:molinaivanabr@gmail.com" style="color: #34d399; text-decoration: underline;">molinaivanabr@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Hero Banner de la Propiedad -->
    <div class="req-hero-card glass-panel">
      <div class="req-hero-grid">
        <div class="req-hero-image-wrap">
          <img src="../assets/imagenes/20-de-junio/alquiler/La Camella alquiler/wm_PORTADA.webp" alt="La Camella - Casa en 20 de Junio" class="req-hero-img">
          <div class="req-hero-badges">
            <span class="card-badge-operacion op-alquiler">Alquiler</span>
            <span class="card-badge-status status-lista">Destino Vivienda</span>
          </div>
        </div>

        <div class="req-hero-info">
          <div class="req-chip-label">
            <span>PROPUESTA DE ALQUILER CON DESTINO A VIVIENDA – 20 DE JUNIO</span>
          </div>
          <h1 class="req-prop-title">La Camella</h1>
          <p class="req-prop-address">📍 Casaffouths 725, 20 de Junio, La Matanza.</p>
          
          <div class="req-quick-specs">
            <div class="spec-box">
              <span class="spec-label">Canon Mensual</span>
              <span class="spec-val highlight">$900.000</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Habitaciones</span>
              <span class="spec-val">2 hab. + vestidor</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Baños</span>
              <span class="spec-val">2 baños completos</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Pileta</span>
              <span class="spec-val">9 x 5 m (prof. 2,20 m)</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Contrato</span>
              <span class="spec-val">2 Años</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Ubicación</span>
              <span class="spec-val">A 2½ cdras. asfalto</span>
            </div>
          </div>

          <div class="req-hero-actions">
            <a href="https://wa.me/541168091223?text=%C2%A1Hola%20Ivana!%20Estuve%20viendo%20los%20requisitos%20para%20la%20propiedad%20%22La%20Camella%22%20(Casaffouths%20725%2C%2020%20de%20Junio).%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20coordinar%20el%20siguiente%20paso." target="_blank" rel="noopener" class="btn btn-whatsapp">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Consultar por WhatsApp</span>
            </a>
            <a href="../index.html" class="btn btn-secondary">
              Ver en el Catálogo
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido Detallado de Requisitos -->
    <div class="req-content-body">
      
      <!-- Bloque 1: Descripción -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">🏡</div>
          <div>
            <h2>Descripción</h2>
            <p>Detalle de comodidades, distribución y entorno exterior de la propiedad.</p>
          </div>
        </div>
        
        <div style="color: var(--text-secondary); line-height: 1.75; font-size: 0.95rem;">
          <p style="margin-bottom: 1rem;">
            Casa con <strong>amplio living-comedor</strong>, <strong>cocina equipada con bajo mesada y alacena de algarrobo</strong>, y <strong>mesada de mármol granito</strong>.
          </p>
          <p style="margin-bottom: 1rem;">
            Dispone de <strong>dos habitaciones</strong>, un <strong>amplio vestidor</strong> y <strong>dos baños</strong>.
          </p>
          <p style="margin-bottom: 1rem;">
            En el exterior cuenta con <strong>quincho con parrilla</strong>, <strong>pileta de aproximadamente 9 x 5 metros y 2,20 metros de profundidad</strong>, además de una destacada <strong>arboleda añosa</strong>.
          </p>
          <p style="margin-bottom: 0;">
            La propiedad se encuentra muy bien ubicada, a aproximadamente <strong>dos cuadras y media del asfalto</strong> (Casaffouths 725, 20 de Junio, La Matanza).
          </p>
        </div>
      </div>

      <!-- Bloque 2: Requisitos de Alquiler -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">💰</div>
          <div>
            <h2>Requisitos de Alquiler</h2>
            <p>Valores y conceptos correspondientes para el ingreso a la propiedad.</p>
          </div>
        </div>
        
        <div class="requisitos-grid" style="margin-bottom: 1.5rem;">
          <div class="req-item">
            <div class="req-check">✓</div>
            <div>
              <strong>Mes de Ingreso</strong>
              <span>$900.000 (primer mes de alquiler adelantado)</span>
            </div>
          </div>
          <div class="req-item">
            <div class="req-check">✓</div>
            <div>
              <strong>Mes de Depósito de Garantía</strong>
              <span>$900.000 (depósito en garantía contractual)</span>
            </div>
          </div>
          <div class="req-item">
            <div class="req-check">✓</div>
            <div>
              <strong>Mes de Honorarios</strong>
              <span>$900.000 (honorarios por intervención profesional)</span>
            </div>
          </div>
        </div>

        <!-- Total Liquidación -->
        <div style="background: rgba(52, 211, 153, 0.1); border: 1px solid rgba(52, 211, 153, 0.35); padding: 1.25rem 1.5rem; border-radius: var(--radius-md); display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
          <div>
            <span style="font-size: 0.8rem; text-transform: uppercase; font-weight: 700; color: #34d399; letter-spacing: 0.05em; display: block;">Total Ingreso Inicial</span>
            <strong style="font-size: 1.35rem; color: #ffffff;">TOTAL: $2.700.000</strong>
          </div>
          <span style="font-size: 0.88rem; color: var(--text-secondary);">(Ingreso + Depósito + Honorarios)</span>
        </div>
      </div>

      <!-- Bloque 3: Garantías -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">🛡️</div>
          <div>
            <h2>Garantías</h2>
            <p>Se deberá presentar <strong>alguna de las siguientes garantías</strong>:</p>
          </div>
        </div>
        <div class="garantias-list">
          <div class="garantia-box">
            <div class="garantia-header">
              <span class="garantia-tag">Opción 1</span>
              <h3>Garantía Propietaria</h3>
            </div>
            <p>Escritura de dominio válida. Pedido de informes a cargo del inquilino.</p>
          </div>

          <div class="garantia-box">
            <div class="garantia-header">
              <span class="garantia-tag">Opción 2</span>
              <h3>Recibos de Sueldo</h3>
            </div>
            <p>3 recibos de sueldo que dupliquen el valor del alquiler.</p>
          </div>

          <div class="garantia-box">
            <div class="garantia-header">
              <span class="garantia-tag">Opción 3</span>
              <h3>Seguro de Caución</h3>
            </div>
            <p>Póliza de fianza o caución emitida por compañías de primer nivel.</p>
          </div>
        </div>
      </div>

      <!-- Bloque 4: Actualización y Duración del Contrato -->
      <div class="requisitos-card glass-panel">
        <div class="card-section-header">
          <div class="badge-icon">📈</div>
          <div>
            <h2>Actualización y Duración del Contrato</h2>
            <p>Plazo locativo y esquema de ajuste económico periódico.</p>
          </div>
        </div>
        <div class="requisitos-grid">
          <div class="req-item" style="border-left: 3px solid #3b82f6;">
            <div class="req-check" style="background: rgba(59, 130, 246, 0.15); color: #60a5fa; border-color: rgba(59, 130, 246, 0.35);">📅</div>
            <div>
              <strong>Duración del Contrato</strong>
              <span>Dos (2) años de locación.</span>
            </div>
          </div>

          <div class="req-item" style="border-left: 3px solid #10b981;">
            <div class="req-check" style="background: rgba(16, 185, 129, 0.15); color: #34d399; border-color: rgba(16, 185, 129, 0.35);">📊</div>
            <div>
              <strong>Esquema de Actualización</strong>
              <span>Cada 4 meses, regida por el <strong>Índice de Precios al Consumidor (IPC)</strong>, con un <strong>aumento mínimo del 12%</strong>.</span>
            </div>
          </div>
        </div>
      </div>

    </div>

    <!-- Banner Inferior de Contacto & Asesoramiento -->
    <div class="req-footer-contact glass-panel">
      <div class="footer-contact-text">
        <h3>¿Tenés dudas sobre los requisitos o querés coordinar una visita?</h3>
        <p>Nuestro equipo de martilleros y corredores colegiados está a tu disposición para asesorarte en cada paso.</p>
      </div>
      <div class="footer-contact-actions">
        <a href="https://wa.me/541168091223?text=%C2%A1Hola%20Ivana!%20Estuve%20viendo%20los%20requisitos%20para%20la%20propiedad%20%22La%20Camella%22%20(Casaffouths%20725%2C%2020%20de%20Junio).%20Me%20gustar%C3%ADa%20recibir%20m%C3%A1s%20informaci%C3%B3n%20para%20coordinar%20el%20siguiente%20paso." target="_blank" rel="noopener" class="btn btn-whatsapp">
          <span>Hablar con Ivana Molina</span>
        </a>
        <a href="../index.html" class="btn btn-secondary">
          <span>Volver al Inicio</span>
        </a>
      </div>
    </div>

  </main>

  <!-- Footer Legal -->
  <footer class="app-footer" style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.8rem;">
    <p>Ivana Molina & Asociados Bienes Raíces • Matrícula 1048 • 20 de Junio, Buenos Aires</p>
  </footer>

</body>
</html>`;
  }

  const isAlquiler = (prop.operacion || '').toLowerCase() === 'alquiler';
  const isAptoCredito = Boolean(prop.apto_credito);
  const mainImage = (prop.imagenes && prop.imagenes.length > 0) ? prop.imagenes[0] : '';
  const priceFormatted = prop.precio > 0 ? `${prop.moneda || 'USD'} ${prop.precio.toLocaleString()}` : 'Consultar';
  
  // WPP link preconfigurado
  const wppMessage = encodeURIComponent(
    `¡Hola Ivana! Estuve viendo los requisitos para la propiedad "${prop.nombre}" (${prop.direccion || prop.ubicacion}). Me gustaría recibir más información para coordinar el siguiente paso.`
  );
  const wppUrl = `https://wa.me/541168091223?text=${wppMessage}`;

  let parsedSectionsHtml = '';

  if (pdfContent && pdfContent.trim().length > 30) {
    // Si hay contenido extraído de PDF real, lo estructuramos
    const lines = pdfContent.split('\n').map(l => l.trim()).filter(l => l.length > 0);
    const formattedBlocks = [];
    let currentBlock = [];

    lines.forEach(line => {
      if (line.endsWith(':') || line.toUpperCase() === line && line.length < 50) {
        if (currentBlock.length > 0) {
          formattedBlocks.push(currentBlock.join('\n'));
          currentBlock = [];
        }
        formattedBlocks.push(`### ${line}`);
      } else {
        currentBlock.push(line);
      }
    });
    if (currentBlock.length > 0) formattedBlocks.push(currentBlock.join('\n'));

    parsedSectionsHtml = `
      <div class="requisitos-card glass-panel" style="margin-bottom: 2rem;">
        <div class="card-section-header">
          <div class="badge-icon">📄</div>
          <div>
            <h2>Condiciones Extraídas del Documento Oficial</h2>
            <p>Información detallada según la documentación vigente del inmueble.</p>
          </div>
        </div>
        <div class="pdf-extracted-content">
          ${formattedBlocks.map(b => {
            if (b.startsWith('### ')) {
              return `<h3 class="extracted-title">${b.replace('### ', '')}</h3>`;
            }
            return `<p class="extracted-paragraph">${b.replace(/\n/g, '<br>')}</p>`;
          }).join('')}
        </div>
      </div>
    `;
  }

  // Secciones estándar profesionales y estructuradas según tipo de operación
  const defaultSectionsHtml = isAlquiler ? `
    <!-- ALQUILER: Bloque 1 - Documentación Personal y Laboral -->
    <div class="requisitos-card glass-panel">
      <div class="card-section-header">
        <div class="badge-icon">👤</div>
        <div>
          <h2>1. Documentación del Inquilino / Locatario</h2>
          <p>Requisitos personales y acreditación de solvencia para iniciar la solicitud.</p>
        </div>
      </div>
      <div class="requisitos-grid">
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Documento Nacional de Identidad (DNI)</strong>
            <span>Copia frente y dorso de los titulares que habitarán el inmueble.</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Constancia de Ingresos Comprobables</strong>
            <span>Últimos 3 recibos de sueldo (relación de dependencia) o últimos 6 pagos de Monotributo/Autónomos con certificación de ingresos contable.</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Relación Ingreso / Canon Locativo</strong>
            <span>Los ingresos netos demostrables deben triplicar aproximadamente el valor del alquiler mensual.</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Constancia de CUIT / CUIL y Veraz</strong>
            <span>Informe crediticio limpio sin antecedentes desfavorables en centrales de deudores.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- ALQUILER: Bloque 2 - Garantías Aceptadas -->
    <div class="requisitos-card glass-panel">
      <div class="card-section-header">
        <div class="badge-icon">🛡️</div>
        <div>
          <h2>2. Garantías Aceptadas (Presentar una de las siguientes)</h2>
          <p>Opciones válidas para respaldar el cumplimiento del contrato de locación.</p>
        </div>
      </div>
      <div class="garantias-list">
        <div class="garantia-box">
          <div class="garantia-header">
            <span class="garantia-tag">Opción 1</span>
            <h3>Garantía Propietaria</h3>
          </div>
          <p>Inmueble de familiar directo (preferentemente en PBA o CABA). No debe encontrarse como bien de familia, embargado ni con gravámenes.</p>
          <ul class="garantia-sublist">
            <li>Copia de escritura de dominio y DNI de los titulares propietarios.</li>
            <li>Informe de dominio e inhibición emitido por el Registro de la Propiedad Inmueble.</li>
          </ul>
        </div>

        <div class="garantia-box">
          <div class="garantia-header">
            <span class="garantia-tag">Opción 2</span>
            <h3>Seguro de Caución / Fianza</h3>
          </div>
          <p>Póliza aprobada por compañías de primer nivel (Finaer, Premium Group, Respaldar, Garantía Ya).</p>
          <ul class="garantia-sublist">
            <li>Aprobación rápida en 24 a 48 hs.</li>
            <li>Trámite 100% digital respaldado por la aseguradora.</li>
          </ul>
        </div>

        <div class="garantia-box">
          <div class="garantia-header">
            <span class="garantia-tag">Opción 3</span>
            <h3>Recibos de Sueldo / Garantes Solidarios</h3>
          </div>
          <p>Presentación de 2 o 3 garantes con recibos de sueldo con antigüedad mínima de 2 años en relación de dependencia.</p>
        </div>
      </div>
    </div>

    <!-- ALQUILER: Bloque 3 - Condiciones Económicas de Ingreso -->
    <div class="requisitos-card glass-panel">
      <div class="card-section-header">
        <div class="badge-icon">💰</div>
        <div>
          <h2>3. Condiciones Económicas y Liquidación de Ingreso</h2>
          <p>Conceptos requeridos para la suscripción del contrato de locación.</p>
        </div>
      </div>
      <div class="requisitos-grid">
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Mes de Alquiler Adelantado</strong>
            <span>Correspondiente al primer mes de vigencia del contrato (${priceFormatted}).</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Mes de Depósito en Garantía</strong>
            <span>Equivalente a un mes de alquiler, reintegrable al finalizar el contrato en la misma moneda pactada.</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Honorarios Profesionales Inmobiliarios</strong>
            <span>Conforme a la normativa arancelaria de corretaje inmobiliario (Colegio de Martilleros de La Matanza).</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Gastos Administrativos e Informes</strong>
            <span>Sellado de ley, certificación notarial de firmas y pedido de informes de dominio e inhibición.</span>
          </div>
        </div>
      </div>
    </div>
  ` : `
    <!-- VENTA: Bloque 1 - Condiciones de Compra y Estado de Dominio -->
    <div class="requisitos-card glass-panel">
      <div class="card-section-header">
        <div class="badge-icon">🏡</div>
        <div>
          <h2>1. Condiciones Generales y Estado del Inmueble</h2>
          <p>Pautas operativas para la adquisición de la propiedad.</p>
        </div>
      </div>
      <div class="requisitos-grid">
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Valor de Publicación</strong>
            <span>${priceFormatted} (${prop.moneda || 'USD'}). Consultar por facilidades o permutas.</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Situación Dominial y Escrituración</strong>
            <span>Inmueble con título perfecto, documentación e impuestos listos para escriturar.</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>${isAptoCredito ? 'Apto Crédito Bancario Hipotecario' : 'Venta Directa / Contado'}</strong>
            <span>${isAptoCredito 
              ? 'Inmueble calificado y apto para ser financiado con créditos hipotecarios bancarios (UVA / Tradicionales). Planos y escrituras en regla.' 
              : 'Operación directa por boleto y escritura traslativa de dominio. No sujeta a crédito bancario.'}</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Destinos de Uso Habilitados</strong>
            <span>${(prop.destinos && prop.destinos.length > 0) ? prop.destinos.join(', ') : 'Vivienda / Inversión'}.</span>
          </div>
        </div>
      </div>
    </div>

    <!-- VENTA: Bloque 2 - Documentación Requerida del Comprador -->
    <div class="requisitos-card glass-panel">
      <div class="card-section-header">
        <div class="badge-icon">📋</div>
        <div>
          <h2>2. Documentación Requerida para la Compraventa</h2>
          <p>Requisitos formales para la confección de la Reserva y Boleto / Escritura.</p>
        </div>
      </div>
      <div class="requisitos-grid">
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Identificación del Comprador</strong>
            <span>DNI original y copia de todos los titulares compradores y cónyuges en caso de corresponder.</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Constancia de CUIT / CUIL y Estado Civil</strong>
            <span>Información tributaria y datos del cónyuge / régimen patrimonial.</span>
          </div>
        </div>
        <div class="req-item">
          <div class="req-check">✓</div>
          <div>
            <strong>Declaración de Origen Lícito de Fondos (UIF)</strong>
            <span>Conforme a la normativa de prevención de lavado de activos de la Unidad de Información Financiera.</span>
          </div>
        </div>
        ${isAptoCredito ? `
          <div class="req-item">
            <div class="req-check">✓</div>
            <div>
              <strong>Pre-aprobación del Crédito Hipotecario</strong>
              <span>Certificado de calificación crediticia o pre-acuerdo de la entidad bancaria interviniente.</span>
            </div>
          </div>
        ` : ''}
      </div>
    </div>

    <!-- VENTA: Bloque 3 - Pasos de la Operación y Gastos -->
    <div class="requisitos-card glass-panel">
      <div class="card-section-header">
        <div class="badge-icon">📝</div>
        <div>
          <h2>3. Etapas de la Operación y Gastos de Escritura</h2>
          <p>Cronograma de pasos formales hasta la entrega de posesión.</p>
        </div>
      </div>
      <div class="pasos-timeline">
        <div class="paso-row">
          <div class="paso-num">01</div>
          <div class="paso-body">
            <strong>Reserva Ad-Referéndum</strong>
            <p>Se formaliza la oferta de compra y se retira temporalmente la propiedad de la comercialización mientras el propietario evalúa la propuesta.</p>
          </div>
        </div>
        <div class="paso-row">
          <div class="paso-num">02</div>
          <div class="paso-body">
            <strong>Boleto de Compraventa / Refuerzo (Optativo o Directo a Escritura)</strong>
            <p>Redacción contractual con intervención notarial donde se pactan plazos definitivos y saldo de precio.</p>
          </div>
        </div>
        <div class="paso-row">
          <div class="paso-num">03</div>
          <div class="paso-body">
            <strong>Escritura Traslativa de Dominio y Posesión</strong>
            <p>Firma ante Escribano Público designado por la parte compradora, cancelación del saldo y entrega inmediata de llaves.</p>
          </div>
        </div>
      </div>
      <div class="gastos-note">
        <strong>Gastos de Ley:</strong> Los gastos de escrituración se distribuyen conforme a los usos y costumbres notariales (comprador abona aranceles de inscripción y honorarios de su escribano; vendedor abona certificados e ITI/Ganancias e impuestos devengados hasta la posesión). Honorarios inmobiliarios conforme a ley 10.973.
      </div>
    </div>
  `;

  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
  <meta name="description" content="Requisitos y condiciones para ${prop.nombre} - Ivana Molina Bienes Raíces y Asociados.">
  <title>Requisitos: ${prop.nombre} | Ivana Molina Bienes Raíces</title>
  
  <!-- Favicon -->
  <link rel="icon" type="image/png" href="../assets/logo-favicon-.png">
  <link rel="shortcut icon" type="image/png" href="../assets/logo-favicon-.png">
  <link rel="apple-touch-icon" href="../assets/logo-favicon-.png">

  <!-- Estilos base y de requisitos -->
  <link rel="stylesheet" href="../styles.css">
  <link rel="stylesheet" href="requisitos.css">
</head>
<body class="requisitos-page">

  <!-- Aurora Mesh Background -->
  <div class="aurora-bg">
    <div class="aurora-blob aurora-blob-1"></div>
    <div class="aurora-blob aurora-blob-2"></div>
    <div class="aurora-blob aurora-blob-3"></div>
  </div>

  <!-- Header Barra Superior -->
  <header class="app-header">
    <div class="header-container">
      <a href="../index.html" class="brand" title="Volver al Inicio">
        <img src="../assets/logo-favicon-.png" alt="Ivana Molina Bienes Raices" class="header-logo">
        <div class="brand-info">
          <h1>Hoja de Ruta Inmobiliaria</h1>
          <h2 style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin: 0;">IVANA MOLINA & ASOCIADOS BIENES RAÍCES</h2>
        </div>
      </a>

      <div class="header-actions-right">
        <a href="../index.html" class="btn btn-secondary btn-sm btn-back-home">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span>Volver a la Web</span>
        </a>
      </div>
    </div>
  </header>

  <!-- Contenedor Principal -->
  <main class="req-main-container">
    
    <!-- Hero Banner de la Propiedad -->
    <div class="req-hero-card glass-panel">
      <div class="req-hero-grid">
        <div class="req-hero-image-wrap">
          ${mainImage ? `
            <img src="../${mainImage}" alt="${prop.nombre}" class="req-hero-img">
          ` : `
            <div class="req-hero-placeholder">🏡</div>
          `}
          <div class="req-hero-badges">
            <span class="card-badge-operacion ${isAlquiler ? 'op-alquiler' : 'op-venta'}">${prop.operacion || 'Venta'}</span>
            <span class="card-badge-status ${(prop.estado === 'Alquilada' || prop.alquilada || prop.id === 5) ? 'status-alquilada' : 'status-lista'}">${(prop.estado === 'Alquilada' || prop.alquilada || prop.id === 5) ? 'Alquilada' : (prop.estado || 'Bueno')}</span>
            ${isAptoCredito ? `<span class="card-badge-credito">🏦 Apto Crédito</span>` : ''}
          </div>
          ${(prop.estado === 'Alquilada' || prop.alquilada || prop.id === 5) ? `<div class="ribbon-alquilada">Alquilada</div>` : ''}
        </div>

        <div class="req-hero-info">
          <div class="req-chip-label">
            <span>PLIEGO DE REQUISITOS Y CONDICIONES</span>
          </div>
          <h1 class="req-prop-title">${prop.nombre}</h1>
          <p class="req-prop-address">📍 ${prop.direccion || prop.ubicacion || '20 de Junio, Buenos Aires'}</p>
          
          <div class="req-quick-specs">
            <div class="spec-box">
              <span class="spec-label">Precio</span>
              <span class="spec-val highlight">${priceFormatted}</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Tipo</span>
              <span class="spec-val">${prop.tipo}</span>
            </div>
            <div class="spec-box">
              <span class="spec-label">Superficie</span>
              <span class="spec-val">${prop.superficie || 'A consultar'}</span>
            </div>
            ${prop.habitaciones ? `
              <div class="spec-box">
                <span class="spec-label">Ambientes</span>
                <span class="spec-val">${prop.habitaciones} hab / ${prop.banos || 1} baños</span>
              </div>
            ` : ''}
          </div>

          <div class="req-hero-actions">
            <a href="${wppUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Consultar por WhatsApp</span>
            </a>
            <a href="../index.html" class="btn btn-secondary">
              Ver en el Catálogo
            </a>
          </div>
        </div>
      </div>
    </div>

    <!-- Contenido Detallado de Requisitos -->
    <div class="req-content-body">
      ${parsedSectionsHtml}
      ${defaultSectionsHtml}
    </div>

    <!-- Banner Inferior de Contacto & Asesoramiento -->
    <div class="req-footer-contact glass-panel">
      <div class="footer-contact-text">
        <h3>¿Tenés dudas sobre los requisitos o querés coordinar una visita?</h3>
        <p>Nuestro equipo de martilleros y corredores colegiados está a tu disposición para asesorarte en cada paso.</p>
      </div>
      <div class="footer-contact-actions">
        <a href="${wppUrl}" target="_blank" rel="noopener" class="btn btn-whatsapp">
          <span>Hablar con Ivana Molina</span>
        </a>
        <a href="../index.html" class="btn btn-secondary">
          <span>Volver al Inicio</span>
        </a>
      </div>
    </div>

  </main>

  <!-- Footer Legal -->
  <footer class="app-footer" style="text-align: center; padding: 2rem; color: var(--text-muted); font-size: 0.8rem;">
    <p>Ivana Molina & Asociados Bienes Raíces • Matrícula 1048 • 20 de Junio, Buenos Aires</p>
  </footer>

</body>
</html>
`;
}

/**
 * Función Principal de Construcción
 */
async function buildAll() {
  console.log('--- INICIANDO COMPILACIÓN DE REQUISITOS (SOLO ALQUILER) ---');
  
  if (!fs.existsSync(PROPS_FILE)) {
    console.error('No se encontró el archivo de propiedades:', PROPS_FILE);
    return;
  }

  const props = JSON.parse(fs.readFileSync(PROPS_FILE, 'utf8'));
  console.log(`Cargadas ${props.length} propiedades en catálogo.`);

  let updatedProps = false;
  const activeAlquilerSlugs = new Set();

  for (const p of props) {
    const isAlquiler = (p.operacion || '').toLowerCase() === 'alquiler';
    const slug = SLUG_MAP[p.id] || slugify(p.nombre);
    
    if (p.slug !== slug) {
      p.slug = slug;
      updatedProps = true;
    }

    if (!isAlquiler) {
      continue;
    }

    activeAlquilerSlugs.add(`${slug}.html`);

    // Ubicar carpeta física
    const propDir = findPropertyDirectory(p);
    let pdfFile = null;
    let pdfText = null;

    if (propDir) {
      pdfFile = findPdfInDir(propDir);
      if (pdfFile) {
        console.log(`[ID ${p.id}] PDF detectado en ${pdfFile}`);
        pdfText = await extractTextFromPdf(pdfFile);
      }
    }

    // Generar archivo HTML
    const htmlContent = generateHtmlPage(p, slug, pdfText);
    const targetHtmlPath = path.join(REQUISITOS_DIR, `${slug}.html`);
    fs.writeFileSync(targetHtmlPath, htmlContent, 'utf8');
    console.log(`✓ Generado (Alquiler): /requisitos/${slug}.html`);
  }

  // Limpiar páginas HTML obsoletas (ej. ventas o propiedades eliminadas)
  const existingFiles = fs.readdirSync(REQUISITOS_DIR);
  for (const file of existingFiles) {
    if (file.endsWith('.html') && !activeAlquilerSlugs.has(file)) {
      fs.unlinkSync(path.join(REQUISITOS_DIR, file));
      console.log(`🗑️ Eliminado requisito no correspondiente a alquiler: /requisitos/${file}`);
    }
  }

  // Guardar archivo actualizado con los slugs
  if (updatedProps) {
    fs.writeFileSync(PROPS_FILE, JSON.stringify(props, null, 2), 'utf8');
    console.log('✓ data/propiedades.json sincronizado con slugs.');
  }

  console.log('--- COMPILACIÓN FINALIZADA CON ÉXITO ---');
}

buildAll().catch(err => console.error('Error durante la compilación:', err));
