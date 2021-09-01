import { useRef, useEffect } from 'react';
import './preview.css';

interface PreviewProps {
  code: string;
  bundleError: string;
}

const html = /*html*/ `
  <html lang="en">
  <head>
    <title>IFrame</title>
    <style>
      html {
        background-color: white;
      }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script>
      const handleError = (err) => {
        const root = document.querySelector('#root')
        root.innerHTML = '<div style="background-color: #fff0f1;color: #ff3f39;">' + err + '</div>'
        console.error(err)
      }

      window.addEventListener('error', (event) => {
        event.preventDefault()
        handleError(event.error)
      })

    window.addEventListener('message', (event) => {
      try {
        eval(event.data)
      } catch (err) {
        handleError(err)
      }
    }, false)
    </script>
    
  </body>
  </html>
  `;

const Preview: React.FC<PreviewProps> = ({ code, bundleError }) => {
  const iframe = useRef<any>();

  useEffect(() => {
    iframe.current.srcdoc = html;
  }, [code]);

  const loadHandler = () => {
    iframe.current.contentWindow.postMessage(code, '*');
  };

  return (
    <div className="preview-wrapper">
      <iframe
        ref={iframe}
        title="preview"
        sandbox="allow-scripts"
        srcDoc={html}
        onLoad={loadHandler}
      />
      {bundleError && <div className="preview-error">{bundleError}</div>}
    </div>
  );
};

export default Preview;
