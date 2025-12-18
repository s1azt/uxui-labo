import{x as a}from"./lit-element-C4bBeaiV.js";import{g as B}from"./storybook-utils-CyXQhEhe.js";import{t as F}from"./element-BmCHZ0P_.js";import{Y as I}from"./Pagination-BMRm9RyA.js";import{N as L}from"./element-BHnNw0zf.js";import{w as Y}from"./decorator-Dt3Huotz.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";import"./v4-CQkTLCs1.js";var H=Object.defineProperty,q=Object.getOwnPropertyDescriptor,z=(t,r,e,s)=>{for(var n=s>1?void 0:s?q(r,e):r,m=t.length-1,u;m>=0;m--)(u=t[m])&&(n=(s?u(r,e,n):u(n))||n);return s&&n&&H(r,e,n),n};let x=class extends L(I){};x=z([F("nk-pagination")],x);const{events:G,args:J,argTypes:K,template:lt}=B("nk-pagination"),gt={title:"Components/Ninkei/Pagination",component:"nk-pagination",componentType:x,args:J,argTypes:K,parameters:{actions:{handles:G}},decorators:[Y]},o={render:t=>a`
    <nk-pagination current="3" total="10"></nk-pagination>
  `,args:{current:3,total:10}},p={render:t=>a`
    <nk-pagination current="1" total="10"></nk-pagination>
  `,args:{current:1,total:10},parameters:{docs:{description:{story:"最初のページでは、「最初へ」と「前へ」のボタンが無効化されます。"}}}},i={render:t=>a`
    <nk-pagination current="10" total="10"></nk-pagination>
  `,args:{current:10,total:10},parameters:{docs:{description:{story:"最後のページでは、「次へ」と「最後へ」のボタンが無効化されます。"}}}},d={render:t=>a`
    <nk-pagination current="50" total="100"></nk-pagination>
  `,args:{current:50,total:100},parameters:{docs:{description:{story:"多数のページがある場合の表示例です。"}}}},c={render:t=>a`
    <nk-pagination current="1" total="1"></nk-pagination>
  `,args:{current:1,total:1},parameters:{docs:{description:{story:"ページが1つしかない場合、すべてのボタンが無効化されます。"}}}},l={render:t=>a`
    <div class="space-y-4">
      <div class="text-sm text-gray-600">
        <p><strong>ページネーション操作デモ</strong></p>
        <p>ページボタンをクリックすると、changeイベントが発生して下に結果が表示されます。</p>
      </div>
      <nk-pagination
        current="5"
        total="10"
        @change="${r=>{const e=document.getElementById("pagination-output");e&&(e.textContent=`ページが変更されました: ${r.detail.value}`)}}"
      ></nk-pagination>
      <div 
        id="pagination-output" 
        class="p-3 bg-gray-100 rounded text-sm"
      >
        ページボタンをクリックしてください
      </div>
    </div>
  `,args:{current:5,total:10},parameters:{docs:{description:{story:"changeイベントをキャプチャして表示する例です。"}}}},g={render:t=>a`
    <div class="space-y-4">
      <div class="text-sm text-gray-600">
        <p><strong>テーブルページネーション例</strong></p>
        <p>申請一覧などのテーブルと組み合わせた実用例です。</p>
      </div>
      
      <!-- 模擬テーブル -->
      <div class="border rounded-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left">申請番号</th>
              <th class="px-4 py-2 text-left">申請者</th>
              <th class="px-4 py-2 text-left">車種</th>
              <th class="px-4 py-2 text-left">ステータス</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2">AP001</td>
              <td class="px-4 py-2">山田 太郎</td>
              <td class="px-4 py-2">プリウス</td>
              <td class="px-4 py-2">
                <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">審査中</span>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">AP002</td>
              <td class="px-4 py-2">佐藤 花子</td>
              <td class="px-4 py-2">ヴィッツ</td>
              <td class="px-4 py-2">
                <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">承認済み</span>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">AP003</td>
              <td class="px-4 py-2">田中 一郎</td>
              <td class="px-4 py-2">アクア</td>
              <td class="px-4 py-2">
                <span class="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">要修正</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- ページネーション -->
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-600">
          全 250 件中 21-30 件を表示
        </div>
        <nk-pagination current="3" total="25"></nk-pagination>
      </div>
    </div>
  `,args:{current:3,total:25}};var y,v,h;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`
    <nk-pagination current="3" total="10"></nk-pagination>
  \`,
  args: {
    current: 3,
    total: 10
  }
}`,...(h=(v=o.parameters)==null?void 0:v.docs)==null?void 0:h.source}}};var b,f,k;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
  render: args => html\`
    <nk-pagination current="1" total="10"></nk-pagination>
  \`,
  args: {
    current: 1,
    total: 10
  },
  parameters: {
    docs: {
      description: {
        story: '最初のページでは、「最初へ」と「前へ」のボタンが無効化されます。'
      }
    }
  }
}`,...(k=(f=p.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var P,w,S;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => html\`
    <nk-pagination current="10" total="10"></nk-pagination>
  \`,
  args: {
    current: 10,
    total: 10
  },
  parameters: {
    docs: {
      description: {
        story: '最後のページでは、「次へ」と「最後へ」のボタンが無効化されます。'
      }
    }
  }
}`,...(S=(w=i.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var _,A,C;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  render: args => html\`
    <nk-pagination current="50" total="100"></nk-pagination>
  \`,
  args: {
    current: 50,
    total: 100
  },
  parameters: {
    docs: {
      description: {
        story: '多数のページがある場合の表示例です。'
      }
    }
  }
}`,...(C=(A=d.parameters)==null?void 0:A.docs)==null?void 0:C.source}}};var E,O,j;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => html\`
    <nk-pagination current="1" total="1"></nk-pagination>
  \`,
  args: {
    current: 1,
    total: 1
  },
  parameters: {
    docs: {
      description: {
        story: 'ページが1つしかない場合、すべてのボタンが無効化されます。'
      }
    }
  }
}`,...(j=(O=c.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var D,N,T;l.parameters={...l.parameters,docs:{...(D=l.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => html\`
    <div class="space-y-4">
      <div class="text-sm text-gray-600">
        <p><strong>ページネーション操作デモ</strong></p>
        <p>ページボタンをクリックすると、changeイベントが発生して下に結果が表示されます。</p>
      </div>
      <nk-pagination
        current="5"
        total="10"
        @change="\${(e: CustomEvent) => {
    const output = document.getElementById('pagination-output');
    if (output) {
      output.textContent = \`ページが変更されました: \${e.detail.value}\`;
    }
  }}"
      ></nk-pagination>
      <div 
        id="pagination-output" 
        class="p-3 bg-gray-100 rounded text-sm"
      >
        ページボタンをクリックしてください
      </div>
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
    }
  }
}`,...(T=(N=l.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var $,M,W;g.parameters={...g.parameters,docs:{...($=g.parameters)==null?void 0:$.docs,source:{originalSource:`{
  render: args => html\`
    <div class="space-y-4">
      <div class="text-sm text-gray-600">
        <p><strong>テーブルページネーション例</strong></p>
        <p>申請一覧などのテーブルと組み合わせた実用例です。</p>
      </div>
      
      <!-- 模擬テーブル -->
      <div class="border rounded-lg overflow-hidden">
        <table class="w-full">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-4 py-2 text-left">申請番号</th>
              <th class="px-4 py-2 text-left">申請者</th>
              <th class="px-4 py-2 text-left">車種</th>
              <th class="px-4 py-2 text-left">ステータス</th>
            </tr>
          </thead>
          <tbody>
            <tr class="border-t">
              <td class="px-4 py-2">AP001</td>
              <td class="px-4 py-2">山田 太郎</td>
              <td class="px-4 py-2">プリウス</td>
              <td class="px-4 py-2">
                <span class="px-2 py-1 text-xs bg-yellow-100 text-yellow-800 rounded">審査中</span>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">AP002</td>
              <td class="px-4 py-2">佐藤 花子</td>
              <td class="px-4 py-2">ヴィッツ</td>
              <td class="px-4 py-2">
                <span class="px-2 py-1 text-xs bg-green-100 text-green-800 rounded">承認済み</span>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">AP003</td>
              <td class="px-4 py-2">田中 一郎</td>
              <td class="px-4 py-2">アクア</td>
              <td class="px-4 py-2">
                <span class="px-2 py-1 text-xs bg-red-100 text-red-800 rounded">要修正</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      
      <!-- ページネーション -->
      <div class="flex justify-between items-center">
        <div class="text-sm text-gray-600">
          全 250 件中 21-30 件を表示
        </div>
        <nk-pagination current="3" total="25"></nk-pagination>
      </div>
    </div>
  \`,
  args: {
    current: 3,
    total: 25
  }
}`,...(W=(M=g.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const mt=["Default","FirstPage","LastPage","ManyPages","SinglePage","WithChangeEvent","TablePagination"];export{o as Default,p as FirstPage,i as LastPage,d as ManyPages,c as SinglePage,g as TablePagination,l as WithChangeEvent,mt as __namedExportsOrder,gt as default};
