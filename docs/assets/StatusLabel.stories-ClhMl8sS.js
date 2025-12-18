import{x as n}from"./lit-element-C4bBeaiV.js";import{g as z}from"./storybook-utils-CyXQhEhe.js";import{f as m}from"./fixFigmaPath-DxFz5b9E.js";import"./StatusLabel-DmoJy1fm.js";import{c as p}from"./repeat-Ymi2nAD3.js";import"./directive-helpers-BAuZLZmz.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";const{args:W,argTypes:L,template:b}=z("yg-status-label"),t=["gray","error","green","warning","primary"],T={title:"Components/Base/StatusLabel",component:"yg-status-label",args:W,argTypes:L},s={render:e=>n`${b(e)}`,args:{"default-slot":"テキスト",color:"primary",size:"large"},parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev")}}},K={render:({itemsList:e})=>n`
    <div style="display: flex; flex-direction: column; gap: 40px;">
      ${p(e,x=>n`
          <div
            style="display: flex; gap: 10px; justify-content: center; align-items: start; max-width: 960px; flex-wrap: wrap;"
          >
            ${p(x,r=>n`<yg-status-label
                  color=${r.color}
                  type=${r.type}
                  size=${r.size}
                >
                  ${r.children}
                </yg-status-label>`)}
          </div>
        `)}
    </div>
  `},a={size:"large",children:"テキスト"},o={...K,args:{itemsList:[t.map(e=>({...a,color:e,type:"light"})),t.map(e=>({...a,color:e,type:"light",size:"medium"})),t.map(e=>({...a,color:e,type:"light",size:"small"}))]},parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev")}}},i={...K,args:{itemsList:[t.map(e=>({...a,color:e,type:"dark"})),t.map(e=>({...a,color:e,type:"dark",size:"medium"})),t.map(e=>({...a,color:e,type:"dark",size:"small"}))]},parameters:{design:{type:"figma",url:m("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev")}}};var l,g,c;s.parameters={...s.parameters,docs:{...(l=s.parameters)==null?void 0:l.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    'default-slot': 'テキスト',
    color: 'primary',
    size: 'large'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev')
    }
  }
}`,...(c=(g=s.parameters)==null?void 0:g.docs)==null?void 0:c.source}}};var d,f,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StatusLabelTemplate,
  args: {
    itemsList: [colorOptions.map(color => ({
      ...itemBase,
      color,
      type: 'light'
    })), colorOptions.map(color => ({
      ...itemBase,
      color,
      type: 'light',
      size: 'medium'
    })), colorOptions.map(color => ({
      ...itemBase,
      color,
      type: 'light',
      size: 'small'
    }))]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev')
    }
  }
}`,...(u=(f=o.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var y,h,w;i.parameters={...i.parameters,docs:{...(y=i.parameters)==null?void 0:y.docs,source:{originalSource:`{
  ...StatusLabelTemplate,
  args: {
    itemsList: [colorOptions.map(color => ({
      ...itemBase,
      color,
      type: 'dark'
    })), colorOptions.map(color => ({
      ...itemBase,
      color,
      type: 'dark',
      size: 'medium'
    })), colorOptions.map(color => ({
      ...itemBase,
      color,
      type: 'dark',
      size: 'small'
    }))]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev')
    }
  }
}`,...(w=(h=i.parameters)==null?void 0:h.docs)==null?void 0:w.source}}};const _=["Default","Light","Dark"];export{i as Dark,s as Default,o as Light,_ as __namedExportsOrder,T as default};
