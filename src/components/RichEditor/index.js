import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Editor,
  EditorState,
  RichUtils,
  Modifier,
  getDefaultKeyBinding
} from 'draft-js';
import { makeStyles } from '@material-ui/styles';
import { Paper, Divider } from '@material-ui/core';
import EditorToolbar from './EditorToolbar';
import { blockRenderMap } from './block';

const useStyles = makeStyles((theme) => ({
  root: {},
  editorContainer: {
    padding: theme.spacing(2),
    minHeight: 400,
    '&:focus': {
      outline: 'none'
    },
    '& .public-DraftEditorPlaceholder-root': {
      ...theme.typography.body2
    },
    '& .public-DraftEditorPlaceholder-hasFocus': {
      display: 'none'
    },
    '& .public-DraftEditor-content': {
      ...theme.typography.body1,
      '& h1': {
        ...theme.typography.h1
      },
      '& h2': {
        ...theme.typography.h2
      },
      '& h3': {
        ...theme.typography.h3
      },
      '& h4': {
        ...theme.typography.h4
      },
      '& h5': {
        ...theme.typography.h5
      },
      '& h6': {
        ...theme.typography.h6
      },
      '& blockquote': {
        ...theme.typography.subtitle1
      },
      '& ul': {
        ...theme.typography.body1,
        marginLeft: theme.spacing(4)
      },
      '& ol': {
        ...theme.typography.body1,
        marginLeft: theme.spacing(4)
      },
      '& pre': {
        backgroundColor: 'rgba(0, 0, 0, 0.05)',
        fontFamily: '"Inconsolata", "Menlo", "Consolas", monospace',
        fontSize: 16,
        padding: 2
      }
    }
  },
  textAlignLeft: {
    textAlign: 'left'
  },
  textAlignCenter: {
    textAlign: 'center'
  },
  textAlignRight: {
    textAlign: 'right'
  },
  textAlignJustify: {
    textAlign: 'justify'
  }
}));

const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

function RichEditor({ placeholder, className, ...rest }) {
  const classes = useStyles();
  const editorRef = useRef(null);
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleContainerClick = () => {
    editorRef.current.focus();
  };

  const handleToolbarToggle = (type, value) => {
    if (type === 'blockType') {
      if (['left', 'center', 'right', 'justify'].includes(value)) {
        const newContentState = Modifier.setBlockData(
          editorState.getCurrentContent(),
          editorState.getSelection(),
          { 'text-align': value }
        );

        const newEditorState = EditorState.push(
          editorState,
          newContentState,
          'change-block-data'
        );

        setEditorState(newEditorState);
        return;
      }

      setEditorState(RichUtils.toggleBlockType(editorState, value));
    } else {
      setEditorState(RichUtils.toggleInlineStyle(editorState, value));
    }
  };

  const handleEditorChange = (newState) => {
    setEditorState(newState);
  };

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);

    if (newState) {
      handleEditorChange(newState);
      return true;
    }

    return false;
  };

  const mapKeyToEditorCommand = (event) => {
    if (event.keyCode === 9) {
      const newEditorState = RichUtils.onTab(event, editorState, 4);

      if (newEditorState !== editorState) {
        handleEditorChange(newEditorState);
      }

      return;
    }

    return getDefaultKeyBinding(event);
  };

  const blockStyleFn = (contentBlock) => {
    const textAlign = contentBlock.getData().get('text-align');

    if (textAlign) {
      return classes[`textAlign${capitalize(textAlign)}`];
    }

    return '';
  };

  return (
    <Paper
      {...rest}
      className={clsx(classes.root, className)}
    >
      <EditorToolbar
        editorState={editorState}
        onToggle={handleToolbarToggle}
      />
      <Divider />
      <div
        aria-label="Editor Container"
        className={classes.editorContainer}
        role="button"
        onClick={handleContainerClick}
        tabIndex={0}
      >
        <Editor
          blockRenderMap={blockRenderMap}
          blockStyleFn={blockStyleFn}
          editorState={editorState}
          handleKeyCommand={handleKeyCommand}
          keyBindingFn={mapKeyToEditorCommand}
          onChange={handleEditorChange}
          placeholder={placeholder}
          ref={editorRef}
          spellCheck
        />
      </div>
    </Paper>
  );
}

RichEditor.propTypes = {
  className: PropTypes.string,
  placeholder: PropTypes.string
};

export default RichEditor;
