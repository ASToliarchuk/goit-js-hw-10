const e={selector:document.querySelector(".breed-select"),divCatInfo:document.querySelector(".cat-info"),loader:document.querySelector(".loader"),error:document.querySelector(".error")},{selector:t,divCatInfo:s,loader:d,error:i}=e;d.classList.replace("loader","is-hidden"),i.classList.add("is-hidden"),s.classList.add("is-hidden");let r=[];function a(e){t.classList.remove("is-hidden"),d.classList.replace("loader","is-hidden"),Notify.failure("Oops! Something went wrong! Try reloading the page or select another cat breed!",{position:"center-center",timeout:5e3,width:"400px",fontSize:"24px"})}fetchBreeds().then((e=>{e.forEach((e=>{r.push({text:e.name,value:e.id})})),new SlimSelect({select:t,data:r})})).catch(a),t.addEventListener("change",(function(e){d.classList.replace("is-hidden","loader"),t.classList.add("is-hidden"),s.classList.add("is-hidden");const i=e.currentTarget.value;fetchCatByBreed(i).then((e=>{d.classList.replace("loader","is-hidden"),t.classList.remove("is-hidden");const{url:i,breeds:r}=e[0];s.innerHTML=`<div class="box-img"><img src="${i}" alt="${r[0].name}" width="400"/></div><div class="box"><h1>${r[0].name}</h1><p>${r[0].description}</p><p><b>Temperament:</b> ${r[0].temperament}</p></div>`,s.classList.remove("is-hidden")})).catch(a)}));
//# sourceMappingURL=index.b06b1cdd.js.map
