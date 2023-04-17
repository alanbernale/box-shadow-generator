import { IconClipboardCheck } from '@tabler/icons-react'
import GithubCorner from 'react-github-corner'
import './App.css'

function App () {
  return (
    <div className='application dark'>
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
                    min='-100'
                    max='100'
                  />
                  <span>px.</span>
                </div>
              </div>
              <div className='property__range'>
                <input
                  type='range'
                  className='form-range'
                  min='-100'
                  max='100'
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
                    min='-100'
                    max='100'
                  />
                  <span>px.</span>
                </div>
              </div>
              <div className='property__range'>
                <input
                  type='range'
                  className='form-range'
                  min='-100'
                  max='100'
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
                    min='0'
                    max='100'
                  />
                  <span>px.</span>
                </div>
              </div>
              <div className='property__range'>
                <input
                  type='range'
                  className='form-range'
                  min='0'
                  max='100'
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
                    min='-100'
                    max='100'
                  />
                  <span>px.</span>
                </div>
              </div>
              <div className='property__range'>
                <input
                  type='range'
                  className='form-range'
                  min='-100'
                  max='100'
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
                      size='4'
                    />
                  </div>
                </div>
                <div className='property__color'>
                  <input
                    type='color'
                    className='form-color'
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
                      min='0'
                      max='1'
                      step='0.01'
                    />
                  </div>
                </div>
                <div className='property__range'>
                  <input
                    type='range'
                    className='form-range'
                    min='0'
                    max='1'
                    step='0.01'
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='application__result'>
            <div className='application__preview'>
              <div className='application__box' />
            </div>
            <div className='application__generated'>
              <div className='application__code'>
                box-shadow:
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
              <input type='checkbox' className='color-mode__checkbox' />
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
