/*
 * Animated Counter by framer.today
 * v1.0.1
 *
 * hi@framer.today
 * _joerl on 𝕏
 *
 * Full terms here ↴
 * https://framer.today/license
 *
 */import{jsx as _jsx}from"react/jsx-runtime";import{animate,motion,useInView}from"framer-motion";import{useEffect,useRef,useState}from"react";import{addPropertyControls,ControlType,RenderTarget}from"framer";/**
 * @framerDisableUnlink
 */export default function AnimatedCounter(props){const{from,to,duration,decimalPlaces,decimalSeparator,font:{fontFamily,fontWeight,fontSize,lineHeight,letterSpacing,textAlign},color,playOnLoad,once}=props;const ref=useRef(null);const isInView=useInView(ref);const[displayValue,setDisplayValue]=useState(()=>formatNumber(from));const isCanvas=RenderTarget.current()===RenderTarget.canvas;const ariaLabel=`Counter ends at ${to}`;function formatNumber(value){let formattedNumber=value.toFixed(decimalPlaces).replace(".",decimalSeparator);return formattedNumber;}useEffect(()=>{if(!isCanvas&&(playOnLoad||isInView)){const animationControl=animate(from,to,{duration,onUpdate:latest=>{setDisplayValue(formatNumber(latest));}});return()=>animationControl.stop();}},[from,to,duration,decimalPlaces,decimalSeparator,playOnLoad,isInView]);return /*#__PURE__*/_jsx(motion.div,{ref:ref,initial:{opacity:isCanvas?1:0},whileInView:{opacity:1},style:{fontFamily,fontWeight,fontSize,lineHeight,letterSpacing,textAlign,color,fontVariantNumeric:"tabular-nums",userSelect:"none"},"aria-label":ariaLabel,children:isCanvas?formatNumber(to):displayValue});}AnimatedCounter.defaultProps={from:0,to:24,duration:5,decimalPlaces:0,decimalSeparator:".",font:{fontFamily:"Manrope",fontWeight:"400",fontSize:40,lineHeight:"1.5em",letterSpacing:"normal",textAlign:"left"},color:"#121212",playOnLoad:true,once:true};addPropertyControls(AnimatedCounter,{from:{type:ControlType.Number,title:"From",defaultValue:0,min:0,step:.1,displayStepper:true},to:{type:ControlType.Number,title:"To",defaultValue:16,min:0,step:.1,displayStepper:true},duration:{type:ControlType.Number,title:"Duration",defaultValue:2.5,min:0,step:.1,displayStepper:true},decimalPlaces:{type:ControlType.Number,displayStepper:true,title:"Decimal Places",defaultValue:0,min:0,max:2,step:1},decimalSeparator:{type:ControlType.Enum,title:"↳ Separator",defaultValue:".",options:[".",","],optionTitles:[".",","],hidden:({decimalPlaces})=>decimalPlaces===0},font:{type:ControlType.Font,title:"Font",controls:"extended",defaultValue:{fontFamily:"Manrope",fontWeight:"400",fontSize:40,lineHeight:"1.5em",letterSpacing:"normal",textAlign:"left"},displayFontSize:true,displayTextAlignment:false,defaultFontType:"monospace"},color:{type:ControlType.Color,title:"Color",defaultValue:"#121212"},once:{// New property control for 'once' option
type:ControlType.Boolean,title:"Once",defaultValue:true,enabledTitle:"Yes",disabledTitle:"No"},playOnLoad:{type:ControlType.Boolean,title:"InView?",defaultValue:true,enabledTitle:"No",disabledTitle:"Yes",description:`
        
        *from framer.today*
 [License](https://framer.today/license)
    `}});
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"AnimatedCounter","slots":[],"annotations":{"framerContractVersion":"1","framerDisableUnlink":""}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./AnimatedCounter.map