import { Builder, BuilderComponent, withChildren } from '@builder.io/react'
import M49_hero from './M49_body'
import CQuel_body from './CQuel_body'
import dynamic from 'next/dynamic'

const M49_children_hero = withChildren(M49_hero)
const CQuel_children_body = withChildren(CQuel_body)

Builder.registerComponent(
  dynamic(() => import('./CQuel_hero')),
  {
    name: 'CQuel Hero',
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/device-desktop-analytics.png',
    inputs: [
      {
        name: 'hero_title',
        type: 'longText',
        required: true,
        defaultValue:
          'Your <span style="color: #1B4965">Net Zero</span> strategy can be effectively implemented. At <span style="color: #1B4965">scale</span>.',
      },
      {
        name: 'hero_CTA',
        type: 'Text',
        required: true,
        defaultValue: 'Learn More',
      },
      {
        name: 'hero_image',
        type: 'file',
        required: true,
        allowedFileTypes: ['jpeg', 'png'],
        defaultValue:
          'https://images.unsplash.com/photo-1551836022-b06985bceb24?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80',
      },
      {
        name: 'hero_image_alt',
        type: 'Text',
        required: true,
        defaultValue: 'CQuel Hero Image',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./CQuel_nav')),
  {
    name: 'CQuel Nav',
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/device-desktop-analytics.png',
    inputs: [],
  }
)

Builder.registerComponent(CQuel_children_body, {
  name: 'CQuel Body',
  image: 'https://tabler-icons.io/static/tabler-icons/icons-png/id-badge.png',
  inputs: [
    {
      name: 'body_title',
      type: 'Text',
      required: true,
      defaultValue: 'We’re here at every step',
    },
  ],
  // (Optionally) specify requirements that the direct children can only be certain types
  childRequirements: {
    message: 'You can only put Body Items or Text in a Hero',
    query: {
      'component.name': {
        $in: ['CQuel Body Item Left', 'CQuel Body Item Right', 'Text'],
      },
    },
  },
})

Builder.registerComponent(
  dynamic(() => import('./CQuel_body_item_left')),
  {
    name: 'CQuel Body Item Left',
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/device-desktop-analytics.png',
    inputs: [
      {
        name: 'item_image',
        type: 'file',
        required: true,
        allowedFileTypes: ['png'],
      },
      {
        name: 'item_number',
        type: 'Text',
        required: true,
        defaultValue: '#',
      },
      {
        name: 'item_headline',
        type: 'Text',
        required: true,
        defaultValue: 'Plan on an asset level',
      },
      {
        name: 'item_description',
        type: 'longText',
        required: true,
        defaultValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./CQuel_body_item_right')),
  {
    name: 'CQuel Body Item Right',
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/device-desktop-analytics.png',
    inputs: [
      {
        name: 'item_image',
        type: 'file',
        required: true,
        allowedFileTypes: ['png'],
      },
      {
        name: 'item_number',
        type: 'Text',
        required: true,
        defaultValue: '#',
      },
      {
        name: 'item_headline',
        type: 'Text',
        required: true,
        defaultValue: 'Plan on an asset level',
      },
      {
        name: 'item_description',
        type: 'longText',
        required: true,
        defaultValue:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./CQuel_steps')),
  {
    name: 'CQuel Steps',
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/device-desktop-analytics.png',
    inputs: [
      {
        name: 'step_1',
        type: 'Text',
        required: true,
        defaultValue: 'Plan',
      },
      {
        name: 'step_icon_1',
        type: 'file',
        required: true,
        allowedFileTypes: ['png'],
      },
      {
        name: 'step_2',
        type: 'Text',
        required: true,
        defaultValue: 'Plan',
      },
      {
        name: 'step_icon_2',
        type: 'file',
        required: true,
        allowedFileTypes: ['png'],
      },
      {
        name: 'step_3',
        type: 'Text',
        required: true,
        defaultValue: 'Plan',
      },
      {
        name: 'step_icon_3',
        type: 'file',
        required: true,
        allowedFileTypes: ['png'],
      },
      {
        name: 'step_4',
        type: 'Text',
        required: true,
        defaultValue: 'Plan',
      },
      {
        name: 'step_icon_4',
        type: 'file',
        required: true,
        allowedFileTypes: ['png'],
      },
    ],
  }
)

Builder.registerComponent(
  dynamic(() => import('./CQuel_signup')),
  {
    name: 'CQuel Signup',
    image:
      'https://tabler-icons.io/static/tabler-icons/icons-png/device-desktop-analytics.png',
    inputs: [
      {
        name: 'signup_title',
        type: 'Text',
        required: true,
        defaultValue: 'Beta Program',
      },
      {
        name: 'signup_body',
        type: 'longText',
        required: true,
        defaultValue:
          'Join our community to receive regular development updates, share your ideas, and get access to CQuel first.',
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
    { name: 'CQuel Hero' },
    { name: 'CQuel Nav' },
    { name: 'CQuel Steps' },
    { name: 'CQuel Body' },
    { name: 'CQuel Body Item Left' },
    { name: 'CQuel Body Item Right' },
    { name: 'CQuel Signup' },
    { name: 'M49 Body' },
    { name: 'M49 Page Heading' },
    { name: 'M49 3 Columns' },
    { name: 'M49 Banner' },
    { name: 'M49 Footer' },
    { name: 'M49 Hero' },
    { name: 'M49 Slider' },
  ],
})
