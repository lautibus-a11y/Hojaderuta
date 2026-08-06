/**
 * HOJA DE RUTA INMOBILIARIA - IVANA MOLINA BIENES RAICES Y ASOCIADOS
 * Lógica Vanilla JS (ES6+) con Generación de PDF Reparada e Imágenes Robustas
 */

const DEFAULT_PROPIEDADES = [
  {
    "id": 1,
    "nombre": "Casa Quinta La Rosalía",
    "tipo": "Casa Quinta",
    "precio": 98000,
    "ubicacion": "20 de Junio",
    "direccion": "Calle Las Heras 1450, 20 de Junio",
    "superficie": "1250 m²",
    "estado": "A reciclar",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/propiedades/la rosalia cinvertida/1.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/2.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/3.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/4.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/5.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/6.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/7.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/8.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/9.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/10.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/11.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/12.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/13.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/14.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/15.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/16.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/17.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/18.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/19.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/20.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/21.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/22.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/23.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/24.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/25.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/26.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/27.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/28.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/29.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/30.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/31.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/32.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/33.webp",
      "assets/imagenes/propiedades/la rosalia cinvertida/34.webp"
    ],
    "video": "assets/imagenes/propiedades/la rosalia cinvertida/La rosalia.mp4",
    "potencial_inversion": "Magnífica propiedad quinta con gran superficie verde. Excelente potencial para desarrollo de eventos, alquiler temporal o residencia de descanso.",
    "renta_estimada": "USD 750 / mes (alquiler fin de semana)",
    "destinos": [
      "Alquiler",
      "Casa de fin de semana",
      "Inversión",
      "Vivienda"
    ]
  },
  {
    "id": 2,
    "nombre": "Quinta Residencia El Maestro",
    "tipo": "Casa Quinta",
    "precio": 145000,
    "ubicacion": "20 de Junio",
    "direccion": "Camino El Maestro s/n, 20 de Junio",
    "superficie": "2400 m²",
    "estado": "Lista para usar",
    "habitaciones": 4,
    "banos": 3,
    "imagenes": [
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_PORTADA.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_3.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_4.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_5.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_6.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_7.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_8.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_9.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_10.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_11.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_12.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_13-14.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_14.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_15.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_16.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_17.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_18.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_19.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_20.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_21.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_22.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_23.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_24.webp",
      "assets/imagenes/propiedades/QUINTA EL MAESTRO/QUINTA EL MAESTRO_25.webp"
    ],
    "video": "assets/imagenes/propiedades/QUINTA EL MAESTRO/elmaestro-canva.mp4",
    "potencial_inversion": "Propiedad de alta gama en impecable estado con parque arbolado, piscina equipada y gran quincho. Alta valorización en la zona.",
    "renta_estimada": "USD 1.250 / mes",
    "destinos": [
      "Vivienda",
      "Casa de fin de semana",
      "Inversión"
    ]
  },
  {
    "id": 3,
    "nombre": "Departamento & Quinta La Simona",
    "tipo": "Casa Quinta",
    "precio": 68000,
    "ubicacion": "20 de Junio",
    "direccion": "Calle Copahue 340, 20 de Junio",
    "superficie": "900 m²",
    "estado": "Lista para usar",
    "habitaciones": 2,
    "banos": 1,
    "imagenes": [
      "assets/imagenes/propiedades/simona/Diseño sin título (75).webp",
      "assets/imagenes/propiedades/simona/Diseño sin título (76).webp",
      "assets/imagenes/propiedades/simona/Temperatura un toque de nitidez.webp",
      "assets/imagenes/propiedades/simona/Toque de Nitidez Temperatura (1).webp",
      "assets/imagenes/propiedades/simona/Toque de Nitidez Temperatura (2).webp",
      "assets/imagenes/propiedades/simona/Toque de Nitidez Temperatura (3).webp",
      "assets/imagenes/propiedades/simona/Toque de Nitidez Temperatura.webp",
      "assets/imagenes/propiedades/simona/Toque de Nitidez y Temperatura (1).webp",
      "assets/imagenes/propiedades/simona/Toque de Nitidez y Temperatura.webp"
    ],
    "video": "assets/imagenes/propiedades/simona/simona.mp4",
    "potencial_inversion": "Unidad independiente con parque y piscina. Trámite de subdivisión en lote independiente de 900 m² con renta activa de contrato vigente.",
    "renta_estimada": "USD 500 / mes (renta asegurada)",
    "destinos": [
      "Inversión",
      "Alquiler",
      "Vivienda"
    ]
  },
  {
    "id": 4,
    "nombre": "Quinta Avenida Ejercito de los Andes",
    "tipo": "Casa Quinta",
    "precio": 118000,
    "ubicacion": "20 de Junio",
    "direccion": "Av. Ejército de los Andes 820, 20 de Junio",
    "superficie": "1600 m²",
    "estado": "Lista para usar",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_1.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_2.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_3.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_4.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_5.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_6.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_7.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_8.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_9.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_10.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_11.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_12.webp",
      "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito de los Andes_13.webp"
    ],
    "video": "assets/imagenes/propiedades/Ejercito-de-los-andes/Ejercito-de-los-andes.mp4",
    "potencial_inversion": "Residencia destacada sobre avenida principal con excelente accesibilidad, entorno residencial verde y comodidades completas.",
    "renta_estimada": "USD 880 / mes",
    "destinos": [
      "Vivienda",
      "Inversión",
      "Casa de fin de semana"
    ]
  },
  {
    "id": 5,
    "nombre": "Casa Familiar Cassafousth",
    "tipo": "Casa",
    "precio": 82000,
    "ubicacion": "20 de Junio",
    "direccion": "Calle Cassafousth 600, 20 de Junio",
    "superficie": "780 m²",
    "estado": "Lista para usar",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/propiedades/Cassafouth 600/wm_PORTADA.webp",
      "assets/imagenes/propiedades/Cassafouth 600/wm_2.webp",
      "assets/imagenes/propiedades/Cassafouth 600/wm_3.webp",
      "assets/imagenes/propiedades/Cassafouth 600/wm_4 .webp",
      "assets/imagenes/propiedades/Cassafouth 600/wm_5.webp",
      "assets/imagenes/propiedades/Cassafouth 600/wm_6.webp",
      "assets/imagenes/propiedades/Cassafouth 600/wm_7.webp",
      "assets/imagenes/propiedades/Cassafouth 600/wm_8.webp",
      "assets/imagenes/propiedades/Cassafouth 600/wm_9.webp"
    ],
    "video": "assets/imagenes/propiedades/Cassafouth 600/cassafousth600.mp4",
    "potencial_inversion": "Propiedad sólida con jardín posterior, parrilla, cochera y ambientes amplios. Ideal para familia que busca tranquilidad.",
    "renta_estimada": "USD 620 / mes",
    "destinos": [
      "Vivienda",
      "Alquiler"
    ]
  },
  {
    "id": 6,
    "nombre": "Chacra Privada Ceretti 1300",
    "tipo": "Casa Quinta",
    "precio": 165000,
    "ubicacion": "20 de Junio",
    "direccion": "Calle Ceretti 1300, 20 de Junio",
    "superficie": "3100 m²",
    "estado": "Lista para usar",
    "habitaciones": 4,
    "banos": 3,
    "imagenes": [
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_1.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_2.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_3.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_4.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_5.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_6.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_7.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_8.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_9.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_10.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_11.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_12.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_13.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_14.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_15.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_16.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_17.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_18.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_19.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_20.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_21.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_22.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_23.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_24.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_25.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_26.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_27.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_28.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_29.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_30.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_31.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_32.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_33.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_34.webp",
      "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300 retocadas y marca de agua_35.webp"
    ],
    "video": "assets/imagenes/propiedades/Ceretti-1300/Ceretti 1300  música .mp4",
    "potencial_inversion": "Chacra exclusiva de más de 3000 m² de parque arbolado, piscina solárium y casa principal premium. Excelente retorno por alquileres corporativos.",
    "renta_estimada": "USD 1.400 / mes",
    "destinos": [
      "Casa de fin de semana",
      "Vivienda",
      "Inversión"
    ]
  },
  {
    "id": 7,
    "nombre": "Residencia Leopardi 5800",
    "tipo": "Casa",
    "precio": 89000,
    "ubicacion": "20 de Junio",
    "direccion": "Calle Leopardi 5800, 20 de Junio",
    "superficie": "850 m²",
    "estado": "A refaccionar",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_1.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_2.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_3.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_4.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_5.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_6.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_7.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_8.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_9.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_10.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_11.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_12.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_13.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_14.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_15.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_16.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_17.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_18.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_19.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_20.webp",
      "assets/imagenes/propiedades/Leopardi al 5800/Leopardi al 5800_21.webp"
    ],
    "video": null,
    "potencial_inversion": "Lote de gran dimensión con edificación sólida a refaccionar. Inversión con alto margen de revalorización tras remodelación.",
    "renta_estimada": "USD 580 / mes",
    "destinos": [
      "Inversión",
      "Vivienda",
      "Alquiler"
    ]
  },
  {
    "id": 8,
    "nombre": "Lote Residencial Juan Pío Gana",
    "tipo": "Lote",
    "precio": 42000,
    "ubicacion": "20 de Junio",
    "direccion": "Calle Juan Pío Gana s/n, 20 de Junio",
    "superficie": "1050 m²",
    "estado": "Lista para usar",
    "habitaciones": 0,
    "banos": 0,
    "imagenes": [
      "assets/imagenes/propiedades/juan pio/Juan pio gana_D_705244-MLA89580743718_082025-F.webp",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.36.jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.37 (1).jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.37.jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.38.jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.40.jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.41 (1).jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.41.jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.43 (1).jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.43.jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.45.jpeg",
      "assets/imagenes/propiedades/juan pio/Juan pio gana_WhatsApp Image 2026-02-18 at 10.17.47.jpeg"
    ],
    "video": "assets/imagenes/propiedades/juan pio/juan pio.mp4",
    "potencial_inversion": "Lote llano de 1050 m² rodeado de quintas consolidadas. Excelente oportunidad para construir casa o quinta a medida.",
    "renta_estimada": "Apreciación estimada +30% a 24 meses",
    "destinos": [
      "Inversión",
      "Vivienda",
      "Casa de fin de semana"
    ]
  }
];

