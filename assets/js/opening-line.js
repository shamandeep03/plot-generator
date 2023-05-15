function populateSuggestions() {
     var suggestions = new Array();
     suggestions["number"] = new Array(
       "1",
       "2",
       "3",
       "4",
       "5",
       "6",
       "7",
       "8",
       "9",
       "10",
       "11",
       "12",
       "13",
       "14",
       "15",
       "16",
       "17",
       "18",
       "19",
       "20"
     );
     return suggestions;
   }
   shuffle = function (o) {
     for (
       var j, x, i = o.length;
       i;
       j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x
     );
     return o;
   };
   function suggest(whichType, whichBox) {
     suggestions = populateSuggestions();
     shuffle(suggestions[whichType]);
     var newValue = suggestions[whichType][0];
     document.getElementsByName(whichBox)[0].value = newValue;
   }
   
   function getRandom(arr, n) {
     var result = new Array(n),
       len = arr.length,
       taken = new Array(len);
     if (n > len)
       throw new RangeError("getRandom: more elements taken than available");
     while (n--) {
       var x = Math.floor(Math.random() * len);
       result[n] = arr[x in taken ? taken[x] : x];
       taken[x] = --len in taken ? taken[len] : len;
     }
     return result;
   }
   function makeidea() {
     let result = document.getElementById("persondetailsResult");
     let form = document.forms[0];
     fetch("./opening.json")
       .then((res) => res.json())
       .then((n) => {
         result.innerHTML = "";
         let data = getRandom(n['data'], form.number.value);
         for (let i = 0; i < data.length; i++) {
           let p1 = document.createElement("p");
           p1.innerHTML = (i+1)+".";
           result.appendChild(p1);
           let p = document.createElement("p");
           p.innerHTML = data[i];
           p.setAttribute('class','funny')
           result.appendChild(p);
         }
       });
     result.style.display = "block";
   }
   