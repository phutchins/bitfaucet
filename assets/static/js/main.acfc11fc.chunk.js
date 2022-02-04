(this["webpackJsonp@fabric/faucet"]=this["webpackJsonp@fabric/faucet"]||[]).push([[0],{215:function(e,t,n){},264:function(e,t,n){"use strict";(function(t){var r=n(53).default,s=n(54).default,a=n(99),i=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),"string"===typeof t&&(t={input:t}),t.input||(t.input=a.randomBytes(32).toString("hex")),this.settings=Object.assign({hash:e.digest(t.input)},t)}return s(e,[{key:"value",get:function(){return e.digest(this.settings.input)}},{key:"reverse",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.value;return e.reverse(t)}}],[{key:"digest",value:function(e){if("string"!==typeof e&&!(e instanceof t))throw new Error('Input to process must be of type "String" or "Buffer" to digest.');return a.createHash("sha256").update(e).digest("hex")}},{key:"reverse",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return t.from(e,"hex").reverse().toString("hex")}}]),e}();e.exports=i}).call(this,n(7).Buffer)},267:function(e,t,n){"use strict";var r=n(99),s=3235115837,a=s+parseInt(r.createHash("sha256").update("@types/GenericMessage").digest("hex").slice(0,4),16),i=s+parseInt(r.createHash("sha256").update("@types/GenericLogMessage").digest("hex").slice(0,4),16),c=s+parseInt(r.createHash("sha256").update("@types/GenericList").digest("hex").slice(0,4),16);e.exports={PEER_PORT:9999,MAX_PEERS:32,PRECISION:100,BITCOIN_GENESIS:"000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f",BITCOIN_GENESIS_ROOT:"4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b",FABRIC_KEY_DERIVATION_PATH:"m/44'/0'/0'/0/0",HEADER_SIZE:48,GENERIC_MESSAGE_TYPE:a,LOG_MESSAGE_TYPE:i,GENERIC_LIST_TYPE:c,LARGE_COLLECTION_SIZE:10,BLOCK_CANDIDATE:3,CHAT_MESSAGE:103,ZERO_LENGTH_PLAINTEXT:"",LIGHTNING_TEST_HEADER:"D0520C6E",LIGHTNING_PROTOCOL_H_INIT:"Noise_XK_secp256k1_ChaChaPoly_SHA256",LIGHTNING_PROTOCOL_PROLOGUE:"lightning",LIGHTNING_BMM_HEADER:"D0520C6E",LIGHTNING_SIDECHAIN_NUM:255,LIGHTNING_SIDEBLOCK_HASH:0,LIGHTNING_PARENT_SIDEBLOCK_HASH:1,MAGIC_BYTES:s,MAX_FRAME_SIZE:32,MAX_MEMORY_ALLOC:1024,MAX_MESSAGE_SIZE:4048,MAX_STACK_HEIGHT:32,MAX_CHANNEL_VALUE:1e8,MAX_CHAT_MESSAGE_LENGTH:2048,MAX_TX_PER_BLOCK:100,MACHINE_MAX_MEMORY:4145152,OP_CYCLE:"00",OP_DONE:"ff",OP_0:"00",OP_36:"24",OP_CHECKSIG:"ac",OP_DUP:"76",OP_EQUAL:"87",OP_SHA256:"a8",OP_HASH160:"a9",OP_PUSHDATA1:"4c",OP_RETURN:"6a",OP_EQUALVERIFY:"88",OP_SEPARATOR:"ab",P2P_GENERIC:128,P2P_IDENT_REQUEST:1,P2P_IDENT_RESPONSE:17,P2P_CHAIN_SYNC_REQUEST:85,P2P_ROOT:0,P2P_PING:18,P2P_PONG:19,P2P_START_CHAIN:33,P2P_INSTRUCTION:32,P2P_BASE_MESSAGE:49,P2P_STATE_ROOT:48,P2P_STATE_COMMITTMENT:50,P2P_STATE_CHANGE:51,P2P_STATE_REQUEST:41,P2P_TRANSACTION:57,P2P_CALL:66,P2P_SESSION_ACK:16896,PEER_CANDIDATE:9,DOCUMENT_PUBLISH_TYPE:998,DOCUMENT_REQUEST_TYPE:999,SESSION_START:2,VERSION_NUMBER:0}},288:function(e,t,n){"use strict";(function(t){var r=n(80),s=n(412).default,a=n(53).default,i=n(54).default,c=n(121).default,o=n(122).default,u=n(133).default,h=n(134).default,l=n(267).P2P_CALL,f=(n(268),n(426),n(278)),d=n(427),p=n(428),b=(n(429).WebSocket,n(48)),g=n(430),y="application/json",m=function(e){u(m,e);var n=h(m);function m(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return a(this,m),(e=n.call(this,t)).settings=Object.assign({authority:"localhost",entropy:Math.random(),secure:!0,port:443},t),e.host=e.settings.authority,e.secure=e.settings.secure,e.socket=null,e.endpoint="".concat(e.secure?"wss":"ws",":").concat(e.host,":").concat(e.port,"/"),e._state={status:"PAUSED",messages:[],meta:{messages:{count:0}}},c(e,o(e))}return i(m,[{key:"port",get:function(){return this.settings.port}},{key:"isArrayBufferSupported",get:function(){return 1===new t(new Uint8Array([1]).buffer)[0]}},{key:"arrayBufferToBuffer",get:function(){return this.isArrayBufferSupported?this.arrayBufferToBufferAsArgument:this.arrayBufferToBufferCycle}},{key:"arrayBufferToBufferAsArgument",value:function(e){return new t(e)}},{key:"arrayBufferToBufferCycle",value:function(e){for(var n=new t(e.byteLength),r=new Uint8Array(e),s=0;s<n.length;++s)n[s]=r[s];return n}},{key:"_handleSocketClose",value:function(){var e=s(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._state.status="CLOSED",console.log("[FABRIC:REMOTE]","Socket close:",t),this.connect();case 3:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_handleSocketError",value:function(){var e=s(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.error("[FABRIC:REMOTE]","Socket error:",t),this.emit("error",t);case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_handleSocketMessage",value:function(){var e=s(r.mark((function e(n){var s,a,i;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.emit("debug","[FABRIC:REMOTE] Socket packet ".concat(JSON.stringify(n))),s=n.data.byteLength,console.log("length:",s),a=t.from(n.data),console.log("buffer:",a),i=g.fromRaw(a).toObject(),console.log("message:",i),this._state.messages.push(i),++this._state.meta.messages.count,this.emit("message",i);case 10:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_handleSocketOpen",value:function(){var e=s(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._state.status="CONNECTED",this.emit("ready");case 2:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"executeMethod",value:function(){var e=s(r.mark((function e(t){var n,s,a=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:[],s=g.fromVector([l,JSON.stringify([t,n])]),console.log("call:",s),console.log("raw:",s.toRaw()),e.abrupt("return",this.socket.send(s.toRaw()));case 5:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"connect",value:function(){var e=s(r.mark((function e(){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this._state.status="CONNECTING";try{this.socket=new WebSocket(this.endpoint),console.log("socket:",this.socket)}catch(t){console.error("[FABRIC:REMOTE]","Unable to connect:",t)}return this.socket&&(this.socket.binaryType="arraybuffer",this.socket.addEventListener("close",this._handleSocketClose.bind(this)),this.socket.addEventListener("open",this._handleSocketOpen.bind(this)),this.socket.addEventListener("message",this._handleSocketMessage.bind(this)),this.socket.addEventListener("error",this._handleSocketError.bind(this))),e.abrupt("return",this);case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"enumerate",value:function(){var e=s(r.mark((function e(){var t,n,s,a;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this._OPTIONS("/");case 2:for(s in t=e.sent,n=[],t)a=t[s],n.push({name:a.name,description:a.description,components:Object.assign({list:"maki-resource-list",view:"maki-resource-view"},a.components),routes:a.routes,attributes:a.attributes,names:a.names});return e.abrupt("return",t);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"request",value:function(){var e=s(r.mark((function e(n,s){var a,i,c,o,u,h,l,b,g,m,v,O,j=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=j.length>2&&void 0!==j[2]?j[2]:{},c=(i=this).settings.authority.split(":"),o=c[0]||(i.secure,"localhost"),u=c[1]||(i.secure?443:80),this.settings.port&&(u=this.settings.port),h=i.secure?"https":"http",l="".concat(h,"://").concat(o,":").concat(u).concat(s),b=null,g=null,v={method:n,headers:m={Accept:y,"Content-Type":y}},(this.settings.username||this.settings.password)&&(m.Authorization="Basic ".concat(t.from([this.settings.username||"",this.settings.password||""].join(":")).toString("base64"))),e.t0=a.mode,e.next="query"===e.t0?16:18;break;case 16:return l+="?"+f.stringify(a.body),e.abrupt("break",21);case 18:try{v.body=JSON.stringify(a.body)}catch(r){console.error("[FABRIC:REMOTE] Could not prepare request:",r)}return v=Object.assign(v,{body:a.body||null}),e.abrupt("break",21);case 21:return e.prev=21,e.next=24,d(l,v);case 24:g=e.sent,e.next=30;break;case 27:e.prev=27,e.t1=e.catch(21),i.emit("error","[REMOTE] exception: ".concat(e.t1));case 30:if(g){e.next=32;break}return e.abrupt("return",{status:"error",message:"No response to request."});case 32:e.t2=g.status,e.next=404===e.t2?35:37;break;case 35:return b={status:"error",message:"Document not found."},e.abrupt("break",62);case 37:if(!g.ok){e.next=59;break}O=p.parse(g.headers.get("content-type")),e.t3=O.type,e.next="application/json"===e.t3?42:52;break;case 42:return e.prev=42,e.next=45,g.json();case 45:b=e.sent,e.next=51;break;case 48:e.prev=48,e.t4=e.catch(42),console.error("[REMOTE]","Could not parse JSON:",e.t4);case 51:return e.abrupt("break",57);case 52:return this.settings.verbosity>=4&&i.emit("warning","[FABRIC:REMOTE] Unhandled headers content type: ".concat(O.type)),e.next=55,g.text();case 55:return b=e.sent,e.abrupt("break",57);case 57:e.next=61;break;case 59:this.settings.verbosity>=4&&console.warn("[FABRIC:REMOTE]","Unmanaged HTTP status code:",g.status);try{b=g.json()}catch(r){b=g.text()}case 61:return e.abrupt("break",62);case 62:return e.abrupt("return",b);case 63:case"end":return e.stop()}}),e,this,[[21,27],[42,48]])})));return function(t,n){return e.apply(this,arguments)}}()},{key:"ping",value:function(){var e=s(r.mark((function e(){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.send({created:(new Date).toISOString(),type:"PING"});case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=s(r.mark((function e(t){var n,s,a;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.fromVector(["GenericMessage",JSON.stringify(t)]),s=n.toRaw(),console.log("raw:",s),console.log("raw (string):",s.toString("hex")),a=new b({content:s.toString("hex")}),this.socket.send(s),e.abrupt("return",a.id);case 7:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"sendAsJSON",value:function(){var e=s(r.mark((function e(t){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.socket.send({content:t});case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"_PUT",value:function(){var e=s(r.mark((function e(t,n){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("put",t,{body:n}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_GET",value:function(){var e=s(r.mark((function e(t,n){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("get",t,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_POST",value:function(){var e=s(r.mark((function e(t,n){var s,a,i,c=arguments;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:s=c.length>2&&void 0!==c[2]?c[2]:{},a=null,i=null,e.t0=s.mode,e.next="query"===e.t0?6:8;break;case 6:return i=Object.assign({},{body:n,mode:"query"}),e.abrupt("break",10);case 8:return i=Object.assign({},s,{body:n,mode:"body"}),e.abrupt("break",10);case 10:return e.next=12,this.request("post",t,i);case 12:return a=e.sent,e.abrupt("return",a);case 14:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_OPTIONS",value:function(){var e=s(r.mark((function e(t,n){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("options",t,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_PATCH",value:function(){var e=s(r.mark((function e(t,n){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("patch",t,{body:n}));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_DELETE",value:function(){var e=s(r.mark((function e(t,n){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("delete",t,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"_SEARCH",value:function(){var e=s(r.mark((function e(t,n){return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.request("search",t,n));case 1:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()}]),m}(b);e.exports=m}).call(this,n(7).Buffer)},308:function(e){e.exports=JSON.parse('{"name":"@network/playnet","network":"testnet","anchor":"BTC","peers":["02de546951cee477c90c36d38615a338123a7e1fe190f3c117b028f60359b5bc7e@hub.fabric.pub:7777","02512b88b368b43c93eeb725439df33fa6e30a2b40e22bba7844bc22f675afc76a@54.193.117.227:7777","02a1933ff21f2d588285f4dc759402e02ae2ad15840243ce79fbb213eaca2b3724@95.217.115.29:7777"],"mode":"rpc","servers":["http://YOUR_USERNAME:YOUR_PASSWORD@localhost:18443"],"currencies":[{"name":"BTCA","symbol":"BTCA","service":"btca"},{"name":"BTCB","symbol":"BTCB","service":"btcb"}],"bitcoin":{"address":"bcrt1qr26ree4yhcnxsn7rdxj5hgwf6awz2jmwe8t9q6"},"btca":{"name":"BTCA","mode":"rpc","servers":["http://YOUR_USERNAME:YOUR_PASSWORD@localhost:18443"]},"btcb":{"name":"BTCB","mode":"rpc","servers":["http://YOUR_USERNAME:YOUR_PASSWORD@localhost:19443"]},"key":{"seed":"letter drastic census knock shield matter crime demand gloom echo romance lizard zebra deliver baby key tackle fire update please sketch coconut balance able","public":"0223cffd5e94da3c8915c6b868f06d15183c1aeffad8ddf58fcb35a428e3158e71"}}')},309:function(e,t,n){},310:function(e,t,n){},32:function(e,t,n){"use strict";var r=n(308);e.exports={port:9999,seed:null,status:"PAUSED",balances:[{asset:"Bitcoin",symbol:"BTC",confirmed:0,type:"confirmed"},{asset:"Liquid BTC (LBTC)",symbol:"BTC",confirmed:0,type:"confirmed"},{asset:"Shyft",symbol:"SHFT",confirmed:0,type:"confirmed"},{asset:"Bitcoin (testnet)",symbol:"TBTC",confirmed:0,type:"confirmed"},{asset:"Bitcoin (regtest)",symbol:"RBTC",confirmed:0,type:"confirmed"},{asset:"BTC A",symbol:"BTCA",confirmed:0,type:"confirmed"},{asset:"BTC B",symbol:"BTCB",confirmed:0,type:"confirmed"},{asset:"Lightning BTC",symbol:"BTC",confirmed:.001,type:"outbound"},{asset:"Lightning BTC",symbol:"BTC",confirmed:.001,type:"inbound"}],chains:[{name:"Fabric (playnet)",asset:"PFAB",tip:"???"},{name:"Bitcoin (mainnet)",asset:"BTC",tip:"???",genesis:"000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f"},{name:"Bitcoin (regtest)",asset:"RBTC",tip:"???"},{name:"Bitcoin (testnet)",asset:"TBTC",tip:"???"},{name:"BTC A (regtest)",asset:"BTCA",tip:"???"},{name:"BTC B (regtest)",asset:"BTCB",tip:"???"},{name:"Ethereum (Ropsten)",asset:"ETHR",tip:"???"}],channels:[],keys:[],identity:{id:"",seed:r.key.seed},nodes:["localhost:9977","localhost:9978","localhost:9979","localhost:9980","localhost:9981"],orders:[],peers:[{id:"???",alias:"NUEVO",host:"localhost",port:"7777",asset:"BTC"}],transactions:[]}},320:function(e,t){},322:function(e,t){},333:function(e,t){},335:function(e,t){},361:function(e,t){},362:function(e,t){},368:function(e,t){},386:function(e,t){},404:function(e,t){e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).sort().reduce((function(t,n){return t[n]=e[n],t}),{})}},415:function(e,t){},417:function(e,t){},429:function(e,t){},430:function(e,t,n){"use strict";(function(t){var r=n(197).default,s=n(53).default,a=n(54).default,i=n(121).default,c=n(122).default,o=n(133).default,u=n(134).default,h=n(267),l=h.MAGIC_BYTES,f=h.VERSION_NUMBER,d=h.HEADER_SIZE,p=(h.MAX_MESSAGE_SIZE,h.OP_CYCLE),b=h.GENERIC_MESSAGE_TYPE,g=h.LOG_MESSAGE_TYPE,y=h.GENERIC_LIST_TYPE,m=h.P2P_GENERIC,v=h.P2P_IDENT_REQUEST,O=h.P2P_IDENT_RESPONSE,j=(h.P2P_ROOT,h.P2P_PING),E=h.P2P_PONG,S=h.P2P_START_CHAIN,k=h.P2P_INSTRUCTION,_=h.P2P_BASE_MESSAGE,x=h.P2P_CHAIN_SYNC_REQUEST,T=h.P2P_STATE_ROOT,C=h.P2P_STATE_COMMITTMENT,P=h.P2P_STATE_CHANGE,w=h.P2P_STATE_REQUEST,A=h.P2P_TRANSACTION,R=h.P2P_CALL,N=h.CHAT_MESSAGE,I=h.DOCUMENT_PUBLISH_TYPE,B=h.DOCUMENT_REQUEST_TYPE,M=h.BLOCK_CANDIDATE,G=h.PEER_CANDIDATE,L=h.SESSION_START,H=n(99),U=n(434),D=n(48),q=n(435),F=n(438),Y=parseInt(new q("types/EthereumBlock")._id,16),z=parseInt(new q("types/EthereumBlockNumber")._id,16),J=function(e){o(h,e);var n=u(h);function h(){var e,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};s(this,h),(e=n.call(this,r)).raw={magic:t.alloc(4),version:t.alloc(4),type:t.alloc(4),size:t.alloc(4),hash:t.alloc(32),parent:t.alloc(32),data:null},e.raw.magic.write(l.toString(16),"hex"),e.raw.version.write(F(f.toString(16),8),"hex"),r.data&&r.type&&(e.type=r.type,"string"!==typeof r.data?e.data=JSON.stringify(r.data):e.data=r.data);for(var a=0,o=["@input","@entity","_state","config","settings","stack","observer"];a<o.length;a++){var u=o[a];Object.defineProperty(c(e),u,{enumerable:!1})}return i(e,c(e))}return a(h,[{key:"body",get:function(){return this.raw.data.toString("utf8")}},{key:"byte",get:function(){return t.from("0x".concat(F("0",8)),"hex")}},{key:"tu16",get:function(){return parseInt(0)}},{key:"tu32",get:function(){return parseInt(0)}},{key:"tu64",get:function(){return parseInt(0)}},{key:"Uint256",get:function(){return t.from(this.raw&&this.raw.hash?"0x".concat(F(this.raw.hash,8)):H.randomBytes(32))}},{key:"toBuffer",value:function(){return this.asRaw()}},{key:"asRaw",value:function(){return t.concat([this.header,this.raw.data])}},{key:"toRaw",value:function(){return this.asRaw()}},{key:"asTypedArray",value:function(){return new Uint8Array(this.asRaw())}},{key:"asBlob",value:function(){return this.asRaw().map((function(e){return parseInt(e,16)}))}},{key:"toObject",value:function(){return{headers:{magic:parseInt("0x".concat(this.raw.magic.toString("hex")),16),version:parseInt("".concat(this.raw.version.toString("hex")),16),type:parseInt("".concat(this.raw.type.toString("hex")),16),size:parseInt("".concat(this.raw.size.toString("hex")),16),hash:this.raw.hash.toString("hex")},type:this.type,data:this.data}}},{key:"fromObject",value:function(e){return new h(e)}},{key:"id",get:function(){return H.createHash("sha256").update(this.asRaw()).digest("hex")}},{key:"types",get:function(){return{GenericMessage:b,GenericLogMessage:g,GenericList:y,GenericQueue:y,FabricLogMessage:g,FabricServiceLogMessage:g,GenericTransferQueue:y,Generic:m,Cycle:p,IdentityRequest:v,IdentityResponse:O,ChainSyncRequest:x,Ping:j,Pong:E,DocumentRequest:B,DocumentPublish:I,BlockCandidate:M,PeerCandidate:G,PeerInstruction:k,PeerMessage:_,StartSession:L,ChatMessage:N,StartChain:S,StateRoot:T,StateCommitment:C,StateChange:P,StateRequest:w,Transaction:A,Call:R,LogMessage:g,EthereumBlock:Y,EthereumBlockNumber:z}}},{key:"codes",get:function(){return Object.entries(this.types).reduce((function(e,t){var n=r(t,2),s=n[0];return e[n[1]]=s,e}),{})}},{key:"magic",get:function(){return this.raw.magic}},{key:"size",get:function(){return parseInt(t.from(this.raw.size,"hex"))}},{key:"version",get:function(){return parseInt(t.from(this.raw.version))}},{key:"header",get:function(){var e=[t.from(this.raw.magic,"hex"),t.from(this.raw.version,"hex"),t.from(this.raw.type,"hex"),t.from(this.raw.size,"hex"),t.from(this.raw.hash,"hex")];return t.concat(e)}}],[{key:"parseBuffer",value:function(e){var t=U().charsnt("magic",4,"hex").charsnt("version",4,"hex").charsnt("type",4,"hex").charsnt("size",4,"hex").charsnt("hash",32,"hex").charsnt("data",e.length-d);return t.allocate(),t._setBuff(e),t}},{key:"fromBuffer",value:function(e){return h.fromRaw(e)}},{key:"fromRaw",value:function(e){if(!e)return null;if(!(e instanceof t))throw new Error("Input must be a buffer.");var n=new h;return n.raw={magic:e.slice(0,4),version:e.slice(4,8),type:e.slice(8,12),size:e.slice(12,16),hash:e.slice(16,48)},n.data=e.slice(d),n}},{key:"fromVector",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:["LogMessage","No vector provided."],t=null;try{t=new h({type:e[0],data:e[1]})}catch(n){console.error("[FABRIC:MESSAGE]","Could not construct Message:",n)}return t}}]),h}(D);Object.defineProperty(J.prototype,"type",{get:function(){switch(parseInt(this.raw.type.toString("hex"),16)){case b:return"GenericMessage";case g:return"GenericLogMessage";case y:return"GenericList";case I:return"DocumentPublish";case B:return"DocumentRequest";case M:return"BlockCandidate";case p:return"Cycle";case j:return"Ping";case E:return"Pong";case m:return"Generic";case x:return"ChainSyncRequest";case v:return"IdentityRequest";case O:return"IdentityResponse";case _:return"PeerMessage";case T:return"StateRoot";case P:return"StateChange";case w:return"StateRequest";case A:return"Transaction";case R:return"Call";case G:return"PeerCandidate";case L:return"StartSession";case N:return"ChatMessage";case S:return"StartChain";case Y:return"EthereumBlock";case z:return"EthereumBlockNumber";default:return"GenericMessage"}},set:function(e){var t=this.types[e];t||(this.emit("warning","Unknown message type: ".concat(e)),t=this.types.GenericMessage);var n=F(t.toString(16),8);this["@type"]=e,this.raw.type.write(n,"hex")}}),Object.defineProperty(J.prototype,"data",{get:function(){return this.raw.data?this.raw.data.toString("utf8"):""},set:function(e){e||(e="");var n=H.createHash("sha256").update(e.toString("utf8"));this.raw.hash=n.digest(),this.raw.data=t.from(e),this.raw.size.write(F(this.raw.data.byteLength.toString(16),8),"hex")}}),e.exports=J}).call(this,n(7).Buffer)},435:function(e,t,n){"use strict";var r=n(54).default,s=n(53).default,a=n(121).default,i=n(122).default,c=n(133).default,o=n(134).default,u=n(436).default,h=n(174).default,l=n(48),f=n(264),d=function(e){c(n,e);var t=o(n);function n(){var e,r,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return s(this,n),r=t.call(this,c),"string"!=typeof c&&(c=u((e=i(r),h(n.prototype)),"serialize",e).call(e,c)),r._id=f.digest("@labels/".concat(c)),a(r,i(r))}return r(n)}(l);e.exports=d},438:function(e,t,n){"use strict";e.exports=function(e,t){return Array(Math.max(t-String(e).length+1,0)).join(0)+e}},476:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(60),i=n.n(a),c=(n(475),n(32));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(215);var o=n(26),u=n(27),h=n(30),l=n(28),f=n(29),d=n(31),p=n(37),b=n.n(p),g=n(209),y=n(12),m=(n(309),n(310),n(48)),v=n.n(m),O=n(207),j=n(496),E=n(2),S=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),r=t.call(this,e),e.import&&(r.state=b()({integrity:null,status:"PAUSED"},c,e)),r.actor=new m(r.state),r.ec=new O("secp256k1"),r.ref=s.a.createRef(),Object(h.a)(r,Object(l.a)(r))}return Object(u.a)(n,[{key:"genesis",get:function(){return this.actor?this.actor.id:"00000000000000000000000000000000"}},{key:"dochash",get:function(){return this.actor?this.actor.id:"00000000000000000000000000000000"}},{key:"link",get:function(){return"fabric:".concat(this.dochash)}},{key:"integrity",get:function(){return"sha256-deadbeefbabe"}},{key:"componentDidMount",value:function(){this.start(),console.log("[FABRIC:COMPONENT]","Mounted:",this)}},{key:"componentWillReceiveProps",value:function(e){this.setState({hash:e.hash})}},{key:"render",value:function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("fabric-component",{ref:this.ref,children:Object(E.jsxs)(j.a,{children:[Object(E.jsx)(j.a.Content,{children:Object(E.jsx)("fabric-graph",{children:Object(E.jsx)("svg",{id:"graph"})})}),Object(E.jsx)(j.a.Content,{children:this.props.children})]})})})}},{key:"start",value:function(){var e=new m(this.state);return console.log("actor:",e),console.log("actor ID:",e.id.constructor.name,e.id),this.setState({hash:e.id}),this}}]),n}(r.Component),k=n(168),_=n(80),x=n.n(_),T=n(477),C=n(92),P=n(494),w=n(131),A=n(288),R=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).settings=Object.assign({host:"localhost",port:9999},e),r.state=b()({integrity:"sha256-deadbeefbabe",status:"disconnected",messages:[],meta:{messages:{count:0}}},c,e),console.log("bridge settings:",r.settings),r.remote=new A({host:"nuevo",port:r.settings.port,secure:!1}),Object(h.a)(r,Object(l.a)(r))}return Object(u.a)(n,[{key:"_handleRemoteMessage",value:function(e){console.log("Remote message:",e),this._syncState()}},{key:"_handleRemoteError",value:function(e){console.log("Remote error:",e)}},{key:"_syncState",value:function(){this.setState({status:this.remote._state.status,messages:this.remote._state.messages,meta:this.remote._state.meta})}},{key:"componentDidMount",value:function(){console.log("bridge mounted! starting..."),this.start()}},{key:"connect",value:function(){this._syncState(),this.remote.connect(),this._syncState()}},{key:"executeMethod",value:function(e,t){return this.remote.executeMethod(e,t)}},{key:"ping",value:function(){this.remote.ping()}},{key:"render",value:function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsxs)(j.a,{fluid:!0,children:[Object(E.jsxs)(j.a.Content,{children:[Object(E.jsxs)(T.a.Group,{floated:"right",children:[Object(E.jsxs)(T.a,{onClick:this.ping.bind(this),children:["Ping ",Object(E.jsx)(C.a,{name:"info"})]}),Object(E.jsxs)(T.a,{onClick:this.connect.bind(this),children:["Connect ",Object(E.jsx)(C.a,{name:"lightning"})]})]}),Object(E.jsx)(j.a.Header,{as:"h3",children:"Bridge"})]}),Object(E.jsx)(j.a.Content,{children:Object(E.jsx)(P.a,{children:this.state.messages.map((function(e,t){return Object(E.jsx)(P.a.Event,{size:"small",style:{fontSize:"0.8em",fontFamily:"monospace"},children:Object(E.jsx)(P.a.Content,{children:Object(E.jsx)("div",{style:{color:"black"},children:JSON.stringify(e,null,"  ")})})},t)}))})}),Object(E.jsxs)(j.a.Content,{extra:!0,children:[Object(E.jsxs)(w.a,{children:[Object(E.jsx)(C.a,{name:"info"})," ",this.remote._state.status]}),Object(E.jsxs)(w.a,{children:[Object(E.jsx)(C.a,{name:"mail"})," ",this.remote._state.meta.messages.count]})]})]})})}},{key:"_handleRemoteReady",value:function(){var e=Object(k.a)(x.a.mark((function e(){var t;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this._syncState(),console.log("Remote ready!"),e.next=4,this.executeMethod("btc_getbalances");case 4:t=e.sent,console.log("balances:",t);case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"send",value:function(){var e=Object(k.a)(x.a.mark((function e(t){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.remote.send(t));case 1:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"start",value:function(){var e=Object(k.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.remote.on("ready",this._handleRemoteReady.bind(this)),this.remote.on("message",this._handleRemoteMessage.bind(this)),this.remote.on("error",this._handleRemoteError.bind(this)),this.connect();case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()}]),n}(S),N=R,I=n(52),B=(n(497),n(495)),M=n(498),G=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={transactions:[],integrity:"sha256-deadbeefbabe"},r}return Object(u.a)(n,[{key:"_addKey",value:function(e){this.setState({keys:this.state.keys.concat(e)})}},{key:"render",value:function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("div",{className:"ui vertical stripe segment",children:Object(E.jsx)("div",{className:"ui stackable grid container",children:Object(E.jsx)("div",{className:"row",children:Object(E.jsx)("div",{className:"column",children:Object(E.jsx)(j.a,{fluid:!0,children:Object(E.jsxs)(j.a.Content,{children:[Object(E.jsx)(M.a,{children:Object(E.jsxs)("h1",{children:[Object(E.jsx)(C.a,{name:"tasks"})," Transactions"]})}),Object(E.jsxs)(B.a,{celled:!0,children:[Object(E.jsx)(B.a.Header,{children:Object(E.jsxs)(B.a.Row,{children:[Object(E.jsx)(B.a.HeaderCell,{children:"ID"}),Object(E.jsx)(B.a.HeaderCell,{children:"Version"}),Object(E.jsx)(B.a.HeaderCell,{children:"Inputs"}),Object(E.jsx)(B.a.HeaderCell,{children:"Outputs"}),Object(E.jsx)(B.a.HeaderCell,{children:"Signature"})]})}),Object(E.jsx)(B.a.Body,{children:this.state.transactions.map((function(e,t){return Object(E.jsxs)(B.a.Row,{children:[Object(E.jsx)(B.a.Cell,{children:e.id}),Object(E.jsx)(B.a.Cell,{children:e.version}),Object(E.jsx)(B.a.Cell,{children:e.inputs}),Object(E.jsx)(B.a.Cell,{children:e.outputs}),Object(E.jsx)(B.a.Cell,{children:e.signature})]},t)}))})]})]})})})})})})})}}]),n}(S),L=n(491),H=n(499),U=n(492),D=n(212),q=n(290),F=n(86),Y=n(99),z=n(132),J=n(493),X=n(490),K=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).settings=b()({network:"regtest"},e),r.state=b()({content:{requests:[]},fields:{address:""},requests:{},secret:m.randomBytes(32)},e),r.form=s.a.createRef(),Object(h.a)(r,Object(l.a)(r))}return Object(u.a)(n,[{key:"networks",get:function(){return{mainnet:z.networks.mainnet,regtest:z.networks.regtest,testnet:z.networks.testnet}}},{key:"_handleAddressChange",value:function(e){this.setState({fields:{address:e.target.value}}),console.log("state:",this.state),console.log("value:",e.target.value),console.log("network:",this.networks.regtest);var t=this.validateAddress(e.target.value);console.log("isValid:",t),t||this.setState({status:"ERROR",errors:["Invalid Bitcoin address."]})}},{key:"_handleSecretChange",value:function(e){this.setState({secret:e.target.value})}},{key:"_handleSubmitButtonClick",value:function(e){console.log("submit button click:",e)}},{key:"handleChange",value:function(e){var t=Object(D.a)(Object(D.a)({},this.state.fields),{},Object(I.a)({},e.target.name,e.target.value));this.setState({fields:t})}},{key:"handleSubmit",value:function(e){console.log("submitting:",e);var t=this.state,n=t.name,r=t.email;this.setState({submittedName:n,submittedEmail:r})}},{key:"regenerate",value:function(){this.setState({secret:m.randomBytes(32)}),this.sync()}},{key:"render",value:function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)(J.a,{ref:this.form,onSubmit:this.props.onSubmit.bind(this),onChange:this.handleChange.bind(this),children:Object(E.jsxs)(J.a.Field,{children:[Object(E.jsx)("label",{children:"Request a deposit to..."}),Object(E.jsxs)("div",{className:"ui input",children:[Object(E.jsx)(X.a,{action:!0,type:"text",placeholder:"Enter a Bitcoin address here",value:this.state.address,onKeyUp:this._handleAddressChange.bind(this)}),Object(E.jsx)(T.a,{attached:!0,type:"submit",color:"green",content:"Request",icon:"right chevron",labelPosition:"right",onClick:this.props.onSubmit.bind(this)})]})]})})})}},{key:"start",value:function(){return console.log("[FAUCET:DRIPS]","Starting component..."),Object(q.a)(Object(F.a)(n.prototype),"start",this).call(this),this.sync(),this}},{key:"sync",value:function(){var e=Object(Y.createHash)("sha256").update(this.state.secret).digest("hex");return this.setState({preimage:e}),this}},{key:"validateAddress",value:function(e){try{return z.address.toOutputScript(e,this.networks[this.settings.network]),!0}catch(t){return!1}}}]),n}(S),Q=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).state={integrity:"sha256-deadbeefbabe"},r.bridge=s.a.createRef(),r.form=s.a.createRef(),Object(h.a)(r)}return Object(u.a)(n,[{key:"onSubmit",value:function(e){console.log("submitting:",e),console.log("address from ref:",this.form.current.state);var t={type:"Call",data:{method:"DripRequest",params:[this.form.current.state.fields.address]}};this.bridge.current.send(t).then((function(e){console.log("result:",e)}))}},{key:"render",value:function(){return Object(E.jsx)(E.Fragment,{children:Object(E.jsx)("fabric-bridge-home",{ref:this.ref,children:Object(E.jsx)(L.a,{onBottomPassed:this._handleMastheadBottomPassed.bind(this),children:Object(E.jsx)(H.a,{className:"ui inverted vertical masthead center aligned segment",children:Object(E.jsxs)(U.a,{className:"ui text container",children:[Object(E.jsxs)("h1",{className:"ui inverted header",children:[Object(E.jsx)(C.a,{name:"tint"})," bitfaucet"]}),Object(E.jsxs)("h2",{children:["The official ",Object(E.jsx)("code",{children:"@fabric/playnet"})," faucet."]}),Object(E.jsxs)(U.a,{className:"left aligned",style:{marginTop:"5em"},children:[Object(E.jsx)(j.a,{fluid:!0,children:Object(E.jsx)(j.a.Content,{children:Object(E.jsx)(K,{ref:this.form,onSubmit:this.onSubmit.bind(this)})})}),Object(E.jsx)(j.a,{fluid:!0,children:Object(E.jsx)(j.a.Content,{children:Object(E.jsx)(N,{ref:this.bridge,onChange:this._handleBridgeChange.bind(this),state:this.state})})})]})]})})})})})}},{key:"_handleBridgeChange",value:function(e){console.log("bridge change:",e)}},{key:"_handleMastheadBottomPassed",value:function(e,t){var n=t.calculations;console.log("vis change:",e,n),this.setState({calculations:n})}}]),n}(S),V=function(e){Object(f.a)(n,e);var t=Object(d.a)(n);function n(e){var r;return Object(o.a)(this,n),(r=t.call(this,e)).settings=p({},c,e),r.state=p({actor:null,integrity:null,snapshots:[]},c,e),Object(h.a)(r,Object(l.a)(r))}return Object(u.a)(n,[{key:"_handleBridgeChange",value:function(e){console.log("bridge change:",e)}},{key:"componentDidMount",value:function(){new v.a(this.state);return this}},{key:"render",value:function(){return Object(E.jsx)("react-application",{id:"root",children:Object(E.jsx)(g.a,{children:Object(E.jsx)("div",{className:"pusher",children:Object(E.jsxs)(y.c,{children:[Object(E.jsx)(y.a,{path:"/",exact:!0,element:Object(E.jsx)(Q,{state:this.state,balances:this.state.balances,keys:this.state.keys})}),Object(E.jsx)(y.a,{path:"/transactions",element:Object(E.jsx)(G,{state:this.state,balances:this.state.balances,keys:this.state.keys})})]})})})})}}]),n}(S);i.a.render(Object(E.jsx)(s.a.StrictMode,{children:Object(E.jsx)(V,{state:c})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},48:function(e,t,n){"use strict";(function(t){var r=n(120).default,s=n(53).default,a=n(54).default,i=n(121).default,c=n(122).default,o=n(133).default,u=n(134).default,h=n(99),l=n(64).EventEmitter,f=(n(402),n(264)),d=n(404),p=function(e){o(l,e);var n=u(l);function l(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return s(this,l),(e=n.call(this,t)).log=[],e.signature=null,e.value=e._readObject(t),e._state={"@type":"Actor","@data":e.value,status:"PAUSED",content:e.value||{}},i(e,c(e))}return a(l,[{key:"id",get:function(){var e=t.from(this.preimage,"hex");return f.digest(e)}},{key:"preimage",get:function(){var e={"@type":"FabricActorState","@data":this.toObject()},n=JSON.stringify(e,null,"  "),r=t.from(n,"utf8");return f.digest(r)}},{key:"state",get:function(){return this._state.content}},{key:"type",get:function(){return this._state["@type"]}},{key:"commit",value:function(){var e,t=new l(this._state.content);return(e=this.log).push.apply(e,r(t.id)),this.emit("commit",t),t.id}},{key:"debug",value:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];this.emit("debug",t)}},{key:"toBuffer",value:function(){return t.from(this.serialize(),"utf8")}},{key:"toObject",value:function(){return d(this.state)}},{key:"toString",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"json";return"hex"===e?t.from(this.serialize(),"utf8").toString("hex"):this.serialize()}},{key:"pause",value:function(){return this.status="PAUSING",this.commit(),this}},{key:"serialize",value:function(){var e=null;try{e=JSON.stringify(this.toObject(),null,"  ")}catch(t){e=JSON.stringify({type:"Error",content:"Exception serializing: ".concat(t)},null,"  ")}return e}},{key:"sign",value:function(){throw new Error("Unimplemented on this branch.  Use @fabric/core/types/signer instead.")}},{key:"unpause",value:function(){return this.status="UNPAUSING",this.commit(),this.status="UNPAUSED",this}},{key:"_getState",value:function(){return this.state}},{key:"_readObject",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n={};return n="string"===typeof e?Object.assign(n,{type:"String",content:e}):e instanceof t?Object.assign(n,{type:"Buffer",content:e.toString("hex"),encoding:"hex"}):Object.assign(n,e)}}],[{key:"fromAny",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new l("string"===typeof e?{content:e}:e instanceof t?{content:e.toString("hex")}:Object.assign({},e))}},{key:"fromJSON",value:function(e){var t=null;if("string"===typeof e&&e.length){console.log("trying to parse as JSON:",e);try{t=JSON.parse(e)}catch(n){console.error("Failure in fromJSON:",n)}}else console.trace("Invalid input:",typeof e);return t}},{key:"randomBytes",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:32;return h.randomBytes(e)}}]),l}(l);e.exports=p}).call(this,n(7).Buffer)}},[[476,1,2]]]);
//# sourceMappingURL=main.acfc11fc.chunk.js.map