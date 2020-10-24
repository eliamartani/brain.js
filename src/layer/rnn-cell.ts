import { ILayer, ILayerSettings } from './base-layer';
import { RecurrentZeros } from './recurrent-zeros';
import { relu } from './relu';
import { add } from './add';
import { multiply } from './multiply';
import { random } from './random';
import { zeros } from './zeros';

export function rnnCell(
  settings: ILayerSettings,
  input: ILayer,
  recurrentInput: RecurrentZeros
): ILayer {
  const { height } = settings;

  if (typeof height !== 'number') throw new Error('height not set');
  if (recurrentInput.setDimensions) {
    recurrentInput.setDimensions(1, height);
  }

  // wxh
  const weight = random({
    title: 'weight',
    height,
    width: input.height,
    std: 0.08,
  });
  // whh
  const transition = random({
    title: 'transition',
    height,
    width: height,
    std: 0.08,
  });
  // bhh
  const bias = zeros({ title: 'bias', height });

  return relu(
    add(
      add(multiply(weight, input), multiply(transition, recurrentInput)),
      bias
    )
  );
}
