(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const g=()=>{const n=localStorage.getItem("library");return n!==null?JSON.parse(n):[]},p=n=>{localStorage.setItem("library",JSON.stringify(n))},l=g()||[];function y(n,t,r,a,e,o,s=!1){this.title=n,this.author=t,this.publisher=r,this.releaseYear=a,this.language=e,this.pages=o,this.read=s}const b=(n,t,r,a,e,o,s=!1)=>{const c=new y(n,t,r,a,e,o,s);l.push(c),p(l)},f=n=>{const t=l.findIndex(r=>r.title===n);t!==-1&&(l.splice(t,1),p(l))},m=()=>{const n=document.querySelector("#booklist");n.textContent="",l.forEach(t=>{const r=document.createElement("div");r.setAttribute("class","card");const a=document.createElement("h2");a.textContent=t.title,a.setAttribute("class","title");const e=document.createElement("strong");e.textContent=t.author,e.setAttribute("class","author");const o=document.createElement("p");o.textContent=t.publisher,o.setAttribute("class","publisher");const s=document.createElement("p");s.textContent=`Publication date: ${t.releaseYear}`,s.setAttribute("class","releaseYear");const c=document.createElement("p");c.textContent=`Language: ${t.language}`,c.setAttribute("class","language");const d=document.createElement("p");d.textContent=`Pages: ${t.pages}`,d.setAttribute("class","pages");const u=document.createElement("p");u.textContent=t.read?"Already read":"Not read yet",u.setAttribute("class","read");const i=document.createElement("button");i.textContent="X",i.setAttribute("class","deleteButton"),i.addEventListener("click",()=>{f(t.title),m()}),r.appendChild(i),r.appendChild(a),r.appendChild(e),r.appendChild(s),r.appendChild(c),r.appendChild(d),r.appendChild(u),r.appendChild(o),n.appendChild(r)})},h=document.querySelector("#addBookModal"),E=document.querySelector("#addBook"),v=document.querySelector(".close"),L=document.querySelector("#saveBook");E.addEventListener("click",()=>{h.classList.add("modal-visible")});v.addEventListener("click",()=>{h.classList.remove("modal-visible")});L.addEventListener("click",()=>{const n=document.querySelector("#bookTitle").value,t=document.querySelector("#bookAuthor").value,r=document.querySelector("#bookPublisher").value,a=document.querySelector("#bookReleaseYear").value,e=document.querySelector("#bookLanguage").value,o=document.querySelector("#bookPages").value,s=document.querySelector("#bookRead").checked;b(n,t,r,a,e,o,s),m()});m();