# Parambariyam: Back to our Roots

Static storefront for Parambariyam (handmade herbal bath powders, hair care, kitchen remedies and heritage vessels). No build step, no backend. Orders are sent to WhatsApp with the basket and delivery address pre-filled.

## Edit products, sizes and prices
Everything lives in `assets/js/products.js`.
- `price: null` shows "Price on WhatsApp". Put a number (e.g. `price: 180`) to show prices and basket totals.
- `variants` controls the size options.
- `SITE.whatsapp` is the number orders go to.

## Pages
`index.html` home, `shop.html` collection (filters: `?cat=bath|hair|wellness|heritage`, `?concern=`, `?q=`), `product.html?p=<id>`, `story.html`, `contact.html` (FAQ, how to order), `404.html`.

## Local preview
`python3 -m http.server` then open http://localhost:8000
