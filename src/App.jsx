import { useState } from 'react'
import GithubCorner from 'react-github-corner'
import CopyButton from './components/CopyButton'
import hexToRgb from './utils/hexToRgb'
import './styles/App.css'

function App () {
  const [dark, setDark] = useState(false)

  const [boxShadow, setBoxShadow] = useState({
    offsetX: 0,
    offsetY: 10,
    blurRadius: 15,
    spreadRadius: -3,
    color: '#000000',
    opacity: 0.1
  })

  const handleDark = () => setDark(!dark)
  const handleOffsetX = (e) => setBoxShadow({ ...boxShadow, offsetX: e.target.value })
  const handleOffsetY = (e) => setBoxShadow({ ...boxShadow, offsetY: e.target.value })
  const handleBlurRadius = (e) => setBoxShadow({ ...boxShadow, blurRadius: e.target.value })
  const handleSpreadRadius = (e) => setBoxShadow({ ...boxShadow, spreadRadius: e.target.value })
  const handleColor = (e) => setBoxShadow({ ...boxShadow, color: e.target.value })
  const handleOpacity = (e) => setBoxShadow({ ...boxShadow, opacity: e.target.value })

  const boxShadowResult = boxShadow.offsetX + 'px' + ' ' + boxShadow.offsetY + 'px' + ' ' + boxShadow.blurRadius + 'px' + ' ' + boxShadow.spreadRadius + 'px' + ' rgba(' + hexToRgb(boxShadow.color) + ',' + boxShadow.opacity + ')'

  return (
    <div className={dark ? 'application dark' : 'application'}>
      <div className='application__wrapper'>
        <div className='application__content'>
          <div className='application__properties'>
            <div className='application__header'>
              <h1 className='application__title'>Box Shadow Generator</h1>
            </div>
            <div className='property'>
              <div className='property__header'>
                <p className='property__name'>Horizontal offset</p>
                <div className='property__input'>
                  <input
                    type='number'
                    className='form-control'
                    value={boxShadow.offsetX}
                    min='-100'
                    max='100'
                    onChange={handleOffsetX}
                  />
                  <span>px.</span>
                </div>
              </div>
              <div className='property__range'>
                <input
                  type='range'
                  className='form-range'
                  value={boxShadow.offsetX}
                  min='-100'
                  max='100'
                  onChange={handleOffsetX}
                />
              </div>
            </div>
            <div className='property'>
              <div className='property__header'>
                <p className='property__name'>Vertical offset</p>
                <div className='property__input'>
                  <input
                    type='number'
                    className='form-control'
                    value={boxShadow.offsetY}
                    min='-100'
                    max='100'
                    onChange={handleOffsetY}
                  />
                  <span>px.</span>
                </div>
              </div>
              <div className='property__range'>
                <input
                  type='range'
                  className='form-range'
                  value={boxShadow.offsetY}
                  min='-100'
                  max='100'
                  onChange={handleOffsetY}
                />
              </div>
            </div>
            <div className='property'>
              <div className='property__header'>
                <p className='property__name'>Blur radius</p>
                <div className='property__input'>
                  <input
                    type='number'
                    className='form-control'
                    value={boxShadow.blurRadius}
                    min='0'
                    max='100'
                    onChange={handleBlurRadius}
                  />
                  <span>px.</span>
                </div>
              </div>
              <div className='property__range'>
                <input
                  type='range'
                  className='form-range'
                  value={boxShadow.blurRadius}
                  min='0'
                  max='100'
                  onChange={handleBlurRadius}
                />
              </div>
            </div>
            <div className='property'>
              <div className='property__header'>
                <p className='property__name'>Spread radius</p>
                <div className='property__input'>
                  <input
                    type='number'
                    className='form-control'
                    value={boxShadow.spreadRadius}
                    min='-100'
                    max='100'
                    onChange={handleSpreadRadius}
                  />
                  <span>px.</span>
                </div>
              </div>
              <div className='property__range'>
                <input
                  type='range'
                  className='form-range'
                  value={boxShadow.spreadRadius}
                  min='-100'
                  max='100'
                  onChange={handleSpreadRadius}
                />
              </div>
            </div>
            <div className='property__group'>
              <div className='property'>
                <div className='property__header'>
                  <p className='property__name'>Color</p>
                  <div className='property__input'>
                    <input
                      type='text'
                      className='form-control'
                      value={boxShadow.color}
                      size='4'
                      onChange={handleColor}
                    />
                  </div>
                </div>
                <div className='property__color'>
                  <input
                    type='color'
                    className='form-color'
                    value={boxShadow.color}
                    onChange={handleColor}
                  />
                </div>
              </div>

              <div className='property'>
                <div className='property__header'>
                  <p className='property__name'>Opacity</p>
                  <div className='property__input'>
                    <input
                      type='number'
                      className='form-control'
                      value={boxShadow.opacity}
                      min='0'
                      max='1'
                      step='0.01'
                      onChange={handleOpacity}
                    />
                  </div>
                </div>
                <div className='property__range'>
                  <input
                    type='range'
                    className='form-range'
                    value={boxShadow.opacity}
                    min='0'
                    max='1'
                    step='0.01'
                    onChange={handleOpacity}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='application__result'>
            <div className='application__preview'>
              <div className='application__box' style={{ boxShadow: boxShadowResult }} />
            </div>
            <div className='application__generated'>
              <div className='application__code'>
                box-shadow: {boxShadowResult}
              </div>
              <CopyButton boxShadow={boxShadowResult} />
            </div>
          </div>
        </div>
        <div className='application__footer'>
          <div className='application__credits'>
            <span>Developed by</span>
            <a href='https://alanbernal.pe'>
              <img src='/isologo-full-bernaldev.svg' className='logo-full' alt='Isologo Alan Bernal Dev.' />
              <img src='/isologo-white-bernaldev.svg' className='logo-white' alt='Isologo Alan Bernal Dev.' />
            </a>
          </div>
          <div className='application__mode'>
            <span>Dark theme</span>
            <label className='color-mode'>
              <input
                type='checkbox'
                className='color-mode__checkbox'
                checked={dark}
                onChange={handleDark}
              />
              <span className='color-mode__slider' />
            </label>
          </div>
        </div>
        <GithubCorner href='https://github.com/alanbernale/box-shadow-generator' bannerColor='#e82077' />
      </div>
    </div>
  )
}

export default App
