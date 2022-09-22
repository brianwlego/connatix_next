import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";

const Connatixel = ({ playerId }) => {
  const initCnxelHeadScript = () => {
    try {
      !(function (n) {
        if (!window.cnx) {
          (window.cnx = {}), (window.cnx.cmd = []);
          var t = n.createElement("iframe");
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
    } catch (error) {
      console.log("Some Connatix init error:", error);
    }
  };
  initCnxelHeadScript();

  return <Player playerId={playerId} />;
};

const Player = ({ playerId }) => {
  const initCnxelBodyScript = () => {
    new Image().src = `https://capi.connatix.com/tr/si?token=${playerId}&cid=f9509d53-804e-427d-a0bc-1204c0a3bcb1`;
    cnx.cmd.push(function () {
      cnx({ playerId: playerId }).render('2b7da8cc5b074ddaa13b02527f74516f');
    });
  };
  useEffect(() => {
    initCnxelBodyScript();
  }, []);

  return (
    <div className="cnx" id={"cnx" + playerId}>
      <div id='2b7da8cc5b074ddaa13b02527f74516f'></div>
    </div>
  );
};

Connatixel.propTypes = {
  playerId: PropTypes.string,
};

export default memo(Connatixel);

