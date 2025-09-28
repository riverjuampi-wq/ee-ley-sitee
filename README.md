# EE-Ley – Web (React + Vite + Tailwind)

Este proyecto contiene tu web lista para desplegar en **Vercel**.

## 1) Ejecutar en local (opcional)
- Requisitos: Node.js 18+
- Instalar dependencias:
  ```bash
  npm install
  ```
- Ejecutar entorno de pruebas:
  ```bash
  npm run dev
  ```

## 2) Subir a Vercel (recomendado)
- Opción A (sin GitHub): en https://vercel.com → **Add New... → Project → Import** y elige **Drag & Drop**. Sube esta carpeta completa como ZIP.
- Opción B (con GitHub): crea un repo y súbelo; en Vercel elige **Import Git Repository**.

Vercel detectará Vite y compilará con Tailwind automáticamente.

## 3) Enlaces integrados
- Calendly: https://calendly.com/riverjuampi/30min
- Stripe $40: https://buy.stripe.com/eVq14o6yC3jJ1BkfIM7Vm00
- Stripe $20: https://buy.stripe.com/eVqdRa8GK07x3Js0NS7Vm01

Si cambias enlaces, edita en `src/App.jsx` las constantes `CAL_URL`, `STRIPE_LINK_NORMAL`, `STRIPE_LINK_PROMO`.

## 4) Dominio
En Vercel → Project → **Settings → Domains** → añade `ee-ley.com` y sigue las instrucciones DNS.