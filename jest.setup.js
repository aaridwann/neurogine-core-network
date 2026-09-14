afterEach(() => {
  jest.clearAllMocks();
});

global.__reanimatedWorkletInit = jest.fn();
