module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac20d6275a6cda0efde323ed7ba2dc6e'),
  },
});
