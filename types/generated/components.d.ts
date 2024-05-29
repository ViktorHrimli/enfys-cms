import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsColorsCards extends Schema.Component {
  collectionName: 'components_elements_colors_cards';
  info: {
    displayName: 'colorsCards';
    icon: 'apps';
    description: '';
  };
  attributes: {
    colorsData: Attribute.String;
    colorsImage: Attribute.Media;
  };
}

export interface ElementsColors extends Schema.Component {
  collectionName: 'components_elements_colors';
  info: {
    displayName: 'colors';
    icon: 'apps';
  };
  attributes: {};
}

export interface ElementsTest extends Schema.Component {
  collectionName: 'components_elements_tests';
  info: {
    displayName: 'TEST';
  };
  attributes: {
    title: Attribute.String;
    value: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.colors-cards': ElementsColorsCards;
      'elements.colors': ElementsColors;
      'elements.test': ElementsTest;
    }
  }
}
