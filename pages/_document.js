// pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function MyDocument () {

    return (
      <Html lang="en" data-wf-domain="loti-wcopilot.webflow.iox" data-wf-page="321">
        <Head>
          {/* Add custom meta tags, links, and other head elements here */}
          <meta charSet="utf-8" />
          <title>Loti - Webflow HTML website template</title>
          <meta content="Loti - Webflow HTML website template" property="og:title" />
          <meta
            content="Loti - Webflow HTML website template"
            property="twitter:title"
          />
          <meta content="width=device-width, initial-scale=1" name="viewport" />
          <meta content="Webflow" name="generator" />
          <link rel="stylesheet" href="./assets/css/global.css" />
          <style
            dangerouslySetInnerHTML={{
              __html:
                '\n      @media (min-width: 992px) {\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {\n          opacity: 0;\n        }\n      }\n      @media (max-width: 991px) and (min-width: 768px) {\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {\n          opacity: 0;\n        }\n      }\n      @media (max-width: 767px) and (min-width: 480px) {\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {\n          opacity: 0;\n        }\n      }\n      @media (max-width: 479px) {\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {\n          opacity: 0;\n        }\n      }\n    '
            }}
          />
          <link href="https://fonts.googleapis.com" rel="preconnect" />
          <link
            href="https://fonts.gstatic.com"
            rel="preconnect"
            crossOrigin="anonymous"
          />
          <link
            href="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65c356cb887a9c5cfdff7607_Loti%20Logo%20Favicon.png"
            rel="shortcut icon"
            type="image/x-icon"
          />
          <link
            href="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/65c5d632a01a14b103d283d4_Webclip%20(2).png"
            rel="apple-touch-icon"
          />
        </Head>
        <body>
        <div
            data-animation="over-left"
            className="navbar w-nav"
            data-easing2="ease"
            data-easing="ease"
            data-collapse="medium"
            data-w-id="abfcf9f2-279d-dc11-2d82-4b2872cc13b5"
            role="banner"
            data-duration={400}
            data-doc-height={1}
          />
          <Main />
          <NextScript />
          {/* Add external scripts here */}
        
          <script
            src="https://d3e54v103j8qbb.cloudfront.net/js/jquery-3.5.1.min.dc5e7f18c8.js?site=65a6e5c0e8f5596f33c0ff0a"
            type="text/javascript"
            integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
            crossOrigin="anonymous"
          />
          <script
            src="https://d3e54v103j8qbb.cloudfront.net/js/webflow.js?site=65a6e5c0e8f5596f33c0ff0a"
            type="text/javascript"
          />
          <script src="/public/global.js" />
        </body>
      </Html>
    );
}
