const api = {
  get: jest.fn(() => Promise.resolve({ data: {} })),
  create: () => api,
  defaults: {
    adapter: {},
  },
};

export default api;
