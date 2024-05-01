const routerProfessores = require('./ProfRoute');

module.exports = (app) => {
    app.use(routerProfessores);
}