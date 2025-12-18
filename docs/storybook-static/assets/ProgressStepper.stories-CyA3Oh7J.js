import{x as s}from"./lit-element-C4bBeaiV.js";import{g as D}from"./storybook-utils-CyXQhEhe.js";import"./ProgressStepper-By3TNlqg.js";import{f as o}from"./fixFigmaPath-DxFz5b9E.js";import"./Button-Drw3qSHJ.js";import"./directive-helpers-BAuZLZmz.js";import"./element-BmCHZ0P_.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";const{args:_,argTypes:I}=D("yg-progress-stepper"),ye={title:"Components/Base/ProgressStepper",component:"yg-progress-stepper",args:_,argTypes:I},n={render:({"active-step":e,steps:p,gap:r})=>s`
    <yg-progress-stepper gap="${r}" active-step="${e}">
      ${p.map(t=>s`
          <yg-progress-step label="${t.label}">
            ${t.content}
          </yg-progress-step>
        `)}
    </yg-progress-stepper>
  `,args:{"active-step":2,gap:4,steps:[{label:"Step 1",content:"Step 1: This step is complete."},{label:"Step 2",content:"Step 2: This is the current step."},{label:"Step 3",content:"Step 3: This step is not yet reached."}]},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860")}}},i={render:({"active-step":e,steps:p,gap:r})=>s`
    <yg-progress-stepper gap="${r}" active-step="${e}">
      ${p.map(t=>s`
          <yg-progress-step label="${t.label}">
            ${t.content}
          </yg-progress-step>
        `)}
    </yg-progress-stepper>
  `,args:{"active-step":1,gap:4,steps:[{label:"Step 1",content:"Step 1: This is the first step and is active."},{label:"Step 2",content:"Step 2: This step is not yet reached."},{label:"Step 3",content:"Step 3: This step is not yet reached."}]},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860")}}},g={render:({"active-step":e,steps:p,gap:r})=>s`
    <yg-progress-stepper gap="${r}" active-step="${e}">
      ${p.map(t=>s`
          <yg-progress-step label="${t.label}">
            ${t.content}
          </yg-progress-step>
        `)}
    </yg-progress-stepper>
  `,args:{"active-step":3,gap:4,steps:[{label:"Step 1",content:"Step 1: This step is complete."},{label:"Step 2",content:"Step 2: This step is complete."},{label:"Step 3",content:"Step 3: This is the last step and is active."}]},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860")}}},c={render:({"active-step":e,steps:p,gap:r})=>s`
    <yg-progress-stepper gap="${r}" active-step="${e}">
      ${p.map(t=>s`
          <yg-progress-step label="${t.label}">
            ${t.content}
          </yg-progress-step>
        `)}
    </yg-progress-stepper>
  `,args:{"active-step":3,gap:4,steps:[{label:"Step 1",content:"Step 1: This step is complete."},{label:"Step 2",content:"Step 2: This step is complete."},{label:"Step 3",content:"Step 3: This is the current step."},{label:"Step 4",content:"Step 4: This step is not yet reached."},{label:"Step 5",content:"Step 5: This step is not yet reached."}]},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860")}}},d={render:()=>s`
    <div class="flex flex-col gap-12">
      <div>
        <h3 class="mb-4">Small Gap (gap=2)</h3>
        <yg-progress-stepper gap="2" active-step="2">
          <yg-progress-step label="Step 1">
            Step 1: This step is complete.
          </yg-progress-step>
          <yg-progress-step label="Step 2">
            Step 2: This is the current step.
          </yg-progress-step>
          <yg-progress-step label="Step 3">
            Step 3: This step is not yet reached.
          </yg-progress-step>
        </yg-progress-stepper>
      </div>

      <div>
        <h3 class="mb-4">Medium Gap (gap=4)</h3>
        <yg-progress-stepper gap="4" active-step="2">
          <yg-progress-step label="Step 1">
            Step 1: This step is complete.
          </yg-progress-step>
          <yg-progress-step label="Step 2">
            Step 2: This is the current step.
          </yg-progress-step>
          <yg-progress-step label="Step 3">
            Step 3: This step is not yet reached.
          </yg-progress-step>
        </yg-progress-stepper>
      </div>

      <div>
        <h3 class="mb-4">Large Gap (gap=8)</h3>
        <yg-progress-stepper gap="8" active-step="2">
          <yg-progress-step label="Step 1">
            Step 1: This step is complete.
          </yg-progress-step>
          <yg-progress-step label="Step 2">
            Step 2: This is the current step.
          </yg-progress-step>
          <yg-progress-step label="Step 3">
            Step 3: This step is not yet reached.
          </yg-progress-step>
        </yg-progress-stepper>
      </div>
    </div>
  `,parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860")}}},m={render:()=>s`
    <yg-progress-stepper gap="4" active-step="2">
      <yg-progress-step label="個人情報">
        <div class="p-4 border rounded">
          <h3 class="text-lg font-bold mb-4">個人情報の入力</h3>
          <div class="flex flex-col gap-4">
            <div>
              <label class="block mb-1">氏名</label>
              <input
                type="text"
                class="border rounded px-2 py-1 w-full"
                value="山田 太郎"
                disabled
              />
            </div>
            <div>
              <label class="block mb-1">メールアドレス</label>
              <input
                type="email"
                class="border rounded px-2 py-1 w-full"
                value="yamada@example.com"
                disabled
              />
            </div>
            <div>
              <label class="block mb-1">電話番号</label>
              <input
                type="tel"
                class="border rounded px-2 py-1 w-full"
                value="090-1234-5678"
                disabled
              />
            </div>
          </div>
        </div>
      </yg-progress-step>

      <yg-progress-step label="配送情報">
        <div class="p-4 border rounded">
          <h3 class="text-lg font-bold mb-4">配送情報の入力</h3>
          <div class="flex flex-col gap-4">
            <div>
              <label class="block mb-1">郵便番号</label>
              <input
                type="text"
                class="border rounded px-2 py-1 w-64"
                placeholder="例: 123-4567"
              />
            </div>
            <div>
              <label class="block mb-1">住所</label>
              <input
                type="text"
                class="border rounded px-2 py-1 w-full"
                placeholder="例: 東京都千代田区..."
              />
            </div>
            <div>
              <label class="block mb-1">配送希望日</label>
              <input type="date" class="border rounded px-2 py-1 w-64" />
            </div>
          </div>
        </div>
      </yg-progress-step>

      <yg-progress-step label="支払い情報">
        <div class="p-4 border rounded">
          <h3 class="text-lg font-bold mb-4">支払い情報の入力</h3>
          <p class="mb-4">
            配送情報を入力した後に、支払い情報を入力してください。
          </p>
        </div>
      </yg-progress-step>
    </yg-progress-stepper>
  `,parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860")}}},y={render:()=>s`
    <yg-progress-stepper gap="4" active-step="2">
      <yg-progress-step label="基本情報">
        <div class="p-4">基本情報のステップです。</div>
      </yg-progress-step>

      <yg-progress-step label="詳細設定">
        <div class="p-4">詳細設定のステップです。</div>
      </yg-progress-step>

      <yg-progress-step label="確認">
        <div class="p-4">確認のステップです。</div>
      </yg-progress-step>

      <yg-progress-step label="完了">
        <div class="p-4">完了のステップです。</div>
      </yg-progress-step>
    </yg-progress-stepper>
  `,parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860")}}},b={render:()=>{let e=1;const p=3,r=a=>{e=Math.max(1,Math.min(p+1,a));const l=document.querySelector("#interactive-stepper");l&&(l.activeStep=e),t()},t=()=>{const a=document.querySelectorAll(".prev-btn"),l=document.querySelectorAll(".next-btn");a.forEach(v=>{v.disabled=e<=1}),l.forEach(v=>{v.disabled=e>p})},u=a=>s`
      <div class="p-4">
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2">ステップ ${a}</h3>
          <p class="text-gray-600">
            ${a===1?"基本情報を入力してください。":a===2?"詳細情報を確認してください。":"最終確認を行ってください。"}
          </p>
        </div>
        <div class="flex gap-2">
          <yg-button 
            class="prev-btn"
            variant="outlined"
            color="primary"
            size="medium"
            ?disabled=${e<=1}
            @click=${()=>r(e-1)}
          >
            前へ
          </yg-button>
          <yg-button 
            class="next-btn"
            variant="contained"
            color="primary"
            size="medium"
            ?disabled=${e>p}
            @click=${()=>r(e+1)}
          >
            ${e===p?"完了":"次へ"}
          </yg-button>
        </div>
      </div>
    `,E=()=>{e=1;const a=document.querySelector("#interactive-stepper");a&&(a.activeStep=e)};return s`
      <div class="max-w-2xl mx-auto">
        <yg-progress-stepper id="interactive-stepper" gap="4" active-step="1">
          <yg-progress-step label="基本情報">
            ${u(1)}
          </yg-progress-step>

          <yg-progress-step label="詳細情報">
            ${u(2)}
          </yg-progress-step>

          <yg-progress-step label="確認">
            ${u(3)}
          </yg-progress-step>

          <!-- 全ステップ完了時のコンテンツ -->
          <div slot="completion" class="text-center p-8">
            <div class="flex flex-col items-center gap-4">
              <div class="size-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z"
                    fill="green"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-green-700">完了！</h2>
              <p class="text-gray-600 mb-4">すべてのステップが完了しました。</p>
              <button 
                class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                @click=${E}
              >
                最初に戻る
              </button>
            </div>
          </div>
        </yg-progress-stepper>
      </div>
    `},parameters:{design:{type:"figma",url:o("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860")}}};var h,S,f;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: ({
    'active-step': activeStep,
    steps,
    gap
  }) => html\`
    <yg-progress-stepper gap="\${gap}" active-step="\${activeStep}">
      \${steps.map(step => html\`
          <yg-progress-step label="\${step.label}">
            \${step.content}
          </yg-progress-step>
        \`)}
    </yg-progress-stepper>
  \`,
  args: {
    'active-step': 2,
    gap: 4,
    steps: [{
      label: 'Step 1',
      content: 'Step 1: This step is complete.'
    }, {
      label: 'Step 2',
      content: 'Step 2: This is the current step.'
    }, {
      label: 'Step 3',
      content: 'Step 3: This step is not yet reached.'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860')
    }
  }
}`,...(f=(S=n.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var x,w,$;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: ({
    'active-step': activeStep,
    steps,
    gap
  }) => html\`
    <yg-progress-stepper gap="\${gap}" active-step="\${activeStep}">
      \${steps.map(step => html\`
          <yg-progress-step label="\${step.label}">
            \${step.content}
          </yg-progress-step>
        \`)}
    </yg-progress-stepper>
  \`,
  args: {
    'active-step': 1,
    gap: 4,
    steps: [{
      label: 'Step 1',
      content: 'Step 1: This is the first step and is active.'
    }, {
      label: 'Step 2',
      content: 'Step 2: This step is not yet reached.'
    }, {
      label: 'Step 3',
      content: 'Step 3: This step is not yet reached.'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860')
    }
  }
}`,...($=(w=i.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var K,T,W;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: ({
    'active-step': activeStep,
    steps,
    gap
  }) => html\`
    <yg-progress-stepper gap="\${gap}" active-step="\${activeStep}">
      \${steps.map(step => html\`
          <yg-progress-step label="\${step.label}">
            \${step.content}
          </yg-progress-step>
        \`)}
    </yg-progress-stepper>
  \`,
  args: {
    'active-step': 3,
    gap: 4,
    steps: [{
      label: 'Step 1',
      content: 'Step 1: This step is complete.'
    }, {
      label: 'Step 2',
      content: 'Step 2: This step is complete.'
    }, {
      label: 'Step 3',
      content: 'Step 3: This is the last step and is active.'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860')
    }
  }
}`,...(W=(T=g.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var C,A,k;c.parameters={...c.parameters,docs:{...(C=c.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: ({
    'active-step': activeStep,
    steps,
    gap
  }) => html\`
    <yg-progress-stepper gap="\${gap}" active-step="\${activeStep}">
      \${steps.map(step => html\`
          <yg-progress-step label="\${step.label}">
            \${step.content}
          </yg-progress-step>
        \`)}
    </yg-progress-stepper>
  \`,
  args: {
    'active-step': 3,
    gap: 4,
    steps: [{
      label: 'Step 1',
      content: 'Step 1: This step is complete.'
    }, {
      label: 'Step 2',
      content: 'Step 2: This step is complete.'
    }, {
      label: 'Step 3',
      content: 'Step 3: This is the current step.'
    }, {
      label: 'Step 4',
      content: 'Step 4: This step is not yet reached.'
    }, {
      label: 'Step 5',
      content: 'Step 5: This step is not yet reached.'
    }]
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860')
    }
  }
}`,...(k=(A=c.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var j,L,Z;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => html\`
    <div class="flex flex-col gap-12">
      <div>
        <h3 class="mb-4">Small Gap (gap=2)</h3>
        <yg-progress-stepper gap="2" active-step="2">
          <yg-progress-step label="Step 1">
            Step 1: This step is complete.
          </yg-progress-step>
          <yg-progress-step label="Step 2">
            Step 2: This is the current step.
          </yg-progress-step>
          <yg-progress-step label="Step 3">
            Step 3: This step is not yet reached.
          </yg-progress-step>
        </yg-progress-stepper>
      </div>

      <div>
        <h3 class="mb-4">Medium Gap (gap=4)</h3>
        <yg-progress-stepper gap="4" active-step="2">
          <yg-progress-step label="Step 1">
            Step 1: This step is complete.
          </yg-progress-step>
          <yg-progress-step label="Step 2">
            Step 2: This is the current step.
          </yg-progress-step>
          <yg-progress-step label="Step 3">
            Step 3: This step is not yet reached.
          </yg-progress-step>
        </yg-progress-stepper>
      </div>

      <div>
        <h3 class="mb-4">Large Gap (gap=8)</h3>
        <yg-progress-stepper gap="8" active-step="2">
          <yg-progress-step label="Step 1">
            Step 1: This step is complete.
          </yg-progress-step>
          <yg-progress-step label="Step 2">
            Step 2: This is the current step.
          </yg-progress-step>
          <yg-progress-step label="Step 3">
            Step 3: This step is not yet reached.
          </yg-progress-step>
        </yg-progress-stepper>
      </div>
    </div>
  \`,
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860')
    }
  }
}`,...(Z=(L=d.parameters)==null?void 0:L.docs)==null?void 0:Z.source}}};var U,Y,P;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: () => html\`
    <yg-progress-stepper gap="4" active-step="2">
      <yg-progress-step label="個人情報">
        <div class="p-4 border rounded">
          <h3 class="text-lg font-bold mb-4">個人情報の入力</h3>
          <div class="flex flex-col gap-4">
            <div>
              <label class="block mb-1">氏名</label>
              <input
                type="text"
                class="border rounded px-2 py-1 w-full"
                value="山田 太郎"
                disabled
              />
            </div>
            <div>
              <label class="block mb-1">メールアドレス</label>
              <input
                type="email"
                class="border rounded px-2 py-1 w-full"
                value="yamada@example.com"
                disabled
              />
            </div>
            <div>
              <label class="block mb-1">電話番号</label>
              <input
                type="tel"
                class="border rounded px-2 py-1 w-full"
                value="090-1234-5678"
                disabled
              />
            </div>
          </div>
        </div>
      </yg-progress-step>

      <yg-progress-step label="配送情報">
        <div class="p-4 border rounded">
          <h3 class="text-lg font-bold mb-4">配送情報の入力</h3>
          <div class="flex flex-col gap-4">
            <div>
              <label class="block mb-1">郵便番号</label>
              <input
                type="text"
                class="border rounded px-2 py-1 w-64"
                placeholder="例: 123-4567"
              />
            </div>
            <div>
              <label class="block mb-1">住所</label>
              <input
                type="text"
                class="border rounded px-2 py-1 w-full"
                placeholder="例: 東京都千代田区..."
              />
            </div>
            <div>
              <label class="block mb-1">配送希望日</label>
              <input type="date" class="border rounded px-2 py-1 w-64" />
            </div>
          </div>
        </div>
      </yg-progress-step>

      <yg-progress-step label="支払い情報">
        <div class="p-4 border rounded">
          <h3 class="text-lg font-bold mb-4">支払い情報の入力</h3>
          <p class="mb-4">
            配送情報を入力した後に、支払い情報を入力してください。
          </p>
        </div>
      </yg-progress-step>
    </yg-progress-stepper>
  \`,
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860')
    }
  }
}`,...(P=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:P.source}}};var B,F,M;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => html\`
    <yg-progress-stepper gap="4" active-step="2">
      <yg-progress-step label="基本情報">
        <div class="p-4">基本情報のステップです。</div>
      </yg-progress-step>

      <yg-progress-step label="詳細設定">
        <div class="p-4">詳細設定のステップです。</div>
      </yg-progress-step>

      <yg-progress-step label="確認">
        <div class="p-4">確認のステップです。</div>
      </yg-progress-step>

      <yg-progress-step label="完了">
        <div class="p-4">完了のステップです。</div>
      </yg-progress-step>
    </yg-progress-stepper>
  \`,
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860')
    }
  }
}`,...(M=(F=y.parameters)==null?void 0:F.docs)==null?void 0:M.source}}};var q,G,z;b.parameters={...b.parameters,docs:{...(q=b.parameters)==null?void 0:q.docs,source:{originalSource:`{
  render: () => {
    // ローカル状態の管理
    let currentStep = 1;
    const totalSteps = 3;
    const updateStep = (newStep: number) => {
      currentStep = Math.max(1, Math.min(totalSteps + 1, newStep));
      const stepper = document.querySelector('#interactive-stepper') as any;
      if (stepper) {
        stepper.activeStep = currentStep;
      }
      // ボタンの状態を更新
      updateButtonStates();
    };
    const updateButtonStates = () => {
      const prevButtons = document.querySelectorAll('.prev-btn');
      const nextButtons = document.querySelectorAll('.next-btn');
      prevButtons.forEach((btn: any) => {
        btn.disabled = currentStep <= 1;
      });
      nextButtons.forEach((btn: any) => {
        btn.disabled = currentStep > totalSteps;
      });
    };
    const createStepContent = (stepNumber: number) => html\`
      <div class="p-4">
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2">ステップ \${stepNumber}</h3>
          <p class="text-gray-600">
            \${stepNumber === 1 ? '基本情報を入力してください。' : stepNumber === 2 ? '詳細情報を確認してください。' : '最終確認を行ってください。'}
          </p>
        </div>
        <div class="flex gap-2">
          <yg-button 
            class="prev-btn"
            variant="outlined"
            color="primary"
            size="medium"
            ?disabled=\${currentStep <= 1}
            @click=\${() => updateStep(currentStep - 1)}
          >
            前へ
          </yg-button>
          <yg-button 
            class="next-btn"
            variant="contained"
            color="primary"
            size="medium"
            ?disabled=\${currentStep > totalSteps}
            @click=\${() => updateStep(currentStep + 1)}
          >
            \${currentStep === totalSteps ? '完了' : '次へ'}
          </yg-button>
        </div>
      </div>
    \`;
    const resetProgress = () => {
      currentStep = 1;
      const stepper = document.querySelector('#interactive-stepper') as any;
      if (stepper) {
        stepper.activeStep = currentStep;
      }
    };
    return html\`
      <div class="max-w-2xl mx-auto">
        <yg-progress-stepper id="interactive-stepper" gap="4" active-step="1">
          <yg-progress-step label="基本情報">
            \${createStepContent(1)}
          </yg-progress-step>

          <yg-progress-step label="詳細情報">
            \${createStepContent(2)}
          </yg-progress-step>

          <yg-progress-step label="確認">
            \${createStepContent(3)}
          </yg-progress-step>

          <!-- 全ステップ完了時のコンテンツ -->
          <div slot="completion" class="text-center p-8">
            <div class="flex flex-col items-center gap-4">
              <div class="size-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5501 18L3.8501 12.3L5.2751 10.875L9.5501 15.15L18.7251 5.97498L20.1501 7.39998L9.5501 18Z"
                    fill="green"
                  />
                </svg>
              </div>
              <h2 class="text-2xl font-bold text-green-700">完了！</h2>
              <p class="text-gray-600 mb-4">すべてのステップが完了しました。</p>
              <button 
                class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
                @click=\${resetProgress}
              >
                最初に戻る
              </button>
            </div>
          </div>
        </yg-progress-stepper>
      </div>
    \`;
  },
  parameters: {
    design: {
      type: 'figma',
      url: fixFigmaPath('https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?m=auto&node-id=7822-50860')
    }
  }
}`,...(z=(G=b.parameters)==null?void 0:G.docs)==null?void 0:z.source}}};const be=["Default","FirstStepActive","LastStepActive","ManySteps","DifferentGaps","RichContent","CustomLabels","Interactive"];export{y as CustomLabels,n as Default,d as DifferentGaps,i as FirstStepActive,b as Interactive,g as LastStepActive,c as ManySteps,m as RichContent,be as __namedExportsOrder,ye as default};
