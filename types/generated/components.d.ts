import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentContent extends Schema.Component {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'content';
    icon: 'medium';
  };
  attributes: {
    content: Attribute.RichText & Attribute.Required;
  };
}

export interface CoupleImagesCoupleImages extends Schema.Component {
  collectionName: 'components_couple_images_couple_images';
  info: {
    displayName: 'couple-images';
    icon: 'stack';
    description: '';
  };
  attributes: {
    coupleImages: Attribute.Media;
  };
}

export interface SingleImageSingleImage extends Schema.Component {
  collectionName: 'components_single_image_single_images';
  info: {
    displayName: 'single-image';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    singleImage: Attribute.Media;
  };
}

export interface TitleTitle extends Schema.Component {
  collectionName: 'components_title_titles';
  info: {
    displayName: 'title';
    icon: 'strikeThrough';
  };
  attributes: {
    title: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 2;
      }>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.content': ContentContent;
      'couple-images.couple-images': CoupleImagesCoupleImages;
      'single-image.single-image': SingleImageSingleImage;
      'title.title': TitleTitle;
    }
  }
}
