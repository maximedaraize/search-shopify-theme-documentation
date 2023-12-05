import { DocType } from "./types/types";

export const docList: DocType[] = [
  {
    section: {
      sectionTitle: "Basics",
      items: [
        {
          title: "Handles",
          url: "https://shopify.dev/docs/api/liquid/basics#handles",
          keyword: ['basics'],
          category: "Basics",
          description:
            "Objects that represent store resources, such as products, collections, articles, and blogs, have handles for identifying an individual resource. The handle is used to build the URL for the resource, or to return properties for the resource",
        },
        {
          title: "Operators",
          url: "https://shopify.dev/docs/api/liquid/basics#operators",
          keyword: ['basics'],
          category: "Basics",
          description: "Liquid supports basic logical and comparison operators for use with conditional tags.",
        },
        {
          title: "Types",
          url: "https://shopify.dev/docs/api/liquid/basics#types",
          keyword: ['basics'],
          category: "Basics",
          description: "Liquid supports the following types of data: `String`, `Number`, `Boolean`, `Nil`, `Array`, and `Empty`.",
        },
        {
          title: "Thruty and falsy",
          url: "https://shopify.dev/docs/api/liquid/basics#truthy-and-falsy",
          keyword: ['basics'],
          category: "Basics",
          description: 'All data types must return either `true` or `false`. Those which return `true` by default are called truthy. Those that return `false` by default are called falsy.'
        },
        {
          title: "Whitespace control",
          keyword: ['basics'],
          category: "Basics",
          url: "https://shopify.dev/docs/api/liquid/basics#whitespace-control",
          description: "Even if it doesn't output text, any line of Liquid outputs a line in your rendered content. By including hyphens in your Liquid tag, you can strip any whitespace that your Liquid generates when rendered." + "\n\n" + "f you want to remove whitespace on only one side of the Liquid tag, then you can include the hyphen on either the opening or closing tag."
        },
      ],
    },
  },
  {
    section: {
      sectionTitle: "Tags: Conditional",
      items: [
        {
          title: "If",
          url: "https://shopify.dev/docs/api/liquid/tags/if",
          keyword: ['tags', 'conditional'],
          category: "Tags",
          subcategory: "Conditional",
          description: "Renders an expression if a specific condition is `true`."
        },
        {
          title: "Else",
          url: "https://shopify.dev/docs/api/liquid/tags/else",
          keyword: ['tags', 'conditional'],
          category: "Tags",
          subcategory: "Conditional",
          description: "Allows you to specify a default expression to execute when no other condition is met. \n\n You can use the `else` tag with the following tags:  \n\n - `case`  \n\n - `if`  \n\n - `unless`"
        },
        {
          title: "Unless",
          url: "https://shopify.dev/docs/api/liquid/tags/unless",
          keyword: ['tags', 'conditional'],
          category: "Tags",
          subcategory: "Conditional",
          description: "Renders an expression unless a specific condition is `true`. \n\n Similar to the `if` tag, you can use `elsif` to add more conditions to an `unless` tag."
        },
        {
          title: "Case",
          url: "https://shopify.dev/docs/api/liquid/tags/case",
          keyword: ['tags', 'conditional'],
          category: "Tags",
          subcategory: "Conditional",
          description: "Renders a specific expression depending on the value of a specific variable."
        },
      ]
    }
  },
  {
    section: {
      sectionTitle: "Tags: HTML",
      items: [
        {
          title: "Form",
          url: "https://shopify.dev/docs/api/liquid/tags/form",
          keyword: ['tags', 'html'],
          category: "Tags",
          subcategory: "HTML",
          description: "Generates an HTML `<form>` tag, including any required `<input>` tags to submit the form to a specific endpoint. \n\n Because there are many different form types available in Shopify themes, the form tag requires a type. Depending on the form type, an additional parameter might be required, like:  \n\n - `activate_customer_password` \n\n - `cart`  \n\n - `contact` \n\n - `create_customer` \n\n - `currency`, \n\n - `new_comment`"
        },
        {
          title: "Style",
          url: "https://shopify.dev/docs/api/liquid/tags/style",
          keyword: ['tags', 'html'],
          category: "Tags",
          subcategory: "HTML",
          description: "Generates an HTML `<style>` tag with an attribute of data-shopify. \n\n If you reference `color settings` inside `style` tags, then the associated CSS rules will update as the setting is changed in the theme editor, without a page refresh."
        },

      ]
    }
  },
  {
    section: {
      sectionTitle: "Tags: Iteration",
      items: [
        {
          title: "For",
          url: "https://shopify.dev/docs/api/liquid/tags/for",
          keyword: ['tags', 'iteration'],
          category: "Tags",
          subcategory: "Iteration",
          description: `Renders an expression for every item in an array. You can do a maximum of 50 iterations with a \`for\` loop. If you need to iterate over more than 50 items, then use the \`paginate tag\` to split the items over multiple pages. 

    {% for product in collection.products -%}
      {{ product.title }}
    {%- endfor %}

        `
        },
        {
          title: "Else",
          url: "https://shopify.dev/docs/api/liquid/tags/else",
          keyword: ['tags', 'iteration'],
          category: "Tags",
          subcategory: "Iteration",
          description: `Allows you to specify a default expression to execute when a for loop has zero length. 

    {% for variable in array %}
      first_expression
    {% else %}
      second_expression
    {% endfor %}

        `
        },
        {
          title: "Break",
          url: "https://shopify.dev/docs/api/liquid/tags/break",
          keyword: ['tags', 'iteration'],
          category: "Tags",
          subcategory: "Iteration",
          description: `Stops a for loop from iterating. 

    {% for i in (1..5) -%}
      {%- if i == 4 -%}
        {% break %}
      {%- else -%}
        {{ i }}
      {%- endif -%}
    {%- endfor %}
        
        `
        },
        {
          title: "Continue",
          url: "https://shopify.dev/docs/api/liquid/tags/continue",
          keyword: ['tags', 'iteration'],
          category: "Tags",
          subcategory: "Iteration",
          description: `Causes a for loop to skip to the next iteration.

    {% for i in (1..5) -%}
      {%- if i == 4 -%}
        {% continue %}
      {%- else -%}
        {{ i }}
      {%- endif -%}
    {%- endfor %}
        
        `
        },
        {
          title: "Cycle",
          url: "https://shopify.dev/docs/api/liquid/tags/cycle",
          keyword: ['tags', 'iteration'],
          category: "Tags",
          subcategory: "Iteration",
          description: `Loops through a group of strings and outputs them one at a time for each iteration of a for loop. The \`cycle\` tag must be used inside a \`for\` loop.

    {% for i in (1..4) -%}
      {% cycle 'one', 'two', 'three' %}
    {%- endfor %}
        
        `
        },
        {
          title: "Tablerow",
          url: "https://shopify.dev/docs/api/liquid/tags/tablerow",
          keyword: ['tags', 'iteration'],
          category: "Tags",
          subcategory: "Iteration",
          description: `Generates HTML table rows for every item in an array. The tablerow tag must be wrapped in HTML \`<table>\` and \`</table>\` tags.

    {% tablerow variable in array %}
      expression
    {% endtablerow %}
        
        `
        },
        {
          title: "Paginate",
          url: "https://shopify.dev/docs/api/liquid/tags/paginate",
          keyword: ['tags', 'iteration'],
          category: "Tags",
          subcategory: "Iteration",
          description: `Splits an array's items across multiple pages. Because \`for loops\` are limited to 50 iterations per page, you need to use the \`paginate\` tag to iterate over an array that has more than 50 items. The following arrays can be paginated: \n\n - \`all_products\` \n\n - \`article.comments\` \n\n - \`blog.articles\` \n\n - \`collections\` \n\n - \`collection.products\` \n\n - \`customer.addresses\` \n\n - \`customer.orders\` \n\n - \`pages\` \n\n - \`search.results\` \n\n - \`collection_list settings\` \n\n - \`product_list settings\` \n\n Within the \`paginate\` tag, you have access to the \`paginate object\`. You can use this object, or the \`default_pagination\` filter, to build page navigation.

    {% paginate array by page_size %}
      {% for item in array %}
        forloop_content
      {% endfor %}
    {% endpaginate %}
        
        `
        },

      ]
    }
  },
  {
    section: {
      sectionTitle: "Tags: Syntax",
      items: [
        {
          title: "Comment",
          url: "https://shopify.dev/docs/api/liquid/tags/comment",
          keyword: ['tags', 'syntax'],
          category: "Tags",
          subcategory: "Syntax",
          description: `Prevents an expression from being rendered or output. Any text inside \`comment\` tags won't be output, and any Liquid code will be parsed, but not executed. 

    {% comment %}
      content
    {% endcomment %}

        `
        },
        {
          title: "Echo",
          url: "https://shopify.dev/docs/api/liquid/tags/echo",
          keyword: ['tags', 'syntax'],
          category: "Tags",
          subcategory: "Syntax",
          description: `Outputs an expression. Using the \`echo\` tag is the same as wrapping an expression in curly brackets (\`{{ and }}\`). However, unlike the curly bracket method, you can use the echo tag inside liquid tags. 

    {% echo product.title %}

    {% liquid
      echo product.price | money
    %}

        `
        },
        {
          title: "Liquid",
          url: "https://shopify.dev/docs/api/liquid/tags/liquid",
          keyword: ['tags', 'syntax'],
          category: "Tags",
          subcategory: "Syntax",
          description: `Allows you to have a block of Liquid without delimeters on each tag. Because the tags don't have delimeters, each tag needs to be on its own line. 

    {% liquid
      # Show a message that's customized to the product type

      assign product_type = product.type | downcase
      assign message = ''

      case product_type
        when 'health'
          assign message = 'This is a health potion!'
        when 'love'
          assign message = 'This is a love potion!'
        else
          assign message = 'This is a potion!'
      endcase

      echo message
    %}

        `
        },
        {
          title: "Raw",
          url: "https://shopify.dev/docs/api/liquid/tags/raw",
          keyword: ['tags', 'syntax'],
          category: "Tags",
          subcategory: "Syntax",
          description: `Outputs any Liquid code as text instead of rendering it.

    {% raw %}
      {{ 2 | plus: 2 }} equals 4.
    {% endraw %}

        `
        },

      ]
    }
  },
  {
    section: {
      sectionTitle: "Tags: Theme",
      items: [
        {
          title: "Include",
          url: "https://shopify.dev/docs/api/liquid/tags/include",
          isDeprecated: true,
          keyword: ['tags', 'theme', 'deprecated'],
          category: "Tags",
          subcategory: "Theme",
          description: `Renders a snippet. Inside the snippet, you can access and alter variables that are created outside of the snippet.\n\n  \n\n _"Deprecated because the way that variables are handled reduces performance and makes code harder to both read and maintain"._ \n\n The \`include\` tag has been replaced by \`render\`.

    {% include 'filename' %}

        `
        },
        {
          title: "Javascript",
          url: "https://shopify.dev/docs/api/liquid/tags/javascript",
          keyword: ['tags', 'theme'],
          category: "Tags",
          subcategory: "Theme",
          description: `JavaScript code included in a \`section\` file. \n\n You need to use these tags only if your section or app block is meant to be installed on multiple themes or stores. Otherwise, you should include the JavaScript that your section needs in your theme's \`assets\` directory. Each section or app block can have only one \`{% javascript %}\` tag. \n\n Liquid isn't rendered inside of \`{% javascript %}\` tags. Including Liquid code can cause syntax errors.

    {% javascript %}
      javascript_code
    {% endjavascript %}

        `
        },
        {
          title: "Layout",
          url: "https://shopify.dev/docs/api/liquid/tags/layout",
          keyword: ['tags', 'theme'],
          category: "Tags",
          subcategory: "Theme",
          description: `Specify which \`layout\` to use.

    {% layout 'full-width' %}
    {% layout none %}

        `
        },
        {
          title: "Render",
          url: "https://shopify.dev/docs/api/liquid/tags/render",
          keyword: ['tags', 'theme'],
          category: "Tags",
          subcategory: "Theme",
          description: `Renders a \`snippet\` or \`app\` block. \n\n Inside snippets and app blocks, you can't directly access variables that are created outside of the snippet or app block. However, you can specify variables as parameters to pass outside variables to snippets. \n\n While you can't directly access created variables, you can access global objects, as well as any objects that are directly accessible outside the snippet or app block. For example, a snippet or app block inside the \`product template\` can access the \`product object\`, and a snippet or app block inside a \`section\` can access the \`section object\`. \n\n Outside a snippet or app block, you can't access variables created inside the snippet or app block.

    {% render 'filename' %}

        `
        },
        {
          title: "Section",
          url: "https://shopify.dev/docs/api/liquid/tags/section",
          keyword: ['tags', 'theme'],
          category: "Tags",
          subcategory: "Theme",
          description: `Renders a section. \n\n Rendering a \`section\` with the section tag renders a section statically. To learn more about sections and how to use them in your theme, refer to \`Render a section\`.


    {% section 'header' %}

        `
        },
        {
          title: "Sections",
          url: "https://shopify.dev/docs/api/liquid/tags/sections",
          keyword: ['tags', 'theme'],
          category: "Tags",
          subcategory: "Theme",
          description: `Renders a section group. \n\n Use this tag to render section groups as part of the theme's \`layout\` content. Place the \`sections\` tag where you want to render it in the layout. \n\n To learn more about section groups and how to use them in your theme, refer to \`Section groups\`.


    {% sections 'name' %}

        `
        },
        {
          title: "Stylesheet",
          url: "https://shopify.dev/docs/api/liquid/tags/stylesheet",
          keyword: ['tags', 'theme'],
          category: "Tags",
          subcategory: "Theme",
          description: `CSS styles included in a \`section\` file. \n\n You need to use these tags only if your section or app block is meant to be installed on multiple themes or stores. Otherwise, you should include the CSS styles that your section needs in your theme's \`assets\` directory. Each section or app block can have only one \`{% stylesheet %}\` tag. \n\n To learn more about how section-specific CSS is loaded and run, refer to the documentation for \`section\`s.


    {% stylesheet %}
      css_styles
    {% endstylesheet %}

        `
        },
        

      ]
    }
  },
    {
    section: {
      sectionTitle: "Tags: Variable",
      items: [
        {
          title: "Assign",
          url: "https://shopify.dev/docs/api/liquid/tags/assign",
          keyword: ['tags', 'variable'],
          category: "Tags",
          subcategory: "Variable",
          description: `Creates a new variable. \n\n You can create variables of any \`basic type\`, \`object\`, or object property.

    {%- assign product_title = product.title | upcase -%}

    {{ product_title }}

        `
        },
        {
          title: "Capture",
          url: "https://shopify.dev/docs/api/liquid/tags/capture",
          keyword: ['tags', 'variable'],
          category: "Tags",
          subcategory: "Variable",
          description: `Creates a new variable with a string value. \n\n You can create complex strings with Liquid logic and variables.

    {%- assign up_title = product.title | upcase -%}
    {%- assign down_title = product.title | downcase -%}
    {%- assign show_up_title = true -%}

    {%- capture title -%}
      {% if show_up_title -%}
        Upcase title: {{ up_title }}
      {%- else -%}
        Downcase title: {{ down_title }}
      {%- endif %}
    {%- endcapture %}

    {{ title }}

        `
        },
        {
          title: "Decrement",
          url: "https://shopify.dev/docs/api/liquid/tags/decrement",
          keyword: ['tags', 'variable'],
          category: "Tags",
          subcategory: "Variable",
          description: `Creates a new variable, with a default value of -1, that's decreased by 1 with each subsequent call. \n\n Variables that are declared with \`decrement\` are unique to the \`layout\`, \`template\`, or \`section\` file that they're created in. However, the variable is shared across \`snippets\` included in the file. \n\n Similarly, variables that are created with \`decrement\` are independent from those created with \`assign\` and \`capture\`. However, decrement and \`increment\` share variables.

    {% decrement variable_name %}

        `
        },
        {
          title: "Increment",
          url: "https://shopify.dev/docs/api/liquid/tags/increment",
          keyword: ['tags', 'variable'],
          category: "Tags",
          subcategory: "Variable",
          description: `Creates a new variable, with a default value of 0, that's increased by 1 with each subsequent call. \n\n Variables that are declared with \`increment\` are unique to the \`layout\`, \`template\`, or \`section\` file that they're created in. However, the variable is shared across \`snippets\` included in the file. \n\n Similarly, variables that are created with \`increment\` are independent from those created with \`assign\` and \`capture\`. However, \`increment\` and \`decrement\` share variables.

    {% increment variable_name %}

        `
        },
        
        

      ]
    }
  },



  {
    section: {
      sectionTitle: "Filters",
      items: [
        {
          title: "Array",
          url: "https://shopify.dev/docs/api/liquid/filters/array-filters",
        },
        {
          title: "Cart",
          url: "https://shopify.dev/docs/api/liquid/filters/cart-filters",
        },
        {
          title: "Collection",
          url: "https://shopify.dev/docs/api/liquid/filters/collection-filters",
        },
        {
          title: "Color",
          url: "https://shopify.dev/docs/api/liquid/filters/color-filters",
        },
        {
          title: "Customer",
          url: "https://shopify.dev/docs/api/liquid/filters/customer-filters",
        },
        {
          title: "Default",
          url: "https://shopify.dev/docs/api/liquid/filters/default-filters",
        },
        {
          title: "Font",
          url: "https://shopify.dev/docs/api/liquid/filters/font-filters",
        },
        {
          title: "Format",
          url: "https://shopify.dev/docs/api/liquid/tags/variable-tags",
        },
        {
          title: "HTML",
          url: "https://shopify.dev/docs/api/liquid/filters/html-filters",
        },
        {
          title: "Hosted Files",
          url: "https://shopify.dev/docs/api/liquid/filters/hosted_file-filters",
        },
        {
          title: "Localization",
          url: "https://shopify.dev/docs/api/liquid/filters/localization-filters",
        },
        {
          title: "Math",
          url: "https://shopify.dev/docs/api/liquid/filters/math-filters",
        },
        {
          title: "Media",
          url: "https://shopify.dev/docs/api/liquid/filters/media-filters",
        },
        {
          title: "Metafield",
          url: "https://shopify.dev/docs/api/liquid/filters/metafield-filters",
        },
        {
          title: "Money",
          url: "https://shopify.dev/docs/api/liquid/filters/money-filters",
        },
        {
          title: "Payment",
          url: "https://shopify.dev/docs/api/liquid/filters/payment-filters",
        },
        {
          title: "String",
          url: "https://shopify.dev/docs/api/liquid/filters/string-filters",
        },
        {
          title: "Tag",
          url: "https://shopify.dev/docs/api/liquid/filters/tag-filters",
        },
      ],
    },
  },
  {
    section: {
      sectionTitle: "Objects",
      items: [
        {
          title: "additional_checkout_buttons",
          url: "https://shopify.dev/docs/api/liquid/objects/additional_checkout_buttons",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `Returns \`true\` if a store has any payment providers with offsite checkouts, such as PayPal Express Checkout. \n\n Use \`additional_checkout_buttons\` to check whether these payment providers exist, and \`content_for_additional_checkout_buttons\` to show the associated checkout buttons. To learn more about how to use these objects, refer to \`Accelerated checkout\`.
          
    {% if additional_checkout_buttons %}
      {{ content_for_additional_checkout_buttons }}
    {% endif %}
          
          `
        },
        {
          title: "address",
          url: "https://shopify.dev/docs/api/liquid/objects/address",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: "address1", type: "string" },
            { name: "address2", type: "string" },
            { name: "city", type: "string" },
            { name: "company", type: "string" },
            { name: "country", type: "country" },
            { name: "country_code", type: "string" },
            { name: "country_name", type: "string" },
            { name: "first_name", type: "string" },
            { name: "id", type: "number"},
            { name: "last_name", type: "string" },
            { name: "name", type: "string" },
            { name: "phone", type: "string" },
            { name: "province", type: "string" },
            { name: "province_code", type: "string" },
            { name: "street", type: "string" },
            { name: "summary", type: "string" },
            { name: "url", type: "string" },
            { name: "zip", type: "string" },
          ],
          description: `An address, such as a customer address or order shipping address. \n\n
          
    {
      "address1": "150 Elgin Street",
      "address2": "8th floor",
      "city": "Ottawa",
      "company": "Polina's Potions, LLC",
      "country": {},
      "country_code": "CA",
      "first_name": null,
      "id": 56174706753,
      "last_name": null,
      "name": "",
      "phone": "416-123-1234",
      "province": "Ontario",
      "province_code": "ON",
      "street": "150 Elgin Street, 8th floor",
      "summary": "150 Elgin Street, 8th floor, Ottawa, Ontario, Canada",
      "url": "/account/addresses/56174706753",
      "zip": "K2P 1L4"
    }

          `
        },
        {
          title: "all_country_option_tags",
          url: "https://shopify.dev/docs/api/liquid/objects/all_country_option_tags",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `Creates an \`<option>\` tag for each country. \n\n An attribute called \`data-provinces\` is set for each \`<option>\`, and contains a JSON-encoded array of the country or region's subregions. If a country doesn't have any subregions, then an empty array is set for its \`data-provinces\` attribute. \n\n You can wrap the \`all_country_option_tags\` object in \`<select>\` tags to build a country option selector. 

    <select name="country">
      {{ all_country_option_tags }}
    </select>
          
          `
        },
        {
          title: "all_products",
          url: "https://shopify.dev/docs/api/liquid/objects/all_products",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `All of the products on a store. \n\n The \`all_products\` object has a limit of 20 unique handles per page. If you want more than 20 products, then consider using a collection instead. \n\n You can use \`all_products\` to access a product by its \`handle\`. If the product isn't found, then \`empty\` is returned.
          
    {{ all_products['love-potion'].title }}     
          `
        },
        {
          title: "app",
          url: "https://shopify.dev/docs/api/liquid/objects/app",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `An app. This object is usually used to access app-specific information for use with \`theme app extensions\`.`
        },
        {
          title: "article",
          url: "https://shopify.dev/docs/api/liquid/objects/article",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'author', type: 'string' },
            { name: 'comment_post_url', type: 'string' },
            { name: 'comments', type: 'array of comment' },
            { name: 'comments_count', type: 'number' },
            { name: 'comments_enabled', type: 'boolean' },
            { name: 'content', type: 'string' },
            { name: 'created_at', type: 'string' },
            { name: 'excerpt', type: 'string' },
            { name: 'excerpt_or_content', type: 'string' },
            { name: 'handle', type: 'string' },
            { name: 'id', type: 'string' },
            { name: 'image', type: 'image' },
            { name: 'metafields', type: '' },
            { name: 'moderated?', type: 'boolean' },
            { name: 'published_at', type: 'string' },
            { name: 'tags', type: 'array of string' },
            { name: 'template_suffix', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'updated_at', type: 'string' },
            { name: 'url', type: 'string' },
            { name: 'user', type: 'string' },
          ],
          description: `An article, or \`blog post\`, in a blog. \n\n
          
    {
      "author": "Polina Waters",
      "comment_post_url": "/blogs/potion-notions/how-to-tell-if-you-have-run-out-of-invisibility-potion/comments",
      "comments": [],
      "comments_count": 1,
      "comments_enabled?": true,
      "content": "<p>We've all had this problem before: we peek into the potions vault to determine which potions we are running low on, and the invisibility potion bottle looks completely empty.</p>",
      "created_at": "2022-04-14 16:56:02 -0400",
      "excerpt": "And where to buy <strong>more</strong>!",
      "excerpt_or_content": "And where to buy <strong>more</strong>!",
      "handle": "potion-notions/how-to-tell-if-you-have-run-out-of-invisibility-potion",
      "id": 556510085185,
      "image": {},
      "metafields": {},
      "moderated?": true,
      "published_at": "2022-04-14 16:56:02 -0400",
      "tags": [],
      "template_suffix": "",
      "title": "How to tell if you're out of invisibility potion",
      "updated_at": "2022-06-04 19:27:33 -0400",
      "url": {},
      "user": {}
    }
          `
        },
        {
          title: "articles",
          url: "https://shopify.dev/docs/api/liquid/objects/articles",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `All of the articles across the blogs in the store. \n\n You can use \`articles\` to access an article by its handle.
          
    {% assign article = articles['potion-notions/new-potions-for-spring'] %}
    {{ article.title | link_to: article.url }}
          
          `
        },
        {
          title: "block",
          url: "https://shopify.dev/docs/api/liquid/objects/block",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'id', type: 'string' },
            { name: 'settings', type: '' },
            { name: 'shopify_attributes', type: 'string' },
            { name: 'type', type: 'string' },
          ],
          description: `The content and settings of a \`section block\`. \n\n Sections and blocks are reusable modules of content that make up \`templates\`. \n\n To learn more about using blocks, refer to the \`Shopify Partners blog\`.

    {
      "id": "column1",
      "settings": "array",
      "shopify_attributes": "data-shopify-editor-block=\\"{\\"id\\":\\"column1\\",\\"type\\":\\"column\\"}\\"",
      "type": "column"
    }
          `
        },
        {
          title: "blog",
          url: "https://shopify.dev/docs/api/liquid/objects/blog",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'all_tags', type: 'array of string' },
            { name: 'articles', type: 'array of article' },
            { name: 'articles_count', type: 'number' },
            { name: 'comments_enabled?', type: 'boolean' },
            { name: 'handle', type: 'string' },
            { name: 'id', type: 'number' },
            { name: 'metafields', type: 'array of metafield' },
            { name: 'moderated?', type: 'boolean' },
            { name: 'next_article', type: 'article' },
            { name: 'previous_article', type: 'article' },
            { name: 'tags', type: 'array of string' },
            { name: 'template_suffix', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'url', type: 'string' },
          ],
          description: `Information about a specific \`blog\` in the store.

    {
      "all_tags": [],
      "articles": [],
      "articles_count": 3,
      "comments_enabled?": true,
      "handle": "potion-notions",
      "id": 78580613185,
      "metafields": {},
      "moderated?": true,
      "next_article": {},
      "previous_article": {},
      "tags": [],
      "template_suffix": "",
      "title": "Potion Notions",
      "url": "/blogs/potion-notions"
    }
          
          `
        },
        {
          title: "blogs",
          url: "https://shopify.dev/docs/api/liquid/objects/blogs",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `All of the blogs in the store. \n\n You can use \`blogs\` to access a blog by its \`handle\`.
          
    {% for article in blogs.potion-notions.articles %}
      {{- article.title | link_to: article.url }}
    {% endfor %}
          
          `
        },
        {
          title: "brand",
          url: "https://shopify.dev/docs/api/liquid/objects/brand",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'colors', type: '' },
            { name: 'cover_image', type: 'image' },
            { name: 'favicon_url', type: 'image' },
            { name: 'logo', type: 'image' },
            { name: 'metafields', type: '' },
            { name: 'short_description', type: 'string' },
            { name: 'slogan', type: 'string' },
            { name: 'square_logo', type: 'image'}
          ],
          description: `The \`brand assets\` for the store. 

    {
      "colors": {},
      "cover_image": {},
      "favicon_url": {},
      "logo": {},
      "metafields": {},
      "short_description": "Canada's foremost retailer for potions and potion accessories. Try one of our award-winning artisanal potions, or find the supplies to make your own!",
      "slogan": "Save the toil and trouble!",
      "square_logo": {}
    }     
          
          `
        },
        {
          title: "brand_color",
          url: "https://shopify.dev/docs/api/liquid/objects/brand_color",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `The colors defined as part of a store's brand assets. To access a brand color, specify the following: \n\n - The brand color group: either \`primary\` or \`secondary\` \n\n - The color role: Whether the color is a \`background\` or \`foreground\` (contrasting) color \n\n - The 0-based index of the color within the group and role

    \`\`\`
    {{ shop.brand.colors.primary[0].background }}
    {{ shop.brand.colors.primary[0].foreground }}
    {{ shop.brand.colors.secondary[0].background }}
    {{ shop.brand.colors.secondary[1].background }}
    {{ shop.brand.colors.secondary[0].foreground }}
    \`\`\`     
          `
        },
        {
          title: "canonical_url",
          url: "https://shopify.dev/docs/api/liquid/objects/canonical_url",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `The canonical URL for the current page. To learn about canonical URLs, refer to \`Google's documentation\`.`
        },
        {
          title: "cart",
          url: "https://shopify.dev/docs/api/liquid/objects/cart",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'attributes', type: '-' },
            { name: 'cart_level_discount_applications', type: 'array of discount_application' },
            { name: 'currency', type: '-' },
            { name: 'discount_applications', type: 'array of discount_application' },
            { name: 'empty?', type: 'boolean' },
            { name: 'item_count', type: 'number' },
            { name: 'items', type: 'array of line_item' },
            {name: 'items_subtotal_price', type: 'number'},
            { name: 'note', type: 'string' },
            { name: 'original_total_price', type: 'number' },
            { name: 'requires_shipping', type: 'boolean' },
            { name: 'taxes_included', type: 'boolean' },
            { name: 'total_discount', type: 'number' },
            { name: 'total_price', type: 'number' },
            { name: 'total_weight', type: 'number' },
          ],
          objectPropertiesDeprecated: [
            { name: 'discounts', type: 'array of discount'},
          ],
          description: `A customer’s cart.
          
    {
      "attributes": {},
      "cart_level_discount_applications": [],
      "checkout_charge_amount": "380.25",
      "currency": {},
      "discount_applications": [],
      "discounts": [],
      "empty?": false,
      "item_count": 2,
      "items": [],
      "items_subtotal_price": "422.49",
      "note": "Hello this is a note",
      "original_total_price": "424.99",
      "requires_shipping": true,
      "taxes_included": false,
      "total_discount": "44.74",
      "total_price": "380.25",
      "total_weight": 0
    }
          
          `
        },
        {
          title: "checkout",
          url: "https://shopify.dev/docs/api/liquid/objects/checkout",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'applied_gift_cards', type: 'array of gift_card' },
            { name: 'attributes', type: '-' },
            { name: 'billing_address', type: 'address' },
            { name: 'buyer_accepts_marketing', type: 'boolean' },
            { name: 'cart_level_discount_applications', type: 'array of discount_application' },
            { name: 'currency', type: 'string' },
            { name: 'customer', type: 'customer' },
            { name: 'discount_applications', type: 'array of discount_application' },
            { name: 'discounts_amount', type: 'array of discount_application' },
            { name: 'discounts_savings', type: 'array of discount_application' },
            { name: 'email', type: 'string' },
            { name: 'gift_cards_amount', type: 'number' },
            { name: 'id', type: 'number' },
            { name: 'item_count', type: 'number' },
            { name: 'line_items', type: 'array of line_item' },
            { name: 'line_items_subtotal_price', type: 'number' },
            { name: 'name', type: 'string' },
            { name: 'note', type: 'string' },
            { name: 'order', type: 'order' },
            { name: 'order_id', type: 'string' },
            { name: 'order_name', type: 'string' },
            { name: 'order_number', type: 'string' },
            { name: 'requires_shipping', type: 'boolean' },
            { name: 'shipping_address', type: 'address' },
            { name: 'shipping_method', type: 'shipping_method' },
            { name: 'shipping_price', type: 'number' },
            { name: 'tax_lines', type: 'array of tax_line' },
            { name: 'tax_price', type: 'number' },
            { name: 'total_price', type: 'number' },
            { name: 'transactions', type: 'array of transaction'}
          ],
          objectPropertiesDeprecated: [
            {name: 'cancelled', type: 'boolean'},
            { name: 'discount', type: 'discount' },
            { name: 'discounts', type: 'array of discount' },
            { name: 'financial_status', type: 'string'},
            { name: 'fulfilled_at', type: 'string' },
            { name: 'fulfilled_line_items', type: 'array of line item' },
            { name: 'fulfilled_status', type: 'string' },
            { name: 'unavailable_line_items', type: 'array of line item' },
            {name: 'unfulfilled_line_items', type: 'array of line item' },

          ],
          description: `A customer's checkout. \n\n \`⚠️ Deprecated\` \n\n The \`checkout\` object will be deprecated for the Information, Shipping, and Payment pages on August 13, 2024. Merchants who have customized these pages using \`checkout.liquid\` need to upgrade to Checkout Extensibility before August 13, 2024.
          
    {
      "applied_gift_cards": [],
      "attributes": {},
      "billing_address": {},
      "buyer_accepts_marketing": false,
      "cart_level_discount_applications": [],
      "currency": "CAD",
      "customer": {},
      "discount_applications": [],
      "discounts_amount": 4224,
      "discounts_savings": -4224,
      "email": "cornelius.potionmaker@gmail.com",
      "gift_cards_amount": 0,
      "id": 29944051400769,
      "line_items": [],
      "line_items_subtotal_price": 42249,
      "name": "#29944051400769",
      "note": null,
      "order": null,
      "order_id": null,
      "order_name": "#29944051400769",
      "order_number": "#29944051400769",
      "requires_shipping": true,
      "shipping_address": {},
      "shipping_method": {},
      "shipping_price": 0,
      "tax_lines": [],
      "tax_price": 0,
      "total_price": 38025,
      "transactions": []
    }
          
          
          `
        },
        {
          title: "collection",
          url: "https://shopify.dev/docs/api/liquid/objects/collection",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'all_products_count', type: 'number' },
            { name: 'all_tags', type: 'array of string' },
            { name: 'all_types', type: 'array of string' },
            { name: 'all_vendors', type: 'array of string' },
            { name: 'current_type', type: 'string' },
            { name: 'current_vendor', type: 'string' },
            { name: 'default_sort_by', type: 'string from a set of values' },
            { name: 'description', type: 'string' },
            { name: 'featured_image', type: 'image' },
            { name: 'filters', type: 'array of filter' },
            { name: 'handle', type: 'string' },
            { name: 'id', type: 'number' },
            { name: 'image', type: 'image' },
            { name: 'metafields', type: 'array of metafields' },
            { name: 'next_product', type: 'product' },
            { name: 'previous_product', type: 'product' },
            { name: 'products', type: 'product' },
            { name: 'products_count', type: 'number' },
            { name: 'published_at', type: 'string' },
            { name: 'sort_by', type: 'string' },
            { name: 'sort_options', type: 'array of sort option' },
            { name: 'tags', type: 'array of string' },
            { name: 'template_suffix', type: 'string' },
            { name: 'title', type: 'string' },
            { name: 'url', type: 'string' },
          ],
          description: `A \`collection\` in a store. 
          
          
    {
      "all_products_count": 10,
      "all_tags": [
        "Burning",
        "dried",
        "extracts",
        "fresh",
        "ingredients",
        "plant",
        "supplies"
      ],
      "all_types": [
        "Animals & Pet Supplies",
        "Baking Flavors & Extracts",
        "Cooking & Baking Ingredients",
        "Dried Flowers",
        "Fruits & Vegetables",
        "Seasonings & Spices",
        "Water"
      ],
      "all_vendors": [
        "Clover's Apothecary",
        "Polina's Potent Potions",
        "Ted's Apothecary Supply"
      ],
      "current_type": null,
      "current_vendor": null,
      "default_sort_by": "created-ascending",
      "description": "Brew your own potions at home using our fresh, ethically-sourced ingredients.",
      "featured_image": {},
      "filters": {},
      "handle": "ingredients",
      "id": 266168401985,
      "image": {},
      "metafields": {},
      "next_product": null,
      "previous_product": null,
      "products": {},
      "products_count": 1,
      "published_at": "2022-04-19 09:52:18 -0400",
      "sort_by": "",
      "sort_options": [],
      "tags": [
        "Burning"
      ],
      "template_suffix": "eight-products-per-page",
      "title": "Ingredients",
      "url": {}
    }

          `
        },
        {
          title: "collections",
          url: "https://shopify.dev/docs/api/liquid/objects/collections",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `All of the \`collections\` on a store.

    {% for collection in collections %}
      {{- collection.title | link_to: collection.url }}
    {% endfor %}
    \n
    {% for product in collections['sale-potions'].products %}
      {{- product.title | link_to: product.url }}
    {% endfor %}
          
          `
        },
        {
          title: "color",
          url: "https://shopify.dev/docs/api/liquid/objects/color",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'alpha', type: 'number' },
            { name: 'blue', type: 'number' },
            { name: 'green', type: 'number' },
            { name: 'hue', type: 'number' },
            { name: 'lightness', type: 'number' },
            { name: 'red', type: 'number' },
            { name: 'rgb', type: 'string' },
            { name: 'rgba', type: 'string' },
            { name: 'saturation', type: 'number' },
          ],
          description: `A color from a \`color setting\`.
          
    {{ settings.colors_accent_2 }}
          `
        },
        {
          title: "color_scheme",
          url: "https://shopify.dev/docs/api/liquid/objects/color_scheme",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'id', type: 'string' },
            { name: 'setting', type: '-' },
          ],
          description: `A \`color_scheme\` from a \`color_scheme\` setting.
          
      { settings.card_color_scheme }}   
          `
        },
        {
          title: "color_scheme_group",
          url: "https://shopify.dev/docs/api/liquid/objects/color_scheme_group",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `A \`color_scheme_group\` from a \`color_scheme_group setting\`.

    {% for scheme in settings.color_schemes %}
      .color-{{ scheme.id }} {
        --color-background: {{ scheme.settings.background }};
        --color-text: {{ scheme.settings.text }};
      }
    {% endfor %}     
          
          `
        },
        {
          title: "comment",
          url: "https://shopify.dev/docs/api/liquid/objects/comment",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'author', type: 'string' },
            { name: 'content', type: 'string' },
            { name: 'created_at', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'id', type: 'number' },
            { name: 'status', type: 'string' },
            { name: 'updated_at', type: 'string' },
            { name: 'url', type: 'string' },
          ],
          description: `An article comment.
          
          
    {
      "author": "Cornelius",
      "content": "Wow, this is going to save me a fortune in invisibility potion!",
      "created_at": "2022-06-05 19:33:57 -0400",
      "email": "cornelius.potionmaker@gmail.com",
      "id": 129089273921,
      "status": "published",
      "updated_at": "2022-06-05 19:33:57 -0400",
      "url": "/blogs/potion-notions/how-to-tell-if-you-have-run-out-of-invisibility-potion#129089273921"
    }
          `
        },
        {
          title: "company",
          url: "https://shopify.dev/docs/api/liquid/objects/company",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'available_locations', type: 'array of company_location' },
            { name: 'id', type: 'number' },
            { name: 'metafields', type: 'array of metafield' },
            { name: 'name', type: 'string' },
          ],
          description: `A company that a \`customer\` is purchasing for. To learn about B2B in themes, refer to \`Support B2B customers in your theme\`.

    {
      "available_locations": [],
      "id": 98369,
      "metafields": {},
      "name": "Cornelius' Custom Concoctions"
    }
          
          `
        },
        {
          title: "company_address",
          url: "https://shopify.dev/docs/api/liquid/objects/company_address",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'address1', type: 'string' },
            { name: 'address2', type: 'string' },
            { name: 'attention', type: 'string' },
            { name: 'city', type: 'string' },
            { name: 'country', type: 'country' },
            { name: 'country_code', type: 'string' },
            { name: 'id', type: 'number' },
            { name: 'province', type: 'string' },
            { name: 'province_code', type: 'string' },
            { name: 'street', type: 'string' },
            { name: 'zip', type: 'string' },
          ],
          description: `The address of a company location. To learn about B2B in themes, refer to Support B2B customers in your theme.
          
    {
      "address1": "99 Cauldron Lane",
      "address2": "Unit 4B",
      "attention": "Cornelius Potionmaker",
      "city": "Edinburgh",
      "country": {},
      "country_code": "GB",
      "id": 65,
      "province": null,
      "province_code": null,
      "street": "99 Cauldron Lane, Unit 4B",
      "zip": "EH95 1AF"
    } 
          
          `
        },
        {
          title: "company_location",
          url: "https://shopify.dev/docs/api/liquid/objects/company_location",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'company', type: 'company' },
            { name: 'current?', type: 'boolean' },
            { name: 'id', type: 'number' },
            { name: 'metafields', type: 'array of metafield' },
            { name: 'name', type: 'string' },
            { name: 'shipping_address', type: 'company_address' },
            { name: 'tax_registration_id', type: 'number' },
            { name: 'url_to_set_as_current', type: 'string' },
          ],
          description: `A location of the \`company\` that a \`customer\` is purchasing for. To learn about B2B in themes, refer to \`Support B2B customers in your theme\`.
          
    {
      "company": {},
      "current?": false,
      "id": 98369,
      "metafields": {},
      "name": "99 Cauldron Lane",
      "shipping_address": {},
      "tax_registration_id": null,
      "url_to_set_as_current": "https://polinas-potent-potions.myshopify.com/company_location/update?location_id=98369&return_to=/resource"
    }
          
          
          `
        },
        {
          title: "content_for_additional_checkout_buttons",
          url: "https://shopify.dev/docs/api/liquid/objects/content_for_additional_checkout_buttons",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `Returns checkout buttons for any active payment providers with offsite checkouts. \n\n Use \`additional_checkout_buttons\` to check whether these payment providers exist, and \`content_for_additional_checkout_buttons\` to show the associated checkout buttons. To learn more about how to use these objects, refer to \`Accelerated checkout\`.
          
    {% if additional_checkout_buttons %}
      {{ content_for_additional_checkout_buttons }}
    {% endif %}
          
          `
        },
        {
          title: "content_for_header",
          url: "https://shopify.dev/docs/api/liquid/objects/content_for_header",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `Dynamically returns all scripts required by Shopify. \n\n Include the \`content_for_header\` object in your \`layout files\` between the \`<head>\` and \`</head>\` HTML tags. \n\n You shouldn't try to modify or parse the content_for_header object because the contents are subject to change, which can change the behaviour of your code.`
        },
        {
          title: "content_for_index",
          url: "https://shopify.dev/docs/api/liquid/objects/content_for_index",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `Dynamically returns the content of \`sections\` to be rendered on the home page. If you use a \`Liquid index template\` \`(templates/index.liquid)\`, then you must include \`{{ content_for_index }}\` in the template. This object can't be used in JSON index templates.`
        },
        {
          title: "content_for_layout",
          url: "https://shopify.dev/docs/api/liquid/objects/content_for_layout",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `Dynamically returns content based on the current \`template\`. \n\n Include the \`content_for_layout\` object in your \`layout files\` between the \`<body>\` and \`</body>\` HTML tags.`
        },
        {
          title: "country",
          url: "https://shopify.dev/docs/api/liquid/objects/country",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'available_languages', type: 'array of shop_locales' },
            { name: 'continent', type: 'string' },
            { name: 'currency', type: 'currency' },
            { name: 'iso_code', type: 'string' },
            { name: 'market', type: 'market' },
            { name: 'name', type: 'string' },
            { name: 'popular?', type: 'boolean' },
            { name: 'unit_system', type: 'string from a set of values' },
          ],
          description: `A country supported by the store's localization options. \n\n To learn how to use the \`country\` object to offer localization options in your theme, refer to \`Support multiple currencies and languages\`.
    

    {% for country in localization.available_countries -%}
      {{ country }}
    {%- endfor %}
    \n
    {
      "available_languages": [],
      "continent": "North America",
      "currency": {},
      "iso_code": "CA",
      "market": {},
      "name": "Canada",
      "popular?": false,
      "unit_system": "metric"
    }
          
          `
        },
        {
          title: "country_option_tags",
          url: "https://shopify.dev/docs/api/liquid/objects/country_option_tags",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `Creates an \`<option>\` tag for each country and region that's included in a shipping zone on the Shipping page of the Shopify admin. \n\n An attribute called \`data-provinces\` is set for each \`<option>\`, and contains a JSON-encoded array of the country or region's subregions. If a country doesn't have any subregions, then an empty array is set for its \`data-provinces\` attribute.
          
          
    <select name="country">
      {{ country_option_tags }}
    </select> 
          
          `
        },
        {
          title: "currency",
          url: "https://shopify.dev/docs/api/liquid/objects/currency",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            {name: 'iso_code', type: 'string'},
            {name: 'symbol', type: 'string'},
            {name: 'iso_code', type: 'string'},
          ],
          description: `Information about a currency, like the ISO code and symbol.
          
    {
      "iso_code": "CAD",
      "name": "Canadian Dollar",
      "symbol": "$"
    }
          `
        },
        {
          title: "current_page",
          url: "https://shopify.dev/docs/api/liquid/objects/current_page",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `The current page number. \n\n The \`current_page\` object has a value of 1 for non-paginated resources.
          
    {{ page_title }}
    {% unless current_page == 1 %} - Page
      {{ current_page }}
    {% endunless %}
          
          
          `
        },
        {
          title: "current_tags",
          url: "https://shopify.dev/docs/api/liquid/objects/current_tags",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: `The currently applied tags. \n\n You can add tags to articles and products. Article tags can be used to filter a blog page to show only articles with specific tags. Similarly, product tags can be used to filter a collection page to show only products with specific tags.`
        },
        {
          title: "customer",
          url: "https://shopify.dev/docs/api/liquid/objects/customer",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'accepts_marketing', type: 'boolean' },
            { name: 'addresses', type: 'array of address' },
            { name: 'addresses_count', type: 'number' },
            { name: 'b2b?', type: 'boolean' },
            { name: 'company_available_locations', type: 'array of company_location' },
            { name: 'current_company', type: 'company' },
            { name: 'current_location', type: 'company_location' },
            { name: 'default_address', type: 'address' },
            { name: 'email', type: 'string' },
            { name: 'first_name', type: 'string' },
            { name: 'has_account', type: 'boolean' },
            { name: 'id', type: 'number' },
            { name: 'last_name', type: 'string' },
            { name: 'last_order_id', type: 'order' },
            { name: 'name', type: 'string' },
            { name: 'orders', type: 'array of order' },
            { name: 'orders_count', type: 'number' },
            { name: 'phone', type: 'string' },
            { name: 'tags', type: 'array of string' },
            { name: 'tax_exempt', type: 'boolean' },
            { name: 'total_spent', type: 'number' },
          ],
          description: `A \`customer\` of the store. \`The customer\` object is directly accessible globally when a customer is logged in to their account. It's also defined in the following contexts: \n\n - The \`customers/order template\` \n\n - When accessing \`checkout.custome\` \n\n - When accessing \`gift_card.customer\`\n\n - When accessing \`rder.customer\` \n\n Outside of the above contexts, if the customer isn't logged into their account, the \`customer\` object returns nil.
          
    {% if customer %}
      Hello, {{ customer.first_name }}!
    {% endif %}
          `
        },
        {
          title: "discount",
          url: "https://shopify.dev/docs/api/liquid/objects/discount",
          keyword: ['object', 'objects', 'deprecated'],
          isDeprecated: true,
          objectProperties: [
            { name: 'amount', type: 'number' },
            { name: 'code', type: 'string' },
            { name: 'saving', type: 'number' },
            { name: 'title', type: 'string' },
            { name: 'total_amount', type: 'number' },
            { name: 'total_savings', type: 'string' },
            { name: 'type', type: 'string from a set of values' },
          ],
          category: "Objects",
          description: `A discount applied to a cart, line item, or order. \n\n Deprecated because not all discount types and details are captured. The \`discount\` object has been replaced by the \`discount_allocation\` and \`discount_application\` objects.
          
    {
      "amount": "40.00",
      "code": "DIY",
      "savings": "-40.00",
      "title": "DIY",
      "total_amount": "40.00",
      "total_savings": "-40.00",
      "type": "PercentageDiscount"
    }

          `
        },
        {
          title: "discount_allocation",
          url: "https://shopify.dev/docs/api/liquid/objects/discount_allocation",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'amount', type: 'number' },
            { name: 'discount_application', type: 'discount_application' },
          ],
          description: `Information about how a discount affects an item. \n\n To learn about how to display discounts in your theme, refer to \`Discounts.\`
          
    {
      "amount": "40.00",
      "discount_application": "DiscountApplicationDrop"
    } 
          
          `
        },
        {
          title: "discount_application",
          url: "https://shopify.dev/docs/api/liquid/objects/discount_application",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'target_selection', type: 'string from a set of values' },
            { name: 'target_type', type: 'string from a set of values' },
            { name: 'title', type: 'sstring' },
            { name: 'total_allocated_amount', type: 'number' },
            { name: 'type', type: 'string from a set of values' },
            { name: 'value', type: 'number' },
            { name: 'value_type', type: 'string from a set of values' },

          ],
          description: `Information about the intent of a discount. To learn about how to display discounts in your theme, refer to \`Discounts\`.
          
    {
      "target_selection": "explicit",
      "target_type": "line_item",
      "title": "Bloodroot discount!",
      "total_allocated_amount": "2.50",
      "type": "script",
      "value": "2.5",
      "value_type": "fixed_amount"
    }
          
          `
        },
        {
          title: "external_video",
          url: "https://shopify.dev/docs/api/liquid/objects/external_video",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'alt', type: 'string' },
            { name: 'aspect_ratio', type: 'number' },
            { name: 'external_id', type: 'string' },
            { name: 'host', type: 'string from a set of values' },
            { name: 'id', type: 'number' },
            { name: 'media_type', type: 'string' },
            { name: 'position', type: 'number' },
            { name: 'preview_image', type: 'image' },
          ],
          description: `Information about an external video from YouTube or Vimeo.
          
    {
      "alt": "Potion beats",
      "aspect_ratio": "1.77",
      "external_id": "vj01PAffOac",
      "host": "youtube",
      "id": 22015756402753,
      "media_type": "external_video",
      "position": 1,
      "preview_image": {}
    }
          
          `
        },
        {
          title: "filter",
          url: "https://shopify.dev/docs/api/liquid/objects/filter",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'active_values', type: 'array of filter_value' },
            { name: 'false_value', type: 'filter_value' },
            { name: 'inactive_values', type: 'array of filter_value' },
            { name: 'label', type: 'string' },
            { name: 'max_value', type: 'filter_value' },
            { name: 'min_value', type: 'filter_value' },
            { name: 'operator', type: 'string from a set of values' },
            { name: 'param_name', type: 'string' },
            { name: 'presentation', type: 'string from a set of values' },
            { name: 'range_max', type: 'number' },
            { name: 'true_value', type: 'filter_value' },
            { name: 'type', type: 'string from a set values' },
            { name: 'url_to_remove', type: 'string' },
            { name: 'values', type: 'array of filter_value' },
          ],
          description: `A storefront filter. To learn about supporting filters in your theme, refer to Support storefront filtering.
          
    {
      "active_values": [],
      "inactive_values": [],
      "label": "Strength",
      "operator": "OR",
      "param_name": "filter.v.option.strength",
      "presentation": "text",
      "type": "list",
      "url_to_remove": "/resource?q=potion",
      "values": []
    }
          `
        },
        {
          title: "filter_value",
          url: "https://shopify.dev/docs/api/liquid/objects/filter_value",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'active', type: 'boolean' },
            { name: 'count', type: 'number' },
            { name: 'display', type: 'filter of value_display' },
            { name: 'label', type: 'string' },
            { name: 'param_name', type: 'string' },
            { name: 'url_to_add', type: 'string' },
            { name: 'url_to_remove', type: 'string' },
            { name: 'value', type: 'string'}
          ],
          description: `A specific value of a filter. To learn about supporting filters in your theme, refer to Support storefront filtering. \n\n 
          
    {
      "active": false,
      "count": 1,
      "display": null,
      "label": "High",
      "param_name": "filter.v.option.strength",
      "url_to_add": "/resource?filter.v.option.strength=High&q=potion",
      "url_to_remove": "/resource?q=potion",
      "value": "High"
    } 
          
          
          `
        },
        {
          title: "filter_value_display",
          url: "https://shopify.dev/docs/api/liquid/objects/filter_value_display",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'type', type: 'string from a set of values' },
            { name: 'value', type: '-' },
          ],
          description: `The visual representation of a filter value.`
        },
        {
          title: "focal_point",
          url: "https://shopify.dev/docs/api/liquid/objects/focal_point",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'x', type: 'number' },
            { name: 'y', type: 'number' },
          ],
          description: `The focal point for an image. \n\n The focal point will remain visible when the image is cropped by the theme. Learn more about supporting focal points in your theme.

    {{ images['potions-header.png'].presentation.focal_point }}
          `
        },
        {
          title: "font",
          url: "https://shopify.dev/docs/api/liquid/objects/font",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'baseline_ratio', type: 'number' },
            { name: 'fallback_families', type: 'string' },
            { name: 'family', type: 'string' },
            { name: 'style', type: 'string' },
            { name: 'system?', type: 'boolean' },
            { name: 'variants', type: 'array of font' },
            { name: 'weight', type: 'number' },
          ],
          description: `A font from a \`font_picker setting\`. You can use the \`font\` object in Liquid assets or inside a style tag to apply font setting values to theme CSS.
          
    {
      "baseline_ratio": 0.133,
      "fallback_families": "sans-serif",
      "family": "Assistant",
      "style": "normal",
      "system?": false,
      "variants": {},
      "weight": "400"
    }
  
          `
        },
        {
          title: "forloop",
          url: "https://shopify.dev/docs/api/liquid/objects/forloop",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'first?', type: 'boolean' },
            { name: 'index', type: 'number' },
            { name: 'index0', type: 'number' },
            { name: 'last?', type: 'boolean' },
            { name: 'length', type: 'number' },
            { name: 'parentloop', type: 'forloop' },
            { name: 'rindex', type: 'number' },
            { name: 'rindex0', type: 'number' },
          ],
          description: `Information about a parent for loop.
          
    {% for page in pages -%}
      {%- if forloop.length > 0 -%}
        {{ page.title }}{% unless forloop.last %}, {% endunless -%}
      {%- endif -%}
    {% endfor %}

`
        },
        {
          title: "form",
          url: "https://shopify.dev/docs/api/liquid/objects/form",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'address1', type: 'string' },
            { name: 'address2', type: 'string' },
            { name: 'author', type: 'string' },
            { name: 'body', type: 'string' },
            { name: 'city', type: 'string' },
            { name: 'company', type: 'string' },
            { name: 'country', type: 'string' },
            { name: 'email', type: 'string' },
            { name: 'errors', type: 'form_errors' },
            { name: 'first_name', type: 'string' },
            { name: 'id', type: 'string' },
            { name: 'last_name', type: 'string' },
            { name: 'message', type: 'string' },
            { name: 'name', type: 'string' },
            { name: 'password_needed', type: 'string' },
            { name: 'phone', type: 'string' },
            { name: 'posted_successfully?', type: 'boolean' },
            { name: 'province', type: 'string' },
            { name: 'set_as_default_checkbox', type: 'string' },
            { name: 'zip', type: 'string' },
          ],
          description: `Information about a form created by a form tag.

    {
      "address1": "12 Phoenix Feather Alley",
      "address2": "1",
      "author": null,
      "body": null,
      "city": "Calgary",
      "company": null,
      "country": "Canada",
      "email": null,
      "errors": null,
      "first_name": "Cornelius",
      "id": "new",
      "last_name": "Potionmaker",
      "password_needed?": false,
      "phone": "44 131 496 0905",
      "posted_successfully?": true,
      "province": "Alberta",
      "set_as_default_checkbox": "<input type='checkbox' id='address_default_address_new' name='address[default]' value='1'>",
      "zip": "T1X 0L4"
    }
          `
        },
        {
          title: "form_errors",
          url: "https://shopify.dev/docs/api/liquid/objects/form_errors",
          keyword: ['object', 'objects'],
          category: "Objects",
          objectProperties: [
            { name: 'messages', type: 'array of string' },
            { name: 'translated_fields', type: 'array of string' },
          ],
          description: `The error category strings for errors from a form created by a \`form tag\`. The following table outlines the strings that can be returned and the reason that they would be: \n\n - \`author\` There were issues with required name fields. \n\n - \`body\` 	There were issues with required text content fields. \n\n - \`email\` There were issues with required email fields. \n\n - \`form\` There were general issues with the form. \n\n - \`password\` There were issues with required password fields.`
        },
        {
          title: "fulfillment",
          url: "https://shopify.dev/docs/api/liquid/objects/fulfillment",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "generic_file",
          url: "https://shopify.dev/docs/api/liquid/objects/generic_file",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "gift_card",
          url: "https://shopify.dev/docs/api/liquid/objects/gift_card",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "group",
          url: "https://shopify.dev/docs/api/liquid/objects/group",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "handle",
          url: "https://shopify.dev/docs/api/liquid/objects/handle",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "image",
          url: "https://shopify.dev/docs/api/liquid/objects/image",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "image_presentation",
          url: "https://shopify.dev/docs/api/liquid/objects/image_presentation",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "images",
          url: "https://shopify.dev/docs/api/liquid/objects/images",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "line_item",
          url: "https://shopify.dev/docs/api/liquid/objects/line_item",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "link",
          url: "https://shopify.dev/docs/api/liquid/objects/link",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "linklist",
          url: "https://shopify.dev/docs/api/liquid/objects/linklist",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "linklists",
          url: "https://shopify.dev/docs/api/liquid/objects/linklists",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "localization",
          url: "https://shopify.dev/docs/api/liquid/objects/localization",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "location",
          url: "https://shopify.dev/docs/api/liquid/objects/location",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "market",
          url: "https://shopify.dev/docs/api/liquid/objects/market",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "measurement",
          url: "https://shopify.dev/docs/api/liquid/objects/measurement",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "media",
          url: "https://shopify.dev/docs/api/liquid/objects/media",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "metafield",
          url: "https://shopify.dev/docs/api/liquid/objects/metafield",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "metaobject",
          url: "https://shopify.dev/docs/api/liquid/objects/metaobject",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "metaobject_definition",
          url: "https://shopify.dev/docs/api/liquid/objects/metaobject_definition",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "metaobject_system",
          url: "https://shopify.dev/docs/api/liquid/objects/metaobject_system",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "model",
          url: "https://shopify.dev/docs/api/liquid/objects/model",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "model_source",
          url: "https://shopify.dev/docs/api/liquid/objects/model_source",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "money",
          url: "https://shopify.dev/docs/api/liquid/objects/money",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "order",
          url: "https://shopify.dev/docs/api/liquid/objects/order",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "page",
          url: "https://shopify.dev/docs/api/liquid/objects/page",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "page_description",
          url: "https://shopify.dev/docs/api/liquid/objects/page_description",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "page_image",
          url: "https://shopify.dev/docs/api/liquid/objects/page_image",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "page_title",
          url: "https://shopify.dev/docs/api/liquid/objects/page_title",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "pages",
          url: "https://shopify.dev/docs/api/liquid/objects/pages",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "paginate",
          url: "https://shopify.dev/docs/api/liquid/objects/paginate",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "part",
          url: "https://shopify.dev/docs/api/liquid/objects/part",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "pending_payment_instruction_input",
          url: "https://shopify.dev/docs/api/liquid/objects/pending_payment_instruction_input",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "policy",
          url: "https://shopify.dev/docs/api/liquid/objects/policy",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "powered_by_link",
          url: "https://shopify.dev/docs/api/liquid/objects/powered_by_link",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "predictive_search",
          url: "https://shopify.dev/docs/api/liquid/objects/predictive_search",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "predictive_search_resources",
          url: "https://shopify.dev/docs/api/liquid/objects/predictive_search_resources",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "product",
          url: "https://shopify.dev/docs/api/liquid/objects/product",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "product_option",
          url: "https://shopify.dev/docs/api/liquid/objects/product_option",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "quantity_price_break",
          url: "https://shopify.dev/docs/api/liquid/objects/quantity_price_break",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "quantity_rule",
          url: "https://shopify.dev/docs/api/liquid/objects/quantity_rule",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "rating",
          url: "https://shopify.dev/docs/api/liquid/objects/rating",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "recipient",
          url: "https://shopify.dev/docs/api/liquid/objects/recipient",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "recommendations",
          url: "https://shopify.dev/docs/api/liquid/objects/recommendations",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "request",
          url: "https://shopify.dev/docs/api/liquid/objects/request",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "robots",
          url: "https://shopify.dev/docs/api/liquid/objects/robots",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "routes",
          url: "https://shopify.dev/docs/api/liquid/objects/routes",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "rule",
          url: "https://shopify.dev/docs/api/liquid/objects/rule",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "script",
          url: "https://shopify.dev/docs/api/liquid/objects/script",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "scripts",
          url: "https://shopify.dev/docs/api/liquid/objects/scripts",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "search",
          url: "https://shopify.dev/docs/api/liquid/objects/search",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "section",
          url: "https://shopify.dev/docs/api/liquid/objects/section",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan_allocation",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan_allocation_price_adjustment",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan_allocation_price_adjustment",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan_checkout_charge",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan_checkout_charge",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan_checkout_charge",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan_checkout_charge",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan_group",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan_group",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan_group_option",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan_group_option",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan_option",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan_option",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "selling_plan_price_adjustment",
          url: "https://shopify.dev/docs/api/liquid/objects/selling_plan_price_adjustment",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "settings",
          url: "https://shopify.dev/docs/api/liquid/objects/settings",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "shipping_method",
          url: "https://shopify.dev/docs/api/liquid/objects/shipping_method",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "shop",
          url: "https://shopify.dev/docs/api/liquid/objects/shop",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "shop_locale",
          url: "https://shopify.dev/docs/api/liquid/objects/shop_locale",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "sitemap",
          url: "https://shopify.dev/docs/api/liquid/objects/sitemap",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "sort_option",
          url: "https://shopify.dev/docs/api/liquid/objects/sort_option",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "store_availability",
          url: "https://shopify.dev/docs/api/liquid/objects/store_availability",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "tablerowloop",
          url: "https://shopify.dev/docs/api/liquid/objects/tablerowloop",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "tax_line",
          url: "https://shopify.dev/docs/api/liquid/objects/tax_line",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "template",
          url: "https://shopify.dev/docs/api/liquid/objects/template",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "theme",
          url: "https://shopify.dev/docs/api/liquid/objects/theme",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "transaction",
          url: "https://shopify.dev/docs/api/liquid/objects/transaction",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "transaction_payment_details",
          url: "https://shopify.dev/docs/api/liquid/objects/transaction_payment_details",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "unit_price_measurement",
          url: "https://shopify.dev/docs/api/liquid/objects/transaction_payment_details",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "unit_price_measurement",
          url: "https://shopify.dev/docs/api/liquid/objects/unit_price_measurement",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "user",
          url: "https://shopify.dev/docs/api/liquid/objects/user",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "user_agent",
          url: "https://shopify.dev/docs/api/liquid/objects/user_agent",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "variant",
          url: "https://shopify.dev/docs/api/liquid/objects/variant",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "video",
          url: "https://shopify.dev/docs/api/liquid/objects/video",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
        {
          title: "video_source",
          url: "https://shopify.dev/docs/api/liquid/objects/video",
          keyword: ['object', 'objects'],
          category: "Objects",
          description: ``
        },
      ],
    },
  },
];
