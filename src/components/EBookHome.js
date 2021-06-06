import React, { useState } from "react";
import Sidebar from "./SideBar";
import Footer from "./Footer";
import Editor from "./Editor";
import Reader from "./Reader";
import { connect } from 'react-redux';

import * as actionTypes from '../store/actions';

function EBookHome(props) {
  const [editMode, setEditMode] = useState(false);
  const [editPage, setEditPage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0)
  
  const {pages} = props  
  const titles = pages.map(page => page.title)

  function changeMode(mode) {
    setEditMode(mode)
  };

  function editHandler(){
    setEditPage(pages[selectedIndex])
    changeMode(true)
    
  }

  function addHandler(){
    setEditPage(null)
    changeMode(true)
    
  }

  return (
    <>
      {editMode ? (
        <Editor changeMode={changeMode} savePage = {props.onSavePage} updatePage = {props.onUpdatePage} editPage={editPage} selectedIndex={selectedIndex}/>
      ) : (
        <div id="main">
          <Reader addHandler={addHandler} editHandler={editHandler} title={pages[selectedIndex].title} content={pages[selectedIndex].content} />
          <Sidebar pageTitleList={titles} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} />
        </div>
      )}

      <Footer />
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onSavePage: (pageContent) => dispatch({ type: actionTypes.SAVE_TITLE, pageContent: pageContent }),
    onUpdatePage: (pageIndexContent) => dispatch({type: actionTypes.UPDATE_TITLE, page: pageIndexContent})
  };
}
const mapStateToProps = state => {
  return {
    pages: state.pages
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EBookHome);