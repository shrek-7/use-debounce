## use-debounce
Created with CodeSandbox


### concept
Debouncing in JavaScript is a practice used to improve browser performance. There might be some functionality in a web page which requires time-consuming computations. If such a method is invoked frequently, it might greatly affect the performance of the browser, as JavaScript is a single threaded language. Debouncing is a programming practice used to ensure that time-consuming tasks do not fire so often, that it stalls the performance of the web page. In other words, it limits the rate at which a function gets invoked.
https://www.geeksforgeeks.org/debouncing-in-javascript/


### Application
Debouncing can be applied in implementing suggestive text, where we wait for the user to stop typing for a few seconds before suggesting the text. thus, on every keystroke, we wait for some seconds before giving out suggestions.
Another application of debouncing is in content-loading webpages like Facebook and Twitter where the user keeps on scrolling. In these scenarios, if the scroll event is fired too frequently, there might be a performance impact, as it contains lots of videos and images. Thus the scroll event must make use of debouncing.

### how to use
we can pass the value that we want to debounce in the useDebounce effect, along with the delay we want. Then add an useEffect for the return value from useDebounce hook.

 let debouncedVal = useDebounce('hello', 1000);
 useEffect(() => {
  // control goes here whenever value changes.
 }, [ debouncedVal ])
 
 
