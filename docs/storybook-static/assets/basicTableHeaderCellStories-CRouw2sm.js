import{x as e}from"./lit-element-C4bBeaiV.js";import{f as r}from"./fixFigmaPath-DxFz5b9E.js";import{w as g}from"./decorator-Dt3Huotz.js";import{g as y}from"./storybook-utils-CyXQhEhe.js";function z(a){const{componentName:l,title:t,componentType:f}=a,{events:c,args:i,argTypes:b,template:s}=y(l),d={render:n=>e` ${s(n)} `,args:{"default-slot":"コンテンツ"},parameters:{design:{type:"figma",url:r("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}};return{default:{title:t,component:l,args:i,argTypes:b,parameters:{actions:{handles:c}},decorators:[g]},Default:d,AlignmentVariants:{render:()=>l==="yg-basic-table-header-cell"?e`
          <div class="flex flex-col gap-2">
            <yg-basic-table-header-cell align="left"
              >左揃え</yg-basic-table-header-cell
            >
            <yg-basic-table-header-cell align="center"
              >中央揃え</yg-basic-table-header-cell
            >
            <yg-basic-table-header-cell align="right"
              >右揃え</yg-basic-table-header-cell
            >
          </div>
        `:e`
          <div class="flex flex-col gap-2">
            <nk-basic-table-header-cell align="left"
              >左揃え</nk-basic-table-header-cell
            >
            <nk-basic-table-header-cell align="center"
              >中央揃え</nk-basic-table-header-cell
            >
            <nk-basic-table-header-cell align="right"
              >右揃え</nk-basic-table-header-cell
            >
          </div>
        `},ColorVariants:{render:()=>l==="yg-basic-table-header-cell"?e`
          <div class="flex flex-col gap-2">
            <yg-basic-table-header-cell color="default"
              >デフォルト</yg-basic-table-header-cell
            >
            <yg-basic-table-header-cell color="primary"
              >プライマリ</yg-basic-table-header-cell
            >
          </div>
        `:e`
          <div class="flex flex-col gap-2">
            <nk-basic-table-header-cell color="default"
              >デフォルト</nk-basic-table-header-cell
            >
            <nk-basic-table-header-cell color="primary"
              >プライマリ</nk-basic-table-header-cell
            >
          </div>
        `},FontSizeVariants:{render:()=>l==="yg-basic-table-header-cell"?e`
          <div class="flex flex-col gap-2">
            <yg-basic-table-header-cell font-size="medium"
              >中サイズ</yg-basic-table-header-cell
            >
            <yg-basic-table-header-cell font-size="large"
              >大サイズ</yg-basic-table-header-cell
            >
          </div>
        `:e`
          <div class="flex flex-col gap-2">
            <nk-basic-table-header-cell font-size="medium"
              >中サイズ</nk-basic-table-header-cell
            >
            <nk-basic-table-header-cell font-size="large"
              >大サイズ</nk-basic-table-header-cell
            >
          </div>
        `},CustomSizes:{render:()=>l==="yg-basic-table-header-cell"?e`
          <div class="flex flex-col gap-2">
            <yg-basic-table-header-cell width="200px" height="60px">
              カスタムサイズ
            </yg-basic-table-header-cell>
          </div>
        `:e`
          <div class="flex flex-col gap-2">
            <nk-basic-table-header-cell width="200px" height="60px">
              カスタムサイズ
            </nk-basic-table-header-cell>
          </div>
        `},TableLayoutExample:{render:()=>l==="yg-basic-table-header-cell"?e`
          <div style="display: flex; flex-direction: column;">
            <!-- ヘッダー行 -->
            <div style="display: flex;">
              <yg-basic-table-header-cell style="flex: 1;" align="left">
                社員ID
              </yg-basic-table-header-cell>
              <yg-basic-table-header-cell style="flex: 2;" align="left">
                氏名
              </yg-basic-table-header-cell>
              <yg-basic-table-header-cell style="flex: 1;" align="center">
                年齢
              </yg-basic-table-header-cell>
              <yg-basic-table-header-cell style="flex: 1;" align="left">
                部署
              </yg-basic-table-header-cell>
              <yg-basic-table-header-cell style="flex: 1;" align="center">
                入社日
              </yg-basic-table-header-cell>
            </div>
            <!-- データ行1 -->
            <div style="display: flex;">
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                EMP001
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 2;" align="left">
                ヤマト太郎
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                28
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                営業部
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                2023-04-01
              </yg-basic-table-data-cell>
            </div>
            <!-- データ行2 -->
            <div style="display: flex;">
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                EMP002
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 2;" align="left">
                田中花子
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                32
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                開発部
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                2022-03-15
              </yg-basic-table-data-cell>
            </div>
            <!-- データ行3 -->
            <div style="display: flex;">
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                EMP003
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 2;" align="left">
                佐藤次郎
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                45
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                企画部
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                2020-01-20
              </yg-basic-table-data-cell>
            </div>
          </div>
        `:e`
          <div class="flex flex-col">
            <!-- ヘッダー行 -->
            <div class="flex">
              <nk-basic-table-header-cell align="left">
                社員ID
              </nk-basic-table-header-cell>
              <nk-basic-table-header-cell align="left">
                氏名
              </nk-basic-table-header-cell>
              <nk-basic-table-header-cell align="center">
                年齢
              </nk-basic-table-header-cell>
              <nk-basic-table-header-cell align="left">
                部署
              </nk-basic-table-header-cell>
              <nk-basic-table-header-cell align="center">
                入社日
              </nk-basic-table-header-cell>
            </div>
            <!-- データ行1 -->
            <div class="flex">
              <nk-basic-table-data-cell align="left">
                EMP001
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                ヤマト太郎
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                28
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                営業部
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                2023-04-01
              </nk-basic-table-data-cell>
            </div>
            <!-- データ行2 -->
            <div class="flex">
              <nk-basic-table-data-cell align="left">
                EMP002
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                田中花子
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                32
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                開発部
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                2022-03-15
              </nk-basic-table-data-cell>
            </div>
            <!-- データ行3 -->
            <div class="flex">
              <nk-basic-table-data-cell align="left">
                EMP003
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                佐藤次郎
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                45
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                企画部
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                2020-01-20
              </nk-basic-table-data-cell>
            </div>
          </div>
        `,parameters:{docs:{description:{story:"BasicTableHeaderCellとBasicTableDataCellを組み合わせて実際のテーブルレイアウトを実装した例です。DIVとFlexboxを使用してテーブル構造を作成しています。"}}}}}}export{z as c};
