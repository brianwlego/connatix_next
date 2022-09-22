import '../styles/global.css'
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* {<Script id="connatix-loader">
        {`
        !(function (n) {
          console.log('running script tag');
          if (!window.cnx) {
            (window.cnx = {}), (window.cnx.cmd = []);
            var t = n.createElement("iframe");
            t.src = "javascript:false";
            (t.display = "none"),
              (t.onload = function () {
                var n = t.contentWindow.document,
                  c = n.createElement("script");
                (c.src =
                  "//cd.connatix.com/connatix.player.js?cid=f9509d53-804e-427d-a0bc-1204c0a3bcb1"),
                  c.setAttribute("async", "1"),
                  c.setAttribute("type", "text/javascript"),
                  n.body.appendChild(c);
              }),
              n.head.appendChild(t);
          }
        })(document);
        `}
      </Script>} */}

      <Component {...pageProps} />
    </>
  );
}
