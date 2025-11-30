import Head from "next/head";
import Script from "next/script";

import "../styles/globals.css";
import "../styles/grid.css";
import "boxicons/css/boxicons.min.css";

import ABTestHandler from "../components/ABTestHandler";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>Alex K Bikes</title>
        <meta
          name="description"
          content="Bikes E-commerce store landing page"
        />
      </Head>

      {/* Yandex Metric */}
      <Script id="yandex-metrika" strategy="afterInteractive">
        {`
          (function(m,e,t,r,i,k,a){
            m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
          })(window, document,'script','https://mc.yandex.ru/metrika/tag.js','ym');

          ym(105547354, 'init', {
            clickmap:true,
            trackLinks:true,
            accurateTrackBounce:true,
            webvisor:true
          });
        `}
      </Script>

      {/* Yandex Varioqub */}
      <Script id="yandex-varioqub" strategy="afterInteractive">
        {`
          (function(e, x, pe, r, i, me, nt){
            e[i]=e[i]||function(){(e[i].a=e[i].a||[]).push(arguments)},
            me=x.createElement(pe),me.async=1,me.src=r,nt=x.getElementsByTagName(pe)[0],me.addEventListener('error',function(){function cb(t){t=t[t.length-1],'function'==typeof t&&t({flags:{}})};Array.isArray(e[i].a)&&e[i].a.forEach(cb);e[i]=function(){cb(arguments)}}),nt.parentNode.insertBefore(me,nt)
          })(window, document, 'script', 'https://abt.s3.yandex.net/expjs/latest/exp.js', 'ymab');
          ymab('metrika.105547354', 'init');
        `}
      </Script>
      
      <ABTestHandler />
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;
