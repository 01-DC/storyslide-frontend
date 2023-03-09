import React, { useState } from "react"
import { useEffect } from "react"

import "@blueprintjs/icons/lib/css/blueprint-icons.css"
import "@blueprintjs/core/lib/css/blueprint.css"
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css"

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from "polotno"
import { Workspace } from "polotno/canvas/workspace"
import { SidePanel } from "polotno/side-panel"
import { Toolbar } from "polotno/toolbar/toolbar"
import { ZoomButtons } from "polotno/toolbar/zoom-buttons"
import { createStore } from "polotno/model/store"

import { DEFAULT_SECTIONS } from "polotno/side-panel"
import { TemplatesSection } from "../components/editor/templates-panel"
import EditorLayout from "../layouts/EditorLayout"
import { QrSection, getQR } from "../components/editor/qrSection"
import { SignatureSection } from "../components/editor/signatureSection"
import { IconsSection } from "../components/editor/iconSection"
import { LinkSection } from "../components/editor/linkSection"
import ActionControls from "../components/editor/actionControls"
import { useLocation, useParams } from "react-router-dom"
import {
  putStoryJSONData,
  putStoryData,
  getStoryData,
  getSlideData,
  postSlideData,
  putSlideData,
} from "../components/adapters/story"

const store = createStore({
  key: "nFA5H9elEytDyPyvKL7T",
})

store.setSize(1080, 1920)
store.addPage()

const sections = [
  TemplatesSection,
  ...DEFAULT_SECTIONS.slice(1, -1),
  QrSection,
  SignatureSection,
  LinkSection,
]

const exportData = () => {
  const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
    JSON.stringify(store.toJSON(store.toJSON()))
  )}`
  const link = document.createElement("a")
  link.href = jsonString
  link.download = "data.json"

  link.click()
}

const blobExp = async () => {
  return await store.toBlob({ pageId: store.pages[0].id })
}

const CanvaEditor = () => {
  // const location = useLocation()
  const { id } = useParams()
  const [slugVal, setSlugVal] = useState("")

  const loadStoryData = async () => {
    try {
      const data = await getStoryData(id)
      if (data.json_data) {
        store.loadJSON(data.json_data)
        setSlugVal(data.slug)
      }
    } catch (error) {
      store.loadJSON()
    }
  }

  useEffect(() => {
    loadStoryData()
  }, [])

  let timeout = null
  const requestSave = () => {
    if (timeout) {
      return
    }
    timeout = setTimeout(() => {
      timeout = null
      const json = store.toJSON()
      putStoryJSONData({ json_data: json }, id)
      if (store.pages[0] == store.activePage) {
        let data = new FormData()
        blobExp().then((res) => {
          data.append("thumbnail", res, "thumbnail.png")
          putStoryData(data, id)
        })
      }
    }, 1000)
  }

  store.on("change", () => {
    requestSave()
  })

  return (
    <EditorLayout id={id} slugVal={slugVal}>
      <PolotnoContainer style={{ width: "100vw", height: "92.4vh" }}>
        <SidePanelWrap>
          <SidePanel
            store={store}
            sections={sections}
            defaultSection="custom-templates"
          />
        </SidePanelWrap>
        <WorkspaceWrap>
          <Toolbar
            store={store}
            downloadButtonEnabled
            components={{
              ActionControls,
            }}
          />
          <Workspace store={store} />
          <ZoomButtons store={store} />
        </WorkspaceWrap>
      </PolotnoContainer>
    </EditorLayout>
  )
}

export default CanvaEditor
