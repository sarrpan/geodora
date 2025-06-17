// next.config.js 
const createNextIntlPlugin = require('next-intl/plugin');

// Αυτή είναι η αλλαγή: Δίνουμε στο plugin τη διαδρομή προς το αρχείο ρυθμίσεων.
const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = withNextIntl(nextConfig);
