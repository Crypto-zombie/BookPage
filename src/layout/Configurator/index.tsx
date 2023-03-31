/* eslint-disable react/no-unknown-property */
import HTMLFlipBook from 'react-pageflip';
import One from 'assets/1.jpg';
import Two from 'assets/2.jpg';

export default function Configurator() {
  return (
    <div className='overflow-hidden'>
      <HTMLFlipBook width={800} height={400}>
        <div className='demoPage'>
          <img src={One} />
        </div>
        <div className='demoPage'>
          <img src={Two} />
        </div>
        <div className='demoPage'>
          <img src={One} />
        </div>
        <div className='demoPage'>
          <img src={Two} />
        </div>
      </HTMLFlipBook>
      <div className='bottom-0 left-5 absolute'>
        <h3>Test Project by Evgenii</h3>
        <h3>Mail: valcano103@gmail.com</h3>
      </div>
    </div>
  );
}
