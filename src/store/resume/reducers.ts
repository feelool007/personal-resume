import {
  FETCH_RESUME_DATA_SUCCESS,
  FETCH_RESUME_DATA_FAILED
} from "./constants";

import { FetchResumeDataActionType, ResumeState } from "./types";

const defaultState: ResumeState = {
  data: [
    {
      title: "一、台灣世㬢工程顧問股份有限公司",
      caption: "2013年11月 ~ 2017年9月",
      bodys: [
        {
          body: "我的第一份工作在台灣世㬢工程顧問股份有限公司任職，這是一間工程顧問服務類型的公司，我的主要工作內容為智慧運輸系統建置專案與大數據應用研發案："
        },
        {
          subtitle: "1. 智慧運輸系統建置專案",
          body: "我曾參與新北市、桃園市、台中市、嘉義市、高雄市等多個縣市的智慧運輸系統建置專案，其中包含先進交通資訊系統、智慧停車導引系統、智慧化路口控制系統、事件反應系統、決策支援系統等。我主要負責系統架構規劃、系統功能設計與後台應用程式開發，開發工具主要為Python、SQL Server或MariaDB。"
        },
        {
          subtitle: "2. 大數據應用研發案",
          body: "這幾年大數據、AI等領域越受重視，我有幸在前公司擔任大數據應用研發案的主責工程師。研發方向主要著重於交通大數據的分析，運用路側終端設備所偵測資料與PTX平台開放資料，進行即時交通資訊演算、路況預測、道路事件預測、區域旅運特性分析、個體旅次行為分析等，並依據應用主題特性開發合適的資料視覺化儀錶板，所處理的資料量每日約150萬至200萬筆。研發成果也積極推廣至智慧運輸系統業務中，協助許多縣市的交通管理單位建置先進交通資訊網、交通數據分析平台、路況資訊預測、決策支援等系統功能。開發的工具主要使用Python與Tableau，Python用以網頁爬蟲、串接平台資料、資料處理與建模，Tableau則用以建立視覺化儀錶板與數據分析。"
        }
      ]
    },
    {
      title: "二、中華電信股份有限公司",
      caption: "2017年10月 ~ 至今",
      bodys: [
        {
          body: "我有榮幸於2017年加入中華電信，主要參與了幾項ITS系統建置專案："
        },
        {
          subtitle: "1. 高公局交控系統雲端化專案",
          body: "我擔任此專案的PE與RD，並為「設備維護管理系統」與「施工通報與移動性施工監控系統」兩套系統的開發主責人。我們採用前後端分離的模式進行開發，而我主要負責前端的開發與資料庫設計，並部份支援後端API開發。前端採用React框架與Redux開發單頁式應用程式，UI則使用Material-UI；後端則使用spring boot框架進行開發。專案使用Git做版本控制，並在Bitbucket建立一個私有的遠端儲存庫。開發時我採用TDD測試驅動開發方式，好處是在模組功能完成時也同時完成了單元測試。此專案也使用Jenkins做為持續整合工具，並與Bitbucket連動，以便提交新版時可以持續交付與自動部署。而除了開發工作之外，我也負責系統分析與開發時程規劃，並與其他合作廠商進行介面協調溝通。"
        },
        {
          subtitle: "2. 軌道iot物聯網專案",
          body: "我也參與了軌道iot物聯網專案開發，這項專案為在台鐵列車車箱中裝設多種環控偵測設備，並透過mqtt協定將偵測數據發佈至公司的iot大平台上。此專案也建置一個列車運作即時監控平台。採用php的Laravel框架進行開發，前端使用jQuery與Bootstrap，UI的設計則以AdminLTE做為樣版。"
        },
        {
          subtitle: "3. 高階主管決策支援系統",
          body: "coming soon..."
        }
      ]
    }
  ]
};

export default (
  state = defaultState,
  action: FetchResumeDataActionType
): ResumeState => {
  switch (action.type) {
    case FETCH_RESUME_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case FETCH_RESUME_DATA_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};
