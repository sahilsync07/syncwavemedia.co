import{jsx as _jsx}from"react/jsx-runtime";import{useEffect,useRef,useState}from"react";import{addPropertyControls,ControlType}from"framer";import{useIsOnCanvas,emptyStateStyle,containerStyles}from"https://framer.com/m/framer/default-utils.js";/**
 * @framerIntrinsicWidth 600
 * @framerIntrinsicHeight 400
 *
 * @framerSupportedLayoutWidth fixed
 * @framerSupportedLayoutHeight any-prefer-fixed
 *
 * @framerDisableUnlink
 */export default function Embed({type,url,html,style={}}){if(type==="url"&&url){return /*#__PURE__*/_jsx(EmbedURL,{url:url,style:style});}if(type==="html"&&html){return /*#__PURE__*/_jsx(EmbedHTML,{html:html,style:style});}return /*#__PURE__*/_jsx(Instructions,{style:style});}addPropertyControls(Embed,{type:{type:ControlType.Enum,defaultValue:"url",displaySegmentedControl:true,options:["url","html"],optionTitles:["URL","HTML"]},url:{title:"URL",type:ControlType.String,description:"Some websites don’t support embedding.",hidden(props){return props.type!=="url";}},html:{title:"HTML",type:ControlType.String,displayTextArea:true,hidden(props){return props.type!=="html";}}});function Instructions({style}){return /*#__PURE__*/_jsx("div",{style:{minHeight:getMinHeight(style),...emptyStateStyle,overflow:"hidden",...style},children:/*#__PURE__*/_jsx("div",{style:centerTextStyle,children:"To embed a website or widget, add it to the properties\xa0panel."})});}function EmbedURL({url,style}){const hasAutoHeight=!style.height;// Add https:// if the URL does not have a protocol.
if(!/[a-z]+:\/\//.test(url)){url="https://"+url;}const onCanvas=useIsOnCanvas();// We need to check if the url is blocked inside an iframe by the X-Frame-Options
// or Content-Security-Policy headers on the backend.
const[state,setState]=useState(onCanvas?undefined:false);useEffect(()=>{// We only want to check on the canvas.
// On the website we want to avoid the additional delay.
if(!onCanvas)return;// TODO: We could also use AbortController here.
let isLastEffect=true;setState(undefined);async function load(){const response=await fetch("https://api.framer.com/functions/check-iframe-url?url="+encodeURIComponent(url));if(response.status==200){const{isBlocked}=await response.json();if(isLastEffect){setState(isBlocked);}}else{const message=await response.text();console.error(message);const error=new Error("This site can’t be reached.");setState(error);}}load().catch(error=>{console.error(error);setState(error);});return()=>{isLastEffect=false;};},[url]);if(onCanvas&&hasAutoHeight){return /*#__PURE__*/_jsx(ErrorMessage,{message:"URL embeds do not support auto height.",style:style});}if(!url.startsWith("https://")){return /*#__PURE__*/_jsx(ErrorMessage,{message:"Unsupported protocol.",style:style});}if(state===undefined){return /*#__PURE__*/_jsx(LoadingIndicator,{});}if(state instanceof Error){return /*#__PURE__*/_jsx(ErrorMessage,{message:state.message,style:style});}if(state===true){const message=`Can’t embed ${url} due to its content security policy.`;return /*#__PURE__*/_jsx(ErrorMessage,{message:message,style:style});}return /*#__PURE__*/_jsx("iframe",{src:url,style:{...iframeStyle,...style},loading:"lazy",// @ts-ignore
fetchPriority:onCanvas?"low":"auto",referrerPolicy:"no-referrer",sandbox:getSandbox(onCanvas)});}const iframeStyle={width:"100%",height:"100%",border:"none"};function getSandbox(onCanvas){const result=["allow-same-origin","allow-scripts"];if(!onCanvas){result.push("allow-downloads","allow-forms","allow-modals","allow-orientation-lock","allow-pointer-lock","allow-popups","allow-popups-to-escape-sandbox","allow-presentation","allow-storage-access-by-user-activation","allow-top-navigation-by-user-activation");}return result.join(" ");}function EmbedHTML({html,style}){const ref=useRef();const onCanvas=useIsOnCanvas();const[iframeHeight,setIframeHeight]=useState(0);const hasAutoHeight=!style.height;const hasScript=html.includes("</script>");useEffect(()=>{var _ref_current;const iframeWindow=(_ref_current=ref.current)===null||_ref_current===void 0?void 0:_ref_current.contentWindow;function handleMessage(event){if(event.source!==iframeWindow)return;const data=event.data;if(typeof data!=="object"||data===null)return;const height=data.embedHeight;if(typeof height!=="number")return;setIframeHeight(height);}window.addEventListener("message",handleMessage);// After SSG the iframe loads before we attach the event handler,
// therefore we need to request the latest height from the iframe.
iframeWindow===null||iframeWindow===void 0?void 0:iframeWindow.postMessage("getEmbedHeight","*");return()=>{window.removeEventListener("message",handleMessage);};},[]);if(hasScript){const srcDoc=`<html>
    <head>
        <style>body { margin: 0; }</style>
    </head>
    <body>
        ${html}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        </script>
    <body>
</html>`;const currentStyle={...iframeStyle,...style};if(hasAutoHeight){currentStyle.height=iframeHeight+"px";}return /*#__PURE__*/_jsx("iframe",{ref:ref,style:currentStyle,srcDoc:srcDoc});}return /*#__PURE__*/_jsx("div",{style:{...htmlStyle,...style},dangerouslySetInnerHTML:{__html:html}});}const htmlStyle={width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"};// Generic components
function LoadingIndicator(){return /*#__PURE__*/_jsx("div",{className:"framerInternalUI-componentPlaceholder",style:{...containerStyles,overflow:"hidden"},children:/*#__PURE__*/_jsx("div",{style:centerTextStyle,children:"Loading…"})});}function ErrorMessage({message,style}){return /*#__PURE__*/_jsx("div",{className:"framerInternalUI-errorPlaceholder",style:{minHeight:getMinHeight(style),...containerStyles,overflow:"hidden",...style},children:/*#__PURE__*/_jsx("div",{style:centerTextStyle,children:message})});}const centerTextStyle={textAlign:"center",minWidth:140};// Returns a min-height if the component is using auto-height.
function getMinHeight(style){const hasAutoHeight=!style.height;if(hasAutoHeight)return 200;}
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"Embed","slots":[],"annotations":{"framerContractVersion":"1","framerIntrinsicWidth":"600","framerSupportedLayoutWidth":"fixed","framerIntrinsicHeight":"400","framerSupportedLayoutHeight":"any-prefer-fixed","framerDisableUnlink":""}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./Embed.map