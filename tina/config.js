import { defineConfig } from "tinacms";

const isLocal = process.env.NODE_ENV === 'development';

const templates= [
    {
        name: "heroSection",
        label: "Hero Section",
        fields: [
            {
                name: "title",
                label: "Title",
                type: "string",
            },
            {
                name: "description",
                label: "Description",
                type: "string",
            },
            {
                name: "buttonText",
                label: "Button Text",
                type: "string",
            },
            {
                name: "buttonLink",
                label: "Button Link",
                type: "string",
            },
        ]
    },
    {
        name: "container",
        label: "Container",
        fields: [
            {
                name: "subHeading",
                label: "Sub Heading",
                type: "string",
            },
            {
                name: "heading",
                label: "Heading",
                type: "string",
            },
            {
                name: "text",
                label: "Text",
                type: "rich-text",
            },
            {
                name: "buttonText",
                label: "Button Text",
                type: "string",
            },
            {
                name: "buttonLink",
                label: "Button Link",
                type: "string",
            },
            {
                name: "image",
                label: "Image",
                type: "image",
            },
            {
                name: "direction",
                label: "Direction",
                type: "string",
                options: [
                    {
                        label: "Left",
                        value: "left",
                    },
                    {
                        label: "Right",
                        value: "right",
                    },
                ],
            },
        ]
    },
    {
        name: "testimonials",
        label: "Testimonials",
        fields: [
            {
                name: "title",
                label: "Title",
                type: "string",
            },
            {
                name: "description",
                label: "Description",
                type: "string",
            },
            {
                name: "items",
                label: "Testimonials List",
                type: "object",
                list: true,
                fields: [
                    {
                        name: "message",
                        label: "Message",
                        type: "string",
                        required: true,
                        ui: { component: 'textarea' },
                    },
                    {
                        name: "name",
                        label: "Name",
                        type: "string",
                        isTitle: true,
                        required: true,
                    },
                    {
                        name: "position",
                        label: "Position",
                        type: "string",
                        required: true,
                    }
                ]
            }
        ]
    },
    {
        name: "products",
        label: "Products",
        fields: [
            {
                name: "title",
                label: "Title",
                type: "string",
            },
            {
                name: "description",
                label: "Description",
                type: "string",
            }
        ]
    },
    {
        name: "partner",
        label: "Partners",
        fields: [
            {
                name: "title",
                label: "Title",
                type: "string",
            },
            {
                name: "description",
                label: "Description",
                type: "string",
            }
        ]
    },
    {
        name: "contact",
        label: "Contact Form",
        fields: [
            {
                name: "subheading",
                label: "Sub Heading",
                type: "string",
            },
            {
                name: "heading",
                label: "Heading",
                type: "string",
            },
            {
                name: "description",
                label: "Description",
                type: "string",
                ui:{
                    component: "textarea"
                }
            },
            {
                name: "phone",
                label: "Phone",
                type: "string",
            }
        ]
    },
    {
        name: "Spacer",
        label: "Spacer",
        fields: [
            {
                name: "height",
                label: "Height",
                type: "string",
            },
            {
                name: "backgroundColor",
                label: "Background Color",
                type: "string",
                options: [
                    {
                        label: "White",
                        value: "white",
                    },
                    {
                        label: "Background",
                        value: "background",
                    },
                ]
            }
        ]
    },
    {
        name: "markdown",
        label: "Markdown Text",
        fields: [
            {
                name: "text",
                label: "Text",
                type: "rich-text",
            }
        ]
    },
    {
        name: "allwork",
        label : "All Works",
        fields: [
            {
                name: "title",
                label: "Title",
                type: "string",
            }
        ]

    },
    {
        name: "gallery",
        label: "Gallery",
        fields: [
            {
                name: "title",
                label: "Gallery Title",
                type: "string",
            },
            {
                name: "images",
                label: "Images",
                type: "object",
                list: true,
                fields: [
                    {
                        name: "image",
                        label: "Image",
                        type: "image",
                        required: true,
                    }
                ],
            },
        ]
    }
]

