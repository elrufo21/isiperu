/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://isiperu.com', // tu dominio sin barra al final
    generateRobotsTxt: true, // ya generará robots.txt, aunque puedes mantener el tuyo en /public
    changefreq: 'weekly',
    priority: 0.7,
    sitemapSize: 5000,
  };
  