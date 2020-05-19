
Go to line number using vs code : 
#### ctrl + g then line number  



### Async and defer
`<script async defer src="script.js"></script>` to load script asynchronously and execute/run script after page loads.

* Without async or defer, browser will run your script immediately, before rendering the elements that's below your script tag.

* With async (asynchronous), browser will continue to load the HTML page and render it while the browser load and execute the script at the same time.

* With defer, browser will run your script when the page finished parsing. (not necessary finishing downloading all image files. This is good.)

**htmlCollection to array using Array.from(htmlCollection)**

## useful posts
* [async-defer](https://stackoverflow.com/questions/10808109/script-tag-async-defer)
* [htmlCollection to array](https://stackoverflow.com/questions/222841/most-efficient-way-to-convert-an-htmlcollection-to-an-array)
