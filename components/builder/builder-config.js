import { Builder, BuilderComponent, withChildren } from '@builder.io/react'
import M49_hero from './M49_body'
import dynamic from 'next/dynamic'

const M49_children_hero = withChildren(M49_hero)

Builder.registerComponent(
  dynamic(() => import('./M49_nav.jsx')),
  {
    name: 'M49 Default Nav',
    image: 'https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png',
    inputs: [
      {
        name: 'brand_title',
        type: 'text',
        required: true,
        defaultValue: 'Mach49 Brand',
      },
      {
        name: 'thing',
        type: 'list',
        required: true,
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

Builder.registerComponent(M49_children_hero, {
  name: 'M49 Body',
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png',
  inputs: [
    {
      name: 'body_title',
      type: 'Text',
      required: true,
      defaultValue:
        'Track Your Carbon Emissions with Precision using Carbon-A-Tron 9000',
    },
    {
      name: 'body_image',
      type: 'file',
      required: true,
      allowedFileTypes: ['jpeg', 'png'],
    },
  ],
  // (Optionally) specify requirements that the direct children can only be certain types
  childRequirements: {
    message: 'You can only put Buttons, Text, Slider, or Headings in a Hero',
    query: {
      'component.name': { $in: ['Button', 'Text', 'Heading', 'M49 Slider'] },
    },
  },
})

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
        defaultValue: 'Carbon-A-Tron 9000: The Ultimate Carbon Tracker',
      },
      {
        name: 'hero_subtitle',
        type: 'richText',
        required: true,
        defaultValue:
          "Introducing the Carbon-A-Tron 9000 - the high-tech dashboard that tracks your carbon emissions accurately, whether you're driving or flying. Let it do the heavy lifting for you!",
      },
      {
        name: 'hero_price',
        type: 'Text',
        required: true,
        defaultValue: '$15/m',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./M49_slider')),
  {
    name: 'M49 Slider',
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/device-desktop-analytics.png',
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
        name: 'brand_name',
        type: 'longText',
        required: true,
        defaultValue: 'Mach49 Templates',
      },
      {
        name: 'product',
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
      {
        name: 'company',
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
      {
        name: 'support',
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
      {
        name: 'social',
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
    { name: 'M49 Default Nav' },
    { name: 'M49 Body' },
    { name: 'M49 Page Heading' },
    { name: 'M49 3 Columns' },
    { name: 'M49 Banner' },
    { name: 'M49 Footer' },
    { name: 'M49 Hero' },
    { name: 'M49 Slider' },
  ],
})
