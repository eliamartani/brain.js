import { BaseLayer, ILayer, ILayerSettings } from './base-layer';
import { KernelOutput } from 'gpu.js';

export interface IFilterSettings extends ILayerSettings {
  filterCount: number;
  filterWidth: number;
  filterHeight: number;
  filters?: KernelOutput;
  filterDeltas?: KernelOutput;
}

export class Filter extends BaseLayer {
  errors?: KernelOutput | null = null;

  get width(): number {
    return this.inputLayer.width;
  }

  set width(value: number) {
    this.inputLayer.width = value;
  }

  get height(): number {
    return this.inputLayer.height;
  }

  set height(value: number) {
    this.inputLayer.height = value;
  }

  get depth(): number {
    return this.inputLayer.depth;
  }

  get filterCount(): number {
    return this.settings.filterCount as number;
  }

  get filterWidth(): number {
    return this.settings.filterWidth as number;
  }

  get filterHeight(): number {
    return this.settings.filterHeight as number;
  }

  get filters(): KernelOutput {
    return this.settings.filters;
  }

  set filters(filters: KernelOutput) {
    this.settings.filters = filters;
  }

  get filterDeltas(): KernelOutput {
    return this.settings.filterDeltas;
  }

  set filterDeltas(filterDeltas: KernelOutput) {
    this.settings.filterDeltas = filterDeltas;
  }

  inputLayer: ILayer;
  settings: Partial<IFilterSettings>;
  constructor(inputLayer: ILayer, settings: Partial<IFilterSettings> = {}) {
    super();
    this.settings = settings;
    this.inputLayer = inputLayer;
  }
}
