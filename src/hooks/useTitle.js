import { useEffect } from "react";

export const useTitle = (title) => {
  useEffect(() => {
    document.title = `Always Stream | ${title}`;
  }, [title]);
};
