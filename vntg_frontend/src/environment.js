const configs = {
  production: {
      url: 'http://localhost:8080',
      backendUrl: 'http://localhost:8888',
  },
  development: {
      url: 'http://localhost:3000',
      backendUrl: 'http://localhost:4000'
  }
};

console.log('process.env.NODE_ENV, ', process.env.NODE_ENV);
export default configs[process.env.NODE_ENV];