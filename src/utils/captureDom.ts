import domToImage from 'dom-to-image';
import { saveAs } from 'file-saver';

export default (input: string, fileName = 'capture.png') => {
  const el = document.querySelector(input);
  if (el) {
    domToImage.toBlob(el).then((blob) => {
      saveAs(blob, fileName);
    });
  }
};
