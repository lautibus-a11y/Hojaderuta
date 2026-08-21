/**
 * HOJA DE RUTA INMOBILIARIA - IVANA MOLINA & ASOCIADOS BIENES RAÍCES
 * Lógica Vanilla JS (ES6+) con Generación de PDF Reparada e Imágenes Robustas
 */

// ============================================================
// CONFIGURACIÓN: número WhatsApp para compartir (sin +, con código país)
// ============================================================
const WHATSAPP_NUMBER = '541168091223';

// WhatsApp icon SVG string (reutilizable)
const WPP_ICON_SVG = `<svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0;"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>`;

const DEFAULT_PROPIEDADES = [
  {
    "id": 1,
    "nombre": "Ejercito De Los Andes",
    "tipo": "Casa Quinta",
    "precio": 1000000,
    "ubicacion": "20 de Junio",
    "direccion": "Ejercito De Los Andes 498, 20 de Junio",
    "superficie": "3.109 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_1.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_10.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_11.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_12.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_13.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_2.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_3.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_4.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_5.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_6.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_7.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_8.webp",
      "assets/imagenes/20-de-junio/alquiler/ejercito-de-los-andes-1/ejercito-de-los-andes_9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: $ 1.000.000  🔑 ALQUILER PERMANENTE: CASA QUINTA CON PARQUE Y PILETA 🔑  📍 20 de Junio, La Mat...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión",
      "Alquiler"
    ],
    "moneda": "ARS",
    "operacion": "Alquiler",
    "apto_credito": false,
    "google_maps": "Ejercito De Los Andes 498, B1786 20 De Junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 2,
    "nombre": "La Rosalia Simona",
    "tipo": "Casa Quinta",
    "precio": 1300000,
    "ubicacion": "20 de Junio",
    "direccion": "Copahue 1576, 20 de Junio",
    "superficie": "3.251 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/1.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/10.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/11.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/12.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/13-1.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/13.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/14.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/15.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/16.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/17.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/18.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/19.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/2-1.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/2.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/20.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/21.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/22.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/23.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/24.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/25.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/26.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/27.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/28.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/29.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/3.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/30.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/31.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/32.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/33.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/4.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/5.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/6.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/7.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/8.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/9-1.webp",
      "assets/imagenes/20-de-junio/alquiler/la-rosalia-simona/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: $ 1.500.000  ¡Una oportunidad única en la exclusiva y tranquila zona de 20 de Junio, La Mata...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión",
      "Alquiler"
    ],
    "moneda": "ARS",
    "operacion": "Alquiler",
    "apto_credito": false,
    "google_maps": "Copahue 1576, B1786cad 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 3,
    "nombre": "De Los Franceses Nro 3740",
    "tipo": "Comercial",
    "precio": 950000,
    "ubicacion": "20 de Junio",
    "direccion": "De Los Franceses 3740, 20 de Junio",
    "superficie": "Consultar",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/alquiler/de-los-franceses-nro-3740-1/1.webp",
      "assets/imagenes/20-de-junio/alquiler/de-los-franceses-nro-3740-1/2.webp",
      "assets/imagenes/20-de-junio/alquiler/de-los-franceses-nro-3740-1/3-1.webp",
      "assets/imagenes/20-de-junio/alquiler/de-los-franceses-nro-3740-1/3.webp",
      "assets/imagenes/20-de-junio/alquiler/de-los-franceses-nro-3740-1/4.webp",
      "assets/imagenes/20-de-junio/alquiler/de-los-franceses-nro-3740-1/portada_1.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: $ 950.000  ALQUILER DE LOCAL PARA USO COMERCIAL - Inmueble ubicado en De Los Franceses Nro 3...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión",
      "Alquiler"
    ],
    "moneda": "ARS",
    "operacion": "Alquiler",
    "apto_credito": false,
    "google_maps": "De Los Franceses 3740, B1786 20 de Junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 4,
    "nombre": "Depto Canning",
    "tipo": "Departamento",
    "precio": 0,
    "ubicacion": "20 de Junio",
    "direccion": "Av. Mariano Castex 1277, Canning",
    "superficie": "Consultar",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/alquiler/depto-canning-1/1.webp",
      "assets/imagenes/20-de-junio/alquiler/depto-canning-1/2.webp",
      "assets/imagenes/20-de-junio/alquiler/depto-canning-1/3.webp",
      "assets/imagenes/20-de-junio/alquiler/depto-canning-1/4.webp",
      "assets/imagenes/20-de-junio/alquiler/depto-canning-1/5.webp",
      "assets/imagenes/20-de-junio/alquiler/depto-canning-1/6.webp",
      "assets/imagenes/20-de-junio/alquiler/depto-canning-1/7.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: Consultar Precio  Alquiler | Departamento 2 Ambientes Amoblado en Canning Center Viví con el...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión",
      "Alquiler"
    ],
    "moneda": "USD",
    "operacion": "Alquiler",
    "apto_credito": false,
    "google_maps": "Canning Center, Av. Mariano Castex 1277, B1804 Canning, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 5,
    "nombre": "Casa Quinta En Alquiler Permanente Cosquin 194",
    "tipo": "Casa Quinta",
    "precio": 1500,
    "ubicacion": "20 de Junio",
    "direccion": "Cosquín 194, 20 de Junio",
    "superficie": "1.500 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/1.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/10.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/11.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/12.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/13.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/14.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/15.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/16.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/17.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/18.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/19.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/2.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/20.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/21.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/22.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/3.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/4.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/5.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/6.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/7.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/8.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-en-alquiler-permanente-cosquin-194/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 1.500  Exclusiva Casa Quinta de estilo campo colonial en Alquiler Permanente, desarrolla...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Alquiler",
    "apto_credito": false,
    "google_maps": "Cosquin 194, B1786 20 De Junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 6,
    "nombre": "Cosquin 1400 Casa Quinta En Ven",
    "tipo": "Casa Quinta",
    "precio": 115000,
    "ubicacion": "20 de Junio",
    "direccion": "Cosquín 1421, 20 de Junio",
    "superficie": "1.610 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/cosquin-1400-casa-quinta-en-ven/cosquin-1400-casa-quinta-en-vent-2.webp",
      "assets/imagenes/20-de-junio/venta/cosquin-1400-casa-quinta-en-ven/cosquin-1400-casa-quinta-en-vent-3.webp",
      "assets/imagenes/20-de-junio/venta/cosquin-1400-casa-quinta-en-ven/cosquin-1400-casa-quinta-en-vent-4.webp",
      "assets/imagenes/20-de-junio/venta/cosquin-1400-casa-quinta-en-ven/cosquin-1400-casa-quinta-en-vent-5.webp",
      "assets/imagenes/20-de-junio/venta/cosquin-1400-casa-quinta-en-ven/cosquin-1400-casa-quinta-en-vent-6.webp",
      "assets/imagenes/20-de-junio/venta/cosquin-1400-casa-quinta-en-ven/cosquin-1400-casa-quinta-en-vent-7.webp",
      "assets/imagenes/20-de-junio/venta/cosquin-1400-casa-quinta-en-ven/cosquin-1400-casa-quinta-en-venta-1.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 115.000  Casa Quinta en Venta – 20 de Junio, La Matanza Ubicación: Cosquín y Manuel Cast...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Cosquin 1421, B1786big 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 7,
    "nombre": "Laprida 375 Ramos",
    "tipo": "Departamento",
    "precio": 69000,
    "ubicacion": "20 de Junio",
    "direccion": "Laprida 375, Ramos Mejía",
    "superficie": "38 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/1.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/10.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/11.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/12.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/13.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/14.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/2.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/3.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/4.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/5-1.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/5.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/6.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/7.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/8.webp",
      "assets/imagenes/20-de-junio/venta/laprida-375-ramos/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 69.000  🏡 DEPARTAMENTO DE PRIMERA CATEGORÍA EN VENTA  Si buscás diseño, calidad construc...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Laprida 375, B1704 Ramos Mejía, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 8,
    "nombre": "Ceretti_1300",
    "tipo": "Casa Quinta",
    "precio": 230000,
    "ubicacion": "20 de Junio",
    "direccion": "Pablo Ceretti 1350, 20 de Junio",
    "superficie": "3.000 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_1.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_10.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_11.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_12.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_13.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_14.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_15.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_16.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_17.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_18.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_19.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_2.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_20.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_21.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_22.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_23.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_24.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_25.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_26.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_27.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_28.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_29.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_3.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_30.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_31.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_32.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_33.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_34.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_35.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_4.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_5.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_6.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_7.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_8.webp",
      "assets/imagenes/20-de-junio/venta/ceretti_1300-1/ceretti-1300-retocadas-y-marca-de-agua_9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 230.000  🏡 CASA QUINTA EN VENTA | 3.000 m²  📐 Superficie total: 3.000 m² parquizados con...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Pablo Ceretti 1350, B1786bzb 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 9,
    "nombre": "Aguapey 1119 – 20 de Junio",
    "tipo": "Casa Quinta",
    "precio": 135000,
    "ubicacion": "20 de Junio",
    "direccion": "Aguapey 1119, 20 de Junio",
    "superficie": "1.316 m² (114 m² cub.)",
    "estado": "Bueno",
    "habitaciones": 1,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/aguapey-venta/1.webp",
      "assets/imagenes/20-de-junio/venta/aguapey-venta/2.webp",
      "assets/imagenes/20-de-junio/venta/aguapey-venta/3.webp",
      "assets/imagenes/20-de-junio/venta/aguapey-venta/4.webp",
      "assets/imagenes/20-de-junio/venta/aguapey-venta/5.webp",
      "assets/imagenes/20-de-junio/venta/aguapey-venta/6.webp",
      "assets/imagenes/20-de-junio/venta/aguapey-venta/7.webp",
      "assets/imagenes/20-de-junio/venta/aguapey-venta/8.webp",
      "assets/imagenes/20-de-junio/venta/aguapey-venta/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Casa ubicada en 20 de Junio, sobre un terreno de 1.316 m², totalmente alambrado y parquizado. La propiedad ofrece privacidad y conexión con el entorno natural gracias a su amplio espacio exterior y cercado. Cuenta con una superficie cubierta de 114 m², construida con doble pared de ladrillo visto y aberturas de PVC con DVH. El ambiente principal integra cocina, comedor y living, y dispone de una salamandra a leña. Un pasillo distribuidor conecta con un toilette y con la habitación principal en suite, que cuenta con vestidor. En el exterior posee una galería semicubierta que funciona como cochera techada y quincho, brindando un espacio adicional para reuniones. La propiedad tiene orientación norte, un dormitorio, dos baños y una cochera. No cuenta con pileta, seguridad privada ni gimnasio. Tiene 8 años de antigüedad y presenta un buen estado de mantenimiento. La propiedad es apta crédito hipotecario.",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": true,
    "google_maps": "Aguapey 1119, B1786 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 10,
    "nombre": "Carlos Tejedor Caseros",
    "tipo": "Casa Quinta",
    "precio": 95000,
    "ubicacion": "Caseros",
    "direccion": "Carlos Tejedor, Caseros",
    "superficie": "155 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/1.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/10.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/11.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/2.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/3.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/4.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/5.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/6.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/7.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/8.webp",
      "assets/imagenes/caseros/venta/carlos-tejedor-caseros/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en Caseros. Precio: USD 95.000  🏡 PH en venta frente a la plaza, en el corazón de Caseros  Si buscás amplitud, c...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Carlos Tejedor, B1678 Caseros, Tres de Febrero, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 11,
    "nombre": "Leopardi Al 5800",
    "tipo": "Casa Quinta",
    "precio": 85000,
    "ubicacion": "González Catán",
    "direccion": "Giacomo Leopardi 5800, González Catán",
    "superficie": "1.135 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_1.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_10.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_11.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_12.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_13.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_14.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_15.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_16.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_17.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_18.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_19.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_2.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_20.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_21.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_3.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_4.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_5.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_6.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_7.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_8.webp",
      "assets/imagenes/gonzalez-catan/venta/leopardi-al-5800/leopardi-al-5800_9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en González Catán. Precio: USD 85.000  QUINTA EN VENTA SOBRE AMPLIO LOTE DE 1.135 M² EN ESQUINA – GONZÁLEZ CATÁN  INFOR...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Giacomo Leopardi 5800, B1759 González Catán, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 12,
    "nombre": "Juan Pio Gana 4400",
    "tipo": "Casa Quinta",
    "precio": 38000,
    "ubicacion": "González Catán",
    "direccion": "Juan Pío Gana 4400, González Catán",
    "superficie": "300 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_d_705244-mla89580743718_082025-f.webp",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-36.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-37-1.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-37.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-38.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-40.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-41-1.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-41.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-43-1.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-43.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-45.jpeg",
      "assets/imagenes/gonzalez-catan/venta/juan-pio-gana-4400/juan-pio-gana_whatsapp-image-2026-02-18-at-10-17-47.jpeg"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en González Catán. Precio: USD 38.000  CASA CON GRAN FONDO LIBRE Y RENTA ACTIVA EN GONZÁLEZ CATÁN  Descubrí esta propie...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Juan Pío Gana 4400, B1759 González Catán, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 13,
    "nombre": "Casa Quinta Con Pileta Y Quincho Cevallos",
    "tipo": "Casa Quinta",
    "precio": 75000,
    "ubicacion": "20 de Junio",
    "direccion": "Cnel. Manuel Rico 1369, 20 de Junio",
    "superficie": "395 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/1.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/10.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/11.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/12.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/13.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/14.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/15.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/2.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/3.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/4.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/5.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/6.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/7.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-con-pileta-y-quincho-cevallos/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 75.000  Casa Quinta en Venta – ¡Con pileta, quincho y excelente ubicación!  Ubicada en c...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Cnel. Manuel Rico 1369, B1786cbc 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 14,
    "nombre": "Gibraltar 1 Pontevedra",
    "tipo": "Casa Quinta",
    "precio": 35000,
    "ubicacion": "Pontevedra",
    "direccion": "Gibraltar, Pontevedra",
    "superficie": "390 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/pontevedra/venta/gibraltar-1-pontevedra-1/1.webp",
      "assets/imagenes/pontevedra/venta/gibraltar-1-pontevedra-1/2.webp",
      "assets/imagenes/pontevedra/venta/gibraltar-1-pontevedra-1/3.webp",
      "assets/imagenes/pontevedra/venta/gibraltar-1-pontevedra-1/4.webp",
      "assets/imagenes/pontevedra/venta/gibraltar-1-pontevedra-1/5.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en Pontevedra. Precio: USD 35.000  🏡 CASA EN VENTA | GRAN POTENCIAL PARA REFACCIONAR O AMPLIAR  ¡Una excelente opor...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Gibraltar, B1761 Pontevedra, Merlo, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 15,
    "nombre": "Gibraltar 2 Pontevedra",
    "tipo": "Casa Quinta",
    "precio": 45000,
    "ubicacion": "Pontevedra",
    "direccion": "Gibraltar, Pontevedra",
    "superficie": "390 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/pontevedra/venta/gibraltar-2-pontevedra-1/1-portada.webp",
      "assets/imagenes/pontevedra/venta/gibraltar-2-pontevedra-1/1.webp",
      "assets/imagenes/pontevedra/venta/gibraltar-2-pontevedra-1/2.webp",
      "assets/imagenes/pontevedra/venta/gibraltar-2-pontevedra-1/4.webp",
      "assets/imagenes/pontevedra/venta/gibraltar-2-pontevedra-1/5.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en Pontevedra. Precio: USD 45.000  🏡 CASA EN VENTA | OPORTUNIDAD PARA INVERTIR O AMPLIAR  Si buscás una propiedad c...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Gibraltar, B1761 Pontevedra, Merlo, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 16,
    "nombre": "Girardot 1345",
    "tipo": "Casa Quinta",
    "precio": 185000,
    "ubicacion": "20 de Junio",
    "direccion": "Girardot 1345, 20 de Junio",
    "superficie": "1.495 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/girardot-1345/1-2.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/10.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/11.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/12.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/2-3.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/3.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/4.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/5.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/6.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/7.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/8.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/9.webp",
      "assets/imagenes/20-de-junio/venta/girardot-1345/portada-2.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 185.000  Casa en venta en 20 de Junio, La Matanza – Dos casas quintas con ingresos indep...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Girardot 1345, B1786 20 De Junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 17,
    "nombre": "Castex Y Del Carril",
    "tipo": "Casa Quinta",
    "precio": 79000,
    "ubicacion": "20 de Junio",
    "direccion": "Alejo Castex 1263, 20 de Junio",
    "superficie": "400 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_10.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_11.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_12.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_14.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_15.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_16.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_17.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_18.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_19.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_2.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_20.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_21.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_22.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_23.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_24.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_24_.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_26.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_27.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_28-1.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_28.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_3.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_4-1.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_5.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_7.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_8.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_9.webp",
      "assets/imagenes/20-de-junio/venta/castex-y-del-carril/castex-y-del-carril_portada-1.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 79.000  Transformá este espacio en tu próximo gran proyecto  Propiedad ideal para recicl...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Alejo Castex 1263, B1786 20 de junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 18,
    "nombre": "Propiedad De 6 Ambientes Caseros",
    "tipo": "Casa Quinta",
    "precio": 195000,
    "ubicacion": "Caseros",
    "direccion": "Caseros, Buenos Aires",
    "superficie": "290 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/1.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/10.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/11.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/12.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/13.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/14.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/15-1.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/15.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/16.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/17.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/18.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/19.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/2.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/20.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/21.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/3.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/4.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/5.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/6.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/7.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/8.webp",
      "assets/imagenes/caseros/venta/propiedad-de-6-ambientes-caseros/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en Caseros. Precio: USD 195.000  Excelente propiedad de 6 ambientes en venta, desarrollada sobre un lote de 290 ...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Caseros, Tres de Febrero, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 19,
    "nombre": "Quinta El Maestro",
    "tipo": "Casa Quinta",
    "precio": 125000,
    "ubicacion": "20 de Junio",
    "direccion": "El Maestro 892, 20 de Junio",
    "superficie": "2.600 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/16.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/17.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/18.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/19.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/20.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_12.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_13-14.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_14.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_15.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_21.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_22.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_23.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_24.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_25.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_3.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_4.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_5.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_6.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_7.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_8.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_9.webp",
      "assets/imagenes/20-de-junio/venta/quinta-el-maestro/quinta-el-maestro_portada.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 125.000  Casa Quinta en Venta – 20 de Junio (Calle El Maestro) Superficie y Entorno Únic...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "El Maestro 892, B1786bfd 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 20,
    "nombre": "Cosquín 1120 – 20 de Junio",
    "tipo": "Casa Quinta",
    "precio": 250000,
    "ubicacion": "20 de Junio",
    "direccion": "Cosquín 1120, 20 de Junio",
    "superficie": "1.347 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 3,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/1.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/10.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/11.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/12.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/13.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/14.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/15.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/16.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/17.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/18.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/19.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/2.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/20.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/21.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/22.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/23.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/24.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/25.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/26.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/3.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/4.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/5.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/6.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/7.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/8.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_cosquin1120_1347m2_aptocredito-1/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Casa quinta en venta en 20 de Junio. Cuenta con 3 habitaciones de 4x4 m, una de ellas en suite, 2 baños completos y 1 toilette. Dispone de pileta, cocina-comedor, living integrado, galería con parrilla, cochera semicubierta y garage cubierto para 3 autos. La propiedad cuenta además con una pileta de 8x4 m con solárium de 3x3 m y sistema de riego en todo el terreno. Excelente ubicación. Toma en parte de pago departamento en Zona Oeste o Capital. Acepta permuta de mayor valor en Castelar, Ituzaingó o Parque Leloir. MOLINA IVANA & ASOC. BIENES RAÍCES",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": true,
    "google_maps": "Cosquin 1120, B1786 20 de junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 21,
    "nombre": "Casaquinta_Venta_20Dejunio_Piscina_1500M2",
    "tipo": "Casa Quinta",
    "precio": 135000,
    "ubicacion": "20 de Junio",
    "direccion": "Manuel Antonio Castro 646, 20 de Junio",
    "superficie": "1.500 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/1.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/13.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/14.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/15.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/2.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/3.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/4.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/5.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/6.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/8.webp",
      "assets/imagenes/20-de-junio/venta/casaquinta_venta_20dejunio_piscina_1500m2-1/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 145.000  Casa Quinta en Venta – 20 de Junio, La Matanza Ubicación: Castañeda esquina Cos...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Manuel Antonio Castro 646, B1786 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 22,
    "nombre": "Urien Casa Quinta 20 De Junio",
    "tipo": "Casa Quinta",
    "precio": 160000,
    "ubicacion": "20 de Junio",
    "direccion": "Urien S/N, 20 de Junio",
    "superficie": "1.500 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/1.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/10.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/11.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/12.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/13.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/14.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/2.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/3.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/4.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/5.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/6.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/7.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/8.webp",
      "assets/imagenes/20-de-junio/venta/urien-casa-quinta-20-de-junio-1/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 160.000  🏡 CASA QUINTA EN VENTA | 20 DE JUNIO  Si buscás espacio, comodidad y un entorno...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Urien Sn, 20 de junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 23,
    "nombre": "Casa Quinta California 5900",
    "tipo": "Casa Quinta",
    "precio": 850000,
    "ubicacion": "20 de Junio",
    "direccion": "California 5595, 20 de Junio",
    "superficie": "Consultar",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/1.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/10.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/11.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/12.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/13.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/14.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/15.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/2.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/3.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/4.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/5.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/6.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/7.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/8.webp",
      "assets/imagenes/20-de-junio/venta/casa-quinta-california-5900/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: $ 850.000  Casa Quinta en Alquiler Permanente (Destino Vivienda) ubicada en California 5900,...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "ARS",
    "operacion": "Alquiler",
    "apto_credito": false,
    "google_maps": "California 5595, B1786 20 de junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 24,
    "nombre": "La Rosalia Simona",
    "tipo": "Casa Quinta",
    "precio": 135000,
    "ubicacion": "20 de Junio",
    "direccion": "Cóndor 1489, 20 de Junio",
    "superficie": "3.251 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/1.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/10.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/11.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/12.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/13-1.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/13.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/14.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/15.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/16.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/17.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/18.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/19.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/2-1.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/2.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/20.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/21.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/22.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/23.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/24.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/25.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/26.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/27.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/28.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/29.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/3.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/30.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/31.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/32.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/33.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/4.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/5.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/6.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/7.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/8.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/9-1.webp",
      "assets/imagenes/20-de-junio/venta/la-rosalia-simona/9.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 135.000  ¡Una oportunidad única en la exclusiva y tranquila zona de 20 de Junio, La Mata...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Condor 1489, B1786acg 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 25,
    "nombre": "Departamento Independiente La Rosalia",
    "tipo": "Departamento",
    "precio": 75000,
    "ubicacion": "20 de Junio",
    "direccion": "Ejército De Los Andes y California 20, 20 de Junio",
    "superficie": "3.251 m²",
    "estado": "Bueno",
    "habitaciones": 3,
    "banos": 2,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/disen-o-sin-ti-tulo-75.webp",
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/disen-o-sin-ti-tulo-76.webp",
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/temperatura-un-toque-de-nitidez.webp",
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/toque-de-nitidez-temperatura-1.webp",
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/toque-de-nitidez-temperatura-2.webp",
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/toque-de-nitidez-temperatura-3.webp",
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/toque-de-nitidez-y-temperatura-1.webp",
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/toque-de-nitidez-y-temperatura.webp",
      "assets/imagenes/20-de-junio/venta/departamento-independiente-la-rosalia/portada.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 80.000  ¡Una oportunidad única en la exclusiva y tranquila zona de 20 de Junio, La Matan...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Vivienda",
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Ejercito De Los Andes, California 20, B1786 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 26,
    "nombre": "Terreno Alejo Castex",
    "tipo": "Lote",
    "precio": 155000,
    "ubicacion": "20 de Junio",
    "direccion": "Alejo Castex 1133, 20 de Junio",
    "superficie": "3000 m²",
    "estado": "Bueno",
    "habitaciones": 0,
    "banos": 0,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-alejo-castex-1_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-manual-antonio-castro-y-1200-pasodeloslibres-1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-manual-antonio-castro-y-1200-pasodeloslibres-2.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-manual-antonio-castro-y-1200-pasodeloslibres-portada.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-alejo-castex-portada_1.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 155.000  TERRENO 3000 m² ALEJO CASTEX, 20 DE JUNIO, LA MATANZA  Se venden dos terrenos c...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Alejo Castex 1133, B1786 20 de junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 27,
    "nombre": "Terreno_Venta_Pabloceretti_20Dejunio_Lamatanza",
    "tipo": "Lote",
    "precio": 40000,
    "ubicacion": "20 de Junio",
    "direccion": "Pablo Ceretti 1673, 20 de Junio",
    "superficie": "900 m²",
    "estado": "Bueno",
    "habitaciones": 0,
    "banos": 0,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-venta-pabloceretti-20dejunio-lamatanza-1/ajustes-de-nitidez-y-temperatura.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-venta-pabloceretti-20dejunio-lamatanza-1/foto-2.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-venta-pabloceretti-20dejunio-lamatanza-1/foto-3.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-venta-pabloceretti-20dejunio-lamatanza-1/foto-4.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 40.000  Terreno en Venta – Pablo Ceretti, 20 de Junio Ubicación: Calle Pablo Ceretti, en...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Pablo Ceretti 1673, B1786 20 de junio, La Matanza, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 28,
    "nombre": "Cassafousth Terreno",
    "tipo": "Lote",
    "precio": 55000,
    "ubicacion": "20 de Junio",
    "direccion": "Carlos Casafoust 630, 20 de Junio",
    "superficie": "1.500 m²",
    "estado": "Bueno",
    "habitaciones": 0,
    "banos": 0,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/terrenos/cassafousth-terreno-1/cassafousth_2_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/cassafousth-terreno-1/cassafousth_3_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/cassafousth-terreno-1/cassafousth_5_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/cassafousth-terreno-1/cassafousth_6_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/cassafousth-terreno-1/cassafousth_7_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/cassafousth-terreno-1/cassafousth_8_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/cassafousth-terreno-1/cassafousth_9_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/cassafousth-terreno-1/cassafousth_portada_1.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 55.000  OPORTUNIDAD | Lote de 1.500 m² con arboleda añosa en 20 de Junio  Ubicación: Cas...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Carlos Casafoust 630, B1786ayl 20 De Junio, Provincia De Buenos Aires, Argentina"
  },
  {
    "id": 29,
    "nombre": "Terreno_Venta_Juancasacuberta_20Dejunio_Lamatanza",
    "tipo": "Lote",
    "precio": 29000,
    "ubicacion": "20 de Junio",
    "direccion": "Coronda 1040, 20 de Junio",
    "superficie": "546 m²",
    "estado": "Bueno",
    "habitaciones": 0,
    "banos": 0,
    "imagenes": [
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-venta-juancasacuberta-20dejunio-lamatanza-1/portada-1_1.webp",
      "assets/imagenes/20-de-junio/venta/terrenos/terreno-venta-juancasacuberta-20dejunio-lamatanza-1/foto-2.webp"
    ],
    "video": "",
    "potencial_inversion": "Excelente oportunidad en 20 de Junio. Precio: USD 29.000  Terrenos en Venta – Juan Casacuberta, 20 de Junio Ubicación: Calle Juan Casacube...",
    "renta_estimada": "Consultar",
    "destinos": [
      "Inversión"
    ],
    "moneda": "USD",
    "operacion": "Venta",
    "apto_credito": false,
    "google_maps": "Coronda 1040, B1786abb 20 De Junio, Provincia De Buenos Aires, Argentina"
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

let currentGeneratedRoadmap = null;

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

  const filterOperacion = document.getElementById('filterOperacion');
  const filterTipo = document.getElementById('filterTipo');
  const filterEstado = document.getElementById('filterEstado');
  const filterAptoCredito = document.getElementById('filterAptoCredito');

  const applyFilters = () => {
    const operacionVal = filterOperacion ? filterOperacion.value : 'todos';
    const tipoVal = filterTipo ? filterTipo.value : 'todos';
    const estadoVal = filterEstado ? filterEstado.value : 'todos';
    const aptoCreditoVal = filterAptoCredito ? filterAptoCredito.value : 'todos';

    const filtered = state.propiedades.filter(p => {
      const matchOperacion = (operacionVal === 'todos' || p.operacion === operacionVal);
      const matchTipo = (tipoVal === 'todos' || p.tipo === tipoVal);
      const matchEstado = (estadoVal === 'todos' || p.estado === estadoVal);
      const matchAptoCredito = (aptoCreditoVal === 'todos' || (aptoCreditoVal === 'si' && p.apto_credito));
      return matchOperacion && matchTipo && matchEstado && matchAptoCredito;
    });

    renderPropertiesGrid(filtered);
  };

  filterOperacion?.addEventListener('change', applyFilters);
  filterTipo?.addEventListener('change', applyFilters);
  filterEstado?.addEventListener('change', applyFilters);
  filterAptoCredito?.addEventListener('change', applyFilters);
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
  const statusClass = p.estado === 'Bueno' ? 'status-lista' :
                      p.estado === 'A reciclar' ? 'status-reciclar' : 'status-refaccionar';
  
  const mainImage = (p.imagenes && p.imagenes.length > 0) ? p.imagenes[0] : '';
  const hasVideo = Boolean(p.video);

  return `
    <div class="property-card">
      <div class="card-image-wrap" onclick="openPropertyModal(${p.id})" style="cursor: pointer;">
        ${mainImage ? `
          <img src="${encodeURI(mainImage)}" alt="${p.nombre}" class="card-image" >
        ` : `
          <div class="card-image-placeholder">
            <span>🏡</span>
            <span>${p.nombre}</span>
          </div>
        `}
        <span class="card-badge-status ${statusClass}">${p.estado}</span>
        ${p.operacion ? `<span class="card-badge-operacion ${p.operacion.toLowerCase() === 'venta' ? 'op-venta' : 'op-alquiler'}">${p.operacion}</span>` : ''}
        ${p.apto_credito ? `<span class="card-badge-credito">🏦 Apto Crédito</span>` : ''}
        ${hasVideo ? `<span class="badge-video" style="top: ${p.apto_credito ? '4.85rem' : '2.5rem'};">🎬 Video</span>` : ''}
        <div class="card-price-tag">${p.precio > 0 ? (p.moneda || 'USD') + ' ' + p.precio.toLocaleString() : 'Consultar'}</div>
      </div>

      <div class="card-body">
        <div class="card-type"><strong>${p.operacion || "Venta"}</strong> • ${p.tipo} • ${p.ubicacion || 'Sin ubicación'}</div>
        <h3 class="card-title">${p.nombre}</h3>

        <div class="card-features">
          <div class="feature-item">📐 ${p.superficie}</div>
          ${p.habitaciones ? `<div class="feature-item">🛏️ ${p.habitaciones} hab</div>` : ''}
          ${p.banos ? `<div class="feature-item">🚿 ${p.banos} baños</div>` : ''}
          ${p.apto_credito ? `<div class="feature-item" style="color: #facc15;">🏦 Apto Crédito</div>` : ''}
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

  // Visibilidad condicional de Apto Crédito Hipotecario:
  // Visible cuando se elige Comprar/Venta y tipo Terreno/Lote, Quinta o Casa (o todas)
  const clientOpEl = document.getElementById('clientOperation');
  const clientPropTypeEl = document.getElementById('clientPropertyType');
  const groupAptoCredito = document.getElementById('groupAptoCredito');

  function updateAptoCreditoVisibility() {
    if (!groupAptoCredito || !clientOpEl || !clientPropTypeEl) return;
    const op = clientOpEl.value;
    const tipo = clientPropTypeEl.value;
    const isEligibleType = ['Casa Quinta', 'Lote', 'todas'].includes(tipo);
    if (op === 'Venta' && isEligibleType) {
      groupAptoCredito.style.display = 'block';
    } else {
      groupAptoCredito.style.display = 'none';
      const aptoSelect = document.getElementById('clientAptoCredito');
      if (aptoSelect) aptoSelect.value = 'indistinto';
    }
  }

  clientOpEl?.addEventListener('change', updateAptoCreditoVisibility);
  clientPropTypeEl?.addEventListener('change', updateAptoCreditoVisibility);
  updateAptoCreditoVisibility();

  document.getElementById('btnCloseModal')?.addEventListener('click', closeModal);
  document.getElementById('propertyModal')?.addEventListener('click', (e) => {
    if (e.target.id === 'propertyModal') closeModal();
  });
}

function generateRoadmap() {
  const clientNameEl = document.getElementById('clientName');
  const clientBudgetEl = document.getElementById('clientBudget');
  const clientBudgetCurrencyEl = document.getElementById('clientBudgetCurrency');
  const clientOperationEl = document.getElementById('clientOperation');
  const clientLocationEl = document.getElementById('clientLocation');
  const clientPropertyTypeEl = document.getElementById('clientPropertyType');
  const clientAptoCreditoEl = document.getElementById('clientAptoCredito');
  const clientNotesEl = document.getElementById('clientNotes');

  const clientName = clientNameEl ? clientNameEl.value.trim() : '';
  const rawBudgetValue = clientBudgetEl ? clientBudgetEl.value.trim() : '';
  // Remover centavos si existen (ej. ",50" o ".00" al final)
  let cleanBudgetStr = rawBudgetValue.replace(/[,.]\d{1,2}$/, '');
  // Remover todos los caracteres no numéricos restantes (puntos, comas, espacios)
  cleanBudgetStr = cleanBudgetStr.replace(/\D/g, '');
  
  const rawBudget = cleanBudgetStr ? parseFloat(cleanBudgetStr) : NaN;
  const clientBudget = isNaN(rawBudget) ? 0 : rawBudget;
  const clientBudgetCurrency = clientBudgetCurrencyEl ? clientBudgetCurrencyEl.value : 'USD';
  const clientOperation = clientOperationEl ? clientOperationEl.value : '';
  const clientLocation = clientLocationEl ? clientLocationEl.value.trim() : '';
  const clientPropertyType = clientPropertyTypeEl ? clientPropertyTypeEl.value : 'todas';
  const clientAptoCredito = clientAptoCreditoEl ? clientAptoCreditoEl.value : 'indistinto';
  const clientNotes = clientNotesEl ? clientNotesEl.value.trim() : '';

  let matchingProperties = state.propiedades.filter(p => {
    // 1. Budget filter (only if user provided a budget > 0)
    if (clientBudget > 0) {
      const propertyPriceUSD = p.moneda === 'ARS' ? p.precio / 1000 : p.precio;
      const budgetUSD = clientBudgetCurrency === 'ARS' ? clientBudget / 1000 : clientBudget;
      if (propertyPriceUSD > budgetUSD) return false;
    }

    // 2. Operation filter (Venta / Alquiler)
    if (clientOperation) {
      if (p.operacion && p.operacion.toLowerCase() !== clientOperation.toLowerCase()) {
         return false;
      }
    }

    // 3. Apto Crédito Hipotecario filter (si se selecciona "si", la propiedad DEBE ser apta a crédito)
    if (clientAptoCredito === 'si') {
      if (!p.apto_credito) {
        return false;
      }
    }

    // 4. Property type filter
    if (clientPropertyType && clientPropertyType !== 'todas') {
      if (p.tipo !== clientPropertyType) {
        return false;
      }
    }

    // 5. Location filter
    if (clientLocation && clientLocation !== 'todas') {
       const locLower = clientLocation.toLowerCase();
       const pLoc = (p.ubicacion || p.direccion || '').toLowerCase();
       if (pLoc && !pLoc.includes(locLower)) {
          return false;
       }
    }

    return true;
  });

  const roadmapId = `HR-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
  const todayStr = new Date().toLocaleDateString('es-AR', { year: 'numeric', month: 'long', day: 'numeric' });

  // Update current generated roadmap
  currentGeneratedRoadmap = {
    id: roadmapId,
    cliente: clientName || 'Cliente Estimado',
    fecha: todayStr,
    presupuesto: clientBudget,
    monedaPresupuesto: clientBudgetCurrency,
    operacion: clientOperation,
    localidad: clientLocation,
    tipo: clientPropertyType,
    aptoCredito: clientAptoCredito,
    observaciones: clientNotes,
    propiedades: matchingProperties
  };

  state.activeRoadmap = currentGeneratedRoadmap;
  renderRoadmapView(currentGeneratedRoadmap);
  switchTab('roadmap');
}

