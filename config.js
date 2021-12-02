module.exports = {
  certbotWebRoot: '/opt/entrance-80/certbot-web-root/',
  httpsRedirectDomains: Object.assign(Object.create(null), {
    'demo.linux-remote.org:3000': true,
    'demo.linux-remote.org:3001': true
  })
}