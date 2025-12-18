import{x as a}from"./lit-element-C4bBeaiV.js";import{g as I}from"./storybook-utils-CyXQhEhe.js";import{t as T}from"./element-BmCHZ0P_.js";import{Y as R,a as Z}from"./ProgressStepper-By3TNlqg.js";import{N as Y}from"./element-BHnNw0zf.js";import"./Button-BLyu90HC.js";import{w as H}from"./decorator-Dt3Huotz.js";import"./directive-helpers-BAuZLZmz.js";import"./iframe-Cg2ATuqu.js";import"../sb-preview/runtime.js";import"./addCollection-Coy8QxYf.js";import"./theme-orange-f2H5lz6O.js";import"./theme-blue-DE0pcxX7.js";import"./font-family-loader-B6C8t9Oq.js";import"./property-BacG-Vag.js";import"./state-CLgbQenF.js";import"./index-Br9a1yed.js";import"./Icon-CzSa45Vk.js";import"./Button-Drw3qSHJ.js";import"./if-defined-DhMdV329.js";import"./delegate-CzAH-NQ8.js";import"./element-internals-CBp_Vcyn.js";import"./form-label-activation-C-ZPsH8j.js";import"./calculateSize-BEzCU_f7.js";import"./v4-CQkTLCs1.js";var W=Object.defineProperty,G=Object.getOwnPropertyDescriptor,J=(e,t,n,p)=>{for(var s=p>1?void 0:p?G(t,n):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(p?r(t,n,s):r(s))||s);return p&&s&&W(t,n,s),s};let u=class extends Y(R){constructor(){super(...arguments),this.supportMobile=!0}};u=J([T("nk-progress-stepper")],u);var K=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,U=(e,t,n,p)=>{for(var s=p>1?void 0:p?Q(t,n):t,o=e.length-1,r;o>=0;o--)(r=e[o])&&(s=(p?r(t,n,s):r(s))||s);return p&&s&&K(t,n,s),s};let h=class extends Y(Z){};h=U([T("nk-progress-step")],h);const{events:V,args:X,argTypes:ee}=I("nk-progress-stepper"),_e={title:"Components/Ninkei/ProgressStepper",component:"nk-progress-stepper",componentType:u,args:X,argTypes:ee,parameters:{actions:{handles:V}},decorators:[H]},i={render:e=>a`
    <nk-progress-stepper gap="4" active-step="2">
      <nk-progress-step label="ステップ 1">
        ステップ 1: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 2">
        ステップ 2: 現在のステップです。
      </nk-progress-step>
      <nk-progress-step label="ステップ 3">
        ステップ 3: このステップはまだ到達していません。
      </nk-progress-step>
    </nk-progress-stepper>
  `,args:{"active-step":2,gap:4}},g={render:e=>a`
    <nk-progress-stepper gap="4" active-step="1">
      <nk-progress-step label="ステップ 1">
        ステップ 1: 最初のステップで、現在アクティブです。
      </nk-progress-step>
      <nk-progress-step label="ステップ 2">
        ステップ 2: このステップはまだ到達していません。
      </nk-progress-step>
      <nk-progress-step label="ステップ 3">
        ステップ 3: このステップはまだ到達していません。
      </nk-progress-step>
    </nk-progress-stepper>
  `,args:{"active-step":1,gap:4}},c={render:e=>a`
    <nk-progress-stepper gap="4" active-step="3">
      <nk-progress-step label="ステップ 1">
        ステップ 1: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 2">
        ステップ 2: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 3">
        ステップ 3: 最後のステップで、現在アクティブです。
      </nk-progress-step>
    </nk-progress-stepper>
  `,args:{"active-step":3,gap:4}},d={render:e=>a`
    <nk-progress-stepper gap="4" active-step="3">
      <nk-progress-step label="ステップ 1">
        ステップ 1: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 2">
        ステップ 2: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 3">
        ステップ 3: 現在のステップです。
      </nk-progress-step>
      <nk-progress-step label="ステップ 4">
        ステップ 4: このステップはまだ到達していません。
      </nk-progress-step>
      <nk-progress-step label="ステップ 5">
        ステップ 5: このステップはまだ到達していません。
      </nk-progress-step>
    </nk-progress-stepper>
  `,args:{"active-step":3,gap:4}},m={render:e=>a`
    <nk-progress-stepper gap="4" active-step="2">
      <nk-progress-step label="基本情報">
        <div class="p-4 border rounded-lg">
          <h3 class="text-lg font-semibold mb-2">基本情報入力</h3>
          <p>お客様の基本情報を入力してください。</p>
        </div>
      </nk-progress-step>

      <nk-progress-step label="車両情報">
        <div class="p-4 border rounded-lg">
          <h3 class="text-lg font-semibold mb-2">車両情報入力</h3>
          <p>対象車両の詳細情報を入力してください。</p>
        </div>
      </nk-progress-step>

      <nk-progress-step label="確認">
        <div class="p-4 border rounded-lg">
          <h3 class="text-lg font-semibold mb-2">内容確認</h3>
          <p>入力内容を確認し、間違いがないか確認してください。</p>
        </div>
      </nk-progress-step>

      <nk-progress-step label="完了">
        <div class="p-4 border rounded-lg">
          <h3 class="text-lg font-semibold mb-2">申請完了</h3>
          <p>申請が完了しました。</p>
        </div>
      </nk-progress-step>
    </nk-progress-stepper>
  `,args:{"active-step":2,gap:4}},k={render:e=>a`
    <div class="space-y-4">
      <nk-progress-stepper gap="4" active-step="2">
        <nk-progress-step label="お客様情報入力">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold mb-2">お客様情報入力</h4>
            <p>お客様の基本情報を入力してください。名前、住所、電話番号等の必要事項をご記入ください。</p>
          </div>
        </nk-progress-step>

        <nk-progress-step label="車両情報登録">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold mb-2">車両情報登録</h4>
            <p>車両の詳細情報を登録してください。車種、年式、グレード等をご選択ください。</p>
          </div>
        </nk-progress-step>

        <nk-progress-step label="内容確認・承認">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold mb-2">内容確認・承認</h4>
            <p>入力された内容を確認し、承認してください。間違いがないか最終チェックをお願いします。</p>
          </div>
        </nk-progress-step>

        <nk-progress-step label="登録完了">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold mb-2">登録完了</h4>
            <p>登録が完了しました。ありがとうございました。</p>
          </div>
        </nk-progress-step>
      </nk-progress-stepper>
    </div>
  `,args:{"active-step":2,gap:4},parameters:{viewport:{viewports:{mobile:{name:"Mobile",styles:{width:"375px",height:"667px"}},tablet:{name:"Tablet",styles:{width:"768px",height:"1024px"}},desktop:{name:"Desktop",styles:{width:"1024px",height:"768px"}}}}}},b={render:()=>{let e=1;const t=3,n=r=>{e=Math.max(1,Math.min(t+1,r));const l=document.querySelector("#nk-interactive-stepper");l&&(l.activeStep=e),p()},p=()=>{const r=document.querySelectorAll(".nk-prev-btn"),l=document.querySelectorAll(".nk-next-btn");r.forEach(v=>{v.disabled=e<=1}),l.forEach(v=>{v.disabled=e>t})},s=r=>a`
      <div class="p-4">
        <div class="mb-4">
          <h3 class="text-lg font-semibold mb-2">ステップ ${r}</h3>
          <p class="text-gray-600">
            ${r===1?"基本情報を入力してください。":r===2?"詳細情報を確認してください。":"最終確認を行ってください。"}
          </p>
        </div>
        <div class="flex gap-2">
          <nk-button 
            class="nk-prev-btn"
            variant="outlined"
            color="primary"
            size="medium"
            ?disabled=${e<=1}
            @click=${()=>n(e-1)}
          >
            前へ
          </nk-button>
          <nk-button 
            class="nk-next-btn"
            variant="contained"
            color="primary"
            size="medium"
            ?disabled=${e>t}
            @click=${()=>n(e+1)}
          >
            ${e===t?"完了":"次へ"}
          </nk-button>
        </div>
      </div>
    `,o=()=>{e=1;const r=document.querySelector("#nk-interactive-stepper");r&&(r.activeStep=e)};return a`
      <div class="max-w-2xl mx-auto">
        <nk-progress-stepper id="nk-interactive-stepper" gap="4" active-step="1">
          <nk-progress-step label="基本情報">
            ${s(1)}
          </nk-progress-step>

          <nk-progress-step label="詳細情報">
            ${s(2)}
          </nk-progress-step>

          <nk-progress-step label="確認">
            ${s(3)}
          </nk-progress-step>

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
              <nk-button 
                variant="outlined"
                color="primary"
                size="medium"
                @click=${o}
              >
                最初に戻る
              </nk-button>
            </div>
          </div>
        </nk-progress-stepper>
      </div>
    `},args:{"active-step":1,gap:4}};var x,S,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: args => html\`
    <nk-progress-stepper gap="4" active-step="2">
      <nk-progress-step label="ステップ 1">
        ステップ 1: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 2">
        ステップ 2: 現在のステップです。
      </nk-progress-step>
      <nk-progress-step label="ステップ 3">
        ステップ 3: このステップはまだ到達していません。
      </nk-progress-step>
    </nk-progress-stepper>
  \`,
  args: {
    'active-step': 2,
    gap: 4
  }
}`,...(f=(S=i.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var y,w,$;g.parameters={...g.parameters,docs:{...(y=g.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => html\`
    <nk-progress-stepper gap="4" active-step="1">
      <nk-progress-step label="ステップ 1">
        ステップ 1: 最初のステップで、現在アクティブです。
      </nk-progress-step>
      <nk-progress-step label="ステップ 2">
        ステップ 2: このステップはまだ到達していません。
      </nk-progress-step>
      <nk-progress-step label="ステップ 3">
        ステップ 3: このステップはまだ到達していません。
      </nk-progress-step>
    </nk-progress-stepper>
  \`,
  args: {
    'active-step': 1,
    gap: 4
  }
}`,...($=(w=g.parameters)==null?void 0:w.docs)==null?void 0:$.source}}};var P,_,L;c.parameters={...c.parameters,docs:{...(P=c.parameters)==null?void 0:P.docs,source:{originalSource:`{
  render: args => html\`
    <nk-progress-stepper gap="4" active-step="3">
      <nk-progress-step label="ステップ 1">
        ステップ 1: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 2">
        ステップ 2: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 3">
        ステップ 3: 最後のステップで、現在アクティブです。
      </nk-progress-step>
    </nk-progress-stepper>
  \`,
  args: {
    'active-step': 3,
    gap: 4
  }
}`,...(L=(_=c.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};var M,A,B;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`{
  render: args => html\`
    <nk-progress-stepper gap="4" active-step="3">
      <nk-progress-step label="ステップ 1">
        ステップ 1: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 2">
        ステップ 2: このステップは完了しています。
      </nk-progress-step>
      <nk-progress-step label="ステップ 3">
        ステップ 3: 現在のステップです。
      </nk-progress-step>
      <nk-progress-step label="ステップ 4">
        ステップ 4: このステップはまだ到達していません。
      </nk-progress-step>
      <nk-progress-step label="ステップ 5">
        ステップ 5: このステップはまだ到達していません。
      </nk-progress-step>
    </nk-progress-stepper>
  \`,
  args: {
    'active-step': 3,
    gap: 4
  }
}`,...(B=(A=d.parameters)==null?void 0:A.docs)==null?void 0:B.source}}};var O,q,z;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => html\`
    <nk-progress-stepper gap="4" active-step="2">
      <nk-progress-step label="基本情報">
        <div class="p-4 border rounded-lg">
          <h3 class="text-lg font-semibold mb-2">基本情報入力</h3>
          <p>お客様の基本情報を入力してください。</p>
        </div>
      </nk-progress-step>

      <nk-progress-step label="車両情報">
        <div class="p-4 border rounded-lg">
          <h3 class="text-lg font-semibold mb-2">車両情報入力</h3>
          <p>対象車両の詳細情報を入力してください。</p>
        </div>
      </nk-progress-step>

      <nk-progress-step label="確認">
        <div class="p-4 border rounded-lg">
          <h3 class="text-lg font-semibold mb-2">内容確認</h3>
          <p>入力内容を確認し、間違いがないか確認してください。</p>
        </div>
      </nk-progress-step>

      <nk-progress-step label="完了">
        <div class="p-4 border rounded-lg">
          <h3 class="text-lg font-semibold mb-2">申請完了</h3>
          <p>申請が完了しました。</p>
        </div>
      </nk-progress-step>
    </nk-progress-stepper>
  \`,
  args: {
    'active-step': 2,
    gap: 4
  }
}`,...(z=(q=m.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var C,D,N;k.parameters={...k.parameters,docs:{...(C=k.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => html\`
    <div class="space-y-4">
      <nk-progress-stepper gap="4" active-step="2">
        <nk-progress-step label="お客様情報入力">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold mb-2">お客様情報入力</h4>
            <p>お客様の基本情報を入力してください。名前、住所、電話番号等の必要事項をご記入ください。</p>
          </div>
        </nk-progress-step>

        <nk-progress-step label="車両情報登録">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold mb-2">車両情報登録</h4>
            <p>車両の詳細情報を登録してください。車種、年式、グレード等をご選択ください。</p>
          </div>
        </nk-progress-step>

        <nk-progress-step label="内容確認・承認">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold mb-2">内容確認・承認</h4>
            <p>入力された内容を確認し、承認してください。間違いがないか最終チェックをお願いします。</p>
          </div>
        </nk-progress-step>

        <nk-progress-step label="登録完了">
          <div class="p-4 border rounded-lg">
            <h4 class="font-semibold mb-2">登録完了</h4>
            <p>登録が完了しました。ありがとうございました。</p>
          </div>
        </nk-progress-step>
      </nk-progress-stepper>
    </div>
  \`,
  args: {
    'active-step': 2,
    gap: 4
  },
  parameters: {
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px'
          }
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px'
          }
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px'
          }
        }
      }
    }
  }
}`,...(N=(D=k.parameters)==null?void 0:D.docs)==null?void 0:N.source}}};var j,E,F;b.parameters={...b.parameters,docs:{...(j=b.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => {
    // ローカル状態の管理
    let currentStep = 1;
    const totalSteps = 3;
    const updateStep = (newStep: number) => {
      currentStep = Math.max(1, Math.min(totalSteps + 1, newStep));
      const stepper = document.querySelector('#nk-interactive-stepper') as any;
      if (stepper) {
        stepper.activeStep = currentStep;
      }
      // ボタンの状態を更新
      updateButtonStates();
    };
    const updateButtonStates = () => {
      const prevButtons = document.querySelectorAll('.nk-prev-btn');
      const nextButtons = document.querySelectorAll('.nk-next-btn');
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
          <nk-button 
            class="nk-prev-btn"
            variant="outlined"
            color="primary"
            size="medium"
            ?disabled=\${currentStep <= 1}
            @click=\${() => updateStep(currentStep - 1)}
          >
            前へ
          </nk-button>
          <nk-button 
            class="nk-next-btn"
            variant="contained"
            color="primary"
            size="medium"
            ?disabled=\${currentStep > totalSteps}
            @click=\${() => updateStep(currentStep + 1)}
          >
            \${currentStep === totalSteps ? '完了' : '次へ'}
          </nk-button>
        </div>
      </div>
    \`;
    const resetProgress = () => {
      currentStep = 1;
      const stepper = document.querySelector('#nk-interactive-stepper') as any;
      if (stepper) {
        stepper.activeStep = currentStep;
      }
    };
    return html\`
      <div class="max-w-2xl mx-auto">
        <nk-progress-stepper id="nk-interactive-stepper" gap="4" active-step="1">
          <nk-progress-step label="基本情報">
            \${createStepContent(1)}
          </nk-progress-step>

          <nk-progress-step label="詳細情報">
            \${createStepContent(2)}
          </nk-progress-step>

          <nk-progress-step label="確認">
            \${createStepContent(3)}
          </nk-progress-step>

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
              <nk-button 
                variant="outlined"
                color="primary"
                size="medium"
                @click=\${resetProgress}
              >
                最初に戻る
              </nk-button>
            </div>
          </div>
        </nk-progress-stepper>
      </div>
    \`;
  },
  args: {
    'active-step': 1,
    gap: 4
  }
}`,...(F=(E=b.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const Le=["Default","FirstStepActive","LastStepActive","ManySteps","ApplicationForm","MobileResponsive","Interactive"];export{m as ApplicationForm,i as Default,g as FirstStepActive,b as Interactive,c as LastStepActive,d as ManySteps,k as MobileResponsive,Le as __namedExportsOrder,_e as default};
