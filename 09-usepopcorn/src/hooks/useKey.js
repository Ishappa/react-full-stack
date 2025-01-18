import { useEffect } from "react";

export function useKey(key, action) {
    useEffect(
        function () {
          function callback(e) {
            if (e.code.toLowerCase() === key.toLowerCase()) {
              action();
              // console.log("closing");
            }
          }
          document.addEventListener("keydown", callback);
    
          // clean up function to remove event listener--------------------
          return function () {
            document.removeEventListener("keydown", callback);
          };
        },
        [action, key]
      );
}
