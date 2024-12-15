exports.id=831,exports.ids=[831],exports.modules={2606:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{$:()=>m});var r=a(8732),n=a(2015),i=a(9640),l=a(8938),o=a(4817),d=e([i,l,o]);[i,l,o]=d.then?(await d)():d;let c=(0,l.cva)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),m=n.forwardRef(({className:e,variant:t,size:a,asChild:s=!1,...n},l)=>{let d=s?i.Slot:"button";return(0,r.jsx)(d,{className:(0,o.cn)(c({variant:t,size:a,className:e})),ref:l,...n})});m.displayName="Button",s()}catch(e){s(e)}})},6222:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{Cf:()=>x,Es:()=>g,L3:()=>h,c7:()=>f,lG:()=>c,zM:()=>m});var r=a(8732),n=a(2015),i=a(3020),l=a(8150),o=a(4817),d=e([i,o]);[i,o]=d.then?(await d)():d;let c=i.Root,m=i.Trigger,u=i.Portal;i.Close;let p=n.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Overlay,{ref:a,className:(0,o.cn)("fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",e),...t}));p.displayName=i.Overlay.displayName;let x=n.forwardRef(({className:e,children:t,...a},s)=>(0,r.jsxs)(u,{children:[(0,r.jsx)(p,{}),(0,r.jsxs)(i.Content,{ref:s,className:(0,o.cn)("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",e),...a,children:[t,(0,r.jsxs)(i.Close,{className:"absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",children:[(0,r.jsx)(l.A,{className:"h-4 w-4"}),(0,r.jsx)("span",{className:"sr-only",children:"Close"})]})]})]}));x.displayName=i.Content.displayName;let f=({className:e,...t})=>(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col space-y-1.5 text-center sm:text-left",e),...t});f.displayName="DialogHeader";let g=({className:e,...t})=>(0,r.jsx)("div",{className:(0,o.cn)("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",e),...t});g.displayName="DialogFooter";let h=n.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Title,{ref:a,className:(0,o.cn)("text-lg font-semibold leading-none tracking-tight",e),...t}));h.displayName=i.Title.displayName,n.forwardRef(({className:e,...t},a)=>(0,r.jsx)(i.Description,{ref:a,className:(0,o.cn)("text-sm text-muted-foreground",e),...t})).displayName=i.Description.displayName,s()}catch(e){s(e)}})},8936:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{p:()=>o});var r=a(8732),n=a(2015),i=a(4817),l=e([i]);i=(l.then?(await l)():l)[0];let o=n.forwardRef(({className:e,type:t,...a},s)=>(0,r.jsx)("input",{type:t,className:(0,i.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:s,...a}));o.displayName="Input",s()}catch(e){s(e)}})},7528:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{T:()=>o});var r=a(8732),n=a(2015),i=a(4817),l=e([i]);i=(l.then?(await l)():l)[0];let o=n.forwardRef(({className:e,...t},a)=>(0,r.jsx)("textarea",{className:(0,i.cn)("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",e),ref:a,...t}));o.displayName="Textarea",s()}catch(e){s(e)}})},3721:(e,t,a)=>{"use strict";a.d(t,{D:()=>l,U:()=>i});var s=a(8732),r=a(2015);let n=(0,r.createContext)();function i({children:e}){let[t,a]=(0,r.useState)([]);return(0,s.jsx)(n.Provider,{value:{events:t,addEvent:e=>{let{startTime:s,endTime:r,date:n}=e;if(s>=r){alert("The start time must be before the end time.");return}if(t.some(t=>{if(t.date.toISOString().split("T")[0]===e.date.toISOString().split("T")[0])return!(r<=t.startTime||s>=t.endTime)})){alert("This event overlaps with an existing event. Please choose a different time.");return}let i=t.length>0?Math.max(...t.map(e=>e.id))+1:1,l={...e,id:i};a(e=>[...e,l])},updateEvent:(e,s)=>{let{startTime:r,endTime:n,date:i}=s;if(r>=n){alert("The start time must be before the end time.");return}if(t.some(t=>{if(t.id!==e&&t.date.toISOString().split("T")[0]===s.date.toISOString().split("T")[0])return!(n<=t.startTime||r>=t.endTime)})){alert("This event overlaps with an existing event. Please choose a different time.");return}a(t=>t.map(t=>t.id===e?{...t,...s}:t))},deleteEvent:e=>{a(t=>t.filter(t=>e!==t))},getEventsOfMonth:(e,a)=>(console.log(e),console.log(a),t.map(e=>{console.log(e.date.getMonth()),console.log(e.date.getFullYear())}),t.filter(t=>e===t.date.getMonth()&&a===t.date.getFullYear()))},children:e})}let l=()=>(0,r.useContext)(n)},4817:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.d(t,{cn:()=>l});var r=a(802),n=a(5979),i=e([r,n]);function l(...e){return(0,n.twMerge)((0,r.clsx)(e))}[r,n]=i.then?(await i)():i,s()}catch(e){s(e)}})},1062:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(8796).A)("Briefcase",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]])},7943:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(8796).A)("CalendarPlus",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]])},7142:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(8796).A)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]])},0:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(8796).A)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]])},1670:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(8796).A)("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]])},8150:(e,t,a)=>{"use strict";a.d(t,{A:()=>s});let s=(0,a(8796).A)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]])},6011:(e,t,a)=>{"use strict";a.a(e,async(e,s)=>{try{a.r(t),a.d(t,{default:()=>h});var r=a(8732),n=a(2015),i=a(3721),l=a(2606),o=a(8936),d=a(7528),c=a(6222),m=a(7142),u=a(0),p=a(1062),x=a(1670),f=a(7943),g=e([l,o,d,c]);function h({selectedDay:e}){let{addEvent:t}=(0,i.D)(),[a,s]=(0,n.useState)(!1),[g,h]=(0,n.useState)({name:"",startTime:"",endTime:"",description:"",eventType:""}),v=e=>{h(t=>({...t,eventType:e}))};return(0,r.jsxs)(c.lG,{open:a,onOpenChange:s,children:[(0,r.jsx)(c.zM,{asChild:!0,children:(0,r.jsx)(l.$,{variant:"outline",className:"mt-4",children:"Add Event"})}),(0,r.jsxs)(c.Cf,{className:"max-w-md p-6 space-y-6",children:[(0,r.jsx)(c.c7,{children:(0,r.jsx)(c.L3,{className:"text-lg font-bold",children:"Add Event"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Event Name"}),(0,r.jsx)(o.p,{className:"mt-2",placeholder:"Event Name",value:g.name,onChange:e=>h({...g,name:e.target.value})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Start Time"}),(0,r.jsxs)("div",{className:"relative mt-2",children:[(0,r.jsx)(o.p,{type:"time",value:g.startTime,onChange:e=>h({...g,startTime:e.target.value}),className:"pl-10"}),(0,r.jsx)(m.A,{className:"absolute left-3 top-2 text-gray-400"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"End Time"}),(0,r.jsxs)("div",{className:"relative mt-2",children:[(0,r.jsx)(o.p,{type:"time",value:g.endTime,onChange:e=>h({...g,endTime:e.target.value}),className:"pl-10"}),(0,r.jsx)(u.A,{className:"absolute left-3 top-2 text-gray-400"})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-medium text-gray-700",children:"Description (optional)"}),(0,r.jsx)(d.T,{className:"mt-2",placeholder:"Event Description",value:g.description,onChange:e=>h({...g,description:e.target.value})})]}),(0,r.jsxs)("div",{className:"flex justify-between mt-4",children:[(0,r.jsxs)("div",{className:`cursor-pointer flex items-center space-x-2 p-2 rounded-lg transition-all ${"work"===g.eventType?"bg-blue-100":"bg-white"}`,onClick:()=>v("work"),children:[(0,r.jsx)(p.A,{className:`w-6 h-6 ${"work"===g.eventType?"text-blue-600":"text-gray-600"}`}),(0,r.jsx)("span",{className:"work"===g.eventType?"text-blue-600":"text-gray-600",children:"Work"})]}),(0,r.jsxs)("div",{className:`cursor-pointer flex items-center space-x-2 p-2 rounded-lg transition-all ${"personal"===g.eventType?"bg-red-100":"bg-white"}`,onClick:()=>v("personal"),children:[(0,r.jsx)(x.A,{className:`w-6 h-6 ${"personal"===g.eventType?"text-red-600":"text-gray-600"}`}),(0,r.jsx)("span",{className:"personal"===g.eventType?"text-red-600":"text-gray-600",children:"Personal"})]}),(0,r.jsxs)("div",{className:`cursor-pointer flex items-center space-x-2 p-2 rounded-lg transition-all ${"others"===g.eventType?"bg-green-100":"bg-white"}`,onClick:()=>v("others"),children:[(0,r.jsx)(f.A,{className:`w-6 h-6 ${"others"===g.eventType?"text-green-600":"text-gray-600"}`}),(0,r.jsx)("span",{className:"others"===g.eventType?"text-green-600":"text-gray-600",children:"Others"})]})]}),(0,r.jsxs)(c.Es,{children:[(0,r.jsx)(l.$,{variant:"outline",onClick:()=>s(!1),children:"Cancel"}),(0,r.jsx)(l.$,{className:"bg-blue-600 text-white",onClick:()=>{if(!g.name||!g.startTime||!g.endTime||!g.eventType){alert("Please fill out all required fields.");return}t({...g,date:e}),h({name:"",startTime:"",endTime:"",description:"",eventType:""}),s(!1)},children:"Save Event"})]})]})]})}[l,o,d,c]=g.then?(await g)():g,s()}catch(e){s(e)}})},2327:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(8732);a(2880);var r=a(3721);function n({Component:e,pageProps:t}){return(0,s.jsx)(r.U,{children:(0,s.jsx)(e,{...t})})}},9407:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>n});var s=a(8732),r=a(883);function n(){return(0,s.jsxs)(r.Html,{lang:"en",children:[(0,s.jsx)(r.Head,{}),(0,s.jsxs)("body",{className:"antialiased",children:[(0,s.jsx)(r.Main,{}),(0,s.jsx)(r.NextScript,{})]})]})}},2880:()=>{}};