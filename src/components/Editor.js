import React, { useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

function formatData(data) {
    const content = {
        entityMap: {},
        blocks: [
            {
                key: "637gr",
                text: data,
                type: "unstyled",
                depth: 0,
                inlineStyleRanges: [],
                entityRanges: [],
                data: {}
            }
        ]
    };
    const contentState = convertFromRaw(content);
    const formattedData = EditorState.createWithContent(contentState)
    return formattedData
}

export default function EditorArea(props) {
    const { changeMode, savePage, updatePage, selectedIndex, editPage } = props;

    const [titleText, setTitleText] = useState(editPage ? editPage.title : "")
    const [editorState, setEditorState] = useState(
        editPage ? formatData(editPage.content) : EditorState.createEmpty());
    
        const onEditorStateChange = (editorState) => {
        setEditorState(editorState)
    }
    const titleHandler = (e) => {
        setTitleText(e.target.value)
    }

    const makeAPage = () => {
        let lines = convertToRaw(editorState.getCurrentContent());
        let content = ""
        lines.blocks.forEach(text => {
            content = content + "\n" + text.text
        })
        let newPage = {
            title: titleText,
            content: content
        }
        return newPage
    }
    const saveHandler = () => {
        savePage(makeAPage())
    }

    const updateHandler = () => {
        updatePage({pageContent :makeAPage(), pageIndex :selectedIndex})
    }

    return (
        <div id="qwerty">
            <div id="editorMain">
                <div id="pageTitleLabel">Page Title</div>
                <input type="text" placeholder="Page Title" value={titleText} onChange={titleHandler} />
                <div id="editorArea">
                    <Editor
                        editorState={editorState}
                        toolbarClassName="toolbarClassName"
                        wrapperClassName="wrapperClassName"
                        editorClassName="editorClassName"
                        onEditorStateChange={onEditorStateChange}
                    />
                </div>
                <div class="buttonArea">
                    <button id="save" onClick={() => { editPage ? updateHandler() : saveHandler()}}>Save Page</button>
                    <button id="back" onClick={() => changeMode(false)}>Back to Book</button>
                </div>
            </div>
        </div>
    )
}