const DEFAULT_CLIENTES = [
  {
    "id": 1,
    "nombre": "Carlos Mendoza",
    "presupuesto_max": 100000,
    "objetivo": "Casa quinta",
    "tipo_interes": "Casa Quinta",
    "fecha_registro": "2026-08-01",
    "observaciones": "Busca amplio parque y tranquilidad para fin de semana."
  }
];

const state = {
  propiedades: [],
  clientes: [],
  activeRoadmap: null,
  activeTab: 'dashboard',
  modalActivePropId: null,
  modalActiveImgIdx: 0
};

let isDrawing = false;
let canvasCtx = null;

document.addEventListener('DOMContentLoaded', async () => {
  initDateFields();
  initCanvas();
  initTabNavigation();
  initEventListeners();

  await loadInitialData();
  renderDashboard();
});

async function loadInitialData() {
  try {
    const resProp = await fetch('data/propiedades.json').then(r => {
      if (!r.ok) throw new Error('Network error');
      return r.json();
    }).catch(() => null);

    state.propiedades = (resProp && resProp.length > 0) ? resProp : DEFAULT_PROPIEDADES;
    state.clientes = DEFAULT_CLIENTES;
  } catch (err) {
    state.propiedades = DEFAULT_PROPIEDADES;
    state.clientes = DEFAULT_CLIENTES;
  }

  updateDashboardStats();
}

