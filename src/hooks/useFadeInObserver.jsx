// import * as React from "react";

// const useFadeInObserver = (options = {}, callback) => {
//   const [isIntersecting, setIsIntersecting] = React.useState(false);
//   const elementRef = React.useRef(null);

//   React.useEffect(() => {
//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry.isIntersecting) {
//         setIsIntersecting(true);
//         callback && callback(entry);
//         observer.unobserve(elementRef.current);
//       }
//     }, options);

//     if (elementRef.current) {
//       observer.observe(elementRef.current);
//     }

//     return () => {
//       if (elementRef.current) {
//         observer.unobserve(elementRef.current);
//       }
//     };
//   }, [callback, options]);

//   return [elementRef, isIntersecting];
// };

// export default useFadeInObserver;
