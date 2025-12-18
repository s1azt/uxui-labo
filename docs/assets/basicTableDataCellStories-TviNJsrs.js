import{x as a}from"./lit-element-C4bBeaiV.js";import{f as g}from"./fixFigmaPath-DxFz5b9E.js";import{w as r}from"./decorator-Dt3Huotz.js";import{g as y}from"./storybook-utils-CyXQhEhe.js";function D(e){const{componentName:l,title:t,componentType:f}=e,{events:c,args:i,argTypes:b,template:s}=y(l),n={render:d=>a` ${s(d)} `,args:{"default-slot":"コンテンツ"},parameters:{design:{type:"figma",url:g("https://www.figma.com/design/gU6Krt45KgmZ1cjW1iKaCf/YAW?node-id=2316-191223&t=jMaXtW9oe4SJyTYw-4")}}};return{default:{title:t,component:l,args:i,argTypes:b,parameters:{actions:{handles:c}},decorators:[r]},Default:n,AlignmentVariants:{render:()=>l==="yg-basic-table-data-cell"?a`
          <div class="flex flex-col gap-2">
            <yg-basic-table-data-cell align="left"
              >左揃え</yg-basic-table-data-cell
            >
            <yg-basic-table-data-cell align="center"
              >中央揃え</yg-basic-table-data-cell
            >
            <yg-basic-table-data-cell align="right"
              >右揃え</yg-basic-table-data-cell
            >
          </div>
        `:a`
          <div class="flex flex-col gap-2">
            <nk-basic-table-data-cell align="left"
              >左揃え</nk-basic-table-data-cell
            >
            <nk-basic-table-data-cell align="center"
              >中央揃え</nk-basic-table-data-cell
            >
            <nk-basic-table-data-cell align="right"
              >右揃え</nk-basic-table-data-cell
            >
          </div>
        `},FontSizeVariants:{render:()=>l==="yg-basic-table-data-cell"?a`
          <div class="flex flex-col gap-2">
            <yg-basic-table-data-cell font-size="medium"
              >中サイズ</yg-basic-table-data-cell
            >
            <yg-basic-table-data-cell font-size="large"
              >大サイズ</yg-basic-table-data-cell
            >
          </div>
        `:a`
          <div class="flex flex-col gap-2">
            <nk-basic-table-data-cell font-size="medium"
              >中サイズ</nk-basic-table-data-cell
            >
            <nk-basic-table-data-cell font-size="large"
              >大サイズ</nk-basic-table-data-cell
            >
          </div>
        `},CustomSizes:{render:()=>l==="yg-basic-table-data-cell"?a`
          <div class="flex flex-col gap-2">
            <yg-basic-table-data-cell width="200px" height="60px">
              カスタムサイズ
            </yg-basic-table-data-cell>
          </div>
        `:a`
          <div class="flex flex-col gap-2">
            <nk-basic-table-data-cell width="200px" height="60px">
              カスタムサイズ
            </nk-basic-table-data-cell>
          </div>
        `},TableLayoutExample:{render:()=>l==="yg-basic-table-data-cell"?a`
          <div style="display: flex; flex-direction: column;">
            <!-- ヘッダー行 -->
            <div style="display: flex;">
              <yg-basic-table-header-cell style="flex: 1;" align="left">
                商品ID
              </yg-basic-table-header-cell>
              <yg-basic-table-header-cell style="flex: 3;" align="left">
                商品名
              </yg-basic-table-header-cell>
              <yg-basic-table-header-cell style="flex: 1;" align="right">
                価格
              </yg-basic-table-header-cell>
              <yg-basic-table-header-cell style="flex: 1;" align="center">
                在庫数
              </yg-basic-table-header-cell>
              <yg-basic-table-header-cell style="flex: 1;" align="center">
                ステータス
              </yg-basic-table-header-cell>
            </div>
            <!-- データ行1 -->
            <div style="display: flex;">
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                PROD001
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 3;" align="left">
                高性能エンジンオイル
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="right">
                ¥3,480
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                25
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                在庫あり
              </yg-basic-table-data-cell>
            </div>
            <!-- データ行2 -->
            <div style="display: flex;">
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                PROD002
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 3;" align="left">
                ブレーキパッド セット
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="right">
                ¥12,800
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                5
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                残りわずか
              </yg-basic-table-data-cell>
            </div>
            <!-- データ行3 -->
            <div style="display: flex;">
              <yg-basic-table-data-cell style="flex: 1;" align="left">
                PROD003
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 3;" align="left">
                タイヤ 205/65R16
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="right">
                ¥18,500
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                0
              </yg-basic-table-data-cell>
              <yg-basic-table-data-cell style="flex: 1;" align="center">
                在庫切れ
              </yg-basic-table-data-cell>
            </div>
          </div>
        `:a`
          <div class="flex flex-col">
            <!-- ヘッダー行 -->
            <div class="flex">
              <nk-basic-table-header-cell align="left">
                商品ID
              </nk-basic-table-header-cell>
              <nk-basic-table-header-cell align="left">
                商品名
              </nk-basic-table-header-cell>
              <nk-basic-table-header-cell align="right">
                価格
              </nk-basic-table-header-cell>
              <nk-basic-table-header-cell align="center">
                在庫数
              </nk-basic-table-header-cell>
              <nk-basic-table-header-cell align="center">
                ステータス
              </nk-basic-table-header-cell>
            </div>
            <!-- データ行1 -->
            <div class="flex">
              <nk-basic-table-data-cell align="left">
                PROD001
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                高性能エンジンオイル
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="right">
                ¥3,480
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                25
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                在庫あり
              </nk-basic-table-data-cell>
            </div>
            <!-- データ行2 -->
            <div class="flex">
              <nk-basic-table-data-cell align="left">
                PROD002
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                ブレーキパッド セット
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="right">
                ¥12,800
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                5
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                残りわずか
              </nk-basic-table-data-cell>
            </div>
            <!-- データ行3 -->
            <div class="flex">
              <nk-basic-table-data-cell align="left">
                PROD003
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="left">
                タイヤ 205/65R16
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="right">
                ¥18,500
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                0
              </nk-basic-table-data-cell>
              <nk-basic-table-data-cell align="center">
                在庫切れ
              </nk-basic-table-data-cell>
            </div>
          </div>
        `,parameters:{docs:{description:{story:"BasicTableHeaderCellとBasicTableDataCellを組み合わせて実際のテーブルレイアウトを実装した例です。DIVとFlexboxを使用してテーブル構造を作成しています。"}}}}}}export{D as c};
