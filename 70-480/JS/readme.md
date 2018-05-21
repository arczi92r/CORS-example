
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
