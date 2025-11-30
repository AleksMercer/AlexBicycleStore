import { useEffect } from "react";

const ABTestHandler = () => {
  useEffect(() => {
    const checkVarioqub = () => {
      if (typeof window.ymab !== "undefined") {
        initABTest();
      } else {
        setTimeout(checkVarioqub, 100);
      }
    };

    const initABTest = () => {
      window.ymab("metrika.105547354", "getFlags", function (flags) {
        console.log("Varioqub flags:", flags);

        const bestSellerBadges =
          document.querySelectorAll(".best-seller-badge");
        const buyNowBtns = document.querySelectorAll(".buy-now-btn");

        if (bestSellerBadges.length > 0 && flags && flags.showBestSeller) {
          bestSellerBadges.forEach((badge) => {
            badge.style.display = "block";
          });

          buyNowBtns.forEach((btn) => {
            btn.setAttribute("data-test-variant", "with-badge");
          });
        } else {
          buyNowBtns.forEach((btn) => {
            btn.setAttribute("data-test-variant", "without-badge");
          });
        }

        buyNowBtns.forEach((btn) => {
          btn.addEventListener("click", function () {
            const variant = this.getAttribute("data-test-variant") || "unknown";
            window.ym(105547354, "reachGoal", "buy_now_click");
            console.log(`Clicked buy now button, variant: ${variant}`);
          });
        });
      });
    };

    checkVarioqub();
  }, []);

  return null;
};

export default ABTestHandler;