function renderRoadmapView(roadmap) {
  const container = document.getElementById('roadmapContent');
  if (!container) return;

  if (!roadmap || !roadmap.propiedades || roadmap.propiedades.length === 0) {
    container.innerHTML = `
      <div class="glass-panel" style="text-align: center; padding: 4rem 2rem;">
        <h3 style="font-size: 1.4rem; font-weight: 700;">No se encontraron propiedades</h3>
        <p style="color: var(--text-secondary); margin-top: 1rem; margin-bottom: 2rem;">No hay inmuebles disponibles actualmente para esa localidad, operación o tipo de inmueble.</p>
        <button class="btn btn-primary" onclick="switchTab('generator')" style="margin-top: 1rem;">Intentar otra búsqueda</button>
      </div>
    `;
    return;
  }

  // 1. Web Property Cards (Pantalla)
  const webPropsHTML = roadmap.propiedades.length > 0 ? roadmap.propiedades.map(p => {
    const statusClass = p.estado === 'Bueno' ? 'status-lista' :
                        p.estado === 'A reciclar' ? 'status-reciclar' : 'status-refaccionar';
    const mainImage = (p.imagenes && p.imagenes.length > 0) ? p.imagenes[0] : '';
    const hasVideo = Boolean(p.video);

    return `
      <div class="roadmap-property-card" style="position: relative;">
      <button class="btn-delete-prop" onclick="removePropertyFromRoadmap(${p.id})" title="Quitar propiedad de la hoja de ruta">✕</button>
        <div class="roadmap-card-img-container" onclick="openPropertyModal(${p.id})" style="cursor: pointer;">
          ${mainImage ? `
            <img src="${encodeURI(mainImage)}" alt="${p.nombre}" class="roadmap-card-img" >
          ` : `
            <div class="card-image-placeholder">
              <span>🏡</span>
              <span>${p.nombre}</span>
            </div>
          `}
          <span class="card-badge-status ${statusClass}" style="position: absolute; top: 1rem; left: 1rem;">${p.estado}</span>
          <span class="card-badge-operacion ${p.operacion.toLowerCase() === 'venta' ? 'op-venta' : 'op-alquiler'}">${p.operacion}</span>
          ${p.apto_credito ? `<span class="card-badge-credito" style="position: absolute; top: 3.2rem; left: 1rem;">🏦 Apto Crédito</span>` : ''}
          ${hasVideo ? `<span class="badge-video" style="position: absolute; top: 1rem; right: 1rem;">🎬 Video</span>` : ''}
        </div>

        <div class="roadmap-card-content">
          <div>
            <div class="roadmap-card-header">
              <div>
                <div class="card-type"><strong>${p.operacion || "Venta"}</strong> • ${p.tipo} • ${p.ubicacion || 'Sin ubicación'}</div>
                <h3 class="card-title" style="font-size: 1.4rem;">${p.nombre}</h3>
                <div class="card-location" style="margin-top: 0.35rem; color: #a1a1aa; font-size: 0.92rem; font-weight: 500;">
                  📍 Ubicación: <strong style="color: #ffffff;">${p.direccion}</strong>
                </div>
              </div>
              <div class="roadmap-price">${p.precio > 0 ? (p.moneda || 'USD') + ' ' + p.precio.toLocaleString() : 'Consultar'}</div>
            </div>

            <div class="card-features" style="margin: 0.85rem 0;">
              <div class="feature-item">📐 ${p.superficie}</div>
              ${p.habitaciones ? `<div class="feature-item">🛏️ ${p.habitaciones} dorms</div>` : ''}
              ${p.banos ? `<div class="feature-item">🚿 ${p.banos} baños</div>` : ''}
              ${p.apto_credito ? `<div class="feature-item" style="color: #facc15;">🏦 Apto Crédito</div>` : ''}
            </div>

            <!-- 💡 ¿Por qué te conviene esta opción? (Checks de conveniencia) -->
            <div style="margin: 0.9rem 0;">
              <h4 style="font-size: 0.82rem; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.05em; margin-bottom: 0.4rem;">💡 ¿Por qué te conviene esta opción?</h4>
              <div class="why-buy-list">
                ${p.apto_credito ? `
                  <div class="why-buy-item">
                    <span>✓</span> <strong>Apto Crédito Hipotecario:</strong> Apto para financiamiento bancario con escritura y documentación al día.
                  </div>
                ` : ''}
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
            <button class="btn btn-map-route btn-sm" onclick="openGoogleMapsRoute(${p.id})" title="Abrir Google Maps con la ruta desde tu ubicación actual hasta esta propiedad">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                <polygon points="3 11 22 2 13 21 11 13 3 11"></polygon>
              </svg>
              <span>Cómo llegar</span>
            </button>
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
      <p style="color: var(--text-secondary);">No encontramos propiedades dentro del presupuesto o criterios especificados. Te sugerimos probar ajustando los filtros en el generador.</p>
    </div>
  `;

  // 2. PDF ONLY Layout HTML (Activo durante la impresión de PDF)
  const pdfPropsHTML = roadmap.propiedades.length > 0 ? roadmap.propiedades.map(p => {
    const mainImage = (p.imagenes && p.imagenes.length > 0) ? p.imagenes[0] : '';
    return `
      <div class="pdf-property-item">
        ${mainImage ? `
          <div class="pdf-property-frame">
            <img src="${encodeURI(mainImage)}" alt="${p.nombre}" class="pdf-property-img" >
          </div>
        ` : ''}

        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem;">
          <div>
            <div class="pdf-property-title">${p.nombre}</div>
            <div style="font-size: 0.85rem; color: #4b5563;">📍 ${p.direccion} (${p.tipo} • ${p.ubicacion || 'Sin ubicación'}${p.apto_credito ? ' • 🏦 Apto Crédito Hipotecario' : ''})</div>
          </div>
          <div class="pdf-property-price">${p.precio > 0 ? (p.moneda || 'USD') + ' ' + p.precio.toLocaleString() : 'Consultar'}</div>
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
          ${p.apto_credito ? '<div class="why-buy-item"><span>✓</span> <strong>Apto Crédito Bancario:</strong> Documentación e informe dominial en regla.</div>' : ''}
          <div class="why-buy-item"><span>✓</span> Revalorización de zona estimada: <strong>+25% a 3 años en ${p.ubicacion || 'la zona'}</strong></div>
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
        <h2 class="roadmap-client-title">Tu Recorrido ${roadmap.localidad && roadmap.localidad !== 'todas' ? 'en ' + roadmap.localidad : 'Inmobiliario'}</h2>
        <div class="roadmap-client-name">Propuesta para: <strong>${roadmap.cliente}</strong></div>

        <div class="client-meta-grid">
          <div class="meta-box">
            <span class="meta-label">Fecha</span>
            <span class="meta-val">${roadmap.fecha}</span>
          </div>
          <div class="meta-box">
            <span class="meta-label">Presupuesto Máx.</span>
            <span class="meta-val">${roadmap.monedaPresupuesto} ${roadmap.presupuesto.toLocaleString()}</span>
          </div>
          <div class="meta-box">
            <span class="meta-label">Operación</span>
            <span class="meta-val">${roadmap.operacion || 'Venta'}</span>
          </div>
          ${roadmap.aptoCredito === 'si' ? `
            <div class="meta-box">
              <span class="meta-label">Crédito</span>
              <span class="meta-val" style="color: #facc15;">🏦 Apto Hipotecario</span>
            </div>
          ` : `
            <div class="meta-box">
              <span class="meta-label">Sugerencias</span>
              <span class="meta-val">${roadmap.propiedades.length} ${roadmap.propiedades.length === 1 ? 'Propiedad' : 'Propiedades'}</span>
            </div>
          `}
        </div>
      </div>

      <div class="roadmap-actions-row no-print">
        <button class="btn btn-outline roadmap-action-btn" onclick="generateMultipleVisitSheet()" style="background: rgba(52, 152, 219, 0.1); border-color: #3498db; color: #3498db;">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
          </svg>
          Generar Ficha de Visita
        </button>
        <button class="btn btn-primary roadmap-action-btn" onclick="printRoadmapPDF()">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="6 9 6 2 18 2 18 9"></polyline>
            <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path>
            <rect x="6" y="14" width="12" height="8"></rect>
          </svg>
          <span>Descargar Hoja de Ruta</span>
        </button>
        
        <button class="btn btn-whatsapp roadmap-action-btn" onclick="shareViaWhatsApp('roadmap', this)">
          ${WPP_ICON_SVG}
          <span>Compartir por WhatsApp</span>
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
            <h2>IVANA MOLINA & ASOCIADOS BIENES RAÍCES</h2>
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
            <td>${roadmap.monedaPresupuesto} ${roadmap.presupuesto.toLocaleString()}</td>
            <td>${roadmap.objetivo}</td>
          </tr>
        </tbody>
      </table>

      ${pdfPropsHTML}
    </div>
  `;
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

  document.getElementById('btnPrintVisitSheet')?.addEventListener('click', printVisitSheetPDF);
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

  const statusClass = prop.estado === 'Bueno' ? 'status-lista' :
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
      ${prop.apto_credito ? `<span class="card-badge-credito" style="position: static; display: inline-flex; margin-left: 0.4rem; vertical-align: middle;">🏦 Apto Crédito Hipotecario</span>` : ''}
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
        <img id="galleryMainImg" src="${encodeURI(currentImg)}" alt="${prop.nombre}" class="gallery-main-img" >
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

    <div style="display: grid; grid-template-columns: repeat(${prop.apto_credito ? '4' : '3'}, 1fr); gap: 0.75rem; margin: 1.25rem 0; background: rgba(255,255,255,0.03); padding: 0.85rem; border-radius: var(--radius-md);">
      <div>
        <span style="font-size: 0.72rem; color: var(--text-secondary);">Precio</span>
        <div style="font-size: 1.15rem; font-weight: 800; color: #ffffff;">${prop.precio > 0 ? (prop.moneda || 'USD') + ' ' + prop.precio.toLocaleString() : 'Consultar'}</div>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: var(--text-secondary);">Superficie</span>
        <div style="font-size: 1rem; font-weight: 700; color: #fff;">${prop.superficie}</div>
      </div>
      <div>
        <span style="font-size: 0.72rem; color: var(--text-secondary);">Ambientes</span>
        <div style="font-size: 1rem; font-weight: 700; color: #fff;">${prop.habitaciones} hab / ${prop.banos} baños</div>
      </div>
      ${prop.apto_credito ? `
        <div>
          <span style="font-size: 0.72rem; color: var(--text-secondary);">Crédito</span>
          <div style="font-size: 0.95rem; font-weight: 700; color: #facc15;">✅ Apto Banco</div>
        </div>
      ` : ''}
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

/**
 * Construye la URL de navegación de Google Maps con la ruta hacia la propiedad
 * desde la ubicación actual del usuario (origin omitido = GPS actual).
 * @param {Object} property
 * @returns {string}
 */
function getGoogleMapsUrl(property) {
  if (!property) return 'https://www.google.com/maps';

  // Si tiene un enlace o coordenadas personalizadas de Google Maps
  if (property.google_maps && property.google_maps.trim()) {
    const raw = property.google_maps.trim();
    // Si es un link web completo (ej: https://maps.app.goo.gl/..., https://goo.gl/maps/..., https://www.google.com/maps/...)
    if (raw.startsWith('http://') || raw.startsWith('https://')) {
      return raw;
    }
    // Si son coordenadas (ej: "-34.7812,-58.6712") o un nombre/dirección puntual
    return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(raw)}`;
  }

  // Fallback con la dirección y localidad
  const parts = [];
  if (property.direccion) parts.push(property.direccion);
  if (property.ubicacion && !property.direccion.toLowerCase().includes(property.ubicacion.toLowerCase())) {
    parts.push(property.ubicacion);
  }
  parts.push('Buenos Aires, Argentina');
  const destination = parts.join(', ');

  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(destination)}`;
}

/**
 * Abre Google Maps automáticamente con la ruta hacia la propiedad.
 * @param {number} propId
 */
function openGoogleMapsRoute(propId) {
  const prop = state.propiedades.find(p => p.id === propId);
  if (!prop) {
    console.warn('[Google Maps] Propiedad no encontrada con ID:', propId);
    return;
  }
  const url = getGoogleMapsUrl(prop);
  console.log('[Google Maps] Abriendo ruta hacia:', prop.nombre, '->', url);
  window.open(url, '_blank', 'noopener,noreferrer');
}

window.getGoogleMapsUrl = getGoogleMapsUrl;
window.openGoogleMapsRoute = openGoogleMapsRoute;

function getActiveRoadmap() {
  return currentGeneratedRoadmap || state.activeRoadmap || null;
}

function removePropertyFromRoadmap(propId) {
  const active = getActiveRoadmap();
  if (!active || !active.propiedades) return;
  
  active.propiedades = active.propiedades.filter(p => p.id !== propId);
  currentGeneratedRoadmap = active;
  state.activeRoadmap = active;
  
  renderRoadmapView(active);
}

function generateMultipleVisitSheet() {
  const active = getActiveRoadmap();
  
  if (!active || !active.propiedades || active.propiedades.length === 0) {
    alert("No hay una Hoja de Ruta activa con propiedades. Por favor diseña una Hoja de Ruta primero.");
    return;
  }
  
  const propListStr = active.propiedades.map((p, idx) => `${idx + 1}. ${p.nombre} (${p.tipo || 'Inmueble'}) - [${p.operacion || 'Venta'}]`).join('\n');
  const addressListStr = active.propiedades.map((p, idx) => `${idx + 1}. ${p.direccion || p.ubicacion || '20 de Junio, La Matanza'}`).join('\n');
  
  const propInput = document.getElementById('visitProperty');
  if (propInput) propInput.value = propListStr;
  
  const addrInput = document.getElementById('visitAddress');
  if (addrInput) addrInput.value = addressListStr;
  
  // Set today's date & time
  const today = new Date().toISOString().split('T')[0];
  const dateInput = document.getElementById('visitDate');
  if (dateInput) dateInput.value = today;
  
  const now = new Date();
  const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
  const timeInput = document.getElementById('visitTime');
  if (timeInput) timeInput.value = timeStr;
  
  // Pre-fill client name if available
  if (active.cliente) {
    const clientNameInput = document.getElementById('visitClientName');
    if (clientNameInput) clientNameInput.value = active.cliente;

    const signClarificationInput = document.getElementById('visitSignClarification');
    if (signClarificationInput) signClarificationInput.value = active.cliente;
  }

  // Clear signature safely
  try {
    clearSignatureCanvas();
  } catch (err) {
    console.log("Signature clear error:", err);
  }
  
  switchTab('visit-sheet');
}

// Explicitly attach to window
window.generateMultipleVisitSheet = generateMultipleVisitSheet;
window.removePropertyFromRoadmap = removePropertyFromRoadmap;


function printRoadmapPDF() {
  const originalTitle = document.title;
  const active = getActiveRoadmap();
  const clientName = active?.cliente || '';
  const sanitizedClient = clientName ? clientName.replace(/[^a-zA-Z0-9 áéíóúÁÉÍÓÚñÑ_-]/g, '').trim() : '';
  
  document.title = sanitizedClient ? `Hoja de Ruta - ${sanitizedClient}` : 'Hoja de Ruta Inmobiliaria';
  
  window.print();
  
  setTimeout(() => {
    document.title = originalTitle;
  }, 1000);
}

function printVisitSheetPDF() {
  const originalTitle = document.title;
  const clientInput = document.getElementById('visitClientName');
  const clientName = clientInput ? clientInput.value.trim() : '';
  const sanitizedClient = clientName ? clientName.replace(/[^a-zA-Z0-9 áéíóúÁÉÍÓÚñÑ_-]/g, '').trim() : '';
  
  document.title = sanitizedClient ? `Ficha de Visita - ${sanitizedClient}` : 'Ficha de Visita Inmobiliaria';
  
  // Auto-expand all textareas in Visit Sheet so no lines are truncated in PDF
  const textareas = document.querySelectorAll('#view-visit-sheet textarea.visit-input');
  const originalHeights = [];
  textareas.forEach((ta, idx) => {
    originalHeights[idx] = ta.style.height;
    ta.style.height = 'auto';
    ta.style.height = Math.max(ta.scrollHeight + 15, 60) + 'px';
  });

  window.print();
  
  setTimeout(() => {
    document.title = originalTitle;
    textareas.forEach((ta, idx) => {
      ta.style.height = originalHeights[idx] || '';
    });
  }, 1000);
}

// Explicitly attach to window
window.printRoadmapPDF = printRoadmapPDF;
window.printVisitSheetPDF = printVisitSheetPDF;

function toggleVisitRentalFields() {
  const opSelect = document.getElementById('visitOperation');
  const rentalFields = document.getElementById('visitRentalFields');
  if (opSelect && rentalFields) {
    if (opSelect.value === 'Alquiler') {
      rentalFields.style.display = 'block';
    } else {
      rentalFields.style.display = 'none';
    }
  }
}

window.toggleVisitRentalFields = toggleVisitRentalFields;

// ============================================================
// GENERACIÓN DE PDF + COMPARTIR POR WHATSAPP
// ============================================================

/**
 * Muestra un overlay de carga mientras se genera el PDF.
 * Retorna la función para quitarlo.
 */
function showPdfOverlay(clientName) {
  const overlay = document.createElement('div');
  overlay.className = 'pdf-generating-overlay';
  overlay.id = 'pdfGeneratingOverlay';
  overlay.innerHTML = `
    <div class="overlay-spinner"></div>
    <strong>Generando PDF...</strong>
    <p>Preparando propuesta para <em>${clientName || 'el cliente'}</em></p>
  `;
  document.body.appendChild(overlay);
  return () => overlay.remove();
}

// ─────────────────────────────────────────────────────────────
// GENERACIÓN PROGRAMÁTICA DE PDF con jsPDF (sin html2canvas)
// Sin capturas DOM → nunca cuelga, funciona en http:// y file://
// ─────────────────────────────────────────────────────────────

/** Dibuja un encabezado de sección oscuro con texto blanco */
function pdfSection(pdf, title, x, y, w) {
  pdf.setFillColor(18, 18, 24);
  pdf.rect(x, y - 4, w, 7, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8);
  pdf.text(title, x + 2, y + 0.5);
  pdf.setTextColor(0, 0, 0);
  return y + 9;
}

/** Genera PDF completo de la Hoja de Ruta */
function buildRoadmapPDF(pdf, roadmap) {
  const W = 210, MARGIN = 14, CW = W - 2 * MARGIN, PH = 297;
  let y = MARGIN;

  const newPageIfNeeded = (need = 25) => {
    if (y + need > PH - MARGIN) { pdf.addPage(); y = MARGIN; }
  };

  // ── Encabezado negro ─────────────────────────────────────────
  pdf.setFillColor(0, 0, 0);
  pdf.rect(MARGIN, y, CW, 26, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(12);
  pdf.text('IVANA MOLINA & ASOCIADOS BIENES RAÍCES', MARGIN + 4, y + 9);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8.5);
  pdf.text('HOJA DE RUTA DE INVERSIÓN INMOBILIARIA', MARGIN + 4, y + 15);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(8);
  pdf.text(`HOJA DE RUTA  #${roadmap.id}`, W - MARGIN - 3, y + 9, { align: 'right' });
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7.5);
  pdf.text('Matrícula 1048  |  CUIT 27-39.616.147-3', W - MARGIN - 3, y + 15, { align: 'right' });
  y += 32;

  // ── Tabla de datos del cliente ────────────────────────────────
  const c4 = CW / 4;
  pdf.setFillColor(40, 42, 58);
  pdf.rect(MARGIN, y, CW, 7, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7.5);
  ['Cliente / Inversor', 'Fecha', 'Presupuesto Máx.', 'Operación'].forEach((h, i) => {
    pdf.text(h, MARGIN + c4 * i + 2, y + 5);
  });
  y += 7;

  pdf.setFillColor(248, 249, 252);
  pdf.rect(MARGIN, y, CW, 9, 'F');
  pdf.setDrawColor(200, 205, 215);
  pdf.rect(MARGIN, y, CW, 9);
  pdf.setTextColor(0, 0, 0);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(9);
  pdf.text(roadmap.cliente || '—', MARGIN + 2, y + 6);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8.5);
  pdf.text(roadmap.fecha || '—', MARGIN + c4 + 2, y + 6);
  pdf.text(
    roadmap.presupuesto > 0
      ? `${roadmap.monedaPresupuesto} ${roadmap.presupuesto.toLocaleString('es-AR')}`
      : 'A convenir',
    MARGIN + c4 * 2 + 2, y + 6
  );
  pdf.text(roadmap.operacion || '—', MARGIN + c4 * 3 + 2, y + 6);
  y += 13;

  if (roadmap.observaciones) {
    pdf.setFont('helvetica', 'italic');
    pdf.setFontSize(8);
    pdf.setTextColor(70, 70, 80);
    const obs = pdf.splitTextToSize('Observaciones: ' + roadmap.observaciones, CW);
    pdf.text(obs, MARGIN, y);
    y += obs.length * 4.5 + 3;
    pdf.setTextColor(0, 0, 0);
  }

  // ── Propiedades ───────────────────────────────────────────────
  y = pdfSection(pdf, 'PROPIEDADES SUGERIDAS EN EL RECORRIDO', MARGIN, y, CW);

  (roadmap.propiedades || []).forEach((p, idx) => {
    newPageIfNeeded(38);

    // Nombre y precio
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(11);
    pdf.setTextColor(0, 0, 0);
    pdf.text(`${idx + 1}.  ${p.nombre}`, MARGIN, y + 5);

    const priceStr = p.precio > 0
      ? `${p.moneda || 'USD'} ${p.precio.toLocaleString('es-AR')}`
      : 'Consultar';
    pdf.setFontSize(11);
    pdf.text(priceStr, W - MARGIN, y + 5, { align: 'right' });
    y += 8;

    // Dirección
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8.5);
    pdf.setTextColor(70, 70, 80);
    pdf.text(`${p.direccion || ''}  (${p.tipo}  —  ${p.ubicacion || ''})`, MARGIN, y);
    y += 5;

    // Specs
    pdf.setTextColor(0, 0, 0);
    const specs = [
      p.superficie ? `Sup: ${p.superficie}` : '',
      p.habitaciones ? `${p.habitaciones} dorms` : '',
      p.banos ? `${p.banos} baños` : '',
      `Estado: ${p.estado || '—'}`,
      p.apto_credito ? 'Apto Crédito Hipotecario' : '',
      `${p.operacion || ''}`
    ].filter(Boolean).join('   ·   ');
    pdf.setFontSize(8.5);
    pdf.text(specs, MARGIN, y);
    y += 5;

    // Potencial de inversión (2 líneas máx)
    if (p.potencial_inversion) {
      pdf.setFont('helvetica', 'italic');
      pdf.setFontSize(7.5);
      pdf.setTextColor(80, 80, 100);
      const pot = pdf.splitTextToSize(p.potencial_inversion, CW);
      pdf.text(pot.slice(0, 2), MARGIN, y);
      y += Math.min(pot.length, 2) * 4 + 1;
    }

    // Destinos
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(7.5);
    pdf.setTextColor(60, 60, 60);
    pdf.text(`Destinos: ${(p.destinos || []).join(', ')}`, MARGIN, y);
    y += 4;

    // Separador
    pdf.setDrawColor(210, 215, 225);
    pdf.line(MARGIN, y + 2, MARGIN + CW, y + 2);
    y += 8;
  });

  // ── Pie de página ─────────────────────────────────────────────
  newPageIfNeeded(10);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7);
  pdf.setTextColor(140, 140, 150);
  pdf.text(
    'Ivana Molina & Asociados Bienes Raíces  —  Matrícula 1048  —  CUIT 27-39.616.147-3  —  20 de Junio, Buenos Aires',
    W / 2, PH - 8, { align: 'center' }
  );

  return pdf;
}

/** Genera PDF completo de la Ficha de Visita */
function buildVisitSheetPDF(pdf) {
  const W = 210, MARGIN = 14, CW = W - 2 * MARGIN, PH = 297;
  let y = MARGIN;

  const get = id => (document.getElementById(id)?.value || '').trim();

  const operation    = get('visitOperation');
  const propertyText = get('visitProperty');
  const addressText  = get('visitAddress');
  const visitDate    = get('visitDate');
  const visitTime    = get('visitTime');
  const clientName   = get('visitClientName');
  const clientDNI    = get('visitClientDNI');
  const clientPhone  = get('visitClientPhone');
  const clientEmail  = get('visitClientEmail');
  const signClarif   = get('visitSignClarification');
  const signDNI      = get('visitSignDNI');
  const isRental     = operation === 'Alquiler';
  const col2 = CW / 2 - 3;

  // Fecha formateada
  let formattedDate = visitDate;
  if (visitDate) {
    const [yy, mm, dd] = visitDate.split('-');
    const months = ['enero','febrero','marzo','abril','mayo','junio','julio',
                    'agosto','septiembre','octubre','noviembre','diciembre'];
    formattedDate = `${dd} de ${months[parseInt(mm, 10) - 1]} de ${yy}`;
  }

  // ── Encabezado negro ─────────────────────────────────────────
  pdf.setFillColor(0, 0, 0);
  pdf.rect(MARGIN, y, CW, 26, 'F');
  pdf.setTextColor(255, 255, 255);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(13);
  pdf.text('FICHA DE VISITA INMOBILIARIA', MARGIN + 4, y + 9);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8.5);
  pdf.text('Constancia de Recorrido e Inspección de Inmueble', MARGIN + 4, y + 15);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7.5);
  pdf.text(['Ivana Molina — CORREDORA INMOBILIARIA',
            'Matrícula 1048  |  CUIT 27-39.616.147-3',
            '20 de Junio, Buenos Aires'],
           W - MARGIN - 3, y + 7, { align: 'right' });
  y += 32;

  // ── Sección 1: Inmueble ────────────────────────────────────
  y = pdfSection(pdf, '1.  DATOS DEL / LOS INMUEBLE(S) VISITADO(S)', MARGIN, y, CW);

  // Operación
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7.5);
  pdf.setTextColor(90, 90, 100);
  pdf.text('Operación', MARGIN, y);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  pdf.text(operation || '—', MARGIN + 28, y);
  y += 7;

  // Inmueble(s)
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7.5);
  pdf.setTextColor(90, 90, 100);
  pdf.text('Inmueble(s) / Propiedad(es) a Visitar', MARGIN, y);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  pdf.setTextColor(0, 0, 0);
  const propLines = pdf.splitTextToSize(propertyText || '—', CW);
  pdf.text(propLines, MARGIN, y + 5);
  y += 5 + propLines.length * 4.5 + 3;

  // Dirección
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7.5);
  pdf.setTextColor(90, 90, 100);
  pdf.text('Dirección / Ubicación(es)', MARGIN, y);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9);
  pdf.setTextColor(0, 0, 0);
  const addrLines = pdf.splitTextToSize(addressText || '—', CW);
  pdf.text(addrLines, MARGIN, y + 5);
  y += 5 + addrLines.length * 4.5 + 3;

  // Fecha y Hora en 2 columnas
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7.5);
  pdf.setTextColor(90, 90, 100);
  pdf.text('Fecha de Visita', MARGIN, y);
  pdf.text('Hora', MARGIN + col2 + 6, y);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  pdf.text(formattedDate || '—', MARGIN, y + 6);
  pdf.text(visitTime || '—', MARGIN + col2 + 6, y + 6);
  y += 13;

  // ── Sección 2: Interesado ──────────────────────────────────
  y = pdfSection(pdf, '2.  DATOS DEL INTERESADO / COMPRADOR', MARGIN, y, CW);

  // Nombre + DNI
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7.5);
  pdf.setTextColor(90, 90, 100);
  pdf.text('Nombre y Apellido completo', MARGIN, y);
  pdf.text('DNI / CUIT', MARGIN + col2 + 6, y);
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(10);
  pdf.setTextColor(0, 0, 0);
  pdf.text(clientName || '—', MARGIN, y + 6);
  pdf.text(clientDNI || '—', MARGIN + col2 + 6, y + 6);
  y += 12;

  // Teléfono + Email
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(7.5);
  pdf.setTextColor(90, 90, 100);
  pdf.text('Teléfono de Contacto', MARGIN, y);
  pdf.text('Email Personal', MARGIN + col2 + 6, y);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9.5);
  pdf.setTextColor(0, 0, 0);
  pdf.text(clientPhone || '—', MARGIN, y + 6);
  pdf.text(clientEmail || '—', MARGIN + col2 + 6, y + 6);
  y += 14;

  // ── Secciones 3 y 4 (solo alquileres) ──────────────────────
  if (isRental) {
    y = pdfSection(pdf, '3.  DATOS LABORALES Y ECONÓMICOS  (solo alquileres)', MARGIN, y, CW);

    const jobStatus = get('visitJobStatus');
    const company   = get('visitCompany');
    const income    = get('visitIncome');

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(7.5);
    pdf.setTextColor(90, 90, 100);
    pdf.text('Situación Laboral', MARGIN, y);
    pdf.text('Empresa / Actividad', MARGIN + col2 + 6, y);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9.5);
    pdf.setTextColor(0, 0, 0);
    pdf.text(jobStatus || '—', MARGIN, y + 6);
    pdf.text(company || '—', MARGIN + col2 + 6, y + 6);
    y += 12;

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(7.5);
    pdf.setTextColor(90, 90, 100);
    pdf.text('Ingreso Aproximado (Mensual)', MARGIN, y);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9.5);
    pdf.setTextColor(0, 0, 0);
    pdf.text(income || '—', MARGIN, y + 6);
    y += 14;

    y = pdfSection(pdf, '4.  DATOS DE LOCACIÓN  (solo alquileres)', MARGIN, y, CW);

    const people    = get('visitPeople');
    const pets      = get('visitPets');
    const guarantee = get('visitGuarantee');
    const col3      = CW / 3 - 2;

    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(7.5);
    pdf.setTextColor(90, 90, 100);
    pdf.text('Personas a Habitar', MARGIN, y);
    pdf.text('Mascotas', MARGIN + col3 + 5, y);
    pdf.text('Garantía Presentada', MARGIN + (col3 + 5) * 2, y);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(9.5);
    pdf.setTextColor(0, 0, 0);
    pdf.text(people || '—', MARGIN, y + 6);
    pdf.text(pets || '—', MARGIN + col3 + 5, y + 6);
    pdf.text(guarantee || '—', MARGIN + (col3 + 5) * 2, y + 6);
    y += 14;
  }

  // ── Sección firma ──────────────────────────────────────────
  const sigSection = isRental ? '5' : '3';
  y = pdfSection(pdf, `${sigSection}.  CONFORMIDAD Y FIRMA DEL VISITANTE`, MARGIN, y, CW);

  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(8);
  pdf.setTextColor(70, 70, 70);
  pdf.text(
    'Dejo constancia de haber visitado e inspeccionado el inmueble precedentemente detallado en la fecha y hora indicadas.',
    MARGIN, y, { maxWidth: CW }
  );
  y += 9;

  // Recuadro de firma
  pdf.setDrawColor(180, 185, 195);
  pdf.setFillColor(250, 250, 252);
  const sigH = 32;
  pdf.rect(MARGIN, y, CW, sigH);

  // Intentar incluir la firma del canvas
  try {
    const sigCanvas = document.getElementById('signatureCanvas');
    if (sigCanvas) {
      const sigData = sigCanvas.toDataURL('image/png');
      // Verificar que no esté vacío (canvas vacío = data URL muy corta)
      if (sigData && sigData.length > 200) {
        pdf.addImage(sigData, 'PNG', MARGIN + 2, y + 1, CW - 4, sigH - 2);
      } else {
        pdf.setTextColor(180, 180, 180);
        pdf.setFontSize(9);
        pdf.text('[ Sin firma ]', W / 2, y + sigH / 2 + 3, { align: 'center' });
      }
    }
  } catch (e) {
    pdf.setTextColor(180, 180, 180);
    pdf.setFontSize(9);
    pdf.text('[ Sin firma ]', W / 2, y + sigH / 2 + 3, { align: 'center' });
  }

  y += sigH + 7;

  // Líneas de aclaración y DNI firmante
  pdf.setDrawColor(0, 0, 0);
  pdf.line(MARGIN,         y + 8, MARGIN + col2,     y + 8);
  pdf.line(MARGIN + col2 + 6, y + 8, MARGIN + CW,    y + 8);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(9.5);
  pdf.setTextColor(0, 0, 0);
  pdf.text(signClarif || '', MARGIN, y + 6);
  pdf.text(signDNI || '',    MARGIN + col2 + 6, y + 6);
  pdf.setFontSize(7);
  pdf.setTextColor(100, 100, 100);
  pdf.text('Aclaración de Firma', MARGIN, y + 13);
  pdf.text('DNI Firmante', MARGIN + col2 + 6, y + 13);
  y += 18;

  // Pie de página
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(7);
  pdf.setTextColor(140, 140, 150);
  pdf.text(
    'Ivana Molina & Asociados Bienes Raíces  —  Matrícula 1048  —  CUIT 27-39.616.147-3  —  20 de Junio, Buenos Aires',
    W / 2, PH - 8, { align: 'center' }
  );

  return pdf;
}

