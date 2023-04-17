import { useState } from 'react'
import { IconClipboardCheck } from '@tabler/icons-react'
import GithubCorner from 'react-github-corner'
import hexToRgb from './hexToRgb'
import './App.css'

function App () {
  const [dark, setDark] = useState(false)
  const [offsetX, setOffsetX] = useState(0)
  const [offsetY, setOffsetY] = useState(10)
  const [blurRadius, setBlurRadius] = useState(15)
  const [spreadRadius, setSpreadRadius] = useState(-3)
  const [color, setColor] = useState('#000000')
  const [opacity, setOpacity] = useState(0.1)

  const handleDark = () => setDark(!dark)
  const handleOffsetX = (e) => setOffsetX(e.target.value)
  const handleOffsetY = (e) => setOffsetY(e.target.value)
  const handleBlurRadius = (e) => setBlurRadius(e.target.value)
  const handleSpreadRadius = (e) => setSpreadRadius(e.target.value)
  const handleColor = (e) => setColor(e.target.value)
  const handleOpacity = (e) => setOpacity(e.target.value)

  const boxShadow = offsetX + 'px' + ' ' + offsetY + 'px' + ' ' + blurRadius + 'px' + ' ' + spreadRadius + 'px' + ' rgba(' + hexToRgb(color) + ',' + opacity + ')'

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
                    value={offsetX}
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
                  value={offsetX}
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
                    value={offsetY}
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
                  value={offsetY}
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
                    value={blurRadius}
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
                  value={blurRadius}
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
                    value={spreadRadius}
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
                  value={spreadRadius}
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
                      value={color}
                      size='4'
                      onChange={handleColor}
                    />
                  </div>
                </div>
                <div className='property__color'>
                  <input
                    type='color'
                    className='form-color'
                    value={color}
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
                      value={opacity}
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
                    value={opacity}
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
              <div className='application__box' style={{ boxShadow }} />
            </div>
            <div className='application__generated'>
              <div className='application__code'>
                box-shadow: {boxShadow}
              </div>
              <button type='button' className='application__copy'>
                Copy <IconClipboardCheck />
              </button>
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
