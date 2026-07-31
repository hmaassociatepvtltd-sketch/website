import { defineConfig } from "tinacms";

const buttonStyleField = {
    type: 'string',
    name: 'buttonStyle',
    label: 'Button Design Style',
    options: [
        { label: 'Primary Sliding Arrow', value: 'primary-arrow' },
        { label: 'Secondary Glassmorphism', value: 'secondary-glass' },
        { label: 'Gradient Glow', value: 'gradient-glow' },
        { label: 'Outline Pill', value: 'outline-pill' },
        { label: 'Dark Sleek', value: 'dark-sleek' },
        { label: 'Minimal Link Arrow', value: 'minimal-link' },
    ]
};

const templates = [
    {
        name: 'slideHero',
        label: 'Slides Hero Section',
        fields: [
            {
                type: 'number',
                name: 'slideDuration',
                label: 'Slide Duration (ms)',
                description: 'Time in milliseconds (e.g., 5000 for 5 seconds)',
            },
            {
                type: 'object',
                name: 'slides',
                label: 'Slides',
                list: true,
                ui: {
                    itemProps: (item) => {
                        return { label: item?.title || 'New Slide' };
                    },
                },
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                        ui: { component: 'textarea' },
                    },
                    {
                        type: 'image',
                        name: 'backgroundImage',
                        label: 'Background Image',
                    },
                    {
                        type: 'image',
                        name: 'backgroundVideo',
                        label: 'Background Video File (Upload mp4/webm)',
                        description: 'Upload a short (3-5 MB) mp4/webm video file to run in a continuous loop behind this slide',
                    },
                    {
                        type: 'string',
                        name: 'buttonText',
                        label: 'Button Text',
                    },
                    {
                        type: 'string',
                        name: 'buttonLink',
                        label: 'Button Link',
                    },
                    buttonStyleField,
                ],
            },
        ],
    },
    {
        name: 'animatedHeroSection',
        label: 'Animated Hero Slider Section',
        fields: [
            {
                type: 'string',
                name: 'sectionHeading',
                label: 'Hero Section Main Heading / Tagline (Optional)',
            },
            {
                type: 'number',
                name: 'slideDuration',
                label: 'Slide Duration (ms)',
                description: 'Default is 5000ms (5 seconds)',
            },
            {
                type: 'object',
                name: 'slides',
                label: 'Slides',
                list: true,
                ui: {
                    itemProps: (item) => {
                        return { label: item?.slideHeading || item?.subHeading || 'New Slide' };
                    },
                },
                fields: [
                    {
                        type: 'string',
                        name: 'slideHeading',
                        label: 'Slide Heading',
                    },
                    {
                        type: 'string',
                        name: 'subHeading',
                        label: 'Slide Sub-Heading',
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                        ui: { component: 'textarea' },
                    },
                    {
                        type: 'string',
                        name: 'animationType',
                        label: 'Slide Animation Type',
                        options: [
                            { label: 'Fade In / Zoom Out', value: 'fade-zoom' },
                            { label: 'Slide Right to Left', value: 'slide-left' },
                            { label: 'Slide Bottom to Top', value: 'slide-up' },
                            { label: '3D Flip Fade', value: 'flip' },
                        ]
                    },
                    {
                        type: 'image',
                        name: 'backgroundImage',
                        label: 'Background Image',
                    },
                    {
                        type: 'image',
                        name: 'backgroundVideo',
                        label: 'Background Video File (Upload mp4/webm)',
                        description: 'Upload a short (3-5 MB) mp4/webm video file to run in a continuous loop behind this slide',
                    },
                    {
                        type: 'string',
                        name: 'buttonText',
                        label: 'Primary Button Text',
                    },
                    {
                        type: 'string',
                        name: 'buttonLink',
                        label: 'Primary Button Link',
                    },
                    buttonStyleField,
                    {
                        type: 'string',
                        name: 'secondaryButtonText',
                        label: 'Secondary Button Text',
                    },
                    {
                        type: 'string',
                        name: 'secondaryButtonLink',
                        label: 'Secondary Button Link',
                    },
                ],
            },
        ],
    },
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
            buttonStyleField,
            {
                name: "backgroundImage",
                label: "Background Image",
                type: "image"
            }
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
            buttonStyleField,
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
            {
                name: "bgTheme",
                label: "Background Theme / Color",
                type: "string",
                options: [
                    { label: "Default Clean (White / Standard)", value: "light" },
                    { label: "Soft Muted Gray", value: "gray" },
                    { label: "Deep Navy Blue", value: "navy" },
                    { label: "Dark Zinc", value: "dark-zinc" },
                    { label: "Primary Tint Glow", value: "primary-tint" },
                ],
            },
        ]
    },
    {
        name: "modernContainer",
        label: "Modern Content Block Section",
        fields: [
            {
                name: "layoutType",
                label: "Layout Layout",
                type: "string",
                options: [
                    { label: "Split Image Left", value: "split-left" },
                    { label: "Split Image Right", value: "split-right" },
                    { label: "Centered Hero Banner", value: "centered" },
                    { label: "Bento Feature Grid", value: "bento" },
                ]
            },
            {
                name: "badgeText",
                label: "Tag Badge / Sub-heading",
                type: "string",
            },
            {
                name: "heading",
                label: "Main Heading",
                type: "string",
            },
            {
                name: "markdownContent",
                label: "Markdown Rich Text Content",
                type: "rich-text",
            },
            {
                name: "image",
                label: "Primary Image / Media",
                type: "image",
            },
            {
                name: "secondaryImage",
                label: "Secondary Image (Optional Floating Graphic)",
                type: "image",
            },
            {
                name: "buttonText",
                label: "Primary Button Text",
                type: "string",
            },
            {
                name: "buttonLink",
                label: "Primary Button Link",
                type: "string",
            },
            buttonStyleField,
            {
                name: "secondaryButtonText",
                label: "Secondary Button Text",
                type: "string",
            },
            {
                name: "secondaryButtonLink",
                label: "Secondary Button Link",
                type: "string",
            },
            {
                name: "features",
                label: "Highlights / Bullet Checklist",
                type: "object",
                list: true,
                ui: {
                    itemProps: (item) => ({ label: item?.title || 'Feature' })
                },
                fields: [
                    { name: "title", label: "Title", type: "string" },
                    { name: "description", label: "Sub-description", type: "string" },
                ]
            },
            {
                name: "stats",
                label: "Statistic Badges (e.g. 99% Efficiency, 10+ Years)",
                type: "object",
                list: true,
                ui: {
                    itemProps: (item) => ({ label: `${item?.value || ''} ${item?.label || ''}` })
                },
                fields: [
                    { name: "value", label: "Stat Number (e.g. 100%, 25MW+)", type: "string" },
                    { name: "label", label: "Stat Label (e.g. Solar Installed)", type: "string" },
                ]
            },
            {
                name: "bgTheme",
                label: "Background Theme",
                type: "string",
                options: [
                    { label: "Clean Light (Default)", value: "light" },
                    { label: "Soft Gray Neutral", value: "gray" },
                    { label: "Navy Blue Glass", value: "navy" },
                    { label: "Dark Zinc Elegance", value: "dark" },
                ]
            }
        ]
    },
    {
        name: "projectPortfolio",
        label: "Project Portfolio Block",
        fields: [
            {
                name: "client_name",
                label: "Client / Project Name",
                type: "string",
                required: true,
            },
            {
                name: "location",
                label: "Location",
                type: "string",
            },
            {
                name: "key_metrics",
                label: "Key Metrics & Specifications",
                type: "object",
                list: true,
                ui: {
                    itemProps: (item) => ({ label: `${item?.label || 'Metric'}: ${item?.value || ''}` })
                },
                fields: [
                    {
                        name: "label",
                        label: "Label (e.g. System Size, Commission Date)",
                        type: "string",
                    },
                    {
                        name: "value",
                        label: "Value (e.g. 1.2 MW, Jan 2026)",
                        type: "string",
                    }
                ]
            },
            {
                name: "gallery",
                label: "Image Gallery",
                type: "object",
                list: true,
                ui: {
                    itemProps: (item) => ({ label: item?.image || 'Gallery Image' })
                },
                fields: [
                    {
                        name: "image",
                        label: "Image",
                        type: "image",
                        required: true,
                    }
                ]
            },
            {
                name: "details",
                label: "Project Overview & Details",
                type: "rich-text",
            },
            {
                name: "bgTheme",
                label: "Background Theme / Color",
                type: "string",
                options: [
                    { label: "Dark Industrial Slate (Default)", value: "dark-slate" },
                    { label: "Navy Blue Glass", value: "navy" },
                    { label: "Clean White", value: "light" },
                    { label: "Soft Gray Industrial", value: "gray" },
                ]
            }
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
                name: "bgTheme",
                label: "Background Theme / Color",
                type: "string",
                options: [
                    { label: "Navy Blue Glass (Default)", value: "navy" },
                    { label: "Dark Zinc Elegance", value: "dark-zinc" },
                    { label: "Soft Gray Industrial", value: "gray" },
                    { label: "Clean White", value: "light" },
                ]
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
                        label: "Position / Designation",
                        type: "string",
                        required: true,
                    },
                    {
                        name: "company",
                        label: "Company / Organization Name",
                        type: "string",
                    },
                    {
                        name: "avatar",
                        label: "Customer Photo / Avatar",
                        type: "image",
                    },
                    {
                        name: "rating",
                        label: "Star Rating (1-5)",
                        type: "number",
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
            },
            {
                name: "bgTheme",
                label: "Background Theme / Color",
                type: "string",
                options: [
                    { label: "Clean Light (Default)", value: "light" },
                    { label: "Soft Gray Neutral", value: "gray" },
                    { label: "Navy Blue Glass", value: "navy" },
                    { label: "Dark Zinc Elegance", value: "dark-zinc" },
                ]
            }
        ]
    },
    {
        name: "services",
        label: "Services",
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
            }, {
                name: "backgroundImage",
                label: "Background Image",
                type: "image"
            }
        ]
    },
    {
        name: "modernServices",
        label: "Modern Services Grid Section",
        fields: [
            {
                name: "heading",
                label: "Section Heading",
                type: "string",
            },
            {
                name: "subHeading",
                label: "Section Description / Sub-heading",
                type: "string",
                ui: { component: "textarea" },
            },
            {
                name: "buttonText",
                label: "Header Button Text",
                type: "string",
            },
            {
                name: "buttonLink",
                label: "Header Button Link",
                type: "string",
            },
            buttonStyleField,
            {
                name: "items",
                label: "Services Cards List",
                type: "object",
                list: true,
                ui: {
                    itemProps: (item) => ({ label: item?.title || 'New Service' })
                },
                fields: [
                    {
                        name: "title",
                        label: "Service Title",
                        type: "string",
                    },
                    {
                        name: "description",
                        label: "Short Description",
                        type: "string",
                        ui: { component: "textarea" },
                    },
                    {
                        name: "link",
                        label: "Action Link / URL",
                        type: "string",
                    },
                    {
                        name: "linkText",
                        label: "Action Link Text",
                        type: "string",
                    },
                    {
                        name: "image",
                        label: "Card Cover Image",
                        type: "image",
                        description: "Featured background/header image for this service card",
                    },
                    {
                        name: "iconImage",
                        label: "Custom Icon Image (Upload)",
                        type: "image",
                        description: "Upload your custom icon image (SVG/PNG)",
                    },
                    {
                        name: "iconName",
                        label: "Preset Icon (If no image uploaded)",
                        type: "string",
                        options: [
                            { label: "Google / Ad Ads", value: "google" },
                            { label: "Check Shield / Security", value: "shield" },
                            { label: "Users / Human Resources", value: "users" },
                            { label: "Puzzle / Management", value: "puzzle" },
                            { label: "Wand / Design", value: "design" },
                            { label: "Globe / SEO & Search", value: "globe" },
                            { label: "Sun / Solar Energy", value: "sun" },
                            { label: "Zap / Electricity", value: "zap" },
                        ]
                    },
                    {
                        name: "featured",
                        label: "Featured / Highlighted Card (Dark Style)",
                        type: "boolean",
                    }
                ]
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
                ui: {
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
        label: "All Works",
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
                    },
                    {
                        name: "caption",
                        label: "Caption / Subtitle",
                        type: "string",
                    },
                    {
                        name: "alt",
                        label: "Alt Text",
                        type: "string",
                    }
                ],
            },
        ]
    },
    {
        name: "calculator",
        label: "Calculator",
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
                ui: {
                    component: "textarea"
                }
            }
        ]
    },
    {
        name: "modernCalculator",
        label: "Modern Solar Calculator Block",
        fields: [
            {
                name: "badgeText",
                label: "Pill Tag / Badge",
                type: "string",
            },
            {
                name: "heading",
                label: "Section Heading",
                type: "string",
            },
            {
                name: "subHeading",
                label: "Sub Heading / Description",
                type: "string",
                ui: { component: "textarea" },
            },
            {
                name: "pkrPerKwRate",
                label: "Estimated Cost per kW (PKR)",
                type: "number",
                description: "Used to calculate estimated system investment (Default: Rs. 165,000 per kW)",
            },
            {
                name: "tariffRatePerUnit",
                label: "Electricity Tariff Rate per Unit (PKR)",
                type: "number",
                description: "Used to calculate monthly bill savings (Default: Rs. 55 per unit)",
            },
            {
                name: "bgTheme",
                label: "Background Theme",
                type: "string",
                options: [
                    { label: "Navy Blue Glass (Default)", value: "navy" },
                    { label: "Dark Zinc Elegance", value: "dark-zinc" },
                    { label: "Clean White", value: "light" },
                    { label: "Soft Gray Neutral", value: "gray" },
                ]
            }
        ]
    },
    {
        name: "projectCardsGrid",
        label: "Project Cards Grid",
        fields: [
            {
                name: "heading",
                label: "Section Heading",
                type: "string",
            },
            {
                name: "subHeading",
                label: "Section Sub-heading / Description",
                type: "string",
                ui: { component: "textarea" },
            },
            {
                name: "projects",
                label: "Projects List",
                type: "object",
                list: true,
                ui: {
                    itemProps: (item) => ({ label: item?.title || 'Project Card' })
                },
                fields: [
                    {
                        name: "title",
                        label: "Project Title",
                        type: "string",
                        required: true,
                    },
                    {
                        name: "image",
                        label: "Card Image Thumbnail",
                        type: "image",
                    },
                    {
                        name: "category",
                        label: "Category (e.g., Solar, MEP, HVAC)",
                        type: "string",
                    },
                    {
                        name: "short_description",
                        label: "Short Description",
                        type: "string",
                        ui: { component: "textarea" },
                    },
                    {
                        name: "project_link",
                        label: "Project Details Link / Slug (e.g., /work or /quotation)",
                        type: "string",
                    },
                ]
            },
            {
                name: "bgTheme",
                label: "Background Theme",
                type: "string",
                options: [
                    { label: "Clean Light (Default)", value: "light" },
                    { label: "Soft Gray Neutral", value: "gray" },
                    { label: "Navy Blue Glass", value: "navy" },
                    { label: "Dark Zinc Elegance", value: "dark-zinc" },
                ]
            }
        ]
    },
    {
        name: 'serviceDetailShowcase',
        label: 'Service Detail Showcase',
        fields: [
            {
                type: 'string',
                name: 'badgeText',
                label: 'Badge Tag Text',
                description: 'e.g. PEC C1 Licensed or AEDB Certified',
            },
            {
                type: 'string',
                name: 'subHeading',
                label: 'Sub Heading',
            },
            {
                type: 'string',
                name: 'heading',
                label: 'Main Heading',
            },
            {
                type: 'string',
                name: 'description',
                label: 'Detailed Description',
                ui: { component: 'textarea' },
            },
            {
                type: 'image',
                name: 'mainImage',
                label: 'Primary Image',
            },
            {
                type: 'image',
                name: 'secondaryImage',
                label: 'Secondary / Inset Image',
            },
            {
                type: 'object',
                name: 'keyFeatures',
                label: 'Key Features / Capabilities',
                list: true,
                ui: {
                    itemProps: (item) => ({ label: item?.title || 'Feature' }),
                },
                fields: [
                    { type: 'string', name: 'title', label: 'Feature Title' },
                    { type: 'string', name: 'description', label: 'Feature Short Description' },
                ],
            },
            {
                type: 'object',
                name: 'specifications',
                label: 'Specifications / Metrics Grid',
                list: true,
                ui: {
                    itemProps: (item) => ({ label: `${item?.label || 'Metric'}: ${item?.value || ''}` }),
                },
                fields: [
                    { type: 'string', name: 'label', label: 'Metric Label' },
                    { type: 'string', name: 'value', label: 'Metric Value' },
                ],
            },
            {
                type: 'string',
                name: 'buttonText',
                label: 'Call to Action Button Text',
            },
            {
                type: 'string',
                name: 'buttonLink',
                label: 'Call to Action Link',
            },
            {
                type: 'string',
                name: 'phone',
                label: 'Direct Consultation Phone Number',
            },
        ],
    },
    {
        name: 'certificateCard',
        label: 'Single Certificate Card',
        fields: [
            {
                type: 'string',
                name: 'badgeText',
                label: 'Badge Tag (e.g. Official PEC License)',
            },
            {
                type: 'string',
                name: 'title',
                label: 'Certificate / License Title',
            },
            {
                type: 'string',
                name: 'issuingAuthority',
                label: 'Issuing Authority / Governing Body',
            },
            {
                type: 'string',
                name: 'licenseNumber',
                label: 'Registration / License Number',
            },
            {
                type: 'string',
                name: 'validity',
                label: 'Validity Status (e.g. Active / Valid 2026-2027)',
            },
            {
                type: 'string',
                name: 'description',
                label: 'Certificate Scope & Description',
                ui: { component: 'textarea' },
            },
            {
                type: 'image',
                name: 'certificateImage',
                label: 'Certificate Image / Document Scan',
            },
            {
                type: 'string',
                name: 'layout',
                label: 'Layout Orientation',
                options: [
                    { label: 'Image on Left', value: 'left' },
                    { label: 'Image on Right', value: 'right' },
                ],
            },
            {
                type: 'object',
                name: 'highlights',
                label: 'Compliance Points & Scope',
                list: true,
                ui: {
                    itemProps: (item) => ({ label: item?.text || 'Highlight Point' }),
                },
                fields: [
                    { type: 'string', name: 'text', label: 'Compliance Point' },
                ],
            },
            {
                type: 'string',
                name: 'verificationLink',
                label: 'Official Verification Link (Optional)',
            },
            {
                type: 'string',
                name: 'downloadLink',
                label: 'Download PDF Document Link (Optional)',
            },
        ],
    },
    {
        name: 'contentShowroom',
        label: 'Feature Showroom & Content Block',
        fields: [
            {
                type: 'string',
                name: 'bgTheme',
                label: 'Background & Theme Style',
                options: [
                    { label: 'Executive Dark Glass (Default)', value: 'dark-glass' },
                    { label: 'Clean White Modern', value: 'light-modern' },
                    { label: 'Vibrant Blue Gradient', value: 'gradient-blue' },
                    { label: 'Dark Zinc Sleek', value: 'dark-zinc' },
                ],
            },
            {
                type: 'string',
                name: 'layout',
                label: 'Block Layout Structure',
                options: [
                    { label: 'Simple Picture & Text Side-by-Side (Image Left)', value: 'simple-side-by-side' },
                    { label: 'Simple Picture & Text Side-by-Side (Image Right)', value: 'reversed-side-by-side' },
                    { label: 'Split 2-Column with Floating Media & Badge', value: 'split-media' },
                    { label: 'Centered Master Banner with Hero Media', value: 'centered-banner' },
                    { label: '3-Card Feature Showcase Grid', value: 'feature-grid' },
                    { label: 'Stacked Title Top with 4-Card Grid Below', value: 'stacked-hero-cards' },
                    { label: 'Asymmetric Large Picture Left & Text Details Right', value: 'asymmetric-media-left' },
                    { label: 'Glassmorphic Stats Dashboard & Key Highlights', value: 'glass-dashboard-stats' },
                ],
            },
            {
                type: 'string',
                name: 'badgeText',
                label: 'Top Badge Tag',
                description: 'e.g. Engineering Innovation or Tier-1 Standards',
            },
            {
                type: 'string',
                name: 'subHeading',
                label: 'Sub Heading',
            },
            {
                type: 'string',
                name: 'heading',
                label: 'Main Heading',
            },
            {
                type: 'string',
                name: 'description',
                label: 'Detailed Content Description',
                ui: { component: 'textarea' },
            },
            {
                type: 'image',
                name: 'mainImage',
                label: 'Primary Media Image',
            },
            {
                type: 'image',
                name: 'backgroundVideo',
                label: 'Background Video File (mp4/webm)',
            },
            {
                type: 'object',
                name: 'features',
                label: 'Feature Highlights List',
                list: true,
                ui: {
                    itemProps: (item) => ({ label: item?.title || 'Feature' }),
                },
                fields: [
                    { type: 'string', name: 'title', label: 'Feature Title' },
                    { type: 'string', name: 'description', label: 'Feature Short Description' },
                    { type: 'string', name: 'highlightValue', label: 'Highlight Tag (e.g. 100% Efficiency)' },
                ],
            },
            {
                type: 'object',
                name: 'stats',
                label: 'Metrics & Stats Badges',
                list: true,
                ui: {
                    itemProps: (item) => ({ label: `${item?.value || ''} - ${item?.label || 'Stat'}` }),
                },
                fields: [
                    { type: 'string', name: 'value', label: 'Metric Value (e.g. 50+ MW)' },
                    { type: 'string', name: 'label', label: 'Metric Label (e.g. Solar Installed)' },
                ],
            },
            {
                type: 'string',
                name: 'buttonText',
                label: 'Primary Button Text',
            },
            {
                type: 'string',
                name: 'buttonLink',
                label: 'Primary Button Link',
            },
            buttonStyleField,
            {
                type: 'string',
                name: 'secondaryButtonText',
                label: 'Secondary Button Text',
            },
            {
                type: 'string',
                name: 'secondaryButtonLink',
                label: 'Secondary Button Link',
            },
        ],
    },
    {
        name: 'locationBlock',
        label: 'Official Location & Google Map Block',
        fields: [
            {
                type: 'string',
                name: 'heading',
                label: 'Section Heading',
            },
            {
                type: 'string',
                name: 'subHeading',
                label: 'Sub Heading / Tagline',
            },
            {
                type: 'string',
                name: 'companyName',
                label: 'Company Name',
            },
            {
                type: 'string',
                name: 'address',
                label: 'Full Physical Address',
                ui: { component: 'textarea' },
            },
            {
                type: 'string',
                name: 'phone',
                label: 'Landline / Main Phone',
            },
            {
                type: 'string',
                name: 'mobilePhone',
                label: 'Mobile / Direct Consult Phone',
            },
            {
                type: 'string',
                name: 'email',
                label: 'Official Email Address',
            },
            {
                type: 'string',
                name: 'website',
                label: 'Official Website URL',
            },
            {
                type: 'string',
                name: 'operatingHours',
                label: 'Operating Hours Narrative',
            },
            {
                type: 'string',
                name: 'mapEmbedUrl',
                label: 'Google Maps Embed Source URL',
            },
        ],
    },
]

export default defineConfig({
    branch: 'master',
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,
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
                        name: "coverImage",
                        label: "Cover Image",
                        type: "image",
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
                        name: "description",
                        label: "Description",
                        type: "string",
                        required: true,
                    },
                    {
                        name: "coverImage",
                        label: "Cover Image",
                        type: "image",
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
