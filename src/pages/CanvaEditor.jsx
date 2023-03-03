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
import { QrSection, getQR } from '../components/editor/qrSection';
import { SignatureSection } from "../components/editor/signatureSection"
import { IconsSection } from '../components/editor/iconSection';
import { LinkSection } from '../components/editor/linkSection';
import { useLocation } from 'react-router-dom';
import { putStoryJSONData, putStoryData, getStoryData } from '../components/adapters/story';

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
// const val = 'https://google.com/';
// getQR(val).then((src) => {
// 	store.activePage.addElement({
// 		type: 'svg',
// 		name: 'qr',
// 		x: store.width / 2 - 150,
// 		y: store.height / 2 - 150,
// 		width: 300,
// 		height: 300,
// 		src,
// 		custom: {
// 			value: val,
// 		},
// 	});
// });

const sections = [TemplatesSection, ...DEFAULT_SECTIONS, QrSection, SignatureSection, LinkSection];

const exportData = () => {
	const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(
		JSON.stringify(store.toJSON(store.toJSON()))
	)}`;
	const link = document.createElement("a");
	link.href = jsonString;
	link.download = "data.json";

	link.click();
};

const blobExp = async () => {
	return await store.toBlob({ pageId: store.pages[0].id });
}

const CanvaEditor = () => {
	const location = useLocation();

	useEffect(() => {
		getStoryData(location.state.id, store)
		if (location.state.json && typeof (location.state.json).width != "undefined") {
			store.loadJSON(location.state.json)
		}
	}, [])

	let timeout = null;
	const requestSave = () => {
		if (timeout) {
			return;
		}
		timeout = setTimeout(() => {
			timeout = null;
			const json = store.toJSON();
			putStoryData({ "json_data": json }, location.state.id);
			if (store.pages[0] == store.activePage) {
				let data = new FormData();
				blobExp().then((res) => { data.append('thumbnail', res, "thumbnail.png"); putStoryData(data, location.state.id) })

				// putStoryData(data, location.state.id);
			}

		}, 1000);
	};

	store.on('change', () => {
		requestSave();
	});
	return (
		<>
			{/* <buttons onClick={()=>exportData()}>download json</buttons> */}
			<EditorLayout>
				<PolotnoContainer style={{ width: "100vw", height: "92.4vh" }}>
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
		</>



	)
}

export default CanvaEditor
