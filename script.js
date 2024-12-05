/* script.js */
const docContainer = document.getElementById("doc-container");

// Documentation Content
const modules = {
    module1: `
        <h2>Module 1: Introduction to HTML</h2>
        <blockquote>"Every great journey begins with a single step." - Lao Tzu</blockquote>
        <p>HTML (HyperText Markup Language) is the standard markup language for creating web pages and web applications. It structures the content and layout of a web page using elements represented by tags.</p>
        
        <h3>Key Concepts</h3>
        <ul>
            <li><strong>Elements:</strong> The building blocks of HTML pages, defined by tags.</li>
            <li><strong>Tags:</strong> Keywords surrounded by angle brackets, like &lt;html&gt;.</li>
            <li><strong>Attributes:</strong> Provide additional information about elements, placed within the opening tag.</li>
        </ul>

        <h3>Basic Structure of an HTML Document</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Page Title&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;!-- Content goes here --&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Simple Example (Quick Start)</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;My First HTML Page&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Welcome to HTML&lt;/h1&gt; &lt;!-- Main heading --&gt;
    &lt;p&gt;This is a paragraph of text on my first web page.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Advanced Example</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt; &lt;!-- Specifies character encoding --&gt;
    &lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt; &lt;!-- Responsive design --&gt;
    &lt;meta name="description" content="An advanced HTML example with various elements and attributes."&gt;
    &lt;title&gt;Advanced HTML Example&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333;
            margin: 0;
            padding: 20px;
        }
        h1 {
            color: #2c3e50;
        }
        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
        }
        nav ul li {
            margin-right: 15px;
        }
        nav ul li a {
            text-decoration: none;
            color: #2980b9;
            font-weight: bold;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;h1&gt;Welcome to Advanced HTML&lt;/h1&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#section1"&gt;Section 1&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#section2"&gt;Section 2&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#footer"&gt;Footer&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;

    &lt;main&gt;
        &lt;section id="section1"&gt;
            &lt;h2&gt;Section 1&lt;/h2&gt;
            &lt;p&gt;This is the first section with some &lt;strong&gt;important&lt;/strong&gt; text.&lt;/p&gt;
            &lt;img src="image1.jpg" alt="Sample Image" width="300" height="200"&gt;
        &lt;/section&gt;
        &lt;section id="section2"&gt;
            &lt;h2&gt;Section 2&lt;/h2&gt;
            &lt;p&gt;This is the second section with an ordered list:&lt;/p&gt;
            &lt;ol&gt;
                &lt;li&gt;First item&lt;/li&gt;
                &lt;li&gt;Second item&lt;/li&gt;
                &lt;li&gt;Third item&lt;/li&gt;
            &lt;/ol&gt;
            &lt;!-- Hyperlink example --&gt;
            &lt;p&gt;Visit &lt;a href="https://www.example.com" target="_blank"&gt;Example.com&lt;/a&gt; for more information.&lt;/p&gt;
        &lt;/section&gt;
    &lt;/main&gt;

    &lt;footer id="footer"&gt;
        &lt;p&gt;Contact us at &lt;a href="mailto:info@example.com"&gt;info@example.com&lt;/a&gt;&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Glossary</h3>
        <ul>
            <li><strong>&lt;!DOCTYPE html&gt;:</strong> Declares the document type and version as HTML5.</li>
            <li><strong>&lt;html&gt;:</strong> Root element of an HTML page.</li>
            <li><strong>&lt;head&gt;:</strong> Container for metadata like &lt;title&gt;, &lt;meta&gt;, and &lt;style&gt;.</li>
            <li><strong>&lt;body&gt;:</strong> Contains the visible content of the web page.</li>
            <li><strong>&lt;meta&gt;:</strong> Provides metadata about the HTML document.</li>
            <li><strong>&lt;title&gt;:</strong> Sets the title of the document, shown in the browser's title bar or tab.</li>
            <li><strong>&lt;header&gt;, &lt;nav&gt;, &lt;main&gt;, &lt;section&gt;, &lt;footer&gt;:</strong> Semantic elements introduced in HTML5 for better structure.</li>
            <li><strong>&lt;style&gt;:</strong> Embeds CSS styles within the HTML document.</li>
        </ul>

        <h3>Exercises</h3>
        <ol>
            <li><strong>Beginner:</strong> Create a basic HTML page with a title and a paragraph introducing yourself.</li>
            <li><strong>Expert:</strong> Build an HTML page that includes metadata for description and keywords, and uses semantic elements like &lt;header&gt;, &lt;nav&gt;, and &lt;footer&gt;.</li>
        </ol>
    `,
    // Continue defining modules 2 to 12 with comprehensive content, advanced examples, glossaries, and exercises
    // For brevity, I'm including module2 as an example

    module2: `
        <h2>Module 2: Basic HTML Elements</h2>
        <blockquote>"The beginning is the most important part of the work." - Plato</blockquote>
        <p>In this module, we'll explore the fundamental elements used in HTML to structure and format content, such as headings, paragraphs, and text formatting tags.</p>

        <h3>Key Tags and Attributes</h3>
        <ul>
            <li><strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Heading tags from largest (&lt;h1&gt;) to smallest (&lt;h6&gt;).</li>
            <li><strong>&lt;p&gt;:</strong> Defines a paragraph.</li>
            <li><strong>&lt;b&gt;:</strong> Makes text bold.</li>
            <li><strong>&lt;i&gt;:</strong> Makes text italic.</li>
            <li><strong>&lt;u&gt;:</strong> Underlines text.</li>
            <li><strong>&lt;em&gt;:</strong> Emphasizes text (usually italicized).</li>
            <li><strong>&lt;strong&gt;:</strong> Indicates strong importance (usually bolded).</li>
            <li><strong>&lt;br&gt;:</strong> Inserts a single line break.</li>
            <li><strong>&lt;hr&gt;:</strong> Inserts a thematic break (horizontal rule).</li>
        </ul>

        <h3>Simple Example (Quick Start)</h3>
        <pre>
&lt;h1&gt;Heading Level 1&lt;/h1&gt;
&lt;p&gt;This is a paragraph of text.&lt;/p&gt;
&lt;p&gt;This is another paragraph with &lt;b&gt;bold&lt;/b&gt; and &lt;i&gt;italic&lt;/i&gt; text.&lt;/p&gt;
&lt;hr&gt;
&lt;h2&gt;Heading Level 2&lt;/h2&gt;
&lt;p&gt;Underlined text: &lt;u&gt;This text is underlined.&lt;/u&gt;&lt;/p&gt;
        </pre>

        <h3>Advanced Example</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Basic HTML Elements&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Georgia, 'Times New Roman', Times, serif;
            line-height: 1.6;
            margin: 20px;
            color: #333;
        }
        h1, h2 {
            color: #2c3e50;
        }
        p {
            margin-bottom: 15px;
        }
        blockquote {
            font-style: italic;
            color: #555;
            border-left: 5px solid #ccc;
            padding-left: 15px;
            margin: 20px 0;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Understanding Basic HTML Elements&lt;/h1&gt;
    &lt;p&gt;HTML provides a variety of elements for structuring content. Let's explore some of them.&lt;/p&gt;
    &lt;blockquote&gt;"Code is like humor. When you have to explain it, it’s bad." - Cory House&lt;/blockquote&gt;
    &lt;h2&gt;Headings&lt;/h2&gt;
    &lt;p&gt;Headings range from &lt;strong&gt;&lt;code&gt;&lt;h1&gt;&lt;/code&gt;&lt;/strong&gt; to &lt;strong&gt;&lt;code&gt;&lt;h6&gt;&lt;/code&gt;&lt;/strong&gt;.&lt;/p&gt;
    &lt;h3&gt;Heading Level 3&lt;/h3&gt;
    &lt;p&gt;This is a paragraph under a level 3 heading.&lt;/p&gt;
    &lt;h4&gt;Heading Level 4&lt;/h4&gt;
    &lt;p&gt;This text includes &lt;em&gt;emphasized&lt;/em&gt; and &lt;strong&gt;strong&lt;/strong&gt; text.&lt;/p&gt;
    &lt;h5&gt;Heading Level 5&lt;/h5&gt;
    &lt;p&gt;Here is an unordered list:&lt;/p&gt;
    &lt;ul&gt;
        &lt;li&gt;Item one&lt;/li&gt;
        &lt;li&gt;Item two&lt;/li&gt;
        &lt;li&gt;Item three&lt;/li&gt;
    &lt;/ul&gt;
    &lt;h6&gt;Heading Level 6&lt;/h6&gt;
    &lt;p&gt;Here is an ordered list:&lt;/p&gt;
    &lt;ol&gt;
        &lt;li&gt;First item&lt;/li&gt;
        &lt;li&gt;Second item&lt;/li&gt;
        &lt;li&gt;Third item&lt;/li&gt;
    &lt;/ol&gt;
    &lt;br&gt;
    &lt;p&gt;End of content.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Glossary</h3>
        <ul>
            <li><strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Define headings from most important (&lt;h1&gt;) to least important (&lt;h6&gt;).</li>
            <li><strong>&lt;p&gt;:</strong> Defines a paragraph.</li>
            <li><strong>&lt;b&gt;:</strong> Makes enclosed text bold.</li>
            <li><strong>&lt;i&gt;:</strong> Italicizes enclosed text.</li>
            <li><strong>&lt;u&gt;:</strong> Underlines enclosed text.</li>
            <li><strong>&lt;em&gt;:</strong> Emphasizes text semantically, usually italicized.</li>
            <li><strong>&lt;strong&gt;:</strong> Indicates strong importance semantically, usually bolded.</li>
            <li><strong>&lt;br&gt;:</strong> Inserts a line break.</li>
            <li><strong>&lt;hr&gt;:</strong> Inserts a horizontal rule (thematic break).</li>
            <li><strong>&lt;blockquote&gt;:</strong> Defines a section quoted from another source.</li>
        </ul>

        <h3>Exercises</h3>
        <ol>
            <li><strong>Beginner:</strong> Create a webpage with headings from &lt;h1&gt; to &lt;h6&gt;, each with a short description.</li>
            <li><strong>Expert:</strong> Build a blog post layout using headings, paragraphs, blockquotes, and inline text formatting elements.</li>
        </ol>
    `,
    module3: `
    <h2>Module 3: Grouping Content</h2>
    <blockquote>"Individually, we are one drop. Together, we are an ocean." - Ryunosuke Satoro</blockquote>
    <p>Grouping elements help structure your HTML documents by grouping together related content. The main grouping elements are &lt;div&gt; and &lt;span&gt;.</p>

    <h3>Key Tags and Attributes</h3>
    <ul>
        <li><strong>&lt;div&gt;:</strong> Defines a division or a section (block-level element).</li>
        <li><strong>&lt;span&gt;:</strong> Defines an inline section within a document.</li>
        <li><strong>class:</strong> Attribute to assign a class name to an element for styling.</li>
        <li><strong>id:</strong> Attribute to assign a unique identifier to an element.</li>
        <li><strong>style:</strong> Inline CSS styling for an element.</li>
    </ul>

    <h3>Simple Example (Quick Start)</h3>
    <pre>
&lt;div class="container"&gt;
&lt;p&gt;This paragraph is inside a div.&lt;/p&gt;
&lt;/div&gt;

&lt;p&gt;This is a &lt;span style="color: red;"&gt;red&lt;/span&gt; word in a paragraph.&lt;/p&gt;
    </pre>

    <h3>Advanced Example</h3>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Grouping Content&lt;/title&gt;
&lt;style&gt;
    .wrapper {
        border: 1px solid #ccc;
        padding: 20px;
        background-color: #f5f5f5;
    }
    .header, .footer {
        background-color: #ecf0f1;
        padding: 15px;
        text-align: center;
        border-radius: 8px;
    }
    .content {
        margin: 20px 0;
    }
    .highlight {
        background-color: yellow;
        font-weight: bold;
    }
    #unique-section {
        background-color: #e0e0e0;
        padding: 15px;
        border-radius: 8px;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;div class="wrapper"&gt;
    &lt;div class="header"&gt;
        &lt;h1&gt;My Website&lt;/h1&gt;
    &lt;/div&gt;
    &lt;div class="content"&gt;
        &lt;p&gt;Welcome to my website. Here is some &lt;span class="highlight"&gt;highlighted&lt;/span&gt; text.&lt;/p&gt;
        &lt;div id="unique-section"&gt;
            &lt;h2&gt;Unique Section&lt;/h2&gt;
            &lt;p&gt;This section has a unique ID for specific styling or scripting.&lt;/p&gt;
        &lt;/div&gt;
        &lt;div class="articles"&gt;
            &lt;article&gt;
                &lt;h3&gt;Article 1&lt;/h3&gt;
                &lt;p&gt;Content of the first article.&lt;/p&gt;
            &lt;/article&gt;
            &lt;article&gt;
                &lt;h3&gt;Article 2&lt;/h3&gt;
                &lt;p&gt;Content of the second article.&lt;/p&gt;
            &lt;/article&gt;
        &lt;/div&gt;
    &lt;/div&gt;
    &lt;div class="footer"&gt;
        &lt;p&gt;Footer information.&lt;/p&gt;
    &lt;/div&gt;
&lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;
    </pre>

    <h3>Glossary</h3>
    <ul>
        <li><strong>&lt;div&gt;:</strong> A block-level container for grouping content.</li>
        <li><strong>&lt;span&gt;:</strong> An inline container for text and other inline elements.</li>
        <li><strong>class:</strong> Assigns one or more class names to an element for styling purposes.</li>
        <li><strong>id:</strong> Assigns a unique identifier to an element.</li>
        <li><strong>style:</strong> Allows inline CSS styling directly on an element.</li>
        <li><strong>&lt;article&gt;:</strong> Defines independent, self-contained content.</li>
    </ul>

    <h3>Exercises</h3>
    <ol>
        <li><strong>Beginner:</strong> Create a webpage using &lt;div&gt; and &lt;span&gt; to style different sections and text within a paragraph.</li>
        <li><strong>Expert:</strong> Build a multi-section webpage with headers, footers, and articles, using classes and IDs for styling and JavaScript manipulation.</li>
    </ol>
`,

module4: `
    <h2>Module 4: Lists</h2>
    <blockquote>"Order and simplification are the first steps toward mastery." - Thomas Mann</blockquote>
    <p>Lists are used to group related items in a specific order or as bullet points. The main types are unordered, ordered, and definition lists.</p>

    <h3>Key Tags and Attributes</h3>
    <ul>
        <li><strong>&lt;ul&gt;:</strong> Defines an unordered (bulleted) list.</li>
        <li><strong>&lt;ol&gt;:</strong> Defines an ordered (numbered) list.</li>
        <li><strong>&lt;li&gt;:</strong> Defines a list item.</li>
        <li><strong>&lt;dl&gt;:</strong> Defines a definition list.</li>
        <li><strong>&lt;dt&gt;:</strong> Defines a term/name in a definition list.</li>
        <li><strong>&lt;dd&gt;:</strong> Describes a term/name in a definition list.</li>
        <li><strong>type:</strong> Attribute to specify the list item marker (e.g., circle, square, decimal).</li>
        <li><strong>start:</strong> Specifies the start value of an ordered list.</li>
        <li><strong>reversed:</strong> Specifies that the list order should be descending (in &lt;ol&gt;).</li>
    </ul>

    <h3>Simple Example (Quick Start)</h3>
    <pre>
&lt;ul&gt;
&lt;li&gt;Apple&lt;/li&gt;
&lt;li&gt;Banana&lt;/li&gt;
&lt;li&gt;Cherry&lt;/li&gt;
&lt;/ul&gt;

&lt;ol&gt;
&lt;li&gt;First step&lt;/li&gt;
&lt;li&gt;Second step&lt;/li&gt;
&lt;li&gt;Third step&lt;/li&gt;
&lt;/ol&gt;
    </pre>

    <h3>Advanced Example</h3>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Lists Example&lt;/title&gt;
&lt;style&gt;
    ul {
        list-style-type: square;
        color: #2c3e50;
        margin-left: 20px;
    }
    ol {
        list-style-type: upper-roman;
        color: #2980b9;
        margin-left: 20px;
    }
    dl {
        background-color: #ecf0f1;
        padding: 10px;
        width: 50%;
    }
    dt {
        font-weight: bold;
        margin-top: 10px;
    }
    dd {
        margin-left: 20px;
        margin-bottom: 10px;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h2&gt;Unordered List&lt;/h2&gt;
&lt;ul&gt;
    &lt;li&gt;Milk&lt;/li&gt;
    &lt;li&gt;Bread&lt;/li&gt;
    &lt;li&gt;Butter&lt;/li&gt;
    &lt;li&gt;Eggs&lt;/li&gt;
    &lt;li&gt;Cheese&lt;/li&gt;
&lt;/ul&gt;

&lt;h2&gt;Ordered List&lt;/h2&gt;
&lt;ol start="5" reversed&gt;
    &lt;li&gt;Step Five&lt;/li&gt;
    &lt;li&gt;Step Four&lt;/li&gt;
    &lt;li&gt;Step Three&lt;/li&gt;
    &lt;li&gt;Step Two&lt;/li&gt;
    &lt;li&gt;Step One&lt;/li&gt;
&lt;/ol&gt;

&lt;h2&gt;Nested List&lt;/h2&gt;
&lt;ul&gt;
    &lt;li&gt;Fruit
        &lt;ul&gt;
            &lt;li&gt;Apple&lt;/li&gt;
            &lt;li&gt;Banana&lt;/li&gt;
            &lt;li&gt;Cherry&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
    &lt;li&gt;Vegetables
        &lt;ul&gt;
            &lt;li&gt;Carrot&lt;/li&gt;
            &lt;li&gt;Broccoli&lt;/li&gt;
            &lt;li&gt;Spinach&lt;/li&gt;
        &lt;/ul&gt;
    &lt;/li&gt;
&lt;/ul&gt;

&lt;h2&gt;Definition List&lt;/h2&gt;
&lt;dl&gt;
    &lt;dt&gt;HTML&lt;/dt&gt;
    &lt;dd&gt;HyperText Markup Language&lt;/dd&gt;
    &lt;dt&gt;CSS&lt;/dt&gt;
    &lt;dd&gt;Cascading Style Sheets&lt;/dd&gt;
    &lt;dt&gt;JS&lt;/dt&gt;
    &lt;dd&gt;JavaScript&lt;/dd&gt;
&lt;/dl&gt;
&lt;/body&gt;
&lt;/html&gt;
    </pre>

    <h3>Glossary</h3>
    <ul>
        <li><strong>&lt;ul&gt;:</strong> Creates a bulleted list.</li>
        <li><strong>&lt;ol&gt;:</strong> Creates a numbered list.</li>
        <li><strong>&lt;li&gt;:</strong> Represents a list item.</li>
        <li><strong>&lt;dl&gt;:</strong> Defines a list of terms and their descriptions.</li>
        <li><strong>&lt;dt&gt;:</strong> Defines a term/name in a definition list.</li>
        <li><strong>&lt;dd&gt;:</strong> Provides the description or definition of the term.</li>
        <li><strong>type:</strong> Specifies the marker type in lists.</li>
        <li><strong>start:</strong> Sets the starting point of an ordered list.</li>
        <li><strong>reversed:</strong> Indicates that the list should be in descending order.</li>
    </ul>

    <h3>Exercises</h3>
    <ol>
        <li><strong>Beginner:</strong> Create an unordered list of your favorite fruits and an ordered list of steps to make a sandwich.</li>
        <li><strong>Expert:</strong> Build a nested list representing a site's navigation menu with multiple levels.</li>
    </ol>
`,

module5: `
    <h2>Module 5: Links and Images</h2>
    <blockquote>"A picture is worth a thousand words." - Unknown</blockquote>
    <p>Links and images are essential for navigation and visual content on web pages. They make content interactive and engaging.</p>

    <h3>Key Tags and Attributes</h3>
    <ul>
        <li><strong>&lt;a&gt;:</strong> Defines a hyperlink.</li>
        <li><strong>href:</strong> Attribute specifying the link's destination URL.</li>
        <li><strong>target:</strong> Specifies where to open the linked document (e.g., "_blank").</li>
        <li><strong>title:</strong> Adds a tooltip text when the mouse moves over the link.</li>
        <li><strong>&lt;img&gt;:</strong> Embeds an image.</li>
        <li><strong>src:</strong> Specifies the path to the image.</li>
        <li><strong>alt:</strong> Alternative text for the image if it cannot be displayed.</li>
        <li><strong>width:</strong> Sets the width of the image.</li>
        <li><strong>height:</strong> Sets the height of the image.</li>
        <li><strong>&lt;figure&gt; and &lt;figcaption&gt;:</strong> Used to group images with captions.</li>
    </ul>

    <h3>Simple Example (Quick Start)</h3>
    <pre>
&lt;a href="https://www.example.com"&gt;Visit Example.com&lt;/a&gt;

&lt;img src="image.jpg" alt="Description of image"&gt;
    </pre>

    <h3>Advanced Example</h3>
    <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
&lt;title&gt;Links and Images&lt;/title&gt;
&lt;style&gt;
    a {
        color: #2980b9;
        text-decoration: none;
        transition: color 0.3s;
    }
    a:hover {
        color: #1abc9c;
    }
    img {
        border: 2px solid #ccc;
        border-radius: 8px;
        max-width: 100%;
        height: auto;
    }
    figure {
        text-align: center;
        margin: 20px 0;
    }
    figcaption {
        font-style: italic;
        color: #555;
    }
&lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
&lt;h1&gt;Explore Our Website&lt;/h1&gt;
&lt;p&gt;Click the link below to learn more:&lt;/p&gt;
&lt;a href="https://www.example.com" target="_blank" title="Visit Example.com"&gt;Visit Example.com&lt;/a&gt;

&lt;h2&gt;Our Gallery&lt;/h2&gt;
&lt;p&gt;Here are some of our featured images:&lt;/p&gt;
&lt;figure&gt;
    &lt;img src="image1.jpg" alt="Beautiful Landscape" width="600"&gt;
    &lt;figcaption&gt;Figure 1: A Beautiful Landscape&lt;/figcaption&gt;
&lt;/figure&gt;
&lt;figure&gt;
    &lt;img src="image2.jpg" alt="City Skyline at Night" width="600"&gt;
    &lt;figcaption&gt;Figure 2: City Skyline at Night&lt;/figcaption&gt;
&lt;/figure&gt;

&lt;h2&gt;Image as a Link&lt;/h2&gt;
&lt;p&gt;Click the image below to visit our homepage:&lt;/p&gt;
&lt;a href="index.html"&gt;
    &lt;img src="logo.png" alt="Company Logo" width="150" height="150"&gt;
&lt;/a&gt;

&lt;h2&gt;Email and Telephone Links&lt;/h2&gt;
&lt;p&gt;Contact us via &lt;a href="mailto:contact@example.com"&gt;Email&lt;/a&gt; or &lt;a href="tel:+1234567890"&gt;Phone&lt;/a&gt;.&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;
    </pre>

    <h3>Glossary</h3>
    <ul>
        <li><strong>&lt;a&gt;:</strong> Creates a hyperlink.</li>
        <li><strong>href:</strong> Specifies the URL of the linked resource.</li>
        <li><strong>target:</strong> Determines where to open the linked document.</li>
        <li><strong>title:</strong> Provides additional information about an element (displayed as a tooltip).</li>
        <li><strong>&lt;img&gt;:</strong> Embeds an image into the document.</li>
        <li><strong>src:</strong> Source file of the image.</li>
        <li><strong>alt:</strong> Alternative text for accessibility.</li>
        <li><strong>width and height:</strong> Set the dimensions of the image.</li>
        <li><strong>&lt;figure&gt;:</strong> Groups media content with captions.</li>
        <li><strong>&lt;figcaption&gt;:</strong> Provides a caption for the &lt;figure&gt; element.</li>
    </ul>

    <h3>Exercises</h3>
    <ol>
        <li><strong>Beginner:</strong> Add links and images to a webpage, linking to external websites and displaying pictures.</li>
        <li><strong>Expert:</strong> Create a photo gallery with images and captions, using &lt;figure&gt; and &lt;figcaption&gt;, and implement image links.</li>
    </ol>
`,
module6: `
        <h2>Module 6: Tables</h2>
        <blockquote>"Data is a precious thing and will last longer than the systems themselves." - Tim Berners-Lee</blockquote>
        <p>Tables organize data into rows and columns, making it easier to read and understand structured information.</p>

        <h3>Key Tags and Attributes</h3>
        <ul>
            <li><strong>&lt;table&gt;:</strong> Defines a table.</li>
            <li><strong>&lt;tr&gt;:</strong> Defines a table row.</li>
            <li><strong>&lt;th&gt;:</strong> Defines a table header cell.</li>
            <li><strong>&lt;td&gt;:</strong> Defines a table data cell.</li>
            <li><strong>&lt;caption&gt;:</strong> Provides a table caption.</li>
            <li><strong>&lt;thead&gt;:</strong> Groups the header content in a table.</li>
            <li><strong>&lt;tbody&gt;:</strong> Groups the body content in a table.</li>
            <li><strong>&lt;tfoot&gt;:</strong> Groups the footer content in a table.</li>
            <li><strong>colspan:</strong> Specifies the number of columns a cell should span.</li>
            <li><strong>rowspan:</strong> Specifies the number of rows a cell should span.</li>
            <li><strong>scope:</strong> Defines the scope of a table header cell.</li>
        </ul>

        <h3>Simple Example (Quick Start)</h3>
        <pre>
&lt;table border="1"&gt;
    &lt;tr&gt;
        &lt;th&gt;Name&lt;/th&gt;
        &lt;th&gt;Age&lt;/th&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Alice&lt;/td&gt;
        &lt;td&gt;30&lt;/td&gt;
    &lt;/tr&gt;
    &lt;tr&gt;
        &lt;td&gt;Bob&lt;/td&gt;
        &lt;td&gt;25&lt;/td&gt;
    &lt;/tr&gt;
&lt;/table&gt;
        </pre>

        <h3>Advanced Example</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Advanced Tables&lt;/title&gt;
    &lt;style&gt;
        table {
            width: 80%;
            border-collapse: collapse;
            margin: 20px auto;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        th, td {
            border: 1px solid #ddd;
            padding: 12px;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
            color: #333;
            font-weight: bold;
        }
        tr:nth-child(even) {
            background-color: #f9f9f9;
        }
        caption {
            caption-side: top;
            font-size: 1.5em;
            margin-bottom: 10px;
            color: #333;
        }
        tfoot td {
            font-weight: bold;
            background-color: #f2f2f2;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;table&gt;
        &lt;caption&gt;Student Grades&lt;/caption&gt;
        &lt;thead&gt;
            &lt;tr&gt;
                &lt;th rowspan="2"&gt;Name&lt;/th&gt;
                &lt;th colspan="3"&gt;Subjects&lt;/th&gt;
                &lt;th rowspan="2"&gt;Average&lt;/th&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;th&gt;Math&lt;/th&gt;
                &lt;th&gt;Science&lt;/th&gt;
                &lt;th&gt;History&lt;/th&gt;
            &lt;/tr&gt;
        &lt;/thead&gt;
        &lt;tbody&gt;
            &lt;tr&gt;
                &lt;td&gt;Alice&lt;/td&gt;
                &lt;td&gt;90&lt;/td&gt;
                &lt;td&gt;85&lt;/td&gt;
                &lt;td&gt;88&lt;/td&gt;
                &lt;td&gt;87.7&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td&gt;Bob&lt;/td&gt;
                &lt;td&gt;78&lt;/td&gt;
                &lt;td&gt;82&lt;/td&gt;
                &lt;td&gt;79&lt;/td&gt;
                &lt;td&gt;79.7&lt;/td&gt;
            &lt;/tr&gt;
            &lt;tr&gt;
                &lt;td&gt;Carol&lt;/td&gt;
                &lt;td&gt;95&lt;/td&gt;
                &lt;td&gt;89&lt;/td&gt;
                &lt;td&gt;92&lt;/td&gt;
                &lt;td&gt;92.0&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tbody&gt;
        &lt;tfoot&gt;
            &lt;tr&gt;
                &lt;td colspan="5"&gt;End of Data&lt;/td&gt;
            &lt;/tr&gt;
        &lt;/tfoot&gt;
    &lt;/table&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Glossary</h3>
        <ul>
            <li><strong>&lt;caption&gt;:</strong> Provides a title or caption for the table.</li>
            <li><strong>&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;:</strong> Group table header, body, and footer content.</li>
            <li><strong>colspan:</strong> Merges cells horizontally across columns.</li>
            <li><strong>rowspan:</strong> Merges cells vertically across rows.</li>
            <li><strong>border-collapse:</strong> CSS property to merge table borders.</li>
            <li><strong>scope:</strong> Indicates whether a table header applies to a row, column, or group of rows or columns.</li>
        </ul>

        <h3>Exercises</h3>
        <ol>
            <li><strong>Beginner:</strong> Create a simple table displaying a list of products with their prices and quantities.</li>
            <li><strong>Expert:</strong> Build a complex table using &lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;, and colspan/rowspan attributes to display a financial report.</li>
        </ol>
    `,

    module7: `
        <h2>Module 7: Forms</h2>
        <blockquote>"Forms are the heart of data collection." - Anonymous</blockquote>
        <p>Forms allow users to interact with the web page by submitting information. They are essential for tasks like login, registration, and feedback.</p>

        <h3>Key Tags and Attributes</h3>
        <ul>
            <li><strong>&lt;form&gt;:</strong> Defines a form.</li>
            <li><strong>action:</strong> URL where form data is sent.</li>
            <li><strong>method:</strong> HTTP method for sending data (GET or POST).</li>
            <li><strong>&lt;input&gt;:</strong> Defines an input field.</li>
            <li><strong>type:</strong> Specifies the input type (text, password, submit, etc.).</li>
            <li><strong>name:</strong> Name of the input field.</li>
            <li><strong>placeholder:</strong> Text displayed when the input is empty.</li>
            <li><strong>&lt;label&gt;:</strong> Defines a label for an input element.</li>
            <li><strong>&lt;textarea&gt;:</strong> Defines a multi-line text input control.</li>
            <li><strong>&lt;select&gt; and &lt;option&gt;:</strong> Define a drop-down list.</li>
            <li><strong>required:</strong> Specifies that an input field must be filled out.</li>
            <li><strong>pattern:</strong> Specifies a regular expression that the input's value must match.</li>
            <li><strong>&lt;fieldset&gt; and &lt;legend&gt;:</strong> Group related elements in a form.</li>
        </ul>

        <h3>Simple Example (Quick Start)</h3>
        <pre>
&lt;form action="/submit" method="post"&gt;
    &lt;label&gt;Username:&lt;/label&gt;
    &lt;input type="text" name="username"&gt;
    &lt;br&gt;
    &lt;input type="submit" value="Login"&gt;
&lt;/form&gt;
        </pre>

        <h3>Advanced Example</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Advanced Forms&lt;/title&gt;
    &lt;style&gt;
        form {
            width: 50%;
            margin: 0 auto;
            background-color: #f2f2f2;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        label {
            display: block;
            margin-top: 10px;
            font-weight: bold;
        }
        input, textarea, select {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 4px;
        }
        input[type="submit"] {
            width: auto;
            background-color: #4CAF50;
            color: white;
            border: none;
            cursor: pointer;
            margin-top: 15px;
            padding: 12px 20px;
            border-radius: 4px;
        }
        input[type="submit"]:hover {
            background-color: #45a049;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;form action="/register" method="post"&gt;
        &lt;h2&gt;User Registration&lt;/h2&gt;
        &lt;fieldset&gt;
            &lt;legend&gt;Personal Information&lt;/legend&gt;
            &lt;label for="firstname"&gt;First Name:&lt;/label&gt;
            &lt;input type="text" id="firstname" name="firstname" placeholder="Enter your first name" required&gt;

            &lt;label for="lastname"&gt;Last Name:&lt;/label&gt;
            &lt;input type="text" id="lastname" name="lastname" placeholder="Enter your last name" required&gt;

            &lt;label for="email"&gt;Email Address:&lt;/label&gt;
            &lt;input type="email" id="email" name="email" placeholder="example@mail.com" required&gt;

            &lt;label for="password"&gt;Password:&lt;/label&gt;
            &lt;input type="password" id="password" name="password" required&gt;

            &lt;label for="confirm_password"&gt;Confirm Password:&lt;/label&gt;
            &lt;input type="password" id="confirm_password" name="confirm_password" required&gt;
        &lt;/fieldset&gt;

        &lt;fieldset&gt;
            &lt;legend&gt;Additional Information&lt;/legend&gt;
            &lt;label for="gender"&gt;Gender:&lt;/label&gt;
            &lt;select id="gender" name="gender" required&gt;
                &lt;option value=""&gt;Select...&lt;/option&gt;
                &lt;option value="female"&gt;Female&lt;/option&gt;
                &lt;option value="male"&gt;Male&lt;/option&gt;
                &lt;option value="other"&gt;Other&lt;/option&gt;
            &lt;/select&gt;

            &lt;label&gt;Hobbies:&lt;/label&gt;
            &lt;input type="checkbox" id="hobby1" name="hobbies" value="reading"&gt;
            &lt;label for="hobby1"&gt;Reading&lt;/label&gt;
            &lt;input type="checkbox" id="hobby2" name="hobbies" value="traveling"&gt;
            &lt;label for="hobby2"&gt;Traveling&lt;/label&gt;
            &lt;input type="checkbox" id="hobby3" name="hobbies" value="sports"&gt;
            &lt;label for="hobby3"&gt;Sports&lt;/label&gt;

            &lt;label for="bio"&gt;Short Bio:&lt;/label&gt;
            &lt;textarea id="bio" name="bio" rows="5" placeholder="Tell us about yourself"&gt;&lt;/textarea&gt;
        &lt;/fieldset&gt;

        &lt;input type="checkbox" id="terms" name="terms" required&gt;
        &lt;label for="terms"&gt;I agree to the &lt;a href="#terms"&gt;terms and conditions&lt;/a&gt;&lt;/label&gt;

        &lt;input type="submit" value="Register"&gt;
    &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Glossary</h3>
        <ul>
            <li><strong>&lt;textarea&gt;:</strong> Creates a multi-line text input.</li>
            <li><strong>&lt;select&gt;:</strong> Creates a drop-down list.</li>
            <li><strong>&lt;option&gt;:</strong> Defines an option in a drop-down list.</li>
            <li><strong>required:</strong> Specifies that an input field must be filled out before submitting.</li>
            <li><strong>pattern:</strong> Specifies a regular expression the input's value must match.</li>
            <li><strong>min and max:</strong> Define minimum and maximum values for numeric input types.</li>
            <li><strong>&lt;fieldset&gt; and &lt;legend&gt;:</strong> Group related elements in a form with a caption.</li>
        </ul>

        <h3>Exercises</h3>
        <ol>
            <li><strong>Beginner:</strong> Create a contact form with fields for name, email, subject, and message.</li>
            <li><strong>Expert:</strong> Build a survey form using various input types, validation attributes, and grouping related inputs.</li>
        </ol>
    `,

    module8: `
        <h2>Module 8: Multimedia Elements</h2>
        <blockquote>"The more you can create that is musical or magical, the more you can transport people." - Michael Jackson</blockquote>
        <p>Multimedia elements like audio and video enrich user experience by providing dynamic content.</p>

        <h3>Key Tags and Attributes</h3>
        <ul>
            <li><strong>&lt;audio&gt;:</strong> Embeds sound content.</li>
            <li><strong>&lt;video&gt;:</strong> Embeds video content.</li>
            <li><strong>&lt;source&gt;:</strong> Specifies media resources for media elements.</li>
            <li><strong>controls:</strong> Adds playback controls (play, pause, etc.).</li>
            <li><strong>autoplay:</strong> Starts media playback automatically.</li>
            <li><strong>loop:</strong> Repeats the media indefinitely.</li>
            <li><strong>muted:</strong> Mutes the audio output of the media.</li>
            <li><strong>poster:</strong> Specifies an image to show while the video is downloading or until the user hits play.</li>
            <li><strong>preload:</strong> Specifies if and how the author thinks the media should be loaded.</li>
        </ul>

        <h3>Simple Example (Quick Start)</h3>
        <pre>
&lt;audio controls&gt;
    &lt;source src="audio.mp3" type="audio/mpeg"&gt;
    Your browser does not support the audio element.
&lt;/audio&gt;

&lt;video width="320" height="240" controls&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    Your browser does not support the video tag.
&lt;/video&gt;
        </pre>

        <h3>Advanced Example</h3>
        <pre>
&lt;!-- Embedding a Video with Multiple Sources and a Poster Image --&gt;
&lt;video width="640" height="360" controls poster="poster.jpg"&gt;
    &lt;source src="video.mp4" type="video/mp4"&gt;
    &lt;source src="video.webm" type="video/webm"&gt;
    &lt;source src="video.ogv" type="video/ogg"&gt;
    Your browser does not support HTML5 video.
&lt;/video&gt;

&lt;!-- Embedding an Audio Player with Loop and Autoplay --&gt;
&lt;audio controls autoplay loop&gt;
    &lt;source src="music.mp3" type="audio/mpeg"&gt;
    &lt;source src="music.ogg" type="audio/ogg"&gt;
    Your browser does not support the audio element.
&lt;/audio&gt;

&lt;!-- Using the &lt;track&gt; Element for Subtitles --&gt;
&lt;video width="640" height="360" controls&gt;
    &lt;source src="movie.mp4" type="video/mp4"&gt;
    &lt;track src="subtitles_en.vtt" kind="subtitles" srclang="en" label="English"&gt;
    Your browser does not support the video tag.
&lt;/video&gt;
        </pre>

        <h3>Glossary</h3>
        <ul>
            <li><strong>muted:</strong> Mutes the audio by default.</li>
            <li><strong>poster:</strong> Image displayed before the video plays.</li>
            <li><strong>&lt;track&gt;:</strong> Defines text tracks for media elements (subtitles, captions).</li>
            <li><strong>preload:</strong> Specifies if and how the author thinks the media should be loaded.</li>
            <li><strong>srclang:</strong> Specifies the language of the track text data.</li>
            <li><strong>kind:</strong> Specifies the type of text track (subtitles, captions, etc.).</li>
        </ul>

        <h3>Exercises</h3>
        <ol>
            <li><strong>Beginner:</strong> Embed an audio player that plays a music file with controls.</li>
            <li><strong>Expert:</strong> Create a video player with multiple sources, subtitles, and a custom poster image.</li>
        </ol>
    `,

    module9: `
        <h2>Module 9: Advanced HTML Elements</h2>
        <blockquote>"Simplicity is the ultimate sophistication." - Leonardo da Vinci</blockquote>
        <p>This module covers advanced HTML elements that enhance the semantics and accessibility of web content.</p>

        <h3>Key Tags and Attributes</h3>
        <ul>
            <li><strong>&lt;details&gt;:</strong> Creates a disclosure widget that users can open and close.</li>
            <li><strong>&lt;summary&gt;:</strong> Provides a summary, caption, or legend for a &lt;details&gt; element.</li>
            <li><strong>&lt;meter&gt;:</strong> Represents a scalar measurement within a known range (e.g., disk usage).</li>
            <li><strong>&lt;progress&gt;:</strong> Represents the completion progress of a task.</li>
            <li><strong>&lt;time&gt;:</strong> Represents a specific period in time.</li>
            <li><strong>&lt;output&gt;:</strong> Represents the result of a calculation.</li>
            <li><strong>&lt;template&gt;:</strong> Holds HTML content that is not rendered immediately but can be instantiated later using JavaScript.</li>
            <li><strong>&lt;canvas&gt;:</strong> Provides a drawable region in the document for rendering graphics via scripting.</li>
            <li><strong>&lt;svg&gt;:</strong> Embeds Scalable Vector Graphics content.</li>
        </ul>

        <h3>Simple Example (Quick Start)</h3>
        <pre>
&lt;details&gt;
    &lt;summary&gt;More Info&lt;/summary&gt;
    &lt;p&gt;Here is some additional information.&lt;/p&gt;
&lt;/details&gt;

&lt;progress value="70" max="100"&gt;70%&lt;/progress&gt;
        </pre>

        <h3>Advanced Example</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;Advanced HTML Elements&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        canvas {
            border: 1px solid #ccc;
        }
        svg {
            width: 200px;
            height: 200px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Details and Summary&lt;/h2&gt;
    &lt;details&gt;
        &lt;summary&gt;Click to Expand&lt;/summary&gt;
        &lt;p&gt;This is some hidden content that becomes visible when the details element is opened.&lt;/p&gt;
    &lt;/details&gt;

    &lt;h2&gt;Meter and Progress&lt;/h2&gt;
    &lt;p&gt;Disk Usage:&lt;/p&gt;
    &lt;meter value="0.7"&gt;70%&lt;/meter&gt;

    &lt;p&gt;Task Progress:&lt;/p&gt;
    &lt;progress value="45" max="100"&gt;45%&lt;/progress&gt;

    &lt;h2&gt;Time Element&lt;/h2&gt;
    &lt;p&gt;Event Date: &lt;time datetime="2023-12-31"&gt;December 31, 2023&lt;/time&gt;&lt;/p&gt;

    &lt;h2&gt;Canvas Element&lt;/h2&gt;
    &lt;canvas id="myCanvas" width="200" height="100"&gt;Your browser does not support the canvas element.&lt;/canvas&gt;
    &lt;script&gt;
        var canvas = document.getElementById('myCanvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#FF0000';
        ctx.fillRect(0, 0, 200, 100);
    &lt;/script&gt;

    &lt;h2&gt;SVG Element&lt;/h2&gt;
    &lt;svg xmlns="http://www.w3.org/2000/svg"&gt;
        &lt;circle cx="100" cy="100" r="80" stroke="green" stroke-width="4" fill="yellow" /&gt;
    &lt;/svg&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Glossary</h3>
        <ul>
            <li><strong>&lt;details&gt;:</strong> Creates an interactive widget that the user can open and close.</li>
            <li><strong>&lt;summary&gt;:</strong> Provides a summary for the &lt;details&gt; element.</li>
            <li><strong>&lt;meter&gt;:</strong> Represents a measurement within a range.</li>
            <li><strong>&lt;progress&gt;:</strong> Displays progress of a task.</li>
            <li><strong>&lt;time&gt;:</strong> Represents dates and times.</li>
            <li><strong>&lt;canvas&gt;:</strong> Used for drawing graphics via scripting.</li>
            <li><strong>&lt;svg&gt;:</strong> Embeds SVG content for vector graphics.</li>
        </ul>

        <h3>Exercises</h3>
        <ol>
            <li><strong>Beginner:</strong> Use the &lt;details&gt; and &lt;summary&gt; elements to create an FAQ section.</li>
            <li><strong>Expert:</strong> Implement a dynamic chart using the &lt;canvas&gt; element and JavaScript.</li>
        </ol>
    `,

    module10: `
        <h2>Module 10: HTML5 New Features</h2>
        <blockquote>"Innovation distinguishes between a leader and a follower." - Steve Jobs</blockquote>
        <p>HTML5 introduced numerous new features and elements to enhance the capabilities of web pages.</p>

        <h3>Key Features</h3>
        <ul>
            <li><strong>Semantic Elements:</strong> &lt;header&gt;, &lt;footer&gt;, &lt;article&gt;, &lt;section&gt;, &lt;nav&gt;, etc.</li>
            <li><strong>Graphics:</strong> &lt;canvas&gt; and &lt;svg&gt; for drawing graphics.</li>
            <li><strong>Multimedia Support:</strong> Native support for audio and video elements.</li>
            <li><strong>Form Enhancements:</strong> New input types like email, date, color, range, etc.</li>
            <li><strong>Local Storage:</strong> Web Storage API for storing data locally.</li>
            <li><strong>Geolocation:</strong> API to get the geographical position of a user.</li>
            <li><strong>Drag and Drop:</strong> API for draggable elements.</li>
            <li><strong>Web Workers:</strong> Background scripts for handling intensive tasks.</li>
            <li><strong>WebSockets:</strong> Real-time communication with servers.</li>
        </ul>

        <h3>Advanced Example: Geolocation</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;title&gt;HTML5 Geolocation&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h2&gt;Find Your Location&lt;/h2&gt;
    &lt;button onclick="getLocation()"&gt;Get Location&lt;/button&gt;
    &lt;p id="demo"&gt;&lt;/p&gt;
    &lt;script&gt;
        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                document.getElementById("demo").innerHTML = "Geolocation is not supported by this browser.";
            }
        }
        function showPosition(position) {
            document.getElementById("demo").innerHTML = "Latitude: " + position.coords.latitude +
            "&lt;br&gt;Longitude: " + position.coords.longitude;
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Glossary</h3>
        <ul>
            <li><strong>Semantic Elements:</strong> Elements that clearly describe their meaning.</li>
            <li><strong>Web Storage API:</strong> Provides mechanisms for storing key-value pairs on the client side.</li>
            <li><strong>Geolocation API:</strong> Allows web applications to access the user's geographical location.</li>
            <li><strong>Web Workers:</strong> Run scripts in background threads.</li>
            <li><strong>WebSockets:</strong> Provide full-duplex communication channels over a single TCP connection.</li>
        </ul>

        <h3>Exercises</h3>
        <ol>
            <li><strong>Beginner:</strong> Use new form input types like date, color, and range in a form.</li>
            <li><strong>Expert:</strong> Build a web application that uses the Geolocation API and displays a map using the Google Maps API.</li>
        </ol>
    `,

    module11: `
        <h2>Module 11: Best Practices and Accessibility</h2>
        <blockquote>"The power of the Web is in its universality. Access by everyone regardless of disability is an essential aspect." - Tim Berners-Lee</blockquote>
        <p>Creating accessible and well-structured websites is crucial for reaching a wider audience and ensuring usability for all users.</p>

        <h3>Best Practices</h3>
        <ul>
            <li><strong>Semantic HTML:</strong> Use elements according to their meaning.</li>
            <li><strong>Alt Attributes:</strong> Provide alternative text for images.</li>
            <li><strong>ARIA Roles:</strong> Enhance accessibility using Accessible Rich Internet Applications specifications.</li>
            <li><strong>Responsive Design:</strong> Ensure your website looks good on all devices.</li>
            <li><strong>Performance Optimization:</strong> Minimize file sizes and optimize loading times.</li>
            <li><strong>Validation:</strong> Use tools to validate your HTML and CSS code.</li>
        </ul>

        <h3>Accessibility Example</h3>
        <pre>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
    &lt;title&gt;Accessible Webpage&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;header&gt;
        &lt;nav&gt;
            &lt;ul&gt;
                &lt;li&gt;&lt;a href="#home"&gt;Home&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#about"&gt;About&lt;/a&gt;&lt;/li&gt;
                &lt;li&gt;&lt;a href="#contact"&gt;Contact&lt;/a&gt;&lt;/li&gt;
            &lt;/ul&gt;
        &lt;/nav&gt;
    &lt;/header&gt;
    &lt;main&gt;
        &lt;h1&gt;Welcome to Our Website&lt;/h1&gt;
        &lt;img src="image.jpg" alt="Description of image"&gt;
        &lt;p&gt;This is an example of an accessible webpage.&lt;/p&gt;
        &lt;button aria-label="Learn more about our services"&gt;Learn More&lt;/button&gt;
    &lt;/main&gt;
    &lt;footer&gt;
        &lt;p&gt;&amp;copy; 2023 Company Name&lt;/p&gt;
    &lt;/footer&gt;
&lt;/body&gt;
&lt;/html&gt;
        </pre>

        <h3>Glossary</h3>
        <ul>
            <li><strong>Semantic HTML:</strong> Using HTML elements for their intended purpose.</li>
            <li><strong>Accessibility:</strong> Designing websites usable by people with disabilities.</li>
            <li><strong>ARIA:</strong> Accessible Rich Internet Applications, a set of attributes that define ways to make web content more accessible.</li>
            <li><strong>Responsive Design:</strong> Creating web pages that adapt to different screen sizes and devices.</li>
            <li><strong>Validation:</strong> Checking code against standards to ensure it is error-free.</li>
        </ul>

        <h3>Exercises</h3>
        <ol>
            <li><strong>Beginner:</strong> Audit an existing webpage for accessibility issues and suggest improvements.</li>
            <li><strong>Expert:</strong> Rebuild a complex webpage ensuring it meets WCAG (Web Content Accessibility Guidelines) standards.</li>
        </ol>
    `,

    module12: `
        <h2>Module 12: Building a Project</h2>
        <blockquote>"The only way to do great work is to love what you do." - Steve Jobs</blockquote>
        <p>In this final module, we'll apply everything learned by building a complete website project from scratch.</p>

        <h3>Project Overview</h3>
        <p>Create a multi-page website for a fictional company, including a home page, about page, services page, and contact page.</p>

        <h3>Project Requirements</h3>
        <ul>
            <li>Use semantic HTML5 elements.</li>
            <li>Include multimedia elements (images, video).</li>
            <li>Create forms for user input.</li>
            <li>Implement responsive design.</li>
            <li>Ensure accessibility best practices are followed.</li>
            <li>Use external CSS and JavaScript files.</li>
        </ul>

        <h3>Project Structure</h3>
        <pre>
- index.html
- about.html
- services.html
- contact.html
- css/
    - styles.css
- js/
    - script.js
- images/
    - logo.png
    - banner.jpg
    - service1.jpg
    - service2.jpg
- videos/
    - intro.mp4
        </pre>

        <h3>Tips</h3>
        <ul>
            <li>Plan your layout before coding.</li>
            <li>Ensure consistent styling across pages.</li>
            <li>Optimize images and videos for web use.</li>
            <li>Test your website on different devices and browsers.</li>
            <li>Validate your code using online validators.</li>
        </ul>

        <h3>Final Exercise</h3>
        <ol>
            <li><strong>Build the complete website as per the project requirements.</strong></li>
            <li><strong>Deploy your website to a hosting platform or GitHub Pages.</strong></li>
        </ol>
    `,    
// Continue defining modules 6 to 12 similarly...

    glossary: `
               <h2>HTML Glossary</h2>
        <p>This glossary provides definitions for HTML tags, attributes, and keywords in alphabetical order.</p>
        <ul>
            <li><strong>&lt;a&gt;:</strong> Defines a hyperlink.</li>
            <li><strong>&lt;abbr&gt;:</strong> Defines an abbreviation or acronym.</li>
            <li><strong>&lt;address&gt;:</strong> Defines contact information for the author or owner of a document.</li>
            <li><strong>&lt;area&gt;:</strong> Defines an area inside an image map.</li>
            <li><strong>&lt;article&gt;:</strong> Defines independent, self-contained content.</li>
            <li><strong>&lt;aside&gt;:</strong> Defines content aside from the main content (like a sidebar).</li>
            <li><strong>&lt;audio&gt;:</strong> Embeds sound content.</li>
            <li><strong>&lt;b&gt;:</strong> Defines bold text.</li>
            <li><strong>&lt;base&gt;:</strong> Specifies the base URL and/or target for all relative URLs in a document.</li>
            <li><strong>&lt;bdi&gt;:</strong> Isolates a part of text that might be formatted in a different direction from other text outside it.</li>
            <li><strong>&lt;bdo&gt;:</strong> Overrides the current text direction.</li>
            <li><strong>&lt;blockquote&gt;:</strong> Defines a section quoted from another source.</li>
            <li><strong>&lt;body&gt;:</strong> Defines the document's body.</li>
            <li><strong>&lt;br&gt;:</strong> Inserts a single line break.</li>
            <li><strong>&lt;button&gt;:</strong> Defines a clickable button.</li>
            <li><strong>&lt;canvas&gt;:</strong> Used to draw graphics via scripting (usually JavaScript).</li>
            <li><strong>&lt;caption&gt;:</strong> Defines a table caption.</li>
            <li><strong>&lt;cite&gt;:</strong> Defines the title of a work.</li>
            <li><strong>&lt;code&gt;:</strong> Defines a piece of computer code.</li>
            <li><strong>&lt;col&gt;:</strong> Specifies column properties for each column within a &lt;colgroup&gt; element.</li>
            <li><strong>&lt;colgroup&gt;:</strong> Specifies a group of one or more columns in a table for formatting.</li>
            <li><strong>&lt;data&gt;:</strong> Links the given content with a machine-readable translation.</li>
            <li><strong>&lt;datalist&gt;:</strong> Specifies a list of pre-defined options for input controls.</li>
            <li><strong>&lt;dd&gt;:</strong> Describes a term/name in a description list.</li>
            <li><strong>&lt;del&gt;:</strong> Defines text that has been deleted from a document.</li>
            <li><strong>&lt;details&gt;:</strong> Defines additional details that the user can view or hide.</li>
            <li><strong>&lt;dfn&gt;:</strong> Represents the defining instance of a term.</li>
            <li><strong>&lt;dialog&gt;:</strong> Defines a dialog box or window.</li>
            <li><strong>&lt;div&gt;:</strong> Defines a section or division in a document.</li>
            <li><strong>&lt;dl&gt;:</strong> Defines a description list.</li>
            <li><strong>&lt;dt&gt;:</strong> Defines a term/name in a description list.</li>
            <li><strong>&lt;em&gt;:</strong> Defines emphasized text.</li>
            <li><strong>&lt;embed&gt;:</strong> Embeds external content at the specified point in the document.</li>
            <li><strong>&lt;fieldset&gt;:</strong> Groups related elements in a form.</li>
            <li><strong>&lt;figcaption&gt;:</strong> Defines a caption for a &lt;figure&gt; element.</li>
            <li><strong>&lt;figure&gt;:</strong> Specifies self-contained content, like illustrations.</li>
            <li><strong>&lt;footer&gt;:</strong> Defines a footer for a document or section.</li>
            <li><strong>&lt;form&gt;:</strong> Defines an HTML form for user input.</li>
            <li><strong>&lt;h1&gt; to &lt;h6&gt;:</strong> Define HTML headings.</li>
            <li><strong>&lt;head&gt;:</strong> Contains metadata/information for the document.</li>
            <li><strong>&lt;header&gt;:</strong> Defines a header for a document or section.</li>
            <li><strong>&lt;hr&gt;:</strong> Defines a thematic change in the content.</li>
            <li><strong>&lt;html&gt;:</strong> Defines the root of an HTML document.</li>
            <li><strong>&lt;i&gt;:</strong> Defines a part of text in an alternate voice or mood (italicized).</li>
            <li><strong>&lt;iframe&gt;:</strong> Defines an inline frame.</li>
            <li><strong>&lt;img&gt;:</strong> Defines an image.</li>
            <li><strong>&lt;input&gt;:</strong> Defines an input control.</li>
            <li><strong>&lt;ins&gt;:</strong> Defines a text that has been inserted into a document.</li>
            <li><strong>&lt;kbd&gt;:</strong> Defines keyboard input.</li>
            <li><strong>&lt;label&gt;:</strong> Defines a label for an &lt;input&gt; element.</li>
            <li><strong>&lt;legend&gt;:</strong> Defines a caption for a &lt;fieldset&gt; element.</li>
            <li><strong>&lt;li&gt;:</strong> Defines a list item.</li>
            <li><strong>&lt;link&gt;:</strong> Defines the relationship between a document and an external resource (most used to link to style sheets).</li>
            <li><strong>&lt;main&gt;:</strong> Specifies the main content of a document.</li>
            <li><strong>&lt;map&gt;:</strong> Defines a client-side image map.</li>
            <li><strong>&lt;mark&gt;:</strong> Defines marked/highlighted text.</li>
            <li><strong>&lt;meta&gt;:</strong> Defines metadata about an HTML document.</li>
            <li><strong>&lt;meter&gt;:</strong> Defines a scalar measurement within a known range.</li>
            <li><strong>&lt;nav&gt;:</strong> Defines navigation links.</li>
            <li><strong>&lt;noscript&gt;:</strong> Defines an alternate content for users that do not support client-side scripts.</li>
            <li><strong>&lt;object&gt;:</strong> Defines an embedded object.</li>
            <li><strong>&lt;ol&gt;:</strong> Defines an ordered list.</li>
            <li><strong>&lt;optgroup&gt;:</strong> Defines a group of related options in a drop-down list.</li>
            <li><strong>&lt;option&gt;:</strong> Defines an option in a drop-down list.</li>
            <li><strong>&lt;output&gt;:</strong> Defines the result of a calculation.</li>
            <li><strong>&lt;p&gt;:</strong> Defines a paragraph.</li>
            <li><strong>&lt;param&gt;:</strong> Defines a parameter for an object.</li>
            <li><strong>&lt;picture&gt;:</strong> Defines a container for multiple image resources.</li>
            <li><strong>&lt;pre&gt;:</strong> Defines preformatted text.</li>
            <li><strong>&lt;progress&gt;:</strong> Represents the progress of a task.</li>
            <li><strong>&lt;q&gt;:</strong> Defines a short quotation.</li>
            <li><strong>&lt;rp&gt;:</strong> Defines what to show in browsers that do not support ruby annotations.</li>
            <li><strong>&lt;rt&gt;:</strong> Defines an explanation/pronunciation of characters (for East Asian typography).</li>
            <li><strong>&lt;ruby&gt;:</strong> Defines a ruby annotation (for East Asian typography).</li>
            <li><strong>&lt;s&gt;:</strong> Defines text that is no longer correct (strikethrough).</li>
            <li><strong>&lt;samp&gt;:</strong> Defines sample output from a computer program.</li>
            <li><strong>&lt;script&gt;:</strong> Defines a client-side script.</li>
            <li><strong>&lt;section&gt;:</strong> Defines a section in a document.</li>
            <li><strong>&lt;select&gt;:</strong> Defines a drop-down list.</li>
            <li><strong>&lt;small&gt;:</strong> Defines smaller text.</li>
            <li><strong>&lt;source&gt;:</strong> Defines multiple media resources for media elements (&lt;video&gt;, &lt;audio&gt;).</li>
            <li><strong>&lt;span&gt;:</strong> Defines a section in a document (inline).</li>
            <li><strong>&lt;strong&gt;:</strong> Defines important text (usually bold).</li>
            <li><strong>&lt;style&gt;:</strong> Defines style information for a document.</li>
            <li><strong>&lt;sub&gt;:</strong> Defines subscripted text.</li>
            <li><strong>&lt;summary&gt;:</strong> Defines a visible heading for a &lt;details&gt; element.</li>
            <li><strong>&lt;sup&gt;:</strong> Defines superscripted text.</li>
            <li><strong>&lt;table&gt;:</strong> Defines a table.</li>
            <li><strong>&lt;tbody&gt;:</strong> Groups the body content in a table.</li>
            <li><strong>&lt;td&gt;:</strong> Defines a cell in a table.</li>
            <li><strong>&lt;template&gt;:</strong> Defines a template.</li>
            <li><strong>&lt;textarea&gt;:</strong> Defines a multi-line text input control.</li>
            <li><strong>&lt;tfoot&gt;:</strong> Groups the footer content in a table.</li>
            <li><strong>&lt;th&gt;:</strong> Defines a header cell in a table.</li>
            <li><strong>&lt;thead&gt;:</strong> Groups the header content in a table.</li>
            <li><strong>&lt;time&gt;:</strong> Defines a specific time (or datetime).</li>
            <li><strong>&lt;title&gt;:</strong> Defines a title for the document.</li>
            <li><strong>&lt;tr&gt;:</strong> Defines a row in a table.</li>
            <li><strong>&lt;track&gt;:</strong> Defines text tracks for media elements (&lt;video&gt;, &lt;audio&gt;).</li>
            <li><strong>&lt;u&gt;:</strong> Defines text that should be stylistically different from normal text (underlined).</li>
            <li><strong>&lt;ul&gt;:</strong> Defines an unordered list.</li>
            <li><strong>&lt;var&gt;:</strong> Defines a variable.</li>
            <li><strong>&lt;video&gt;:</strong> Embeds video content.</li>
            <li><strong>&lt;wbr&gt;:</strong> Defines a possible line-break.</li>
            <li><strong>alt:</strong> Provides alternative text for an image.</li>
            <li><strong>class:</strong> Specifies one or more class names for an element (used for CSS and JavaScript).</li>
            <li><strong>id:</strong> Specifies a unique id for an element.</li>
            <li><strong>src:</strong> Specifies the URL of the media file.</li>
            <li><strong>href:</strong> Specifies the URL of the linked resource.</li>
            <li><strong>type:</strong> Specifies the type of element or input.</li>
            <li><strong>title:</strong> Specifies extra information about an element (displayed as a tooltip).</li>
            <li><strong>style:</strong> Specifies inline CSS styles for an element.</li>
            <li><strong>data-*</strong>: Custom data attributes.</li>
            <li><strong>rel:</strong> Specifies the relationship between the current document and the linked document.</li>
            <li><strong>target:</strong> Specifies where to open the linked document.</li>
            <li><strong>lang:</strong> Specifies the language of the element's content.</li>
            <li><strong>width and height:</strong> Specifies the width and height of an element.</li>
            <li><strong>charset:</strong> Specifies the character encoding.</li>
            <li><strong>content:</strong> Gives the value associated with the http-equiv or name attribute.</li>
            <li><strong>http-equiv:</strong> Provides an HTTP header for the information/value of the content attribute.</li>
            <li><strong>name:</strong> Specifies the name of an element.</li>
            <li><strong>placeholder:</strong> Specifies a short hint that describes the expected value of an input field.</li>
            <li><strong>required:</strong> Specifies that an input field must be filled out before submitting the form.</li>
            <li><strong>disabled:</strong> Specifies that an input element should be disabled.</li>
            <li><strong>checked:</strong> Specifies that an input element should be pre-selected when the page loads.</li>
            <li><strong>readonly:</strong> Specifies that an input field is read-only.</li>
            <li><strong>multiple:</strong> Specifies that a user can enter more than one value.</li>
            <li><strong>autoplay:</strong> Specifies that the media will start playing as soon as it is ready.</li>
            <li><strong>controls:</strong> Specifies that media controls should be displayed.</li>
            <li><strong>loop:</strong> Specifies that the media will start over again, every time it is finished.</li>
            <li><strong>muted:</strong> Specifies that the audio output of the video should be muted.</li>
            <li><strong>preload:</strong> Specifies if and how the author thinks that the media should be loaded when the page loads.</li>
            <li><strong>poster:</strong> Specifies an image to be shown while the video is downloading, or until the user hits the play button.</li>
        </ul>
    `
};

