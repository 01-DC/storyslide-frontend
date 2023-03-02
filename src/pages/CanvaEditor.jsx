import React from 'react';
import { useEffect } from 'react';

import '@blueprintjs/icons/lib/css/blueprint-icons.css';
import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/popover2/lib/css/blueprint-popover2.css';

import { PolotnoContainer, SidePanelWrap, WorkspaceWrap } from 'polotno';
import { Workspace } from 'polotno/canvas/workspace';
import { SidePanel } from 'polotno/side-panel';
import { Toolbar } from 'polotno/toolbar/toolbar';
import { ZoomButtons } from 'polotno/toolbar/zoom-buttons';
import { createStore } from 'polotno/model/store';

import { DEFAULT_SECTIONS } from 'polotno/side-panel';
import { TemplatesSection } from '../components/editor/templates-panel';
import EditorLayout from "../layouts/EditorLayout"

const store = createStore({
	// this is a demo key just for that project
	// (!) please don't use it in your projects
	// to create your own API key please go here: https://polotno.com/cabinet
	key: 'nFA5H9elEytDyPyvKL7T',

});

store.addPage();
// console.log(data)
// store.loadJSON(data)

// store.setRole('admin');

const sections = [TemplatesSection, ...DEFAULT_SECTIONS];

const exportData = () => {
	const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
		JSON.stringify(store.toJSON())
	)}`;
	const link = document.createElement("a");
	link.href = jsonString;
	link.download = "data.json";

	link.click();
};

const CanvaEditor = () => {
	return (
		<EditorLayout>
			<PolotnoContainer style={{ width: "100vw", height: "100vh" }}>
				<SidePanelWrap>
					<SidePanel
						store={store}
						sections={sections}
						defaultSection="custom-templates"
					/>
				</SidePanelWrap>
				<WorkspaceWrap >

					<Toolbar store={store} downloadButtonEnabled />
					<Workspace store={store} />
					<ZoomButtons store={store} />
				</WorkspaceWrap>
			</PolotnoContainer>
		</EditorLayout>


	)
}

export default CanvaEditor