function updateDashboardStats() {
  const statEl = document.getElementById('statTotalProps');
  if (statEl) statEl.textContent = state.propiedades.length;
}

function initTabNavigation() {
  const tabs = document.querySelectorAll('.nav-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabName = tab.getAttribute('data-tab');
      switchTab(tabName);
    });
  });

  document.getElementById('btnStartGenerator')?.addEventListener('click', () => {
    switchTab('generator');
  });

  document.getElementById('brandLink')?.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab('dashboard');
  });
}

function switchTab(tabName) {
  state.activeTab = tabName;

  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.getAttribute('data-tab') === tabName) {
      tab.classList.add('active');
      tab.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    } else {
      tab.classList.remove('active');
    }
  });

  document.querySelectorAll('.tab-view').forEach(view => {
    if (view.id === `view-${tabName}`) {
      view.classList.add('active');
    } else {
      view.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderDashboard() {
  renderPropertiesGrid(state.propiedades);

  const filterTipo = document.getElementById('filterTipo');
  const filterEstado = document.getElementById('filterEstado');

  const applyFilters = () => {
    const tipoVal = filterTipo.value;
    const estadoVal = filterEstado.value;

    const filtered = state.propiedades.filter(p => {
      const matchTipo = (tipoVal === 'todos' || p.tipo === tipoVal);
      const matchEstado = (estadoVal === 'todos' || p.estado === estadoVal);
      return matchTipo && matchEstado;
    });

    renderPropertiesGrid(filtered);
  };

  filterTipo?.addEventListener('change', applyFilters);
  filterEstado?.addEventListener('change', applyFilters);
}

function renderPropertiesGrid(list) {
  const container = document.getElementById('dashboardPropertiesGrid');
  if (!container) return;

  if (!list || list.length === 0) {
    container.innerHTML = `
      <div class="glass-panel" style="grid-column: 1 / -1; text-align: center; padding: 3rem;">
        <p style="color: var(--text-secondary);">No se encontraron propiedades que coincidan con los filtros seleccionados.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = list.map(p => createPropertyCardHTML(p)).join('');
}

function createPropertyCardHTML(p) {
  const statusClass = p.estado === 'Lista para usar' ? 'status-lista' :
                      p.estado === 'A reciclar' ? 'status-reciclar' : 'status-refaccionar';
  
  const mainImage = (p.imagenes && p.imagenes.length > 0) ? p.imagenes[0] : '';
  const hasVideo = Boolean(p.video);

  return `
    <div class="property-card">
      <div class="card-image-wrap" onclick="openPropertyModal(${p.id})" style="cursor: pointer;">
        ${mainImage ? `
          <img src="${encodeURI(mainImage)}" alt="${p.nombre}" class="card-image" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\'card-image-placeholder\'><span>🏡</span><span>${p.nombre}</span></div>';">
        ` : `
          <div class="card-image-placeholder">
            <span>🏡</span>
            <span>${p.nombre}</span>
          </div>
        `}
        <span class="card-badge-status ${statusClass}">${p.estado}</span>
        ${hasVideo ? `<span class="badge-video">🎬 Video</span>` : ''}
        <div class="card-price-tag">USD ${p.precio.toLocaleString()}</div>
      </div>

      <div class="card-body">
        <div class="card-type">${p.tipo} • 20 de Junio</div>
        <h3 class="card-title">${p.nombre}</h3>
        <div class="card-location">📍 ${p.direccion}</div>

        <div class="card-features">
          <div class="feature-item">📐 ${p.superficie}</div>
          ${p.habitaciones ? `<div class="feature-item">🛏️ ${p.habitaciones} hab</div>` : ''}
          ${p.banos ? `<div class="feature-item">🚿 ${p.banos} baños</div>` : ''}
        </div>

        <div class="card-potential">
          <strong>Potencial:</strong> ${p.potencial_inversion}
        </div>

        <div class="card-destinos">
          ${p.destinos.map(d => `<span class="tag-destino">${d}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 0.5rem; margin-top: auto;">
          <button class="btn btn-secondary btn-sm btn-full" onclick="openPropertyModal(${p.id})">
            Ver Galería
          </button>
          <button class="btn btn-primary btn-sm btn-full" onclick="prepareVisitSheetForProperty('${escapeJS(p.nombre)}', '${escapeJS(p.direccion)}')">
            Ficha Visita
          </button>
        </div>
      </div>
    </div>
  `;
}

function escapeJS(str) {
  return str.replace(/'/g, "\'").replace(/"/g, '\"');
}

function initEventListeners() {
  const roadmapForm = document.getElementById('roadmapForm');
  if (roadmapForm) {
    roadmapForm.addEventListener('submit', (e) => {
      e.preventDefault();
      generateRoadmap();
    });
  }

  document.getElementById('btnCloseModal')?.addEventListener('click', closeModal);
  document.getElementById('propertyModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'propertyModal') closeModal();
  });
}

function generateRoadmap() {
  const clientName = document.getElementById('clientName').value.trim();
  const clientBudget = parseFloat(document.getElementById('clientBudget').value);
  const clientObjective = document.getElementById('clientObjective').value;
  const clientPropertyType = document.getElementById('clientPropertyType').value;
  const clientNotes = document.getElementById('clientNotes').value.trim();

  const matchingProperties = state.propiedades.filter(p => {
    if (p.precio > clientBudget) return false;
    if (clientPropertyType !== 'todas' && p.tipo !== clientPropertyType) return false;

    if (clientObjective && p.destinos) {
      const objLower = clientObjective.toLowerCase();
      const matchDestino = p.destinos.some(d => d.toLowerCase().includes(objLower) || objLower.includes(d.toLowerCase()));
      return matchDestino || objLower.includes('inversión') || objLower.includes('inversion');
    }

    return true;
  });

  const roadmapId = `HR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const todayStr = new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });

  const newRoadmap = {
    id: roadmapId,
    cliente: clientName,
    fecha: todayStr,
    presupuesto: clientBudget,
    objetivo: clientObjective,
    tipo: clientPropertyType,
    observaciones: clientNotes,
    propiedades: matchingProperties
  };

  state.activeRoadmap = newRoadmap;
  renderRoadmapView(newRoadmap);
  switchTab('roadmap');
}

function renderRoadmapView(roadmap) {
  const container = document.getElementById('roadmapContent');
  if (!container) return;

  if (!roadmap || !roadmap.propiedades) {
    container.innerHTML = `
      <div class="glass-panel" style="text-align: center; padding: 4rem 2rem;">
        <h3 style="font-size: 1.4rem; font-weight: 700;">No hay Hoja de Ruta activa</h3>
        <button class="btn btn-primary" onclick="switchTab('generator')" style="margin-top: 1rem;">Ir a Diseñar Mi Ruta</button>
      </div>
    `;
    return;
  }

  // 1. Web Property Cards (Pantalla)
  const webPropsHTML = roadmap.propiedades.length > 0 ? roadmap.propiedades.map(p => {
    const statusClass = p.estado === 'Lista para usar' ? 'status-lista' :
                        p.estado === 'A reciclar' ? 'status-reciclar' : 'status-refaccionar';
    const mainImage = (p.imagenes && p.imagenes.length > 0) ? p.imagenes[0] : '';
    const hasVideo = Boolean(p.video);

    return `
      <div class="roadmap-property-card">
        <div class="roadmap-card-img-container" onclick="openPropertyModal(${p.id})" style="cursor: pointer;">
          ${mainImage ? `
            <img src="${encodeURI(mainImage)}" alt="${p.nombre}" class="roadmap-card-img" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\'card-image-placeholder\'><span>🏡</span><span>${p.nombre}</span></div>';">
          ` : `
            <div class="card-image-placeholder">
              <span>🏡</span>
              <span>${p.nombre}</span>
            </div>
          `}
          <span class="card-badge-status ${statusClass}" style="position: absolute; top: 1rem; left: 1rem;">${p.estado}</span>
          ${hasVideo ? `<span class="badge-video" style="position: absolute; top: 1rem; right: 1rem;">🎬 Video</span>` : ''}
        </div>

        <div class="roadmap-card-content">
          <div>
            <div class="roadmap-card-header">
              <div>
                <div class="card-type">${p.tipo} • 20 de Junio</div>
                <h3 class="card-title" style="font-size: 1.4rem;">${p.nombre}</h3>
                <div class="card-location">📍 ${p.direccion}</div>
              </div>
              <div class="roadmap-price">USD ${p.precio.toLocaleString()}</div>
            </div>

            <div class="card-features" style="margin: 0.85rem 0;">
              <div class="feature-item">📐 ${p.superficie}</div>
              ${p.habitaciones ? `<div class="feature-item">🛏️ ${p.habitaciones} dorms</div>` : ''}
              ${p.banos ? `<div class="feature-item">🚿 ${p.banos} baños</div>` : ''}
            </div>

            <!-- 💡 ¿Por qué te conviene esta opción? (Checks de conveniencia) -->
            <div style="margin: 0.9rem 0;">
              <h4 style="font-size: 0.82rem; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.05em; margin-bottom: 0.4rem;">💡 ¿Por qué te conviene esta opción?</h4>
              <div class="why-buy-list">
                <div class="why-buy-item">
                  <span>✓</span> Revalorización de zona estimada: <strong>+25% a 3 años en 20 de Junio</strong>
                </div>
                <div class="why-buy-item">
                  <span>✓</span> Entorno residencial tranquilo con excelente proyección de desarrollo
                </div>
                <div class="why-buy-item">
                  <span>✓</span> Alta demanda comprobada en ${p.destinos ? p.destinos.join(', ') : 'Inversión'}
                </div>
              </div>
            </div>

            ${hasVideo ? `
              <div style="margin: 1rem 0;">
                <div style="font-size: 0.8rem; font-weight: 700; color: #ffffff; margin-bottom: 0.4rem;">🎬 Video Recorrido de la Propiedad</div>
                <video controls preload="metadata" style="width: 100%; max-height: 240px; border-radius: var(--radius-md); background: #000;">
                  <source src="${encodeURI(p.video)}" type="video/mp4">
                  Tu navegador no soporta reproducción de video.
                </video>
              </div>
            ` : ''}

            <div class="info-block">
              <h4>Potencial de Inversión</h4>
              <p>${p.potencial_inversion}</p>
            </div>

            ${p.renta_estimada ? `
              <div class="info-block" style="border-left-color: #10b981;">
                <h4 style="color: #34d399;">Rentabilidad Estimada</h4>
                <p>${p.renta_estimada}</p>
              </div>
            ` : ''}

            <div class="card-destinos" style="margin-top: 0.75rem;">
              <strong style="font-size: 0.78rem; color: var(--text-secondary); width: 100%; margin-bottom: 0.2rem;">Destinos Recomendados:</strong>
              ${p.destinos.map(d => `<span class="tag-destino">${d}</span>`).join('')}
            </div>
          </div>

          <!-- Action Buttons inside Roadmap Card -->
          <div class="roadmap-card-actions">
            <button class="btn btn-secondary btn-sm" onclick="openPropertyModal(${p.id})">
              Ver Galería
            </button>
            <button class="btn btn-primary btn-sm" onclick="prepareVisitSheetForProperty('${escapeJS(p.nombre)}', '${escapeJS(p.direccion)}', '${escapeJS(roadmap.cliente)}')">
              Crear Ficha de Visita
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('') : `
    <div class="glass-panel" style="text-align: center; padding: 3rem;">
      <p style="color: var(--text-secondary);">No encontramos propiedades dentro del presupuesto especificado (USD ${roadmap.presupuesto.toLocaleString()}). Te sugerimos probar aumentando el presupuesto en el generador.</p>
    </div>
  `;

  // 2. PDF ONLY Layout HTML (Activo durante la impresión de PDF)
  const pdfPropsHTML = roadmap.propiedades.length > 0 ? roadmap.propiedades.map(p => {
    const mainImage = (p.imagenes && p.imagenes.length > 0) ? p.imagenes[0] : '';
    return `
      <div class="pdf-property-item">
        ${mainImage ? `
          <div class="pdf-property-frame">
            <img src="${encodeURI(mainImage)}" alt="${p.nombre}" class="pdf-property-img" onerror="this.onerror=null; this.src='assets/logo-favicon-.png';">
          </div>
        ` : ''}

        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div>
            <div class="pdf-property-title">${p.nombre}</div>
            <div style="font-size: 0.85rem; color: #4b5563;">📍 ${p.direccion} (${p.tipo} • 20 de Junio)</div>
          </div>
          <div class="pdf-property-price">USD ${p.precio.toLocaleString()}</div>
        </div>

        <table class="pdf-table">
          <thead>
            <tr>
              <th>Superficie</th>
              <th>Dormitorios / Ambientes</th>
              <th>Baños</th>
              <th>Estado Inmueble</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${p.superficie}</td>
              <td>${p.habitaciones ? p.habitaciones + ' dorms' : 'N/A'}</td>
              <td>${p.banos ? p.banos + ' baños' : 'N/A'}</td>
              <td><strong>${p.estado}</strong></td>
            </tr>
          </tbody>
        </table>

        <div class="why-buy-list">
          <strong style="font-size: 0.82rem; text-transform: uppercase; color: #374151; display: block; margin-bottom: 0.4rem;">💡 Aspectos Clave de Conveniencia:</strong>
          <div class="why-buy-item"><span>✓</span> Revalorización de zona estimada: <strong>+25% a 3 años en 20 de Junio</strong></div>
          <div class="why-buy-item"><span>✓</span> Entorno residencial tranquilo con excelente proyección de desarrollo</div>
          <div class="why-buy-item"><span>✓</span> Alta demanda comprobada en ${p.destinos ? p.destinos.join(', ') : 'Inversión'}</div>
        </div>

        <table class="pdf-table" style="margin-top: 0.85rem;">
          <thead>
            <tr>
              <th>Potencial de Inversión</th>
              ${p.renta_estimada ? '<th>Rentabilidad Estimada</th>' : ''}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${p.potencial_inversion}</td>
              ${p.renta_estimada ? `<td><strong>${p.renta_estimada}</strong></td>` : ''}
            </tr>
          </tbody>
        </table>
      </div>
    `;
  }).join('') : '';

  container.innerHTML = `
    <!-- Web UI Header Banner (Screen Only) -->
    <div class="roadmap-header-banner no-print">
      <div class="roadmap-header-info">
        <div class="roadmap-badge-id">HOJA DE RUTA #${roadmap.id}</div>
        <h2 class="roadmap-client-title">Tu Recorrido en 20 de Junio</h2>
        <div class="roadmap-client-name">Propuesta para: <strong>${roadmap.cliente}</strong></div>

        <div class="client-meta-grid">
          <div class="meta-box">
            <span class="meta-label">Fecha</span>
            <span class="meta-val">${roadmap.fecha}</span>
          </div>
          <div class="meta-box">
            <span class="meta-label">Presupuesto Máx.</span>
            <span class="meta-val">USD ${roadmap.presupuesto.toLocaleString()}</span>
          </div>
          <div class="meta-box">
            <span class="meta-label">Objetivo</span>
            <span class="meta-val">${roadmap.objetivo}</span>
          </div>
          <div class="meta-box">
            <span class="meta-label">Sugerencias</span>
            <span class="meta-val">${roadmap.propiedades.length} ${roadmap.propiedades.length === 1 ? 'Propiedad' : 'Propiedades'}</span>
          </div>
        </div>
      </div>

      <div class="roadmap-actions-row no-print">
        <button class="btn btn-primary roadmap-action-btn" onclick="window.print()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>Descargar PDF</span>
        </button>
        
        <button class="btn btn-secondary roadmap-action-btn" onclick="shareRoadmap('${escapeJS(roadmap.cliente)}')">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="18" cy="5" r="3"></circle>
            <circle cx="6" cy="12" r="3"></circle>
            <circle cx="18" cy="19" r="3"></circle>
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
          </svg>
          <span>Compartir</span>
        </button>
      </div>
    </div>

    <!-- Web Property List (Screen Only) -->
    <div class="roadmap-property-list no-print">
      <div class="section-title-with-arrow">
        <h3>Recorrido Sugerido</h3>
        <div class="animated-down-arrow" title="Ver propiedades">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <polyline points="19 12 12 19 5 12"></polyline>
          </svg>
        </div>
      </div>
      ${webPropsHTML}
    </div>

    <!-- PDF ONLY Container (Visible únicamente en impresión) -->
    <div class="pdf-only">
      <div class="pdf-header-banner">
        <div class="pdf-header-left">
          <img src="assets/logo-favicon-.png" alt="Logo" class="pdf-logo">
          <div class="pdf-brand-text">
            <h2>IVANA MOLINA BIENES RAICES Y ASOCIADOS</h2>
            <p>HOJA DE RUTA DE INVERSIÓN INMOBILIARIA</p>
          </div>
        </div>
        <div class="pdf-header-right">
          <span class="pdf-doc-badge">HOJA DE RUTA #${roadmap.id}</span>
        </div>
      </div>

      <table class="pdf-table">
        <thead>
          <tr>
            <th>Cliente Comprador / Inversor</th>
            <th>Fecha Emisión</th>
            <th>Presupuesto Máximo</th>
            <th>Objetivo de Búsqueda</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>${roadmap.cliente}</strong></td>
            <td>${roadmap.fecha}</td>
            <td>USD ${roadmap.presupuesto.toLocaleString()}</td>
            <td>${roadmap.objetivo}</td>
          </tr>
        </tbody>
      </table>

      ${pdfPropsHTML}
    </div>
  `;
}

function shareRoadmap(clientName) {
  const shareData = {
    title: `Hoja de Ruta Inmobiliaria - ${clientName}`,
    text: `Propuesta personalizada de inversión en 20 de Junio por Ivana Molina Bienes Raices y Asociados.`,
    url: window.location.href
  };

  if (navigator.share) {
    navigator.share(shareData).catch(() => {});
  } else {
    navigator.clipboard.writeText(window.location.href);
    alert('¡Enlace de la propuesta copiado al portapapeles!');
  }
}

function initDateFields() {
  const visitDate = document.getElementById('visitDate');
  if (visitDate) {
    const today = new Date().toISOString().split('T')[0];
    visitDate.value = today;
  }

  const visitTime = document.getElementById('visitTime');
  if (visitTime) {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    visitTime.value = timeStr;
  }
}

function prepareVisitSheetForProperty(propName, propAddress, clientName = '') {
  document.getElementById('visitProperty').value = propName;
  document.getElementById('visitAddress').value = propAddress;
  if (clientName) {
    document.getElementById('visitClientName').value = clientName;
    document.getElementById('visitSignClarification').value = clientName;
  }

  switchTab('visit-sheet');
}

function initCanvas() {
  const canvas = document.getElementById('signatureCanvas');
  if (!canvas) return;

  canvasCtx = canvas.getContext('2d');
  
  canvasCtx.strokeStyle = '#000000';
  canvasCtx.lineWidth = 2.5;
  canvasCtx.lineCap = 'round';
  canvasCtx.lineJoin = 'round';

  const getPos = (e) => {
    const rect = canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: (clientX - rect.left) * (canvas.width / rect.width),
      y: (clientY - rect.top) * (canvas.height / rect.height)
    };
  };

  const startDrawing = (e) => {
    isDrawing = true;
    const pos = getPos(e);
    canvasCtx.beginPath();
    canvasCtx.moveTo(pos.x, pos.y);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    e.preventDefault();
    const pos = getPos(e);
    canvasCtx.lineTo(pos.x, pos.y);
    canvasCtx.stroke();
  };

  const stopDrawing = () => {
    isDrawing = false;
  };

  canvas.addEventListener('mousedown', startDrawing);
  canvas.addEventListener('mousemove', draw);
  canvas.addEventListener('mouseup', stopDrawing);
  canvas.addEventListener('mouseleave', stopDrawing);

  canvas.addEventListener('touchstart', startDrawing);
  canvas.addEventListener('touchmove', draw);
  canvas.addEventListener('touchend', stopDrawing);

  document.getElementById('btnClearSignature')?.addEventListener('click', clearSignatureCanvas);

  document.getElementById('btnPrintVisitSheet')?.addEventListener('click', () => {
    window.print();
  });
}

function clearSignatureCanvas() {
  const canvas = document.getElementById('signatureCanvas');
  if (canvas && canvasCtx) {
    canvasCtx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function openPropertyModal(id) {
  const prop = state.propiedades.find(p => p.id === id);
  if (!prop) return;

  state.modalActivePropId = id;
  state.modalActiveImgIdx = 0;

  renderPropertyModalContent(prop);

  const modal = document.getElementById('propertyModal');
  if (modal) modal.classList.add('active');
}

function renderPropertyModalContent(prop) {
  const modalBody = document.getElementById('modalBody');
  if (!modalBody) return;

  const statusClass = prop.estado === 'Lista para usar' ? 'status-lista' :
                      prop.estado === 'A reciclar' ? 'status-reciclar' : 'status-refaccionar';
  const hasVideo = Boolean(prop.video);
  const totalImgs = prop.imagenes ? prop.imagenes.length : 0;
  const currentImg = (totalImgs > 0) ? prop.imagenes[state.modalActiveImgIdx] : '';

  const thumbsHTML = totalImgs > 0 ? `
    <div class="thumbs-strip">
      ${prop.imagenes.map((img, idx) => `
        <img src="${encodeURI(img)}" alt="Foto ${idx + 1}" class="thumb-item ${idx === state.modalActiveImgIdx ? 'active' : ''}" onclick="setModalGalleryIndex(${idx})">
      `).join('')}
    </div>
  ` : '';

  modalBody.innerHTML = `
    <div style="margin-bottom: 1rem;">
      <span class="card-badge-status ${statusClass}">${prop.estado}</span>
      ${hasVideo ? `<span class="badge-video" style="margin-left: 0.4rem;">🎬 Video Incluido</span>` : ''}
      <h2 style="font-size: 1.5rem; font-weight: 800; color: #fff; margin-top: 0.4rem;">${prop.nombre}</h2>
      <p style="color: var(--text-secondary); font-size: 0.88rem;">📍 ${prop.direccion} (20 de Junio)</p>
    </div>

    <!-- Gallery Viewer Slider with Arrows and Counter -->
    <div class="gallery-viewer">
      ${totalImgs > 1 ? `
        <button class="gallery-btn gallery-btn-prev" onclick="navigateModalGallery(-1)">&lsaquo;</button>
        <button class="gallery-btn gallery-btn-next" onclick="navigateModalGallery(1)">&rsaquo;</button>
      ` : ''}

      ${currentImg ? `
        <img id="galleryMainImg" src="${encodeURI(currentImg)}" alt="${prop.nombre}" class="gallery-main-img" onerror="this.onerror=null; this.parentNode.innerHTML='<div class=\'card-image-placeholder\'><span>🏡</span><span>${prop.nombre}</span></div>';">
      ` : `
        <div class="card-image-placeholder">
          <span>🏡</span>
          <span>${prop.nombre}</span>
        </div>
      `}

      <div class="gallery-counter-badge" id="galleryCounter">
        📷 Foto ${state.modalActiveImgIdx + 1} de ${totalImgs}
      </div>
    </div>

    <!-- Thumbnails Horizontal Scroll displaying ALL images -->
    ${thumbsHTML}

    <!-- Video Player (if available) -->
    ${hasVideo ? `
      <div style="margin: 1.25rem 0; background: rgba(0,0,0,0.5); padding: 0.85rem; border-radius: var(--radius-md); border: 1px solid var(--border-subtle);">
        <div style="font-size: 0.82rem; font-weight: 700; color: #ffffff; margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.4rem;">
          <span>🎬</span> Video Recorrido de la Propiedad
        </div>
        <video controls preload="metadata" style="width: 100%; max-height: 320px; border-radius: var(--radius-sm); background: #000;">
          <source src="${encodeURI(prop.video)}" type="video/mp4">
          Tu navegador no soporta el reproductor de video.
        </video>
      </div>
    ` : ''}

    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin: 1.25rem 0; background: rgba(255,255,255,0.03); padding: 0.85rem; border-radius: var(--radius-md);">
      <div>
        <span style="font-size: 0.72rem; color: var(--text-secondary);">Precio</span>
        <div style="font-size: 1.15rem; font-weight: 800; color: #ffffff;">USD ${prop.precio.toLocaleString()}</div>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: var(--text-secondary);">Superficie</span>
        <div style="font-size: 1rem; font-weight: 700; color: #fff;">${prop.superficie}</div>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: var(--text-secondary);">Ambientes</span>
        <div style="font-size: 1rem; font-weight: 700; color: #fff;">${prop.habitaciones} hab / ${prop.banos} baños</div>
      </div>
    </div>

    <div class="info-block">
      <h4>Potencial de Inversión</h4>
      <p>${prop.potencial_inversion}</p>
    </div>

    ${prop.renta_estimada ? `
      <div class="info-block" style="border-left-color: #10b981;">
        <h4 style="color: #34d399;">Posible Renta Estimada</h4>
        <p>${prop.renta_estimada}</p>
      </div>
    ` : ''}

    <div style="margin-top: 1.75rem; display: flex; justify-content: flex-end; gap: 0.75rem; flex-wrap: wrap;">
      <button class="btn btn-secondary" onclick="closeModal()">Cerrar</button>
      <button class="btn btn-primary" onclick="closeModal(); prepareVisitSheetForProperty('${escapeJS(prop.nombre)}', '${escapeJS(prop.direccion)}');">
        Crear Ficha de Visita
      </button>
    </div>
  `;
}

function setModalGalleryIndex(idx) {
  const prop = state.propiedades.find(p => p.id === state.modalActivePropId);
  if (!prop || !prop.imagenes) return;

  if (idx >= 0 && idx < prop.imagenes.length) {
    state.modalActiveImgIdx = idx;
    renderPropertyModalContent(prop);
  }
}

function navigateModalGallery(step) {
  const prop = state.propiedades.find(p => p.id === state.modalActivePropId);
  if (!prop || !prop.imagenes || prop.imagenes.length === 0) return;

  let newIdx = state.modalActiveImgIdx + step;
  if (newIdx < 0) newIdx = prop.imagenes.length - 1;
  if (newIdx >= prop.imagenes.length) newIdx = 0;

  setModalGalleryIndex(newIdx);
}

function closeModal() {
  const modal = document.getElementById('propertyModal');
  if (modal) {
    modal.querySelectorAll('video').forEach(v => v.pause());
    modal.classList.remove('active');
  }
}
