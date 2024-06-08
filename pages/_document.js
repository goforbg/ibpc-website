// pages/_document.js
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import $ from "jquery";

export default function MyDocument() {
  return (
    <Html
      lang="en"
      data-wf-domain="loti-wcopilot.webflow.iox"
      data-wf-page="321"
    >
      <Head>
        {/* Add custom meta tags, links, and other head elements here */}
        <meta charSet="utf-8" />

        <style
          dangerouslySetInnerHTML={{
            __html:
              '\n      @media (min-width: 992px) {\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {\n          opacity: 0;\n        }\n      }\n      @media (max-width: 991px) and (min-width: 768px) {\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {\n          opacity: 0;\n        }\n      }\n      @media (max-width: 767px) and (min-width: 480px) {\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {\n          opacity: 0;\n        }\n      }\n      @media (max-width: 479px) {\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"] {\n          opacity: 0;\n        }\n        html.w-mod-js:not(.w-mod-ix)\n          [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {\n          opacity: 0;\n        }\n      }\n    '
          }}
        />
        <link href="https://fonts.googleapis.com" rel="preconnect" />

        <link rel="stylesheet" href="./assets/css/global.css" />

        <link
          href="https://fonts.gstatic.com"
          rel="preconnect"
          crossOrigin="anonymous"
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

        <link
          href="https://assets-global.website-files.com/65a6e5c0e8f5596f33c0ff0a/css/loti-wcopilot.webflow.d88a3b059.css"
          rel="stylesheet"
          type="text/css"
        />

        <Script
          src="https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js"
          type="text/javascript"
        ></Script>

        <Script
          dangerouslySetInnerHTML={{
            __html: `WebFont.load({ google: { families: [ "Lato:100,100italic,300,300italic,400,400italic,700,700italic,900,900italic", "Inter Tight:300,regular,500,600,700,800,900" ], }, });`
          }}
        />
        <Script
          dangerouslySetInnerHTML={{
            __html: `!(function (o, c) { var n = c.documentElement, t = " w-mod-"; (n.className += t + "js"), ("ontouchstart" in o || (o.DocumentTouch && c instanceof DocumentTouch)) && (n.className += t + "touch"); })(window, document);`
          }}
        />
        <script src="/jquery.js" />

        <script src="/global.js" />


      </body>
    </Html>
  );
}
