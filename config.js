module.exports = {
  certbotWebRoot: '/opt/entrance-80/certbot-web-root/',
  homeHttpsDomain: 'demo.linux-remote.org:3000',
  needRedirectDomains: Object.assign(Object.create(null), {
    'demo.linux-remote.org': true,
    'demo.linux-remote.org:80': true
  })
}