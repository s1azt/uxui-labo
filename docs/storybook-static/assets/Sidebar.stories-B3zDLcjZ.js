import{x as t}from"./lit-element-C4bBeaiV.js";import{g as S}from"./storybook-utils-CyXQhEhe.js";import{f as o}from"./fixFigmaPath-DxFz5b9E.js";import"./Sidebar-BuJ9dN2t.js";import"./directive-helpers-BAuZLZmz.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";import"./if-defined-DhMdV329.js";const{args:A,argTypes:M,template:q}=S("yg-sidebar"),z={title:"Components/Base/Sidebar",component:"yg-sidebar",args:A,argTypes:M},d=[{id:"dashboard",icon:"yg:dashboard",text:"ダッシュボード",onClick:()=>console.log("ダッシュボードがクリックされました")},{id:"vehicles",icon:"yg:car",text:"車両管理",children:[{id:"vehicle-list",text:"車両一覧",onClick:()=>console.log("車両一覧がクリックされました")},{id:"vehicle-registration",text:"車両登録",onClick:()=>console.log("車両登録がクリックされました")}]},{id:"maintenance",icon:"yg:tools",text:"整備管理",onClick:()=>console.log("整備管理がクリックされました")},{id:"reports",icon:"yg:file-document",text:"レポート",onClick:()=>console.log("レポートがクリックされました")}],i=[{id:"settings",icon:"yg:settings",text:"設定",onClick:()=>console.log("設定がクリックされました")},{id:"help",icon:"yg:help",text:"ヘルプ",onClick:()=>console.log("ヘルプがクリックされました")}],a={render:e=>t`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="${e["system-name"]}"
        company-name="${e["company-name"]}"
        header-icon="${e["header-icon"]}"
        .items="${e.items}"
        .bottoms="${e.bottoms}"
        ?gradient="${e.gradient}"
      ></yg-sidebar>
    </div>
  `,args:{"system-name":"車両管理システム","company-name":"ヤマトオートワークス","header-icon":"yg:car",items:d,bottoms:i,gradient:!0},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},s={render:e=>t`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="${e["system-name"]}"
        company-name="${e["company-name"]}"
        header-icon="${e["header-icon"]}"
        .items="${e.items}"
        .bottoms="${e.bottoms}"
        ?gradient="${e.gradient}"
        style="--_expanded: true;"
      ></yg-sidebar>
    </div>
  `,args:{"system-name":"車両管理システム","company-name":"ヤマトオートワークス","header-icon":"yg:car",items:d,bottoms:i,gradient:!0},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},n={render:e=>t`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="${e["system-name"]}"
        company-name="${e["company-name"]}"
        header-icon="${e["header-icon"]}"
        .items="${e.items}"
        .bottoms="${e.bottoms}"
        ?gradient="${e.gradient}"
      ></yg-sidebar>
    </div>
  `,args:{"system-name":"車両管理システム","company-name":"ヤマトオートワークス","header-icon":"yg:car",items:d,bottoms:i,gradient:!1},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},r={render:e=>t`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="${e["system-name"]}"
        company-name="${e["company-name"]}"
        header-icon="${e["header-icon"]}"
        .items="${e.items}"
        .bottoms="${e.bottoms}"
        ?gradient="${e.gradient}"
        style="--_expanded: true;"
      ></yg-sidebar>
    </div>
  `,args:{"system-name":"車両管理システム","company-name":"ヤマトオートワークス","header-icon":"yg:car",items:[{id:"dashboard",icon:"yg:dashboard",text:"ダッシュボード",onClick:()=>console.log("ダッシュボードがクリックされました")},{id:"vehicles",icon:"yg:car",text:"車両管理",children:[{id:"vehicle-list",text:"車両一覧",onClick:()=>console.log("車両一覧がクリックされました")},{id:"vehicle-registration",text:"車両登録",onClick:()=>console.log("車両登録がクリックされました")},{id:"vehicle-inspection",text:"車検管理",onClick:()=>console.log("車検管理がクリックされました")}]},{id:"maintenance",icon:"yg:tools",text:"整備管理",children:[{id:"maintenance-schedule",text:"整備スケジュール",onClick:()=>console.log("整備スケジュールがクリックされました")},{id:"maintenance-history",text:"整備履歴",onClick:()=>console.log("整備履歴がクリックされました")}]},{id:"reports",icon:"yg:file-document",text:"レポート",onClick:()=>console.log("レポートがクリックされました")}],bottoms:i,gradient:!0},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},m={render:e=>t`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="${e["system-name"]}"
        company-name="${e["company-name"]}"
        header-icon="${e["header-icon"]}"
        .items="${e.items}"
        .bottoms="${e.bottoms}"
        ?gradient="${e.gradient}"
        style="--_expanded: true;"
      ></yg-sidebar>
    </div>
  `,args:{"system-name":"車両管理システム","company-name":"ヤマトオートワークス","header-icon":"yg:car",items:[{id:"dashboard",icon:"yg:dashboard",text:"ダッシュボード",onClick:()=>console.log("ダッシュボードがクリックされました")},{id:"vehicles",icon:"yg:car",text:"車両管理",children:[{id:"vehicle-list",text:"車両一覧",onClick:()=>console.log("車両一覧がクリックされました")},{id:"vehicle-registration",text:"車両登録",onClick:()=>console.log("車両登録がクリックされました")}]},{id:"maintenance",icon:"yg:tools",text:"整備管理",onClick:()=>console.log("整備管理がクリックされました")},{id:"reports",icon:"yg:file-document",text:"レポート",onClick:()=>console.log("レポートがクリックされました")},{id:"users",icon:"yg:account",text:"ユーザー管理",onClick:()=>console.log("ユーザー管理がクリックされました")},{id:"notifications",icon:"yg:bell",text:"通知設定",onClick:()=>console.log("通知設定がクリックされました")},{id:"analytics",icon:"yg:chart-bar",text:"分析",onClick:()=>console.log("分析がクリックされました")},{id:"calendar",icon:"yg:calendar",text:"カレンダー",onClick:()=>console.log("カレンダーがクリックされました")},{id:"messages",icon:"yg:message",text:"メッセージ",onClick:()=>console.log("メッセージがクリックされました")},{id:"documents",icon:"yg:file",text:"書類管理",onClick:()=>console.log("書類管理がクリックされました")}],bottoms:i,gradient:!0},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}},c={render:e=>t`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="${e["system-name"]}"
        company-name="${e["company-name"]}"
        header-icon="${e["header-icon"]}"
        .items="${e.items}"
        .bottoms="${e.bottoms}"
        ?gradient="${e.gradient}"
      ></yg-sidebar>
    </div>
  `,args:{"system-name":"車両管理システム","company-name":"ヤマトオートワークス","header-icon":"https://dummyimage.com/56x56/4A90E2/ffffff&text=LOGO",items:d,bottoms:i,gradient:!0},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}};var g,l,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="\${args['system-name']}"
        company-name="\${args['company-name']}"
        header-icon="\${args['header-icon']}"
        .items="\${args.items}"
        .bottoms="\${args.bottoms}"
        ?gradient="\${args.gradient}"
      ></yg-sidebar>
    </div>
  \`,
  args: {
    'system-name': '車両管理システム',
    'company-name': 'ヤマトオートワークス',
    'header-icon': 'yg:car',
    items: defaultItems,
    bottoms: defaultBottoms,
    gradient: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(y=(l=a.parameters)==null?void 0:l.docs)==null?void 0:y.source}}};var p,h,f;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="\${args['system-name']}"
        company-name="\${args['company-name']}"
        header-icon="\${args['header-icon']}"
        .items="\${args.items}"
        .bottoms="\${args.bottoms}"
        ?gradient="\${args.gradient}"
        style="--_expanded: true;"
      ></yg-sidebar>
    </div>
  \`,
  args: {
    'system-name': '車両管理システム',
    'company-name': 'ヤマトオートワークス',
    'header-icon': 'yg:car',
    items: defaultItems,
    bottoms: defaultBottoms,
    gradient: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(f=(h=s.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var x,u,b;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="\${args['system-name']}"
        company-name="\${args['company-name']}"
        header-icon="\${args['header-icon']}"
        .items="\${args.items}"
        .bottoms="\${args.bottoms}"
        ?gradient="\${args.gradient}"
      ></yg-sidebar>
    </div>
  \`,
  args: {
    'system-name': '車両管理システム',
    'company-name': 'ヤマトオートワークス',
    'header-icon': 'yg:car',
    items: defaultItems,
    bottoms: defaultBottoms,
    gradient: false
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(b=(u=n.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var $,C,v;r.parameters={...r.parameters,docs:{...($=r.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="\${args['system-name']}"
        company-name="\${args['company-name']}"
        header-icon="\${args['header-icon']}"
        .items="\${args.items}"
        .bottoms="\${args.bottoms}"
        ?gradient="\${args.gradient}"
        style="--_expanded: true;"
      ></yg-sidebar>
    </div>
  \`,
  args: {
    'system-name': '車両管理システム',
    'company-name': 'ヤマトオートワークス',
    'header-icon': 'yg:car',
    items: [{
      id: 'dashboard',
      icon: 'yg:dashboard',
      text: 'ダッシュボード',
      onClick: () => console.log('ダッシュボードがクリックされました')
    }, {
      id: 'vehicles',
      icon: 'yg:car',
      text: '車両管理',
      children: [{
        id: 'vehicle-list',
        text: '車両一覧',
        onClick: () => console.log('車両一覧がクリックされました')
      }, {
        id: 'vehicle-registration',
        text: '車両登録',
        onClick: () => console.log('車両登録がクリックされました')
      }, {
        id: 'vehicle-inspection',
        text: '車検管理',
        onClick: () => console.log('車検管理がクリックされました')
      }]
    }, {
      id: 'maintenance',
      icon: 'yg:tools',
      text: '整備管理',
      children: [{
        id: 'maintenance-schedule',
        text: '整備スケジュール',
        onClick: () => console.log('整備スケジュールがクリックされました')
      }, {
        id: 'maintenance-history',
        text: '整備履歴',
        onClick: () => console.log('整備履歴がクリックされました')
      }]
    }, {
      id: 'reports',
      icon: 'yg:file-document',
      text: 'レポート',
      onClick: () => console.log('レポートがクリックされました')
    }],
    bottoms: defaultBottoms,
    gradient: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(v=(C=r.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var w,W,k;m.parameters={...m.parameters,docs:{...(w=m.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="\${args['system-name']}"
        company-name="\${args['company-name']}"
        header-icon="\${args['header-icon']}"
        .items="\${args.items}"
        .bottoms="\${args.bottoms}"
        ?gradient="\${args.gradient}"
        style="--_expanded: true;"
      ></yg-sidebar>
    </div>
  \`,
  args: {
    'system-name': '車両管理システム',
    'company-name': 'ヤマトオートワークス',
    'header-icon': 'yg:car',
    items: [{
      id: 'dashboard',
      icon: 'yg:dashboard',
      text: 'ダッシュボード',
      onClick: () => console.log('ダッシュボードがクリックされました')
    }, {
      id: 'vehicles',
      icon: 'yg:car',
      text: '車両管理',
      children: [{
        id: 'vehicle-list',
        text: '車両一覧',
        onClick: () => console.log('車両一覧がクリックされました')
      }, {
        id: 'vehicle-registration',
        text: '車両登録',
        onClick: () => console.log('車両登録がクリックされました')
      }]
    }, {
      id: 'maintenance',
      icon: 'yg:tools',
      text: '整備管理',
      onClick: () => console.log('整備管理がクリックされました')
    }, {
      id: 'reports',
      icon: 'yg:file-document',
      text: 'レポート',
      onClick: () => console.log('レポートがクリックされました')
    }, {
      id: 'users',
      icon: 'yg:account',
      text: 'ユーザー管理',
      onClick: () => console.log('ユーザー管理がクリックされました')
    }, {
      id: 'notifications',
      icon: 'yg:bell',
      text: '通知設定',
      onClick: () => console.log('通知設定がクリックされました')
    }, {
      id: 'analytics',
      icon: 'yg:chart-bar',
      text: '分析',
      onClick: () => console.log('分析がクリックされました')
    }, {
      id: 'calendar',
      icon: 'yg:calendar',
      text: 'カレンダー',
      onClick: () => console.log('カレンダーがクリックされました')
    }, {
      id: 'messages',
      icon: 'yg:message',
      text: 'メッセージ',
      onClick: () => console.log('メッセージがクリックされました')
    }, {
      id: 'documents',
      icon: 'yg:file',
      text: '書類管理',
      onClick: () => console.log('書類管理がクリックされました')
    }],
    bottoms: defaultBottoms,
    gradient: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(k=(W=m.parameters)==null?void 0:W.docs)==null?void 0:k.source}}};var K,j,Y;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => html\`
    <div style="height: 600px; position: relative;">
      <yg-sidebar
        system-name="\${args['system-name']}"
        company-name="\${args['company-name']}"
        header-icon="\${args['header-icon']}"
        .items="\${args.items}"
        .bottoms="\${args.bottoms}"
        ?gradient="\${args.gradient}"
      ></yg-sidebar>
    </div>
  \`,
  args: {
    'system-name': '車両管理システム',
    'company-name': 'ヤマトオートワークス',
    'header-icon': 'https://dummyimage.com/56x56/4A90E2/ffffff&text=LOGO',
    items: defaultItems,
    bottoms: defaultBottoms,
    gradient: true
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4')
    }
  }
}`,...(Y=(j=c.parameters)==null?void 0:j.docs)==null?void 0:Y.source}}};const Q=["Default","Expanded","WithoutGradient","WithNestedSubmenus","WithManyItems","WithHeaderImage"];export{a as Default,s as Expanded,c as WithHeaderImage,m as WithManyItems,r as WithNestedSubmenus,n as WithoutGradient,Q as __namedExportsOrder,z as default};
