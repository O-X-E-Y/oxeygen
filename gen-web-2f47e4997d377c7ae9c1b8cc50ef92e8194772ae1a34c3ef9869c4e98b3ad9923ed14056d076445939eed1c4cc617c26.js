let V=0,_=`string`,R=1,a0=`Object`,T=`utf-8`,Q=null,Y=`number`,S=`undefined`,a5=40,Z=`boolean`,a3=4,X=`function`,a2=16,O=Array,$=Array.isArray,U=Error,a1=FinalizationRegistry,a4=Promise,W=Uint8Array,P=undefined;var I=(async(a,b)=>{if(typeof Response===X&&a instanceof Response){if(typeof WebAssembly.instantiateStreaming===X){try{return await WebAssembly.instantiateStreaming(a,b)}catch(b){if(a.headers.get(`Content-Type`)!=`application/wasm`){console.warn(`\`WebAssembly.instantiateStreaming\` failed because your server does not serve wasm with \`application/wasm\` MIME type. Falling back to \`WebAssembly.instantiate\` which is slower. Original error:\\n`,b)}else{throw b}}};const c=await a.arrayBuffer();return await WebAssembly.instantiate(c,b)}else{const c=await WebAssembly.instantiate(a,b);if(c instanceof WebAssembly.Instance){return {instance:c,module:a}}else{return c}}});var u=(a=>{const b=typeof a;if(b==Y||b==Z||a==Q){return `${a}`};if(b==_){return `"${a}"`};if(b==`symbol`){const b=a.description;if(b==Q){return `Symbol`}else{return `Symbol(${b})`}};if(b==X){const b=a.name;if(typeof b==_&&b.length>V){return `Function(${b})`}else{return `Function`}};if($(a)){const b=a.length;let c=`[`;if(b>V){c+=u(a[V])};for(let d=R;d<b;d++){c+=`, `+ u(a[d])};c+=`]`;return c};const c=/\[object ([^\]]+)\]/.exec(toString.call(a));let d;if(c.length>R){d=c[R]}else{return toString.call(a)};if(d==a0){try{return `Object(`+ JSON.stringify(a)+ `)`}catch(a){return a0}};if(a instanceof U){return `${a.name}: ${a.message}\n${a.stack}`};return d});var K=((a,b)=>{});var g=(a=>{if(d===b.length)b.push(b.length+ R);const c=d;d=b[c];b[c]=a;return c});var f=(a=>{const b=c(a);e(a);return b});var y=((b,c)=>{a.wasm_bindgen__convert__closures__invoke0_mut__h51fe3a2fe6c065e5(b,c)});function A(b,c){try{return b.apply(this,c)}catch(b){a.__wbindgen_exn_store(g(b))}}var z=((a,b)=>{if(a===V){return c(b)}else{return k(a,b)}});var N=(async(b)=>{if(a!==P)return a;if(typeof b===S){b=new URL(`gen-web-2f47e4997d377c7ae9c1b8cc50ef92e8194772ae1a34c3ef9869c4e98b3ad9923ed14056d076445939eed1c4cc617c26_bg.wasm`,import.meta.url)};const c=J();if(typeof b===_||typeof Request===X&&b instanceof Request||typeof URL===X&&b instanceof URL){b=fetch(b)};K(c);const {instance:d,module:e}=await I(await b,c);return L(d,e)});var r=(()=>{if(q===Q||q.byteLength===V){q=new Int32Array(a.memory.buffer)};return q});var p=(a=>a===P||a===Q);var c=(a=>b[a]);var M=(b=>{if(a!==P)return a;const c=J();K(c);if(!(b instanceof WebAssembly.Module)){b=new WebAssembly.Module(b)};const d=new WebAssembly.Instance(b,c);return L(d,b)});var L=((b,c)=>{a=b.exports;N.__wbindgen_wasm_module=c;s=Q;q=Q;i=Q;a.__wbindgen_start();return a});var J=(()=>{const b={};b.wbg={};b.wbg.__wbg_new_abda76e883ba8a5f=(()=>{const a=new U();return g(a)});b.wbg.__wbg_stack_658279fe44541cf6=((b,d)=>{const e=c(d).stack;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbg_error_f851667af71bcfc6=((b,c)=>{var d=z(b,c);if(b!==V){a.__wbindgen_free(b,c,R)};console.error(d)});b.wbg.__wbindgen_object_drop_ref=(a=>{f(a)});b.wbg.__wbg_appendChild_4153ba1b5d54d73b=function(){return A(((a,b)=>{const d=c(a).appendChild(c(b));return g(d)}),arguments)};b.wbg.__wbindgen_object_clone_ref=(a=>{const b=c(a);return g(b)});b.wbg.__wbg_cloneNode_ea49a704f0699b2e=function(){return A((a=>{const b=c(a).cloneNode();return g(b)}),arguments)};b.wbg.__wbg_createDocumentFragment_ba4b959e9d93916b=(a=>{const b=c(a).createDocumentFragment();return g(b)});b.wbg.__wbg_append_125fff38dadbc15f=function(){return A(((a,b)=>{c(a).append(c(b))}),arguments)};b.wbg.__wbg_body_874ccb42daaab363=(a=>{const b=c(a).body;return p(b)?V:g(b)});b.wbg.__wbg_documentElement_588fe6eaff2c52f0=(a=>{const b=c(a).documentElement;return p(b)?V:g(b)});b.wbg.__wbg_querySelector_118a0639aa1f51cd=function(){return A(((a,b,d)=>{var e=z(b,d);const f=c(a).querySelector(e);return p(f)?V:g(f)}),arguments)};b.wbg.__wbg_createElement_03cf347ddad1c8c0=function(){return A(((a,b,d)=>{var e=z(b,d);const f=c(a).createElement(e);return g(f)}),arguments)};b.wbg.__wbg_head_8e6377a2ae01a948=(a=>{const b=c(a).head;return p(b)?V:g(b)});b.wbg.__wbg_self_05040bd9523805b9=function(){return A((()=>{const a=self.self;return g(a)}),arguments)};b.wbg.__wbg_window_adc720039f2cb14f=function(){return A((()=>{const a=window.window;return g(a)}),arguments)};b.wbg.__wbg_globalThis_622105db80c1457d=function(){return A((()=>{const a=globalThis.globalThis;return g(a)}),arguments)};b.wbg.__wbg_global_f56b013ed9bcf359=function(){return A((()=>{const a=global.global;return g(a)}),arguments)};b.wbg.__wbindgen_is_undefined=(a=>{const b=c(a)===P;return b});b.wbg.__wbg_newnoargs_cfecb3965268594c=((a,b)=>{var c=z(a,b);const d=new Function(c);return g(d)});b.wbg.__wbg_call_3f093dd26d5569f8=function(){return A(((a,b)=>{const d=c(a).call(c(b));return g(d)}),arguments)};b.wbg.__wbg_createComment_5c92617cda72a113=((a,b,d)=>{var e=z(b,d);const f=c(a).createComment(e);return g(f)});b.wbg.__wbg_before_6ea6598a4cb72792=function(){return A(((a,b)=>{c(a).before(c(b))}),arguments)};b.wbg.__wbg_is_bd5dc4ae269cba1c=((a,b)=>{const d=Object.is(c(a),c(b));return d});b.wbg.__wbg_childNodes_535387effca84f4e=(a=>{const b=c(a).childNodes;return g(b)});b.wbg.__wbg_length_8a9352f7b7360c37=(a=>{const b=c(a).length;return b});b.wbg.__wbindgen_string_new=((a,b)=>{const c=k(a,b);return g(c)});b.wbg.__wbg_error_b834525fe62708f5=(a=>{console.error(c(a))});b.wbg.__wbg_createTextNode_ea32ad2506f7ae78=((a,b,d)=>{var e=z(b,d);const f=c(a).createTextNode(e);return g(f)});b.wbg.__wbg_instanceof_Window_cee7a886d55e7df5=(a=>{let b;try{b=c(a) instanceof Window}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_document_eb7fd66bde3ee213=(a=>{const b=c(a).document;return p(b)?V:g(b)});b.wbg.__wbg_nextSibling_87d2b32dfbf09fe3=(a=>{const b=c(a).nextSibling;return p(b)?V:g(b)});b.wbg.__wbg_get_3fddfed2c83f434c=function(){return A(((a,b)=>{const d=Reflect.get(c(a),c(b));return g(d)}),arguments)};b.wbg.__wbg_location_b17760ac7977a47a=(a=>{const b=c(a).location;return g(b)});b.wbg.__wbg_requestAnimationFrame_fdbeaff9e8f3f77d=function(){return A(((a,b)=>{const d=c(a).requestAnimationFrame(c(b));return d}),arguments)};b.wbg.__wbg_addEventListener_f984e99465a6a7f4=function(){return A(((a,b,d,e)=>{var f=z(b,d);c(a).addEventListener(f,c(e))}),arguments)};b.wbg.__wbg_removeEventListener_acfc154b998d806b=function(){return A(((a,b,d,e)=>{var f=z(b,d);c(a).removeEventListener(f,c(e))}),arguments)};b.wbg.__wbg_setAttribute_f7ffa687ef977957=function(){return A(((a,b,d,e,f)=>{var g=z(b,d);var h=z(e,f);c(a).setAttribute(g,h)}),arguments)};b.wbg.__wbg_setinnerHTML_95222f1a2e797983=((a,b,d)=>{var e=z(b,d);c(a).innerHTML=e});b.wbg.__wbg_removeAttribute_0c021c98a4dc7402=function(){return A(((a,b,d)=>{var e=z(b,d);c(a).removeAttribute(e)}),arguments)};b.wbg.__wbg_setdata_3f18cd2879ddb8d5=((a,b,d)=>{var e=z(b,d);c(a).data=e});b.wbg.__wbg_previousSibling_28df8137ae6104f8=(a=>{const b=c(a).previousSibling;return p(b)?V:g(b)});b.wbg.__wbg_remove_f7de42c5f9035d0e=(a=>{c(a).remove()});b.wbg.__wbg_getElementById_77f2dfdddee12e05=((a,b,d)=>{var e=z(b,d);const f=c(a).getElementById(e);return p(f)?V:g(f)});b.wbg.__wbg_removeChild_660924798c7e128c=function(){return A(((a,b)=>{const d=c(a).removeChild(c(b));return g(d)}),arguments)};b.wbg.__wbg_settextContent_1493ae8928df81aa=((a,b,d)=>{var e=z(b,d);c(a).textContent=e});b.wbg.__wbg_warn_2a68e3ab54e55f28=(a=>{console.warn(c(a))});b.wbg.__wbindgen_cb_drop=(a=>{const b=f(a).original;if(b.cnt--==R){b.a=V;return !0};const c=!1;return c});b.wbg.__wbg_decodeURI_495987abb10b5303=function(){return A(((a,b)=>{var c=z(a,b);const d=decodeURI(c);return g(d)}),arguments)};b.wbg.__wbindgen_string_get=((b,d)=>{const e=c(d);const f=typeof e===_?e:P;var g=p(f)?V:o(f,a.__wbindgen_malloc,a.__wbindgen_realloc);var h=l;r()[b/a3+ R]=h;r()[b/a3+ V]=g});b.wbg.__wbg_call_67f2111acd2dfdb6=function(){return A(((a,b,d)=>{const e=c(a).call(c(b),c(d));return g(e)}),arguments)};b.wbg.__wbg_origin_305402044aa148ce=function(){return A(((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f}),arguments)};b.wbg.__wbg_newwithbase_98813076a95cdc23=function(){return A(((a,b,c,d)=>{var e=z(a,b);var f=z(c,d);const h=new URL(e,f);return g(h)}),arguments)};b.wbg.__wbg_origin_ecca884a2f9bd239=((b,d)=>{const e=c(d).origin;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbg_pathname_3bec400c9c042d62=((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbg_search_6b70a3bf2ceb3f63=((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbg_searchParams_d1d6990d2adb9a23=(a=>{const b=c(a).searchParams;return g(b)});b.wbg.__wbg_iterator_40027cdd598da26b=(()=>{const a=Symbol.iterator;return g(a)});b.wbg.__wbindgen_is_function=(a=>{const b=typeof c(a)===X;return b});b.wbg.__wbindgen_is_object=(a=>{const b=c(a);const d=typeof b===`object`&&b!==Q;return d});b.wbg.__wbg_next_586204376d2ed373=(a=>{const b=c(a).next;return g(b)});b.wbg.__wbg_next_b2d3366343a208b3=function(){return A((a=>{const b=c(a).next();return g(b)}),arguments)};b.wbg.__wbg_done_90b14d6f6eacc42f=(a=>{const b=c(a).done;return b});b.wbg.__wbg_value_3158be908c80a75e=(a=>{const b=c(a).value;return g(b)});b.wbg.__wbg_isArray_e783c41d0dd19b44=(a=>{const b=$(c(a));return b});b.wbg.__wbg_get_0ee8ea3c7c984c45=((a,b)=>{const d=c(a)[b>>>V];return g(d)});b.wbg.__wbindgen_is_string=(a=>{const b=typeof c(a)===_;return b});b.wbg.__wbg_hash_6169ffe1f1446fd4=((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbindgen_jsval_eq=((a,b)=>{const d=c(a)===c(b);return d});b.wbg.__wbg_new_d4c086f687604999=((a,b,c,d)=>{var e=z(a,b);var f=z(c,d);const h=new RegExp(e,f);return g(h)});b.wbg.__wbg_history_6882f83324841599=function(){return A((a=>{const b=c(a).history;return g(b)}),arguments)};b.wbg.__wbg_state_dce1712758f75ed1=function(){return A((a=>{const b=c(a).state;return g(b)}),arguments)};b.wbg.__wbindgen_is_null=(a=>{const b=c(a)===Q;return b});b.wbg.__wbg_pathname_d98d0a003b664ef0=function(){return A(((b,d)=>{const e=c(d).pathname;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f}),arguments)};b.wbg.__wbg_search_40927d5af164fdfe=function(){return A(((b,d)=>{const e=c(d).search;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f}),arguments)};b.wbg.__wbg_hash_163703b5971e593c=function(){return A(((b,d)=>{const e=c(d).hash;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f}),arguments)};b.wbg.__wbg_pushState_01f73865f6d8789a=function(){return A(((a,b,d,e,f,g)=>{var h=z(d,e);var i=z(f,g);c(a).pushState(c(b),h,i)}),arguments)};b.wbg.__wbg_replaceState_05b49e34dd5c56f9=function(){return A(((a,b,d,e,f,g)=>{var h=z(d,e);var i=z(f,g);c(a).replaceState(c(b),h,i)}),arguments)};b.wbg.__wbg_scrollIntoView_68275288fdd93eff=(a=>{c(a).scrollIntoView()});b.wbg.__wbg_scrollTo_d3f0a8157bc0964a=((a,b,d)=>{c(a).scrollTo(b,d)});b.wbg.__wbg_exec_c6eab43c76cafa2f=((a,b,d)=>{var e=z(b,d);const f=c(a).exec(e);return p(f)?V:g(f)});b.wbg.__wbindgen_number_get=((a,b)=>{const d=c(b);const e=typeof d===Y?d:P;t()[a/8+ R]=p(e)?V:e;r()[a/a3+ V]=!p(e)});b.wbg.__wbg_href_14a0154147810c9c=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbg_sethref_5f2e449a509e644b=function(){return A(((a,b,d)=>{var e=z(b,d);c(a).href=e}),arguments)};b.wbg.__wbg_defaultPrevented_f985e9e1fcb557ed=(a=>{const b=c(a).defaultPrevented;return b});b.wbg.__wbg_button_43d11b000a7126cf=(a=>{const b=c(a).button;return b});b.wbg.__wbg_metaKey_35f1fd33c4e0c5df=(a=>{const b=c(a).metaKey;return b});b.wbg.__wbg_altKey_d4801ef04e1f1e33=(a=>{const b=c(a).altKey;return b});b.wbg.__wbg_ctrlKey_2817108375a63e7c=(a=>{const b=c(a).ctrlKey;return b});b.wbg.__wbg_shiftKey_87d2a9527cefdf3d=(a=>{const b=c(a).shiftKey;return b});b.wbg.__wbg_composedPath_bd8a0336a042e053=(a=>{const b=c(a).composedPath();return g(b)});b.wbg.__wbg_length_161c0d89c6535c1d=(a=>{const b=c(a).length;return b});b.wbg.__wbg_instanceof_HtmlAnchorElement_9b05407929158ee7=(a=>{let b;try{b=c(a) instanceof HTMLAnchorElement}catch(a){b=!1}const d=b;return d});b.wbg.__wbg_href_32f69263c7029db6=((b,d)=>{const e=c(d).href;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbg_target_d86ce47fcec86e65=((b,d)=>{const e=c(d).target;const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbg_preventDefault_657cbf753df1396c=(a=>{c(a).preventDefault()});b.wbg.__wbindgen_boolean_get=(a=>{const b=c(a);const d=typeof b===Z?(b?R:V):2;return d});b.wbg.__wbindgen_debug_string=((b,d)=>{const e=u(c(d));const f=o(e,a.__wbindgen_malloc,a.__wbindgen_realloc);const g=l;r()[b/a3+ R]=g;r()[b/a3+ V]=f});b.wbg.__wbindgen_throw=((a,b)=>{throw new U(k(a,b))});b.wbg.__wbg_then_f9e58f5a50f43eae=((a,b)=>{const d=c(a).then(c(b));return g(d)});b.wbg.__wbg_queueMicrotask_f61ee94ee663068b=(a=>{queueMicrotask(c(a))});b.wbg.__wbg_queueMicrotask_f82fc5d1e8f816ae=(a=>{const b=c(a).queueMicrotask;return g(b)});b.wbg.__wbg_resolve_5da6faf2c96fd1d5=(a=>{const b=a4.resolve(c(a));return g(b)});b.wbg.__wbg_new_70828a4353259d4b=((a,b)=>{try{var c={a:a,b:b};var d=(a,b)=>{const d=c.a;c.a=V;try{return B(d,c.b,a,b)}finally{c.a=d}};const e=new a4(d);return g(e)}finally{c.a=c.b=V}});b.wbg.__wbg_close_23aa806471e38253=function(){return A((a=>{c(a).close()}),arguments)};b.wbg.__wbg_enqueue_fe9e340e2bc8714b=function(){return A(((a,b)=>{c(a).enqueue(c(b))}),arguments)};b.wbg.__wbg_byobRequest_643426f0037311f0=(a=>{const b=c(a).byobRequest;return p(b)?V:g(b)});b.wbg.__wbg_view_38a0bacb59ad00ee=(a=>{const b=c(a).view;return p(b)?V:g(b)});b.wbg.__wbg_byteLength_4f4b58172d990c0a=(a=>{const b=c(a).byteLength;return b});b.wbg.__wbg_close_0b618a762cdb578b=function(){return A((a=>{c(a).close()}),arguments)};b.wbg.__wbg_new_73a5987615ec8862=((a,b)=>{var c=z(a,b);const d=new U(c);return g(d)});b.wbg.__wbg_buffer_67e624f5a0ab2319=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_byteOffset_adbd2a554609eb4e=(a=>{const b=c(a).byteOffset;return b});b.wbg.__wbg_newwithbyteoffsetandlength_0de9ee56e9f6ee6e=((a,b,d)=>{const e=new W(c(a),b>>>V,d>>>V);return g(e)});b.wbg.__wbg_length_21c4b0ae73cba59d=(a=>{const b=c(a).length;return b});b.wbg.__wbindgen_memory=(()=>{const b=a.memory;return g(b)});b.wbg.__wbg_buffer_b914fb8b50ebbc3e=(a=>{const b=c(a).buffer;return g(b)});b.wbg.__wbg_set_7d988c98e6ced92d=((a,b,d)=>{c(a).set(c(b),d>>>V)});b.wbg.__wbg_respond_fee44bba73c2fc8a=function(){return A(((a,b)=>{c(a).respond(b>>>V)}),arguments)};b.wbg.__wbg_getAttribute_706ae88bd37410fa=((b,d,e,f)=>{var g=z(e,f);const h=c(d).getAttribute(g);var i=p(h)?V:o(h,a.__wbindgen_malloc,a.__wbindgen_realloc);var j=l;r()[b/a3+ R]=j;r()[b/a3+ V]=i});b.wbg.__wbg_hasAttribute_e0b4c51b50660221=((a,b,d)=>{var e=z(b,d);const f=c(a).hasAttribute(e);return f});b.wbg.__wbindgen_closure_wrapper970=((a,b,c)=>{const d=w(a,b,a5,x);return g(d)});b.wbg.__wbindgen_closure_wrapper1070=((a,b,c)=>{const d=w(a,b,a5,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1185=((a,b,c)=>{const d=w(a,b,a5,y);return g(d)});b.wbg.__wbindgen_closure_wrapper1382=((a,b,c)=>{const d=w(a,b,a5,x);return g(d)});return b});var t=(()=>{if(s===Q||s.byteLength===V){s=new Float64Array(a.memory.buffer)};return s});var B=((b,c,d,e)=>{a.wasm_bindgen__convert__closures__invoke2_mut__h54b24d0304c809ad(b,c,g(d),g(e))});var e=(a=>{if(a<132)return;b[a]=d;d=a});var w=((b,c,d,e)=>{const f={a:b,b:c,cnt:R,dtor:d};const g=(...b)=>{f.cnt++;const c=f.a;f.a=V;try{return e(c,f.b,...b)}finally{if(--f.cnt===V){a.__wbindgen_export_2.get(f.dtor)(c,f.b);v.unregister(f)}else{f.a=c}}};g.original=f;v.register(g,f,f);return g});var o=((a,b,c)=>{if(c===P){const c=m.encode(a);const d=b(c.length,R)>>>V;j().subarray(d,d+ c.length).set(c);l=c.length;return d};let d=a.length;let e=b(d,R)>>>V;const f=j();let g=V;for(;g<d;g++){const b=a.charCodeAt(g);if(b>127)break;f[e+ g]=b};if(g!==d){if(g!==V){a=a.slice(g)};e=c(e,d,d=g+ a.length*3,R)>>>V;const b=j().subarray(e+ g,e+ d);const f=n(a,b);g+=f.written;e=c(e,d,g,R)>>>V};l=g;return e});var j=(()=>{if(i===Q||i.byteLength===V){i=new W(a.memory.buffer)};return i});var k=((a,b)=>{a=a>>>V;return h.decode(j().subarray(a,a+ b))});var x=((b,c,d)=>{a.wasm_bindgen__convert__closures__invoke1_mut__h726d0b5276b7479c(b,c,g(d))});let a;const b=new O(128).fill(P);b.push(P,Q,!0,!1);let d=b.length;const h=typeof TextDecoder!==S?new TextDecoder(T,{ignoreBOM:!0,fatal:!0}):{decode:()=>{throw U(`TextDecoder not available`)}};if(typeof TextDecoder!==S){h.decode()};let i=Q;let l=V;const m=typeof TextEncoder!==S?new TextEncoder(T):{encode:()=>{throw U(`TextEncoder not available`)}};const n=typeof m.encodeInto===X?((a,b)=>m.encodeInto(a,b)):((a,b)=>{const c=m.encode(a);b.set(c);return {read:a.length,written:c.length}});let q=Q;let s=Q;const v=typeof a1===S?{register:()=>{},unregister:()=>{}}:new a1(b=>{a.__wbindgen_export_2.get(b.dtor)(b.a,b.b)});const C=typeof a1===S?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingbytesource_free(b>>>V));class D{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=V;C.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingbytesource_free(b)}type(){try{const e=a.__wbindgen_add_to_stack_pointer(-a2);a.intounderlyingbytesource_type(e,this.__wbg_ptr);var b=r()[e/a3+ V];var c=r()[e/a3+ R];var d=z(b,c);if(b!==V){a.__wbindgen_free(b,c,R)};return d}finally{a.__wbindgen_add_to_stack_pointer(a2)}}autoAllocateChunkSize(){const b=a.intounderlyingbytesource_autoAllocateChunkSize(this.__wbg_ptr);return b>>>V}start(b){a.intounderlyingbytesource_start(this.__wbg_ptr,g(b))}pull(b){const c=a.intounderlyingbytesource_pull(this.__wbg_ptr,g(b));return f(c)}cancel(){const b=this.__destroy_into_raw();a.intounderlyingbytesource_cancel(b)}}const E=typeof a1===S?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingsink_free(b>>>V));class F{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=V;E.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsink_free(b)}write(b){const c=a.intounderlyingsink_write(this.__wbg_ptr,g(b));return f(c)}close(){const b=this.__destroy_into_raw();const c=a.intounderlyingsink_close(b);return f(c)}abort(b){const c=this.__destroy_into_raw();const d=a.intounderlyingsink_abort(c,g(b));return f(d)}}const G=typeof a1===S?{register:()=>{},unregister:()=>{}}:new a1(b=>a.__wbg_intounderlyingsource_free(b>>>V));class H{__destroy_into_raw(){const a=this.__wbg_ptr;this.__wbg_ptr=V;G.unregister(this);return a}free(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}pull(b){const c=a.intounderlyingsource_pull(this.__wbg_ptr,g(b));return f(c)}cancel(){const b=this.__destroy_into_raw();a.__wbg_intounderlyingsource_free(b)}}export default N;export{D as IntoUnderlyingByteSource,F as IntoUnderlyingSink,H as IntoUnderlyingSource,M as initSync}