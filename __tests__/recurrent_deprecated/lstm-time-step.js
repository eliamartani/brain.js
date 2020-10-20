import RNNTimeStep from '../../src/recurrent/rnn-time-step';
import { LSTMTimeStep } from '../../src/recurrent/lstm-time-step';

describe('LSTMTimeStep', () => {
  describe('getModel', () => {
    test('overrides RNNTimeStep', () => {
      expect(typeof LSTMTimeStep.getModel).toEqual('function');
      expect(LSTMTimeStep.getModel).not.toEqual(RNNTimeStep.getModel);
    });
  });
  describe('getEquation', () => {
    test('overrides RNNTimeStep', () => {
      expect(typeof LSTMTimeStep.getEquation).toEqual('function');
      expect(LSTMTimeStep.getEquation).not.toEqual(RNNTimeStep.getEquation);
    });
  });
});
