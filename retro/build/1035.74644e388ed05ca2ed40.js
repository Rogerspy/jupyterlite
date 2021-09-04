(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT=self.webpackChunk_JUPYTERLAB_CORE_OUTPUT||[]).push([[1035],{41035:(e,t,s)=>{"use strict";s.r(t),s.d(t,{ModelDB:()=>m,ObservableJSON:()=>d,ObservableList:()=>c,ObservableMap:()=>r,ObservableString:()=>l,ObservableUndoableList:()=>p,ObservableValue:()=>g});var i,n=s(98669),a=s(58137),h=s(66065);class r{constructor(e={}){if(this._map=new Map,this._changed=new a.Signal(this),this._isDisposed=!1,this._itemCmp=e.itemCmp||i.itemCmp,e.values)for(const t in e.values)this._map.set(t,e.values[t])}get type(){return"Map"}get changed(){return this._changed}get isDisposed(){return this._isDisposed}get size(){return this._map.size}set(e,t){const s=this._map.get(e);if(void 0===t)throw Error("Cannot set an undefined value, use remove");const i=this._itemCmp;return void 0!==s&&i(s,t)||(this._map.set(e,t),this._changed.emit({type:s?"change":"add",key:e,oldValue:s,newValue:t})),s}get(e){return this._map.get(e)}has(e){return this._map.has(e)}keys(){const e=[];return this._map.forEach(((t,s)=>{e.push(s)})),e}values(){const e=[];return this._map.forEach(((t,s)=>{e.push(t)})),e}delete(e){const t=this._map.get(e);return this._map.delete(e)&&this._changed.emit({type:"remove",key:e,oldValue:t,newValue:void 0}),t}clear(){const e=this.keys();for(let t=0;t<e.length;t++)this.delete(e[t])}dispose(){this.isDisposed||(this._isDisposed=!0,a.Signal.clearData(this),this._map.clear())}}!function(e){e.itemCmp=function(e,t){return e===t}}(i||(i={}));var o=s(91884);class d extends r{constructor(e={}){super({itemCmp:h.JSONExt.deepEqual,values:e.values})}toJSON(){const e=Object.create(null),t=this.keys();for(const s of t){const t=this.get(s);void 0!==t&&(e[s]=h.JSONExt.deepCopy(t))}return e}}!function(e){class t extends o.Message{constructor(e,t){super(e),this.args=t}}e.ChangeMessage=t}(d||(d={}));class l{constructor(e=""){this._text="",this._isDisposed=!1,this._changed=new a.Signal(this),this._text=e}get type(){return"String"}get changed(){return this._changed}set text(e){e.length===this._text.length&&e===this._text||(this._text=e,this._changed.emit({type:"set",start:0,end:e.length,value:e}))}get text(){return this._text}insert(e,t){this._text=this._text.slice(0,e)+t+this._text.slice(e),this._changed.emit({type:"insert",start:e,end:e+t.length,value:t})}remove(e,t){const s=this._text.slice(e,t);this._text=this._text.slice(0,e)+this._text.slice(t),this._changed.emit({type:"remove",start:e,end:t,value:s})}clear(){this.text=""}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this._isDisposed=!0,a.Signal.clearData(this),this.clear())}}var _,u=s(79028);class c{constructor(e={}){this._array=[],this._isDisposed=!1,this._changed=new a.Signal(this),void 0!==e.values&&(0,u.each)(e.values,(e=>{this._array.push(e)})),this._itemCmp=e.itemCmp||_.itemCmp}get type(){return"List"}get changed(){return this._changed}get length(){return this._array.length}get isDisposed(){return this._isDisposed}dispose(){this._isDisposed||(this._isDisposed=!0,a.Signal.clearData(this),this.clear())}iter(){return new u.ArrayIterator(this._array)}get(e){return this._array[e]}set(e,t){const s=this._array[e];if(void 0===t)throw new Error("Cannot set an undefined item");(0,this._itemCmp)(s,t)||(this._array[e]=t,this._changed.emit({type:"set",oldIndex:e,newIndex:e,oldValues:[s],newValues:[t]}))}push(e){const t=this._array.push(e);return this._changed.emit({type:"add",oldIndex:-1,newIndex:this.length-1,oldValues:[],newValues:[e]}),t}insert(e,t){u.ArrayExt.insert(this._array,e,t),this._changed.emit({type:"add",oldIndex:-1,newIndex:e,oldValues:[],newValues:[t]})}removeValue(e){const t=this._itemCmp,s=u.ArrayExt.findFirstIndex(this._array,(s=>t(s,e)));return this.remove(s),s}remove(e){const t=u.ArrayExt.removeAt(this._array,e);if(void 0!==t)return this._changed.emit({type:"remove",oldIndex:e,newIndex:-1,newValues:[],oldValues:[t]}),t}clear(){const e=this._array.slice();this._array.length=0,this._changed.emit({type:"remove",oldIndex:0,newIndex:0,newValues:[],oldValues:e})}move(e,t){if(this.length<=1||e===t)return;const s=[this._array[e]];u.ArrayExt.move(this._array,e,t),this._changed.emit({type:"move",oldIndex:e,newIndex:t,oldValues:s,newValues:s})}pushAll(e){const t=this.length;return(0,u.each)(e,(e=>{this._array.push(e)})),this._changed.emit({type:"add",oldIndex:-1,newIndex:t,oldValues:[],newValues:(0,u.toArray)(e)}),this.length}insertAll(e,t){const s=e;(0,u.each)(t,(t=>{u.ArrayExt.insert(this._array,e++,t)})),this._changed.emit({type:"add",oldIndex:-1,newIndex:s,oldValues:[],newValues:(0,u.toArray)(t)})}removeRange(e,t){const s=this._array.slice(e,t);for(let s=e;s<t;s++)u.ArrayExt.removeAt(this._array,e);return this._changed.emit({type:"remove",oldIndex:e,newIndex:-1,oldValues:s,newValues:[]}),this.length}}!function(e){e.itemCmp=function(e,t){return e===t}}(_||(_={}));class p extends c{constructor(e){super(),this._inCompound=!1,this._isUndoable=!0,this._madeCompoundChange=!1,this._index=-1,this._stack=[],this._serializer=e,this.changed.connect(this._onListChanged,this)}get canRedo(){return this._index<this._stack.length-1}get canUndo(){return this._index>=0}beginCompoundOperation(e){this._inCompound=!0,this._isUndoable=!1!==e,this._madeCompoundChange=!1}endCompoundOperation(){this._inCompound=!1,this._isUndoable=!0,this._madeCompoundChange&&this._index++}undo(){if(!this.canUndo)return;const e=this._stack[this._index];this._isUndoable=!1;for(const t of e.reverse())this._undoChange(t);this._isUndoable=!0,this._index--}redo(){if(!this.canRedo)return;this._index++;const e=this._stack[this._index];this._isUndoable=!1;for(const t of e)this._redoChange(t);this._isUndoable=!0}clearUndo(){this._index=-1,this._stack=[]}_onListChanged(e,t){if(this.isDisposed||!this._isUndoable)return;this._inCompound&&this._madeCompoundChange||(this._stack=this._stack.slice(0,this._index+1));const s=this._copyChange(t);this._stack[this._index+1]?this._stack[this._index+1].push(s):this._stack.push([s]),this._inCompound?this._madeCompoundChange=!0:this._index++}_undoChange(e){let t=0;const s=this._serializer;switch(e.type){case"add":(0,u.each)(e.newValues,(()=>{this.remove(e.newIndex)}));break;case"set":t=e.oldIndex,(0,u.each)(e.oldValues,(e=>{this.set(t++,s.fromJSON(e))}));break;case"remove":t=e.oldIndex,(0,u.each)(e.oldValues,(e=>{this.insert(t++,s.fromJSON(e))}));break;case"move":this.move(e.newIndex,e.oldIndex);break;default:return}}_redoChange(e){let t=0;const s=this._serializer;switch(e.type){case"add":t=e.newIndex,(0,u.each)(e.newValues,(e=>{this.insert(t++,s.fromJSON(e))}));break;case"set":t=e.newIndex,(0,u.each)(e.newValues,(t=>{this.set(e.newIndex++,s.fromJSON(t))}));break;case"remove":(0,u.each)(e.oldValues,(()=>{this.remove(e.oldIndex)}));break;case"move":this.move(e.oldIndex,e.newIndex);break;default:return}}_copyChange(e){const t=[];(0,u.each)(e.oldValues,(e=>{t.push(this._serializer.toJSON(e))}));const s=[];return(0,u.each)(e.newValues,(e=>{s.push(this._serializer.toJSON(e))})),{type:e.type,oldIndex:e.oldIndex,newIndex:e.newIndex,oldValues:t,newValues:s}}}!function(e){e.IdentitySerializer=class{toJSON(e){return e}fromJSON(e){return e}}}(p||(p={}));class g{constructor(e=null){this._value=null,this._changed=new a.Signal(this),this._isDisposed=!1,this._value=e}get type(){return"Value"}get isDisposed(){return this._isDisposed}get changed(){return this._changed}get(){return this._value}set(e){const t=this._value;h.JSONExt.deepEqual(t,e)||(this._value=e,this._changed.emit({oldValue:t,newValue:e}))}dispose(){this._isDisposed||(this._isDisposed=!0,a.Signal.clearData(this),this._value=null)}}!function(e){e.IChangedArgs=class{}}(g||(g={}));class m{constructor(e={}){this.isPrepopulated=!1,this.isCollaborative=!1,this.connected=Promise.resolve(void 0),this._toDispose=!1,this._isDisposed=!1,this._disposables=new n.DisposableSet,this._basePath=e.basePath||"",e.baseDB?this._db=e.baseDB:(this._db=new r,this._toDispose=!0)}get basePath(){return this._basePath}get isDisposed(){return this._isDisposed}get(e){return this._db.get(this._resolvePath(e))}has(e){return this._db.has(this._resolvePath(e))}createString(e){const t=new l;return this._disposables.add(t),this.set(e,t),t}createList(e){const t=new p(new p.IdentitySerializer);return this._disposables.add(t),this.set(e,t),t}createMap(e){const t=new d;return this._disposables.add(t),this.set(e,t),t}createValue(e){const t=new g;return this._disposables.add(t),this.set(e,t),t}getValue(e){const t=this.get(e);if(!t||"Value"!==t.type)throw Error("Can only call getValue for an ObservableValue");return t.get()}setValue(e,t){const s=this.get(e);if(!s||"Value"!==s.type)throw Error("Can only call setValue on an ObservableValue");s.set(t)}view(e){const t=new m({basePath:e,baseDB:this});return this._disposables.add(t),t}set(e,t){this._db.set(this._resolvePath(e),t)}dispose(){this.isDisposed||(this._isDisposed=!0,this._toDispose&&this._db.dispose(),this._disposables.dispose())}_resolvePath(e){return this._basePath&&(e=this._basePath+"."+e),e}}}}]);
//# sourceMappingURL=1035.74644e388ed05ca2ed40.js.map