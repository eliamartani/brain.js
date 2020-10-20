import * as layer from '../layer';

/**
 *
 * @param {ILayerJSON} jsonLayer
 * @returns {ILayer}
 */
function layerFromJSON(jsonLayer) {
  if (!layer[jsonLayer.type]) return null;
  const Layer = layer[jsonLayer.type];

  // eslint-disable-next-line
  const realLayer = Reflect.construct(Layer, arguments)

  Object.keys(jsonLayer).forEach((p) => {
    if (p !== 'type') {
      realLayer[p] = jsonLayer[p];
    }
  });

  return realLayer;
}

export default layerFromJSON;
