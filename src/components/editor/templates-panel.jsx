import React from "react"
import { observer } from "mobx-react-lite"
import { useInfiniteAPI } from "polotno/utils/use-api"

import { SectionTab } from "polotno/side-panel"
import MdPhotoLibrary from "@meronex/icons/md/MdPhotoLibrary"

import { ImagesGrid } from "polotno/side-panel/images-grid"

export const TemplatesPanel = observer(({ store }) => {
  // load data
  const { data, isLoading } = useInfiniteAPI({
    getAPI: ({ page }) => `/src/templates/page${page}.json`,
  })
  console.log(data)
  return (
    <div style={{ height: "100%" }}>
      <ImagesGrid
        shadowEnabled={false}
        images={data?.map((data) => data.items).flat()}
        getPreview={(item) => `/src/templates/${item.preview}`}
        isLoading={isLoading}
        onSelect={async (item) => {
          // download selected json
          const req = await fetch(`/src/templates/${item.json}`)
          const json = await req.json()
          // just inject it into store
          store.loadJSON(json)
        }}
        rowsNumber={1}
      />
    </div>
  )
})

// define the new custom section
export const TemplatesSection = {
  name: "Templates",
  Tab: (props) => (
    <SectionTab name="Templates" {...props}>
      <MdPhotoLibrary className="mx-10" />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: TemplatesPanel,
}
