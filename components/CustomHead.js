// components/CustomHead.js
import Head from "next/head";

const CustomHead = ({ attributes }) => {
  return (
    <Head>
      <meta charSet="utf-8" />
      <title>{attributes.title}</title>
      <meta property="og:title" content={attributes.title} />
      <meta property="twitter:title" content={attributes.title} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="generator" content="Webflow" />

      <style>
        {`
          @media (min-width: 992px) {
            html.w-mod-js:not(.w-mod-ix) [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"],
            html.w-mod-js:not(.w-mod-ix) [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"],
            html.w-mod-js:not(.w-mod-ix) [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {
              opacity: 0;
            }
          }
          @media (max-width: 991px) and (min-width: 768px) {
            html.w-mod-js:not(.w-mod-ix) [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"],
            html.w-mod-js:not(.w-mod-ix) [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"],
            html.w-mod-js:not(.w-mod-ix) [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {
              opacity: 0;
            }
          }
          @media (max-width: 767px) and (min-width: 480px) {
            html.w-mod-js:not(.w-mod-ix) [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"],
            html.w-mod-js:not(.w-mod-ix) [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"],
            html.w-mod-js:not(.w-mod-ix) [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {
              opacity: 0;
            }
          }
          @media (max-width: 479px) {
            html.w-mod-js:not(.w-mod-ix) [data-w-id="f4ce3d7d-a14a-27f3-e73c-b1cdad93096a"],
            html.w-mod-js:not(.w-mod-ix) [data-w-id="e0aa1eb3-10e0-5e88-a7c0-868f1999d86c"],
            html.w-mod-js:not(.w-mod-ix) [data-w-id="f939a47b-08d9-4f31-3fc5-55af3fda55bc"] {
              opacity: 0;
            }
          }
        `}
      </style>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        rel="shortcut icon"
        type="image/x-icon"
        href="https://inboxpirates.com/favicon.ico"
      />
      <link
        rel="apple-touch-icon"
        href="https://inboxpirates.com/favicon.ico"
      />
    </Head>
  );
};

export default CustomHead;
