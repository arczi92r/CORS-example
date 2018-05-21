
Mamy dostępne dwie motedy tworzenia wyrarzeń regularnych.

```js
const reg = new RegExp("pani?" , "gi")

lub

const reg = /pani?/gi
```

exaple : 
555-12
12312

^[\d]{3}[-]{0,1}[\d]{2}$   


example : 
słowa zawieracjace jeden lub wiecej znaków zapytania.

siamanko?
elo
a??

^[a-zA-Z0-9]+\?{1,}$

lub

^[a-zA-Z0-9]+\?+$


example : 
+48 123-123-123
+48123 123 123
+48 123 222 222
+48123123123
123-123-123
123 123-123



^[+48]{0,}([\ \-]?[0-9]{3}){3}$
