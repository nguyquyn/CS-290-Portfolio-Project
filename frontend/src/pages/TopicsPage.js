import React from 'react';

function TopicsPage() {
    return (
        <>
        <article>
                <h2>Web Development Concepts</h2>
                <p>Here is a summary of all the concepts learned in the course, CS 290: Web Development at Oregon State University. Please click on any of the tabs below to be taken to the corresponding section in the page.</p>
                <nav class="local">
                    <a href="#webServers">Web Servers</a>
                    <a href="#frontendDesign">Frontend Design</a>
                    <a href="#optimizingImages">Optimizing Images</a>
                    <a href="#favicons">Favicons</a>
                    <a href="#css">Cascading Stylesheets</a>
                    <a href="#forms">Forms</a>
                    <a href="#express">Express</a>
                    <a href="#javaScript">JavaScript</a>
                </nav>

                <article id="webServers">
                    <h3>Web Servers</h3>
                    <p>In relation to websites and servers, the <strong>index is the designated homepage of a web application hosted on a server.</strong> For example, index.html in 
                        the root directory is the default home page hosted on the Apache web server that is used by OSU's Engineering Department. However, 
                        other servers can be used, such as Microsoft's NET platform, which uses default.html or call for index.js or index.php. The web application will
                        return these files when the GET request is received for the URL.</p>
                    <p>The <strong>Request URL</strong> for both files is different, as expected. The <strong>Request Method: GET and Status Code 200</strong> are the same for both files. Overall, the file on 
                        the web server provides more detail than the file on the local computer. For example, the <strong>Request Headers section</strong> for the file on the local computer does 
                        not provide information such as the connection, content-length, host, cookies, etc. compared to the file on the server. The file on the web server also 
                        contains information on the <strong>Remote Address</strong> and the server used, which is Apache.</p>
                    <p>The <strong>boilerplate HTML tags</strong> used for this web application calls for the main.css and main.js files in the link and script tags, however, these files do not exist,
                        hence why these files both have the Status Code 404 Not Found. The favicon.ico file has a Status Code 200 because it is automatically provided by the OSU 
                        server in which this web application is hosted on.</p>
                    <p>The URL of the web file is https://web.engr.oregonstate.edu/~nguyquyn/a5-nguyquyn/. The <strong>scheme</strong> is https, <strong>subdomain</strong> is web.engr, 
                        <strong>host domain</strong> is oregonstate.edu, and the <strong>resources</strong> are /~nguyquyn/a5-nguyquyn/.</p>
                </article>
                <article id="frontendDesign">
                    <h3>Frontend Design</h3>
                    <p>The <strong>frontend design</strong> is what users see when they use a website. It is a combination of the visual design, the interactive experience, and 
                        the graphical user-interface (GUI). There is importance placed on a consistent color scheme, choosing fonts and photos, and a navigation system
                        designed that is straight-forward and simple for users.</p>
                    <dl>
                        <dt><strong>Effective</strong></dt>
                        <dd>Users should be able to meet their goals when using a website.</dd>
                        <dt><strong>Efficient</strong></dt>
                        <dd>Users should be able to perform tasks simply with the least amount of steps. </dd>
                        <dt><strong>Easy to Navigate</strong></dt>
                        <dd>This is important for first-time users. When using the website, users should immediately understand how to locate what they need by either clicking or searching. It is also important that the navigation system is easy to understand so that users can remember how to use the website next time. </dd>
                        <dt><strong>Error-Free</strong></dt>
                        <dd>The website should not have any errors that would disrupt the user's experience. It should be available and accessible at any time. To improve the website, research can be done by observing the different types of errors
                            made by users when they use the website.</dd>
                        <dt><strong>Enjoyable/Engaging</strong></dt>
                        <dd>The website should be enjoyable to use and fit the needs of the intended users and industry. It should be engaging for users
                            to want to come back and continue to use this website.</dd>
                    </dl>
                    <p><strong>Page layout tags</strong> are important because they define the appearance of a website and help users navigate through
                        the different pages. They break up the flow of content in the website and help machines such as a search engine identify 
                        which area of the page includes which components. For example, a page includes a header, nav, main, section, and footer.</p>
                    <ol>
                        <li><strong>External content</strong> can be linked by using the anchor element and specifying 
                        the desired URL. The anchor element creates a hyperlink where when users click on the link, they will be taken to the URL.</li>
                        <li><strong>Internal content</strong> can also be linked by using the anchor element, which links from one text item to another text item within
                        the same page by using IDs. When the ID is an attribute, its value can be used as a hashtag to define the reference for an anchor so that when 
                        the user clicks on the link, they will be taken to a different part of the page. For example, &lt;a href="#topic" &gt;Topic&lt;/a&gt;. The anchors
                        can also be used within a local navigation block to jump to different sections of the page.</li>
                        <li>Anchors can link from <strong>page-to-page</strong> by simply specifying the desired path of the new page. For example, &lt;a href="index.html" &gt;Home&lt;/a&gt;. 
                        The anchors can also be used in a global navigation block, where they are styled like buttons and can be clicked on to be taken to different pages within the website.</li>
                    </ol>
                </article>
                <article id="optimizingImages">
                    <h3>Optimizing Images</h3>
                    <p>The 6 major specifications of images for the web are <strong>descriptive file names, small file size, exact dimensions, correct file format,
                        reduced resolution, and color modes.</strong> First, images should have a descriptive file name to improve search engine optimization (SEO). 
                        This helps search engines categorize the images when users are searching for related images. If possible, the file names should include 
                        who, what, when, and where. For a faster load time, files should also be the smallest file size as possible. Only high-resolution images should be
                        provided for devices with high-resolution capabilities. There are two types of image compressions, lossy and lossless compression. The difference
                        is in there is no degradation of the visual quality or if the image is pixelated. Images should also be cropped and reduced to fit the exact dimensions
                        of the space in the webpage, otherwise, it can cause a slower load time. Files should have the correct file format, where online photos are .JPG, 
                        line-art images are .GIF or 8-bit.PNG, and graphics are usually 24-bit .PNG. Reduced resolution is for monitors that render between 72 or 300+ pixels per inch. The 
                        older default is 72ppi, but higher resolutions are available now. The color modes, RGB and Indexed, include file formats: .PNG, .JPG, .SVG, .WebP, and .GIF.</p>
                    <p>The file format for <strong>online photos are .JPG and .WebP </strong>as they can compress the images down to small file sizes and still remain rectangular. However, higher compression 
                        reduces image quality. .WebP files also allow for transparent backgrounds through an alpha channel. <strong>Line-art images such as logos and icons are .GIF and occasionally 8-bit .PNG files.</strong> 
                        .GIF files can have 8-bit transparency and edges anti-alias to one background matte color. Examples of .GIF files are short photo/video sequences or animations. .PNG files are best 
                        for biomorphic shapes, line art, and solid colors. They can be placed over a variety of colors without distortion. The <strong>.SVG files </strong>are for 2D, interactive, or animated
                        images. They are mathematically-derived and marked with XML.</p>
                </article>
                <article id="favicons">
                    <h3>Favicons</h3>
                    <p> <strong>Favicons</strong> are symbols that can be used to quickly identify a company's website. To create favicons, it first begins with a symbol which then gets modified so that it 
                        can work on different devices such as a cellphone, smartwatch, or search engine. Then, the favicon is saved in multiple file formats to work for the different browsers and 
                        devices that users will use. The browser will then pick up the files and will save the icon and anchor to a device screen, search engine list, or bookmark tab. The favicons
                        will show up on the browser tabs. Devices such as the phone, tablet, or smartwatch can also display favicons from applications and websites. Favicons 
                        can be saved in multiple file formats: .GIF, .PNG, .ICO, and .SVG. However, the most common file formats are .SVG and .PNG. If it is an older browser such as Internet 
                        Explorer, .ICO can be used.</p>
                </article>
                <article id="css">
                    <h3>Cascading Stylesheets</h3>
                    <p>Stylesheets are important for websites and applications as they <strong>redefine the basic structure, content, and dynamic components given by the HTML and JavaScript files.</strong> 
                        They are in charge of how the structure, content, and components of an application appear and operate. Having a stylesheet can <strong>improve usability, readability, legibility, and comply 
                        with a company's requirements.</strong> Stylesheets are not only in control of background colors, fonts, font colors, text size, but also the height, width, margin, padding of elements, and much more.</p>
                    <p>The most efficient and preferred method is by using <strong>external CSS files</strong>. These stylesheets can be linked in the global &lt;head&gt; 
                        area of the website and will provide styles for all the HTML pages that they are linked to. Styles can also be <strong>embedded in the &lt;style&gt; &lt;/style&gt; tag or 
                        inline with an element using an attribute and value.</strong> For example, within the HTML file, &lt;h1 style="color:blue"&gt;. It is also possible to use <strong>JavaScript 
                        template literals</strong> within a JavaScript function, such as defining a variable with a value of the style of a heading and changing the color. In <strong>regular JavaScript, 
                        styles can be incorporated by using the Document Object Model (DOM).</strong> For example, having the code look at the HTML file to find a heading tags and updating its style.</p>
                </article>
                <article id="forms">
                    <h3>Forms</h3>
                    <p>A goal of accessible forms is to <strong>provide clear instructions</strong> above the form and in the labels. It also lets <strong>users know which fields 
                        are required to fill out and the purpose of the form</strong>. The <strong>first field should be set to autofocus</strong> so that users can type without using the 
                        keyboard. <strong>Each form control should be able to be filled in using the keyboard</strong> for those users that do not have a mouse or trackpad. 
                        <strong>Tab indexing</strong> is important for complex forms, so users can have a clear understanding of the order in which the fields should be filled out. 
                        Lastly, each <strong>validation message</strong> should be screen readable, unlike the built-in HTML browser message.</p>
                    <p>To add a form to an HTML document, the tag <strong>&lt;form&gt;</strong> can be used. The two attributes for the <strong>form tag is the action and method.</strong> The action 
                        attribute specifies where the request from the form should be sent. If the action attribute is missing, then the form is submitted to the same
                        URL from where it was downloaded. It can be a relative or absolute path. The method attribute specifies the HTTP method to be used in the request sent when the 
                        form is submitted. These values are usually GET or POST, but if no attribute is specified, then the attribute is defaulted to GET. Forms that are more complex 
                        will use <strong>&lt;fieldset&gt; or &lt;legend&gt;</strong> to separate form controls into groups. This can help the visually impaired. The fieldset tag is set
                        to have a gray border and some padding, while the legend tag should include prompts that help users understand the group's purpose. Another important tag is 
                        <strong>&lt;label&gt;</strong>. This helps users understand what they need to enter in the form field. The <strong>&lt;input&gt;</strong> tag is used for data-input. It is associated
                        with the type attribute, where the appearance and usage can be changed. These attributes include <strong>email, checkboxes, radio buttons, select, textarea, 
                        and button.</strong> Other tags include select for drop-down lists, text area where users can write lines of text, and button used for submitting a form.</p>
                    <p>The form has a default gray border when using the fieldset property, but this can be changed to another color, type, or width. <strong>Margins</strong> can also be added between the 
                        form elements so that the fields do not look compressed. <strong>Padding</strong> can be added to keep the labels and controls from touching the edges. Each
                        fieldset has a <strong>legend</strong> that help describe its group of form controls or prompts the user. To display 
                        labels, the <strong>display property</strong> can be used to change the font size or margins. The font-size, padding, font-family can also be edited for the input, button, 
                        textarea, or select. <strong>Autofocus</strong> is an input attribute that places the cursor in the first field, which allow users to fill out the field without needing the 
                        use of a mouse click. Users can be alerted which fields are required to be filled out by styling <strong>required fields</strong>, such as using an asterisk and the color red. If users need to meet 
                        a required pattern, the border color, can be changed to green when what they inputted is valid. Texts in placeholders can be edited to improve contrast once there are inputs. Checkboxes or radio buttons 
                        can be updated to change the look depending on if they are unchecked or checked. If the user's input relies on another, the <strong>disabled and enabled attributes</strong> can be used to
                        keep certain fields locked until the user provides the required input.</p>
                </article>
                <article id="express">
                    <h3>Express</h3>
                    <p><strong>Node</strong> is used to develop and run server-side web applications in JavaScript. It is an open source, cross-platform environment and can be run within multiple operating systems such as 
                        macOS, Microsoft Windows, and Linux. It also provides a library of different JavaScript modules, which simplifies the development of web applications. The <strong>Node Package
                        Manager (npm)</strong> is an online repository for publishing Node packages. It is a command-line utility that can install packages from the online repository and manage the 
                        dependencies for projects. To build a web application using Node, frameworks such as <strong>Express</strong> are needed. It provides Application Programming Interface (APIs) of various 
                        tasks that a web application will need to accomplish. Express helps to get, post, and delete data as well as define the ports and routes the data will take. Static files from
                        a public folder and templates can be created to build responses that incorporate the data. Middleware can handle requests within the route that the data takes.</p>
                </article>
                <article id="javaScript">
                    <h3>JavaScript</h3>
                    <p>The <strong>main data types are a number, boolean value, string, symbol, special values, and an object.</strong> Boolean values include either true or false, and special values can be 
                        undefined or null. <strong>Objects</strong> are the only non-primitive type of values in JavaScript. It is a set of name-value pairs where users can create, read, update, and delete
                        properties of the object. <strong>Arrays</strong> are objects whose properties are of the string data type, while the values in an array can be of any JavaScript data type. If users try to access an index
                        in the array where there is no element, the value undefined will be returned. Different methods can be used on arrays such as Array.isArray(), length, or includes. An array 
                        can also use push and pop methods to add or remove elements of the array. <strong>JavaScript Object Notation (JSON)</strong> is a format used to exchange data between applications and is independent
                        of any programming language. Therefore, programs can exchange data even when written in different languages such as Python, Java, C#, etc. can be used to provide libraries for JSON. JSON is able to map an 
                        object in a program to a string and create an object in a program from a string, both in the JSON format. The two common methods for using JSON is JSON.stringify() and JSON.parse().
                        <strong>Conditionals and loops</strong> are used to evaluate if the provided expressions are true and therefore will execute the statements. Conditionals can be done using if and switch statements, while 
                        loops are done using while and do while loops. Looping with for statements is also possible with a regular for loop, as well as the for of and for in loop. JavaScript uses <strong>object-oriented programming</strong> 
                        where objects have an identity, state, and behavior. In JavaScript, these objects can be created without declaring classes. <strong>Functional programming</strong> is assigning functions to variables, 
                        defining functions that receive other functions as arguments, and defining functions that can return other functions.</p>
                </article>
            </article>
</>
    );
}

export default TopicsPage;