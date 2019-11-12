import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Mask, Dialog } from './style';

function ConfirmDialog(props) {
  const { visible, close, content, cancelText, okText, onCancel, onOk } = props;

  function cancelHandler() {
    onCancel && onCancel();
    close();
  };

  function okHandler() {
    onOk && onOk();
    close();
  }

  return (
    <Mask>
      <CSSTransition
        classNames="dialog-zoom"
        appear={true}
        timeout={300}
        in={visible}>
        <Dialog>
          <div className="content">{content}</div>
          <div className="footer">
            <div className="btn" onClick={cancelHandler}>{cancelText}</div>
            <div className="btn" onClick={okHandler}>{okText}</div>
          </div>
        </Dialog>
      </CSSTransition>
    </Mask>
  )
};

ConfirmDialog.defaultProps = {
  cancelText: '取消',
  okText: '确定'
};

ConfirmDialog.propTypes = {
  content: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  cancelText: PropTypes.string,
  okText: PropTypes.string,
  visible: PropTypes.bool,
  close: PropTypes.func,
  onCancel: PropTypes.func,
  onOk: PropTypes.func
};

export default function Confirm(config) {
  const div = document.createElement('div');
  document.body.appendChild(div);
  let currentConfig = { ...config, close, visible: true };

  function close() {
    currentConfig = { ...currentConfig, visible: false };
    render(currentConfig);
    setTimeout(() => {
      destroy();
    }, 200);
  }

  function destroy() {
    const isUnmout = ReactDOM.unmountComponentAtNode(div);
    if (isUnmout && div.parentNode) {
      div.parentNode.removeChild(div);
    }
  }

  function render(props) {
    ReactDOM.render(<ConfirmDialog {...props} />, div)
  }

  render(currentConfig);
  return {
    destroy: close
  }
};