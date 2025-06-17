// next.config.js
const createNextIntlPlugin = require('next-intl/plugin');
 
// Αυτή είναι η αλλαγή: Δίνουμε στο plugin τη διαδρομή προς το αρχείο ρυθμίσεων.
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
 
/** @type {import('next').NextConfig} */
<<<<<<< HEAD
const nextConfig = {};
 
module.exports = withNextIntl(nextConfig);
=======
const nextConfig = {}

module.exports = nextConfig
>>>>>>> c3458b0103c84b373d9e7011b7cdeeeaf0bcfce2
