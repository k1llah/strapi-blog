import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentTitleH3Title extends Schema.Component {
  collectionName: 'components_content_title_h3_titles';
  info: {
    displayName: 'h3 Title';
    icon: 'pencil';
  };
  attributes: {
    titleContent: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
  };
}

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

export interface ContentTitleOfContent extends Schema.Component {
  collectionName: 'components_content_title_of_content_s';
  info: {
    displayName: 'title of content ';
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

export interface MdContentMdContent extends Schema.Component {
  collectionName: 'components_md_content_md_contents';
  info: {
    displayName: 'md content';
    icon: 'medium';
  };
  attributes: {
    content: Attribute.RichText &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 4;
      }>;
  };
}

export interface ParagraphParagraphInfo extends Schema.Component {
  collectionName: 'components_paragraph_paragraph_infos';
  info: {
    displayName: 'paragraph info';
    icon: 'discuss';
  };
  attributes: {
    paragraphContent: Attribute.Text &
      Attribute.SetMinMaxLength<{
        minLength: 5;
      }>;
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
      'content-title.h3-title': ContentTitleH3Title;
      'content.content': ContentContent;
      'content.title-of-content': ContentTitleOfContent;
      'couple-images.couple-images': CoupleImagesCoupleImages;
      'md-content.md-content': MdContentMdContent;
      'paragraph.paragraph-info': ParagraphParagraphInfo;
      'single-image.single-image': SingleImageSingleImage;
      'title.title': TitleTitle;
    }
  }
}
