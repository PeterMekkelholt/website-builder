import { Builder, BuilderComponent } from '@builder.io/react'
import dynamic from 'next/dynamic'

Builder.registerComponent(
  dynamic(() => import('./M49_page_heading')),
  {
    name: 'M49 Page Heading',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png',
    inputs: [
      {
        name: 'title',
        type: 'string',
        required: true,
        defaultValue: 'Default page heading',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./M49_3_col')),
  {
    name: 'M49 3 Columns',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png',
    inputs: [
      {
        name: 'col_1_title',
        type: 'string',
        required: true,
        defaultValue: 'Column 1 Title',
      },
      {
        name: 'col_1_body',
        type: 'richText',
        required: true,
        defaultValue: 'Column 1 Body',
      },

      {
        name: 'col_2_title',
        type: 'string',
        required: true,
        defaultValue: 'Column 2 Title',
      },
      {
        name: 'col_2_body',
        type: 'richText',
        required: true,
        defaultValue: 'Column 2 Body',
      },

      {
        name: 'col_3_title',
        type: 'string',
        required: true,
        defaultValue: 'Column 3 Title',
      },
      {
        name: 'col_3_body',
        type: 'richText',
        required: true,
        defaultValue: 'Column 3 Body',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./M49_hero')),
  {
    name: 'M49 Hero',
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/device-desktop-analytics.png',
    inputs: [
      {
        name: 'hero_title',
        type: 'longText',
        required: true,
        defaultValue: 'Text displayed on hero',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./M49_banner')),
  {
    name: 'M49 Banner',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png',
    inputs: [
      {
        name: 'banner_caption',
        type: 'longText',
        required: true,
        defaultValue: 'Text displayed over the image',
      },
      {
        name: 'banner_image',
        type: 'file',
        required: true,
        allowedFileTypes: ['jpeg', 'png'],
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./M49_footer')),
  {
    name: 'M49 Footer',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png',
    inputs: [
      {
        name: 'links',
        type: 'list',
        subFields: [
          {
            name: 'caption',
            type: 'string',
            defaultValue: 'Page name i.e. about',
          },
          {
            name: 'url',
            type: 'string',
            defaultValue: '/about',
          },
        ],
      },
    ],
  }
)

Builder.register('insertMenu', {
  name: 'Mach49 Components',
  items: [
    { name: 'M49 Page Heading' },
    { name: 'M49 3 Columns' },
    { name: 'M49 Banner' },
    { name: 'M49 Footer' },
    { name: 'M49 Hero' },
  ],
})
