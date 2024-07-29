(self.webpackChunkrlraudioweb=self.webpackChunkrlraudioweb||[]).push([[648],{798:(e,t,n)=>{var r={"./Database.json":932};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=798},998:(e,t,n)=>{var r={"./HRTF_Database_AVAR2024_v5.pdf":693,"./RLR Audio Web.pdf":492};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=998},311:(e,t,n)=>{var r={"./HRIRs.zip":401,"./HRIRs_Repeated_Measurements.zip":254,"./HRIRs_mannequins.zip":889,"./Hp_Filters.zip":692,"./SS2_HRTF_FullDatabase.zip":85};function a(e){var t=o(e);return n(t)}function o(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=o,e.exports=a,a.id=311},648:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Y});var r=n(540),a=n(485),o=n.n(a),i=n(228),l={img:function(e){return r.createElement("span",{className:"w-full flex flex-col items-center"},r.createElement("img",e))}};const s=function(e){var t=e.children;return r.createElement(i.$,{components:l},t)};var c=["mb-7","prose","lg:prose-lg","xl:prose-xl","2xl:prose-xl","dark:prose-invert","sm:prose-sm"];const u=function(e){var t=e.children;return r.createElement("article",{className:o()(c)},t)},m=function(){return r.createElement(u,null,r.createElement(s,null,"## Sound Sphere 2: A High-resolution HRTF Database\n\nThe RLR HRTF Database is a high-resolution database of 78 head-related transfer functions (HRTFs) that were collected during the 2022 Audio Engineering Society AVAR conference. The database is freely available for download.\n"))},f=function(){return r.createElement(u,null,r.createElement(s,null,"### Database details\n\n\nHRTFs were collected in a purpose-built anechoic chamber housing a vertically oriented, motorized arc with a 2-meter-radius, which contains 54 loudspeakers spaced every 3° in elevation. Participants were aligned using a height-adjustable platform and wall-mounted cross lasers; their head position and orientation were tracked in real-time during the measurement. Inter- and intra-participant error analyses across more than 1600 incident angles per participant indicate high precision in measurements. In addition to being a high-resolution and a high-precision HRTF database, this database includes the corresponding equalization filters for both commercial headphones and a VR headset, as well as some demographic information for each participant. \n\n![image tag](FRL-Research-Audio-Anechoic-Chamber-2.webp)\n\nA relatively large number of the participants in this database are researchers from the spatial audio research community (who participated in the AVAR 2022 conference). The authors hope that publishing this database may facilitate collaborations in the future.\n\nFor more details, please see the [academic publication (link to be updated)](https://www.scholear.google.com).\n\nThe Audio Team at Reality Labs Research (RLR Audio) is working on novel technologies to enable both audio presence and augmented hearing, letting us hear better in noisy environments with our future AR glasses. In our [blog post](https://about.fb.com/news/2020/09/facebook-reality-labs-research-future-of-audio/) we take you behind the scenes with the team for an in-depth look at some of our demos and prototype technology. \n\n\n### Citation\nPlease note that use of the freely available database should go along with citing of the publication above. \n\n```\n@article{warneckeHRTF2024,\n  title     =     {Sound Sphere 2: A High-resolution HRTF Database,\n  author    =     {Michaela Warnecke, Samuel Clapp, Zamir Ben-Hur, David Lou Alon, Sebastià V. Amengual Garí, and Paul Calamia},\n  booktitle =     {2024 AES 5th International Conference on Audio for Virtual and Augmented Reality},\n  doi       =     {}\n  month     =     {8}\n  year      =     {2024}\n}\n```\n\n\n---\n\n### License\n\nThe dataset is distributed under the CC-BY-4.0 license, as found in the [LICENSE](https://github.com/facebookresearch/SS2_HRTF/blob/main/LICENSE) file.\n\n### Additional References\n\nFor more work by the RLR Audio Team, please see a selection of recent related publications below:  \n\n\n#### 2024\n- [HRTF Notch Prediction using Anthropometric Features and Neural Networks](https://ieeexplore.ieee.org/abstract/document/10447610) Arbel et al., 2024\n\n#### 2022\n- [Ear shape-based HRTF personalization.](https://www.aes.org/e-lib/browse.cfm?elib=21873) Warnecke et al., 2022\n- [Remote testing](https://asa.scitation.org/doi/full/10.1121/10.0010422) Peng et al., 2022\n- [HATS digital twin](http://www.aes.org/e-lib/browse.cfm?elib=21855) Hajarolasvadi et al., 2022\n- [Verification on head-related transfer functions of a rigid sphere model](https://doi.org/10.1121/10.0011736) Meyer et al., 2022\n\n#### 2021\n- [HRTF metrics for localization perception.](https://asa.scitation.org/doi/full/10.1121/10.0003983)  Ananthabhotla et al., 2021\n- [DNN HRTF prediction from ear shapes](https://research.facebook.com/publications/on-the-predictability-of-hrtfs-from-ear-shapes-using-deep-networks/) Zhou et al., 2021\n- [Sparse HRTF sampling](https://research.facebook.com/publications/sparse-head-related-transfer-function-representation-with-spatial-aliasing-cancellation/) Arbel et al., 2021\n- [Omnidirectional source for near-field HRTF measurements](https://research.facebook.com/publications/full-range-omnidirectional-sound-source-for-near-field-head-related-transfer-functions-measurement/) Chojnacki et al., 2021\n\n#### 2020\n- [Numerical simulations of near-field HRTF](https://research.facebook.com/publications/numerical-simulations-of-near-field-head-related-transfer-functions-magnitude-verification-and-validation-with-laser-spark-sources/) Prepeliţă et al., 2020\n- [FDTD simulations of pinna-related TFs](https://research.facebook.com/publications/pinna-related-transfer-functions-and-lossless-wave-equation-using-finite-difference-methods-validation-with-measurements/) Prepeliţă et al., 2020\n\n#### 2019\n- [Sparse HRTF representation with ear alignment](https://research.facebook.com/publications/efficient-representation-and-sparse-sampling-of-head-related-transfer-functions-using-phase-correction-based-on-ear-alignment/) Ben-Hur et al., 2019\n\n\n\n\n\n"))};function d(e){for(var t=0;e/1e3>1;)t++,e/=1e3;return"".concat(Math.round(e)).concat(["bytes","kb","mb","gb"][t])}var p=["prose","dark:prose-invert"],h=function(e){var t=e.children;return r.createElement("span",{className:a(p)}," ",r.createElement("h3",null,t)," ")},b=function(e){var t=e.children;return r.createElement("span",{className:a(p)}," ",r.createElement("h4",null,t)," ")},y=function(e){var t=e.children;return r.createElement("span",{className:a(p)}," ",r.createElement("h5",null,t)," ")},g=["bg-gray-300","hover:bg-gray-400","text-gray-800","font-bold","py-2","px-4","rounded","inline-flex","items-center"],v=["fill-current","w-4","h-4","mr-2"];const w=function(e){var t=e.url;return r.createElement("a",{href:t},r.createElement("button",{className:o()(g)},r.createElement("svg",{className:o()(v),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"},r.createElement("path",{d:"M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"})),r.createElement("span",null,"Download")))};function R(e){return function(e){var t=e.split("://");if(t.length>1)return!0;var n=t[0].split("/");return n.length>1&&n[0].includes(".")}(e)?e:("/"==e[0]&&(e=e.substr(1,e.length-1)),"".concat(location.href).concat(e))}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var k=["dark:bg-gray-600","bg-gray-100","shadow-sm","my-3.5","p-3.5","w-full","flex","justify-between"];const A=function(e){var t,n,a=e.url,i=e.name,l=e.hasMetaFile,s=void 0!==l&&l,c=(t=(0,r.useState)(""),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return E(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?E(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=c[0],m=c[1];return s&&(0,r.useEffect)((function(){fetch("".concat(R(a),".meta")).then((function(e){return e.json()})).then((function(e){return m(d(e.size))}))}),[]),r.createElement("div",{className:o()(k)},r.createElement("div",null,r.createElement(y,null,i),r.createElement("span",{className:"prose dark:prose-invert"},u)),r.createElement(w,{url:a}))};function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var H,x,F,T=["dark:bg-gray-700","bg-gray-50","shadow","my-5","p-3.5","w-full"],O=function(e){return e.keys().map(e)};O(n(311)),O(n(998)),x=(H=n(798)).keys(),F=x.map(H),x.reduce((function(e,t,n){return e[t]=F[n],e}),{});const j=function(e){var t,n,a=e.item,i=e.zips,l=e.pdfs,s=(t=(0,r.useState)(""),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return S(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?S(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),c=s[0],u=s[1],m=a.subitems.map((function(e,t){var n=function(e){return"string"==typeof e?{name:e,url:R(e)}:{name:e.name,url:R(e.url)}}(e),a=null!=i.find((function(e){return e.includes(n.name)}));return r.createElement(A,{hasMetaFile:a,key:"".concat(n.name).concat(n.url),name:n.name,url:n.url})})),f="string"==typeof a.item?{name:"Documentation",url:a.item}:a.item,p=l.find((function(e){return e.includes(f.url)}));return(0,r.useEffect)((function(){null!=p&&fetch("".concat(p,".meta")).then((function(e){return e.json()})).then((function(e){return u(d(e.size))}))}),[]),r.createElement("div",{className:o()(T)},r.createElement("div",{className:"flex justify-between"},r.createElement("div",null,r.createElement(b,null,f.name),r.createElement("div",{className:"prose dark:prose-invert"},a.documentation),r.createElement("span",{className:"prose dark:prose-invert"},c)),r.createElement("div",null,r.createElement(w,{url:f.url}))),m)};var N=n(203);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(Object(n),!0).forEach((function(t){I(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function I(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var C=["relative","flex","items-center","justify-between","w-full","py-4","px-5","border-0","rounded-none","transition","focus:outline-none"],M=function(e){var t=e.children,n=e.title,a=e.id,i=e.onSelect,l=e.isSelected,s=[l?"max-h-inf":"max-h-0","overflow-hidden","transition-all","ease-in-out","duration-500"],c=[l?"rotate-90":"rotate-0","transition-all","duration-500","h-6 w-6 text-blue-500"];return r.createElement("div",{className:"border border-gray-200"},r.createElement(h,{className:"mb-0"},r.createElement("button",{className:o()(C),type:"button",onClick:function(){i(l?-1:a)}},n,r.createElement(N.A,{className:o()(c)}))),r.createElement("div",{id:a,className:o()(s)},r.createElement("div",{className:"py-4 px-5 transition duration-500 ease-in-out"},t)))},P=function(e){var t,n,a=e.children,o=(t=(0,r.useState)(-1),n=2,function(e){if(Array.isArray(e))return e}(t)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(t,n)||function(e,t){if(e){if("string"==typeof e)return z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?z(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),i=o[0],l=o[1],s=a.map((function(e){return r.cloneElement(e,D(D({},e.props),{},{onSelect:l,isSelected:e.props.id==i}))}));return r.createElement("div",null,s)},L=function(e){return e.keys().map(e)},U=L(n(311)),V=L(n(998)),q=function(e){var t=e.keys(),n=t.map(e);return t.reduce((function(e,t,r){return e[t]=n[r],e}),{})}(n(798)),$=["w-full","mb-7"];const B=function(){var e=Object.keys(q).map((function(e){return r.createElement(M,{title:q[e].title,id:e,key:e},r.createElement(j,{key:e,item:q[e],zips:U,pdfs:V}))}));return r.createElement("div",{className:o()($)},r.createElement(P,null,e))};var W=n(406);function Z(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var G=["bg-gray-200","dark:bg-gray-700","overflow-y-scroll","flex-grow","flex","flex-col","items-center"],J=["bg-white","dark:bg-gray-900","pt-10","pb-20","px-2","lg:pt-20","lg:pb-40","lg:px-28","2xl:px-32","md:px-24","sm:px-16","sm:my-10","shadow-md"];const Y=function(){var e,t,n=(e=(0,r.useContext)(W.z),t=2,function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,a,o=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(o.push(r.value),!t||o.length!==t);i=!0);}catch(e){l=!0,a=e}finally{try{i||null==n.return||n.return()}finally{if(l)throw a}}return o}}(e,t)||function(e,t){if(e){if("string"==typeof e)return Z(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Z(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=(n[0],n[1]);return r.createElement("div",{className:o()(G),onScroll:function(e){var t=e.currentTarget.scrollTop;a(t)}},r.createElement("div",{className:o()(J)},r.createElement(m,null),r.createElement(B,null),r.createElement(f,null)))}},401:(e,t,n)=>{"use strict";e.exports=n.p+"HRIRs.zip"},254:(e,t,n)=>{"use strict";e.exports=n.p+"HRIRs_Repeated_Measurements.zip"},889:(e,t,n)=>{"use strict";e.exports=n.p+"HRIRs_mannequins.zip"},693:(e,t,n)=>{"use strict";e.exports=n.p+"HRTF_Database_AVAR2024_v5.pdf"},692:(e,t,n)=>{"use strict";e.exports=n.p+"Hp_Filters.zip"},492:(e,t,n)=>{"use strict";e.exports=n.p+"RLR Audio Web.pdf"},85:(e,t,n)=>{"use strict";e.exports=n.p+"SS2_HRTF_FullDatabase.zip"},932:e=>{"use strict";e.exports=JSON.parse('{"title":"HRTF Database","item":{"name":"Full Dataset","url":"https://github.com/facebook/rlraudioweb/raw/main/files/SS2_HRTF_FullDatabase.zip?download="},"subitems":[{"name":"HRIRs (human participants)","url":"https://github.com/facebook/rlraudioweb/raw/main/files/HRIRs.zip?download="},{"name":"HRIRs (mannequins)","url":"https://github.com/facebook/rlraudioweb/raw/main/files/HRIRs_mannequins.zip?download="},{"name":"HRIRs (repeated human participants)","url":"https://github.com/facebook/rlraudioweb/raw/main/files/HRIRs_Repeated_Measurements.zip?download="},{"name":"Headphone Filters","url":"https://github.com/facebook/rlraudioweb/raw/main/files/Hp_Filters.zip?download="},{"name":"Demographic Data","url":"https://github.com/facebook/rlraudioweb/raw/main/files/Demographics.xls?download="},{"name":"Documentation","url":"/HRTF_Database_AVAR2024_v5.pdf"}]}')}}]);