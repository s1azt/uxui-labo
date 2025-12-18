import{i as he,x as w}from"./lit-element-C4bBeaiV.js";import{t as f,E as v}from"./element-BmCHZ0P_.js";import{n as o}from"./property-BacG-Vag.js";import{c as b}from"./index-Br9a1yed.js";import{c as y}from"./calculateSize-BEzCU_f7.js";var de=Object.defineProperty,re=Object.getOwnPropertyDescriptor,r=(a,t,i,l)=>{for(var e=l>1?void 0:l?re(t,i):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(e=(l?n(t,i,e):n(e))||e);return l&&e&&de(t,i,e),e};const ge=b({base:"flex grow border-[0.5px] border-table-border-th-default bg-white p-2 text-left text-body-medium",variants:{verticalAlign:{top:"items-start",middle:"items-center",bottom:"items-end"},horizontalAlign:{left:"text-left",center:"text-center",right:"text-right"}}},{twMerge:!1});let h=class extends v{constructor(){super(he`
      :host {
       /* SyakensyoTable側のdiv高さに比例して大きくなるように設定している */
        display: inline-flex;
        flex-grow: 1;
      }
    `.cssText),this.horizontalAlign="left",this.verticalAlign="middle",this.width="120",this.height="48",this.wrapText=!1}updated(a){super.updated(a),this.style.setProperty("width",String(y(this==null?void 0:this.width))||"auto"),this.style.setProperty("height",String(y(this==null?void 0:this.height))||"auto")}render(){const a=y(this==null?void 0:this.width),t=y(this==null?void 0:this.height);return w`
      <div
        class=${ge({verticalAlign:this.verticalAlign,horizontalAlign:this.horizontalAlign})}
        style="width: ${a}; height: ${t};"
      >
        <p class="${this.wrapText?"break-words w-full":"truncate w-full"}">
          <slot></slot>
        </p>
      </div>
    `}};r([o({type:String,attribute:"horizontal-align"})],h.prototype,"horizontalAlign",2);r([o({type:String,attribute:"vertical-align"})],h.prototype,"verticalAlign",2);r([o({type:String})],h.prototype,"width",2);r([o({type:String})],h.prototype,"height",2);r([o({type:Boolean,attribute:"wrap-text"})],h.prototype,"wrapText",2);h=r([f("yg-syakensyo-table-data-cell")],h);var ce=Object.defineProperty,we=Object.getOwnPropertyDescriptor,x=(a,t,i,l)=>{for(var e=l>1?void 0:l?we(t,i):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(e=(l?n(t,i,e):n(e))||e);return l&&e&&ce(t,i,e),e};const pe=b({base:"flex items-center truncate border-[0.5px] border-table-border-th-default bg-table-bg-th-syakensyo p-2 text-left text-label-medium",variants:{align:{left:"text-left",center:"text-center",right:"text-right"}}},{twMerge:!1});let g=class extends v{constructor(){super(he`
      :host {
        display: inline-block;
      }
    `.cssText),this.align="left",this.width="120px",this.height="24px"}updated(a){super.updated(a),this.style.setProperty("width",String(y(this==null?void 0:this.width))||"auto"),this.style.setProperty("height",String(y(this==null?void 0:this.height))||"auto")}render(){const a=y(this==null?void 0:this.width),t=y(this==null?void 0:this.height);return w`
      <div
        class=${pe({align:this.align})}
        style="width: ${a}; height: ${t};"
      >
        <p class="truncate w-full">
          <slot></slot>
        </p>
      </div>
    `}};x([o({type:String})],g.prototype,"align",2);x([o({type:String})],g.prototype,"width",2);x([o({type:String})],g.prototype,"height",2);g=x([f("yg-syakensyo-table-header-cell")],g);var be=Object.defineProperty,xe=Object.getOwnPropertyDescriptor,k=(a,t,i,l)=>{for(var e=l>1?void 0:l?xe(t,i):t,s=a.length-1,n;s>=0;s--)(n=a[s])&&(e=(l?n(t,i,e):n(e))||e);return l&&e&&be(t,i,e),e};const d=b({base:"col-span-12 flex min-h-[56px] w-full items-center",variants:{value:{true:"",false:"hidden"}}}),c=b({base:"",variants:{allDataExists:{true:"grid min-w-full grid-cols-12 min-h-[84px]",false:"flex min-w-full min-h-[84px]"}}});let p=class extends v{constructor(){super(),this.width="1200"}render(){var t,i,l,e,s,n,m,u,$,z,D,S,W,_,O,P,T,B,A,N,C,E,j,F,L,R,Y,H,I,M,q,G,J,K,Q,U,V,X,Z,ee,te,ae,le,ie,se,ne,oe,ye;const a=y(this==null?void 0:this.width);return w`
      <div style="width: ${a};">
        ${this.data&&w`
            <div class=${c({allDataExists:!!(this.data.registrationNumber&&this.data.registrationDate&&this.data.firstRegistrationDate&&this.data.vehicleType&&this.data.usage&&this.data.privateOrBusiness&&this.data.vehicleForm)})}>
             <div class="flex grow-[2] flex-col w-full col-span-2 min-w-[200px]"
              style="display: ${this.data.registrationNumber?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">自動車登録番号又は車両番号</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.registrationNumber}</yg-syakensyo-table-data-cell>
            </div>
              <div class="flex grow-[2] flex-col w-full col-span-2 min-w-[200px]"
               style="display: ${this.data.registrationDate?"flex":"none"}"
              >
              <yg-syakensyo-table-header-cell align="center" width="100%">登録年月日／交付年月日</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.registrationDate}</yg-syakensyo-table-data-cell>
            </div>
             <div class="flex grow flex-col w-full col-span-1 min-w-[100px]"
              style="display: ${this.data.firstRegistrationDate?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">初度登録年月</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.firstRegistrationDate}</yg-syakensyo-table-data-cell>
            </div>
             <div class="flex grow flex-col w-full col-span-1 min-w-[100px]"
              style="display: ${this.data.vehicleType?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">自動車の種別</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.vehicleType}</yg-syakensyo-table-data-cell>
            </div>
             <div class="flex grow-[2] flex-col w-full col-span-2 min-w-[200px]"
              style="display: ${this.data.usage?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">用途</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.usage}</yg-syakensyo-table-data-cell>
            </div>
              <div class="flex grow-[2] flex-col w-full col-span-2 min-w-[200px]"
              style="display: ${this.data.privateOrBusiness?"flex":"none"}"
              >
              <yg-syakensyo-table-header-cell align="center" width="100%">自家用・事業用の別</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.privateOrBusiness}</yg-syakensyo-table-data-cell>
            </div>
              <div class="flex grow-[2] flex-col w-full col-span-2 min-w-[200px]"
              style="display: ${this.data.vehicleForm?"flex":"none"}"
              >
              <yg-syakensyo-table-header-cell align="center" width="100%">車体の形状</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.vehicleForm}</yg-syakensyo-table-data-cell>
            </div>
                 </div>
                    <div class=${c({allDataExists:!!(this.data.name&&this.data.capacity&&this.data.maximumLoad&&this.data.vehicleWeight&&this.data.totalWeight)})}>
                 <div class="flex flex-col w-full col-span-4 grow-[4] min-w-[400px]"
              style="display: ${this.data.name?"flex":"none"}"
                 >
              <yg-syakensyo-table-header-cell align="center" width="100%">車名</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.name}</yg-syakensyo-table-data-cell>
            </div>
              <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${this.data.capacity?"flex":"none"}"
              >
              <yg-syakensyo-table-header-cell align="center" width="100%">乗車定員</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${this.data.capacity}</yg-syakensyo-table-data-cell>
            </div>
               <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${this.data.maximumLoad?"flex":"none"}"
               >
              <yg-syakensyo-table-header-cell align="center" width="100%">最大積載量</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${this.data.maximumLoad}</yg-syakensyo-table-data-cell>
            </div>
                <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${this.data.vehicleWeight?"flex":"none"}"
                >
              <yg-syakensyo-table-header-cell align="center" width="100%">車両重量</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${this.data.vehicleWeight}</yg-syakensyo-table-data-cell>
            </div>
                            <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${this.data.totalWeight?"flex":"none"}"
                            >
              <yg-syakensyo-table-header-cell align="center" width="100%">車両総重量</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${this.data.totalWeight}</yg-syakensyo-table-data-cell>
            </div>
                </div>
            <div class=${c({allDataExists:!!(this.data.chassisNumber&&((t=this.data.dimensions)!=null&&t.length)&&((i=this.data.dimensions)!=null&&i.width)&&((l=this.data.dimensions)!=null&&l.height)&&((e=this.data.axleWeight)!=null&&e.front)&&((s=this.data.axleWeight)!=null&&s.frontBack)&&((n=this.data.axleWeight)!=null&&n.backFront)&&((m=this.data.axleWeight)!=null&&m.back))})}>
                <div class="flex flex-col w-full col-span-4 grow-[4] min-w-[400px]"
              style="display: ${this.data.chassisNumber?"flex":"none"}"
                >
              <yg-syakensyo-table-header-cell align="center" width="100%">車体番号</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.chassisNumber}</yg-syakensyo-table-data-cell>
            </div>
    
             <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${(u=this.data.dimensions)!=null&&u.length?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">長さ</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${($=this.data.dimensions)==null?void 0:$.length}</yg-syakensyo-table-data-cell>
            </div>
             <div class="flex flex-col w-full col-span-1 grow min-w-[100px]"
              style="display: ${(z=this.data.dimensions)!=null&&z.width?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">幅</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${(D=this.data.dimensions)==null?void 0:D.width}</yg-syakensyo-table-data-cell>
            </div>
             <div class="flex flex-col w-full col-span-1 grow min-w-[100px]"
              style="display: ${(S=this.data.dimensions)!=null&&S.height?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">高さ</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${(W=this.data.dimensions)==null?void 0:W.height}</yg-syakensyo-table-data-cell>
            </div>
             <div class="flex flex-col w-full col-span-1 grow min-w-[100px]"
              style="display: ${(_=this.data.axleWeight)!=null&&_.front?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">前前軸重</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${(O=this.data.axleWeight)==null?void 0:O.front}</yg-syakensyo-table-data-cell>
            </div>
             <div class="flex flex-col w-full col-span-1 grow min-w-[100px]"
              style="display: ${(P=this.data.axleWeight)!=null&&P.frontBack?"flex":"none"}"
             >
              <yg-syakensyo-table-header-cell align="center" width="100%">前後軸重</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${(T=this.data.axleWeight)==null?void 0:T.frontBack}</yg-syakensyo-table-data-cell>
            </div>

                 <div class="flex flex-col w-full col-span-1 grow min-w-[100px]"
              style="display: ${(B=this.data.axleWeight)!=null&&B.backFront?"flex":"none"}"
                 >
              <yg-syakensyo-table-header-cell align="center" width="100%">後前軸重</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${(A=this.data.axleWeight)==null?void 0:A.backFront}</yg-syakensyo-table-data-cell>
            </div>
                 <div class="flex flex-col w-full col-span-1 grow min-w-[100px]"
              style="display: ${(N=this.data.axleWeight)!=null&&N.back?"flex":"none"}"
                 >
              <yg-syakensyo-table-header-cell align="center" width="100%">後後軸重</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${(C=this.data.axleWeight)==null?void 0:C.back}</yg-syakensyo-table-data-cell>
            </div>
            </div>
          

            <div class=${c({allDataExists:!!(this.data.model&&((E=this.data.engine)!=null&&E.type)&&((j=this.data.engine)!=null&&j.capacity)&&((F=this.data.engine)!=null&&F.fuel)&&((L=this.data.engine)!=null&&L.specification)&&((R=this.data.engine)!=null&&R.categoryNumber))})}>
                   <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${this.data.model?"flex":"none"}"
                   >
              <yg-syakensyo-table-header-cell align="center" width="100%">型式</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${this.data.model}</yg-syakensyo-table-data-cell>
            </div>
               <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${(Y=this.data.engine)!=null&&Y.type?"flex":"none"}"
               >
              <yg-syakensyo-table-header-cell align="center" width="100%">原動機の型式</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${(H=this.data.engine)==null?void 0:H.type}</yg-syakensyo-table-data-cell>
            </div>
              <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${(I=this.data.engine)!=null&&I.capacity?"flex":"none"}"
              >
              <yg-syakensyo-table-header-cell align="center" width="100%">総排気量又は定格出力</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${(M=this.data.engine)==null?void 0:M.capacity}</yg-syakensyo-table-data-cell>
            </div>
              <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${(q=this.data.engine)!=null&&q.fuel?"flex":"none"}"
              >
              <yg-syakensyo-table-header-cell align="center" width="100%">燃料の種類</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" width="100%" height="auto">${(G=this.data.engine)==null?void 0:G.fuel}</yg-syakensyo-table-data-cell>
            </div>
              <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${(J=this.data.engine)!=null&&J.specification?"flex":"none"}"
              >
              <yg-syakensyo-table-header-cell align="center" width="100%">型式指定番号</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" height="100%" width="100%">${(K=this.data.engine)==null?void 0:K.specification}</yg-syakensyo-table-data-cell>
            </div>
              <div class="flex flex-col w-full col-span-2 grow-[2] min-w-[200px]"
              style="display: ${(Q=this.data.engine)!=null&&Q.categoryNumber?"flex":"none"}"
              >
              <yg-syakensyo-table-header-cell align="center" width="100%">識別区分番号</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="right" vertical-align="bottom" width="100%" height="auto">${(U=this.data.engine)==null?void 0:U.categoryNumber}</yg-syakensyo-table-data-cell>
            </div>
        </div>
           <div class="grid grid-cols-12 min-w-full">
            
           <div class=${d({value:!!((X=(V=this.data)==null?void 0:V.owner)!=null&&X.name)})}>
              <yg-syakensyo-table-header-cell align="center" height="100%" width="200px">所有者の指名又は名称</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" height="100%" width="100%">${(Z=this.data.owner)==null?void 0:Z.name}</yg-syakensyo-table-data-cell>
            </div>
                 <div class=${d({value:!!((te=(ee=this.data)==null?void 0:ee.owner)!=null&&te.address)})}>
              <yg-syakensyo-table-header-cell align="center" height="100%" width="200px">所有者の住所</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" height="100%" width="100%">${(ae=this.data.owner)==null?void 0:ae.address}</yg-syakensyo-table-data-cell>
            </div>
                 <div class=${d({value:!!((ie=(le=this.data)==null?void 0:le.user)!=null&&ie.name)})}>
              <yg-syakensyo-table-header-cell align="center" height="100%" width="200px">使用者の住所</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" height="100%" width="100%">${(se=this.data.user)==null?void 0:se.address}</yg-syakensyo-table-data-cell>
            </div>
                 <div class=${d({value:!!((ne=this.data)!=null&&ne.location)})}>
              <yg-syakensyo-table-header-cell align="center" height="100%" width="200px">使用の本拠の位置</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" height="100%" width="100%">${this.data.location}</yg-syakensyo-table-data-cell>
            </div>
                 <div class=${d({value:!!((oe=this.data)!=null&&oe.validity)})}>
              <yg-syakensyo-table-header-cell align="center" height="100%" width="200px">有効期間の満了する日</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" height="100%" width="100%">${this.data.validity}</yg-syakensyo-table-data-cell>
            </div>
             <div class=${d({value:!!((ye=this.data)!=null&&ye.validity)})}>
              <yg-syakensyo-table-header-cell align="center" height="100%" width="200px">備考</yg-syakensyo-table-header-cell>
              <yg-syakensyo-table-data-cell wrap-text horizontal-align="left" vertical-align="bottom" height="100%" width="100%">${this.data.notes}</yg-syakensyo-table-data-cell>
            </div>
        </div>
            `}
      </div>
    `}};k([o({type:Object})],p.prototype,"data",2);k([o({type:String})],p.prototype,"width",2);p=k([f("yg-syakensyo-table")],p);
