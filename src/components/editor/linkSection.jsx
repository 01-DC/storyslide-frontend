import React from "react"
import { observer } from "mobx-react-lite"

import { SectionTab } from "polotno/side-panel"
import MdLink from "@meronex/icons/md/MdLink"
import { Button, InputGroup } from "@blueprintjs/core"

export async function getQR(text) {
  return ""
}

export const LinkPanel = observer(({ store }) => {
  const [val, setVal] = React.useState("")
  const [text, setText] = React.useState("")

  return (
    <div>
      <p>URL:</p>
      <InputGroup
        onChange={(e) => {
          setVal(e.target.value)
        }}
        placeholder="Type the link"
        value={val}
        style={{ width: "100%" }}
      />

      <p className="pt-8">Link text:</p>
      <InputGroup
        onChange={(e) => {
          setText(e.target.value)
        }}
        placeholder="Type the text"
        value={text}
        style={{ width: "100%" }}
      />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingTop: "20px",
        }}
      >
        <Button
          onClick={async () => {
            store.activePage.set({ custom: { link: val, text: text } })
          }}
        >
          Add new Link
        </Button>
      </div>
    </div>
  )
})

// define the new custom section
export const LinkSection = {
  name: "custom-links",
  Tab: (props) => (
    <SectionTab name="Add Link" {...props}>
      <MdLink className="mx-10" />
    </SectionTab>
  ),
  // we need observer to update component automatically on any store changes
  Panel: LinkPanel,
}