/**
 * Punto de entrada: elige el generador según el tipo y devuelve un Blob PDF.
 * Sin html2canvas, sin DOM capture, sin cuelgues.
 * @param {'roadmap'|'visit'} type
 * @returns {Promise<Blob>}
 */
async function generatePDFBlob(type) {
  console.log('[PDF v3] generatePDFBlob iniciado, type:', type);
  if (!window.jspdf) {
    throw new Error('Librería jsPDF no cargada. Revisá tu conexión a internet.');
  }
  console.log('[PDF v3] jsPDF disponible ✅');
  const { jsPDF } = window.jspdf;
  const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

  if (type === 'roadmap') {
    const roadmap = getActiveRoadmap();
    console.log('[PDF v3] roadmap activo:', roadmap ? `#${roadmap.id}` : 'NULL');
    if (!roadmap) throw new Error('No hay una Hoja de Ruta activa. Generá una primero.');
    buildRoadmapPDF(pdf, roadmap);
  } else {
    buildVisitSheetPDF(pdf);
  }

  console.log('[PDF v3] PDF generado, creando blob...');
  return pdf.output('blob');
}



/**
 * Función principal de compartir por WhatsApp.
 * En móviles usa la Web Share API (el usuario elige el contacto).
 * En desktop descarga el PDF y abre wa.me con mensaje prefijado.
 * @param {'roadmap'|'visit'} type
 * @param {HTMLElement} sourceBtn  Botón que disparó la acción
 */
