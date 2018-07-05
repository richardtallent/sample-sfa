## Example Single File Application in Vue

I had an idea for an app, but I wanted to run it on any desktop or mobile device without worrying about user privileges, runtime environments, etc. Since it needs to do little in the way of file processing and needs no external API access, it struck me that a simple web application would do -- *i.e.*, an HTML file running *locally* in the user's web browser. The user could run it from the web server, and if they like it, just save the HTML file and use it offline. It'll also run directly from an email attachment, which is handy.

Locally-running web apps are not a novel idea -- TiddlyWiki is a well-known example. I wasn't able to find a common term of art for this, so I went with "Single File Application" (SFA), inspired by Single Page Application and Single File Component. Maybe it'll catch on.

I wanted to bring my preferred toolchain to the table -- webpack, Vue, Babel, etc. -- and these tools, in their default configuration, assume a server-based web application, where dynamically loading "bundles" of JavaScript/CSS/etc. is preferable to loading monolithic code files. For this app, however, I wanted the opposite -- a single HTML file, no external files, making it easy to transport, update, etc. I was also looking to play around with the new Vue CLI tools (currently in RC), and this was a good opportunity to do so.

Anyway, this is the result -- a tweak of the default Vue application template, modified to export a **standalone HTML file** containing the entire application. I figured it might be of use to someone else, so...here it is.

The key learnings from this little experiment:

- HtmlWebpackPlugin can inject the final JavaScript directly in the HTML file (rather than just a script tag *referencing* the bundle), but it needs a special lodash template to loop through the final JavaScript resources. The example in the plugin's docs uses Jade, so I had to back-translate to HTML/lodash.
- I had to disable two plugins enabled by Vue by default ("preload" and "prefetch") to avoid script tags referencing the (unneeded) "all.js" bundle.
- Setting the various plugins to only split chunks or avoid inlining for very large files seems to do the trick to roll everything into "all.js" (which then rolls into "index.html" via HtmlWebpackPlugin).
- There's a lot of bad info out there on how to inline the favicon.ico file. I finally found something that works. I have not, however, tried to do the same for all of the similar shortcut/app icon meta tags for iPhone, etc.
- The `Vue.config.js` takes some getting used to, and I have a feeling some of the tweaks I made there were done in a more brittle way than necessary.
- The Vue UI is cool, but in its current version, VERY SLOW to update or scroll through the console records. And a bit confusing when it comes to "importing" projects and whatnot, when I've gotten used to the idea of everything run from the CLI having the context of the current working directory.

Final touches not done yet:
- I have not yet figured out how to tell webpack to *not* emit the final bundle ("all.js"), but it can be safely deleted/ignored.
- Similarly, regardless of the Vue UI setting, I can't seem to disable the source map generation.
- I'll need to update this when Vue CLI 3 final rolls out.

If you have any suggestions for making any of this better (cleaner configuration files, etc.), please let me know! SFAs are an extreme edge case, but I do think they could be very handy in a number of cross-platform, cross-user situations, especially now that the UX of web apps is so close to native applications. And now that I know how to build one with all of the tools I already use daily, I'm sure it'll be a hammer in search for a few nails.

Side note -- this method could also be very useful for creating HTML/JS/CSS-based Excel plugins, a fairly new capability in Excel.
