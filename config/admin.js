module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '5b22e81434fdefc11db52efb092c16e0'),
  },
});