async function shareViaWhatsApp(type, sourceBtn) {
  console.log('[WPP v3] shareViaWhatsApp llamado, type:', type);
  // Obtener nombre del cliente para el archivo
  const active = getActiveRoadmap();
  const clientName = type === 'roadmap'
    ? (active?.cliente || 'Cliente')
    : (document.getElementById('visitClientName')?.value?.trim() || 'Cliente');

  // Feedback visual inmediato
  const originalHTML = sourceBtn ? sourceBtn.innerHTML : '';
  if (sourceBtn) {
    sourceBtn.disabled = true;
    sourceBtn.innerHTML = `<span class="wpp-spinner"></span> Generando PDF...`;
  }

  const removeOverlay = showPdfOverlay(clientName);

  try {
    const pdfBlob = await generatePDFBlob(type);

    const docLabel = type === 'roadmap' ? 'Hoja-de-Ruta' : 'Ficha-de-Visita';
    const safeClientName = clientName.replace(/[^a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]/g, '').trim().replace(/\s+/g, '-');
    const fileName = `${docLabel}-${safeClientName}.pdf`;
    const pdfFile = new File([pdfBlob], fileName, { type: 'application/pdf' });

    const shareTitle = type === 'roadmap'
      ? `Hoja de Ruta Inmobiliaria – ${clientName}`
      : `Ficha de Visita Inmobiliaria – ${clientName}`;
    const shareText = type === 'roadmap'
      ? `¡Hola! Te envío la Hoja de Ruta de Inversión personalizada. 🏡\n— Ivana Molina & Asociados Bienes Raíces`
      : `¡Hola! Te envío la Ficha de Visita Inmobiliaria para ${clientName}. 📋\n— Ivana Molina & Asociados Bienes Raíces`;

    removeOverlay();

    // ---- Opción A: Web Share API con archivo (móviles modernos → panel nativo del SO) ----
    if (navigator.canShare && navigator.canShare({ files: [pdfFile] })) {
      await navigator.share({
        files: [pdfFile],
        title: shareTitle,
        text: shareText
      });
      // Pulso de éxito
      if (sourceBtn) {
        sourceBtn.classList.add('shared-pulse');
        setTimeout(() => sourceBtn.classList.remove('shared-pulse'), 700);
      }
      return;
    }

    // ---- Opción B: Descarga automática + Abrir wa.me (desktop / navegadores sin Web Share) ----
    const blobURL = URL.createObjectURL(pdfBlob);
    const link = document.createElement('a');
    link.href = blobURL;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(blobURL), 5000);

    // Pequeña pausa para que el navegador procese la descarga antes de abrir WhatsApp
    await new Promise(r => setTimeout(r, 400));

    const waText = encodeURIComponent(
      shareText + `\n\n📎 El PDF "${fileName}" se descargó automáticamente. Adjuntalo en esta conversación.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${waText}`, '_blank', 'noopener,noreferrer');

  } catch (err) {
    removeOverlay();
    // Ignorar si el usuario canceló el panel de compartir
    if (err.name === 'AbortError') return;
    // Para cualquier otro error, mostrar mensaje amigable
    console.error('[shareViaWhatsApp]', err);
    alert(`⚠️ No se pudo generar el PDF.\nDetalle: ${err.message}`);
  } finally {
    if (sourceBtn) {
      sourceBtn.disabled = false;
      sourceBtn.innerHTML = originalHTML;
    }
    // Asegurarse de quitar el overlay si aún existe
    const overlay = document.getElementById('pdfGeneratingOverlay');
    if (overlay) overlay.remove();
  }
}

window.shareViaWhatsApp = shareViaWhatsApp;