export default defineConfig({
  branch: isLocal ? 'main' : (process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || 'main'),
  clientId: isLocal ? null : process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: isLocal ? null : process.env.TINA_TOKEN,
  local: isLocal,
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
    schema: {
        collections: [
            {
                name: "page",
                label: "Page",
                path: "content/page",
                format: "md",
                ui: {
                    router: (props) => {
                        const basename = props.document._sys.basename.replace(/\.[^.]+$/, '');

                        if (basename === 'index' || basename === 'home') {
                            return '/';
                        }

                        return `/${basename}`;
                    }
                },
                fields: [
                    {
                        name: "blocks",
                        label: "Blocks",
                        type: "object",
                        list: true,
                        templates: templates
                    }
                ],
            },
            {
                name: "product",
                label: "Product",
                path: "content/product",
                format: "md",
                fields: [
                            {
                                name: "name",
                                label: "Name",
                                type: "string",
                                isTitle: true,
                                required: true,
                            },
                            {
                                name: "image",
                                label: "Image",
                                type: "image",
                            },
                    {
                        name: "description",
                        label: "Description",
                        type: "rich-text",
                    },
                    {
                        name: "detailDescription",
                        label: "Detailed Description",
                        type: "rich-text",
                    }
                ]
            },
            {
                name: "partner",
                label: "Partners",
                path: "content/partner",
                format: "md",
                fields: [
                    {
                        name: "name",
                        label: "Name",
                        type: "string",
                        isTitle: true,
                        required: true,
                    },
                    {
                        name: "image",
                        label: "Image",
                        type: "image",
                    },
                ]
            },
            {
                name: "service",
                label: "Services",
                path: "content/services",
                format: "md",
                ui: {
                    router: (props) => {
                        const basename = props.document._sys.basename.replace(/\.[^.]+$/, '');

                        if (basename === 'index' || basename === 'home') {
                            return '/';
                        }

                        return `/services/${basename}`;
                    }
                },
                fields: [
                    {
                        name: "name",
                        label: "Name",
                        type: "string",
                        isTitle: true,
                        required: true,
                    },
                    {
                        name: "blocks",
                        label: "Blocks",
                        type: "object",
                        list: true,
                        templates: templates
                    }
                ]
            },
            {
                name: "work",
                label: "Works",
                path: "content/works",
                format: "md",
                ui: {
                    router: (props) => {
                        const basename = props.document._sys.basename.replace(/\.[^.]+$/, '');

                        if (basename === 'index' || basename === 'home') {
                            return '/';
                        }

                        return `/work/${basename}`;
                    }
                },
                fields: [
                    {
                        name: "name",
                        label: "Name",
                        type: "string",
                        isTitle: true,
                        required: true,
                    },
                    {
                        name: "mainImage",
                        label: "Main Image",
                        type: "image",
                    },
                    {
                        name: "description",
                        label: "Description",
                        type: "string",
                    },
                    {
                        name: "blocks",
                        label: "Blocks",
                        type: "object",
                        list: true,
                        templates: templates
                    }
                ]
            },
            {
                name: "site",
                label: "Site Settings",
                path: "content/site",
                format: "md",
                ui: {
                    allowedActions: {
                        create: false,
                        delete: false,
                    },
                },
                fields: [
                    {
                        name: "title",
                        label: "Title Meta Data",
                        type: "string",
                    },
                    {
                        name: "description",
                        label: "Description Meta Data",
                        type: "string",
                    },
                    {
                        name: "keywords",
                        label: "Keywords Meta Data",
                        type: "string",
                    },
                    {
                      name: "footerText",
                      label: "Footer Text",
                      type: "string",
                    },
                    {
                        name: "footerImage",
                        label: "Footer Image",
                        type: "image",
                    },
                    {
                        name: "navbarLogo",
                        label: "Navbar Logo",
                        type: "image",
                    },
                    {
                        name: "footerLogo",
                        label: "Footer Logo",
                        type: "image",
                    },
                    {
                        name: "location",
                        label: "Location",
                        type: "string",
                    },
                    {
                        name: "phone",
                        label: "Phone",
                        type: "string",
                    },
                    {
                        name: "email",
                        label: "Email",
                        type: "string",
                    },
                    {
                        name: 'instagram',
                        label: 'Instagram',
                        type: 'string',
                    },
                    {
                        name: 'facebook',
                        label: 'Facebook',
                        type: 'string',
                    },
                    {
                        name: 'twitter',
                        label: 'Twitter',
                        type: 'string',
                    },
                    {
                        name: 'linkedin',
                        label: 'LinkedIn',
                        type: 'string',
                    }
                ]
            }
        ],
    },
});
