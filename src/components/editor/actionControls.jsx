import { Toolbar } from "polotno/toolbar/toolbar"
import { Button } from "@blueprintjs/core"
import { DownloadButton } from "polotno/toolbar/download-button"

// it is important to define component onside of `MyToolbar` render function
const ActionControls = ({ store }) => {
  return (
    <div>
      <DownloadButton store={store} />
      <Button
        intent="primary"
        onClick={() => {
          alert("Saving")
        }}
      >
        Save
      </Button>
    </div>
  )
}

export default ActionControls
