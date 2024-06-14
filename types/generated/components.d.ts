import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsAnimations extends Schema.Component {
  collectionName: 'components_elements_animations';
  info: {
    displayName: 'Animations';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    Image: Attribute.Media;
    text: Attribute.Text;
    image_2: Attribute.Media;
    text_2: Attribute.Text;
    image_3: Attribute.Media;
    text_3: Attribute.Text;
    image_4: Attribute.Media;
    text_4: Attribute.Text;
    image_5: Attribute.Media;
    text_5: Attribute.Text;
    image_6: Attribute.Media;
    text_6: Attribute.Text;
    image_7: Attribute.Media;
    text_7: Attribute.Text;
    list: Attribute.Component<'elements.universal', true>;
    universalText: Attribute.String;
  };
}

export interface ElementsColorsCards extends Schema.Component {
  collectionName: 'components_elements_colors_cards';
  info: {
    displayName: 'colorsCards';
    icon: 'apps';
    description: '';
  };
  attributes: {
    title: Attribute.String;
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

export interface ElementsIcons extends Schema.Component {
  collectionName: 'components_elements_icons';
  info: {
    displayName: 'icons';
    icon: 'alien';
    description: '';
  };
  attributes: {
    free_shipping: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    guarantee: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    payment_in_installments: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
    new: Attribute.Boolean & Attribute.Required & Attribute.DefaultTo<false>;
    bestseller: Attribute.Boolean &
      Attribute.Required &
      Attribute.DefaultTo<false>;
  };
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

export interface ElementsUniversal extends Schema.Component {
  collectionName: 'components_elements_universals';
  info: {
    displayName: 'universal';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.animations': ElementsAnimations;
      'elements.colors-cards': ElementsColorsCards;
      'elements.colors': ElementsColors;
      'elements.icons': ElementsIcons;
      'elements.test': ElementsTest;
      'elements.universal': ElementsUniversal;
    }
  }
}
