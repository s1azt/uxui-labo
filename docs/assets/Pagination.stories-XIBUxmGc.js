import{x as n}from"./lit-element-C4bBeaiV.js";import{g as V}from"./storybook-utils-CyXQhEhe.js";import"./Pagination-BMRm9RyA.js";import{f as a}from"./fixFigmaPath-DxFz5b9E.js";import"./directive-helpers-BAuZLZmz.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";const{args:Z,argTypes:F,template:e}=V("yg-pagination"),R={title:"Components/Base/Pagination",component:"yg-pagination",args:Z,argTypes:F},r={render:t=>n`${e(t)}`,args:{current:3,total:10},parameters:{design:{type:"figma",url:a("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1")}}},s={render:t=>n`${e(t)}`,args:{current:1,total:10},parameters:{docs:{description:{story:"最初のページでは、「最初へ」と「前へ」のボタンが無効化されます。"}},design:{type:"figma",url:a("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1")}}},i={render:t=>n`${e(t)}`,args:{current:10,total:10},parameters:{docs:{description:{story:"最後のページでは、「次へ」と「最後へ」のボタンが無効化されます。"}},design:{type:"figma",url:a("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1")}}},o={render:t=>n`${e(t)}`,args:{current:50,total:100},parameters:{docs:{description:{story:"多数のページがある場合の表示例です。"}},design:{type:"figma",url:a("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1")}}},g={render:t=>n`${e(t)}`,args:{current:1,total:1},parameters:{docs:{description:{story:"ページが1つしかない場合、すべてのボタンが無効化されます。"}},design:{type:"figma",url:a("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1")}}},m={render:t=>n`
    <div>
      <yg-pagination
        current="${t.current}"
        total="${t.total}"
        @change="${U=>{const c=document.getElementById("pagination-output");c&&(c.textContent=`ページが変更されました: ${U.detail.value}`)}}"
      ></yg-pagination>
      <p id="pagination-output" style="margin-top: 16px;">
        ページボタンをクリックしてください
      </p>
    </div>
  `,args:{current:5,total:10},parameters:{docs:{description:{story:"changeイベントをキャプチャして表示する例です。"}},design:{type:"figma",url:a("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1")}}},p={render:t=>n`
    <div class="flex flex-col gap-4">
      <div>
        <p class="mb-2">少ないページ数:</p>
        <yg-pagination current="2" total="5"></yg-pagination>
      </div>
      <div>
        <p class="mb-2">中程度のページ数:</p>
        <yg-pagination current="5" total="10"></yg-pagination>
      </div>
      <div>
        <p class="mb-2">多いページ数:</p>
        <yg-pagination current="50" total="100"></yg-pagination>
      </div>
    </div>
  `,parameters:{docs:{description:{story:"異なるページ数の例を並べて表示しています。"}},design:{type:"figma",url:a("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1")}}};var d,u,l;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    current: 3,
    total: 10
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1')
    }
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var f,y,w;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    current: 1,
    total: 10
  },
  parameters: {
    docs: {
      description: {
        story: '最初のページでは、「最初へ」と「前へ」のボタンが無効化されます。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1')
    }
  }
}`,...(w=(y=s.parameters)==null?void 0:y.docs)==null?void 0:w.source}}};var K,v,h;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    current: 10,
    total: 10
  },
  parameters: {
    docs: {
      description: {
        story: '最後のページでは、「次へ」と「最後へ」のボタンが無効化されます。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1')
    }
  }
}`,...(h=(v=i.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var W,Y,C;o.parameters={...o.parameters,docs:{...(W=o.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    current: 50,
    total: 100
  },
  parameters: {
    docs: {
      description: {
        story: '多数のページがある場合の表示例です。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1')
    }
  }
}`,...(C=(Y=o.parameters)==null?void 0:Y.docs)==null?void 0:C.source}}};var E,x,P;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => html\`\${template(args)}\`,
  args: {
    current: 1,
    total: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'ページが1つしかない場合、すべてのボタンが無効化されます。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1')
    }
  }
}`,...(P=(x=g.parameters)==null?void 0:x.docs)==null?void 0:P.source}}};var $,L,j;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <div>
      <yg-pagination
        current="\${args.current}"
        total="\${args.total}"
        @change="\${(e: CustomEvent) => {
    const output = document.getElementById('pagination-output');
    if (output) {
      output.textContent = \`ページが変更されました: \${e.detail.value}\`;
    }
  }}"
      ></yg-pagination>
      <p id="pagination-output" style="margin-top: 16px;">
        ページボタンをクリックしてください
      </p>
    </div>
  \`,
  args: {
    current: 5,
    total: 10
  },
  parameters: {
    docs: {
      description: {
        story: 'changeイベントをキャプチャして表示する例です。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1')
    }
  }
}`,...(j=(L=m.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var A,G,N;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: args => html\`
    <div class="flex flex-col gap-4">
      <div>
        <p class="mb-2">少ないページ数:</p>
        <yg-pagination current="2" total="5"></yg-pagination>
      </div>
      <div>
        <p class="mb-2">中程度のページ数:</p>
        <yg-pagination current="5" total="10"></yg-pagination>
      </div>
      <div>
        <p class="mb-2">多いページ数:</p>
        <yg-pagination current="50" total="100"></yg-pagination>
      </div>
    </div>
  \`,
  parameters: {
    docs: {
      description: {
        story: '異なるページ数の例を並べて表示しています。'
      }
    },
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860&t=Gnvn9NYL5V1fEs5y-1')
    }
  }
}`,...(N=(G=p.parameters)==null?void 0:G.docs)==null?void 0:N.source}}};const X=["Default","FirstPage","LastPage","ManyPages","SinglePage","WithChangeEvent","MultipleInstances"];export{r as Default,s as FirstPage,i as LastPage,o as ManyPages,p as MultipleInstances,g as SinglePage,m as WithChangeEvent,X as __namedExportsOrder,R as default};
