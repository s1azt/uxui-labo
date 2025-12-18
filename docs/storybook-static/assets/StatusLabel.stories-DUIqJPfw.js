import{x as i}from"./lit-element-C4bBeaiV.js";import{g as j}from"./storybook-utils-CyXQhEhe.js";import{f as u}from"./fixFigmaPath-DxFz5b9E.js";import{t as _}from"./element-BmCHZ0P_.js";import{Y as A}from"./StatusLabel-DmoJy1fm.js";import{N as C}from"./element-BHnNw0zf.js";import{c as y}from"./repeat-Ymi2nAD3.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";var P=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,$=(e,s,t,o)=>{for(var a=o>1?void 0:o?Y(s,t):s,c=e.length-1,g;c>=0;c--)(g=e[c])&&(a=(o?g(s,t,a):g(a))||a);return o&&a&&P(s,t,a),a};let f=class extends C(A){};f=$([_("nk-status-label")],f);const{args:B,argTypes:D,template:U}=j("nk-status-label"),r=["gray","error","green","warning","primary"],ae={title:"Components/Ninkei/StatusLabel",component:"nk-status-label",args:B,argTypes:D},l={render:e=>i`${U(e)}`,args:{"default-slot":"ステータス",color:"primary",type:"dark",size:"large"},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev")},docs:{description:{story:"Ninkei版のStatusLabelです。任継ポータル固有のテーマが適用されています。"}}}},N={render:({itemsList:e})=>i`
    <div style="display: flex; flex-direction: column; gap: 40px;">
      ${y(e,s=>i`
          <div
            style="display: flex; gap: 10px; justify-content: center; align-items: start; max-width: 960px; flex-wrap: wrap;"
          >
            ${y(s,t=>i`<nk-status-label
                  color=${t.color}
                  type=${t.type}
                  size=${t.size}
                >
                  ${t.children}
                </nk-status-label>`)}
          </div>
        `)}
    </div>
  `},n={size:"large",children:"ステータス"},p={...N,args:{itemsList:[r.map(e=>({...n,color:e,type:"light"})),r.map(e=>({...n,color:e,type:"light",size:"medium"})),r.map(e=>({...n,color:e,type:"light",size:"small"}))]},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev")},docs:{description:{story:"ライトタイプのNinkeiStatusLabelです。背景が薄い色で、テキストが濃い色になります。"}}}},m={...N,args:{itemsList:[r.map(e=>({...n,color:e,type:"dark"})),r.map(e=>({...n,color:e,type:"dark",size:"medium"})),r.map(e=>({...n,color:e,type:"dark",size:"small"}))]},parameters:{design:{type:"figma",url:u("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev")},docs:{description:{story:"ダークタイプのNinkeiStatusLabelです。背景が濃い色で、テキストが白または黒になります。"}}}},d={render:()=>i`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <h3>申請ステータス例</h3>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nk-status-label color="gray" type="light" size="medium">
          下書き
        </nk-status-label>
        <nk-status-label color="warning" type="dark" size="medium">
          審査中
        </nk-status-label>
        <nk-status-label color="green" type="dark" size="medium">
          承認済み
        </nk-status-label>
        <nk-status-label color="error" type="dark" size="medium">
          差し戻し
        </nk-status-label>
        <nk-status-label color="primary" type="dark" size="medium">
          完了
        </nk-status-label>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"任継ポータルでよく使用される申請ステータスの例です。"}}}};var k,b,h;l.parameters={...l.parameters,docs:{...(k=l.parameters)==null?void 0:k.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    'default-slot': 'ステータス',
    color: 'primary',
    type: 'dark',
    size: 'large'
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=6095-50575&m=dev')
    },
    docs: {
      description: {
        story: 'Ninkei版のStatusLabelです。任継ポータル固有のテーマが適用されています。'
      }
    }
  }
}`,...(h=(b=l.parameters)==null?void 0:b.docs)==null?void 0:h.source}}};var w,x,v;p.parameters={...p.parameters,docs:{...(w=p.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    },
    docs: {
      description: {
        story: 'ライトタイプのNinkeiStatusLabelです。背景が薄い色で、テキストが濃い色になります。'
      }
    }
  }
}`,...(v=(x=p.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};var z,S,L;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
    },
    docs: {
      description: {
        story: 'ダークタイプのNinkeiStatusLabelです。背景が濃い色で、テキストが白または黒になります。'
      }
    }
  }
}`,...(L=(S=m.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var K,W,O;d.parameters={...d.parameters,docs:{...(K=d.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: () => html\`
    <div style="display: flex; flex-direction: column; gap: 20px;">
      <h3>申請ステータス例</h3>
      <div style="display: flex; gap: 10px; flex-wrap: wrap;">
        <nk-status-label color="gray" type="light" size="medium">
          下書き
        </nk-status-label>
        <nk-status-label color="warning" type="dark" size="medium">
          審査中
        </nk-status-label>
        <nk-status-label color="green" type="dark" size="medium">
          承認済み
        </nk-status-label>
        <nk-status-label color="error" type="dark" size="medium">
          差し戻し
        </nk-status-label>
        <nk-status-label color="primary" type="dark" size="medium">
          完了
        </nk-status-label>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: '任継ポータルでよく使用される申請ステータスの例です。'
      }
    }
  }
}`,...(O=(W=d.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const se=["Default","Light","Dark","ApplicationStatuses"];export{d as ApplicationStatuses,m as Dark,l as Default,p as Light,se as __namedExportsOrder,ae as default};
