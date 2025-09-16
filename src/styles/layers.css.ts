// layers.css.ts
import { globalLayer } from "@vanilla-extract/css";

export const baseLayer = 'base';
export const componentsLayer = 'components';
export const utilitiesLayer = 'utilities';

// Déclaration de l’ordre des layers
globalLayer(baseLayer);
globalLayer(componentsLayer);
globalLayer(utilitiesLayer);