// Show Documentation Function
function showDocumentation(module) {
    docContainer.innerHTML = modules[module] || `<p>Content not available for this module.</p>`;
    docContainer.scrollTop = 0;
}

// Run Button Logic
const htmlCode = document.getElementById("htmlCode");
const runButton = document.getElementById("runButton");

runButton.addEventListener("click", () => {
    const iframe = document.createElement("iframe");
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.borderRadius = 'var(--border-radius)';
    iframe.style.boxShadow = 'var(--box-shadow)';
    iframe.srcdoc = htmlCode.value;
    docContainer.innerHTML = "";
    docContainer.appendChild(iframe);
});

// Theme Selector Function
function setTheme(theme) {
    if (theme === "light") {
        document.documentElement.style.setProperty("--bg-color", "#f5f5f5");
        document.documentElement.style.setProperty("--text-color", "#333");
        document.documentElement.style.setProperty("--header-color", "#2c3e50");
        document.documentElement.style.setProperty("--sidebar-color", "#34495e");
        document.documentElement.style.setProperty("--sidebar-text-color", "#ecf0f1");
        document.documentElement.style.setProperty("--code-bg-color", "#ffffff");
        document.documentElement.style.setProperty("--code-text-color", "#2c3e50");
        document.documentElement.style.setProperty("--button-bg-color", "#2980b9");
        document.documentElement.style.setProperty("--button-text-color", "#ffffff");
        document.documentElement.style.setProperty("--button-hover-bg-color", "#1abc9c");
    } else if (theme === "dark") {
        document.documentElement.style.setProperty("--bg-color", "#1e1e1e");
        document.documentElement.style.setProperty("--text-color", "#cfcfcf");
        document.documentElement.style.setProperty("--header-color", "#3c3c3c");
        document.documentElement.style.setProperty("--sidebar-color", "#2c2c2c");
        document.documentElement.style.setProperty("--sidebar-text-color", "#cfcfcf");
        document.documentElement.style.setProperty("--code-bg-color", "#2e2e2e");
        document.documentElement.style.setProperty("--code-text-color", "#f5f5f5");
        document.documentElement.style.setProperty("--button-bg-color", "#4a4a4a");
        document.documentElement.style.setProperty("--button-text-color", "#fff");
        document.documentElement.style.setProperty("--button-hover-bg-color", "#5a5a5a");
    } else if (theme === "colorful") {
        document.documentElement.style.setProperty("--bg-color", "#ffffff");
        document.documentElement.style.setProperty("--text-color", "#333");
        document.documentElement.style.setProperty("--header-color", "#ff5733");
        document.documentElement.style.setProperty("--sidebar-color", "#c70039");
        document.documentElement.style.setProperty("--sidebar-text-color", "#ffffff");
        document.documentElement.style.setProperty("--code-bg-color", "#fff0f5");
        document.documentElement.style.setProperty("--code-text-color", "#333");
        document.documentElement.style.setProperty("--button-bg-color", "#900c3f");
        document.documentElement.style.setProperty("--button-text-color", "#fff");
        document.documentElement.style.setProperty("--button-hover-bg-color", "#581845");
    }
}
