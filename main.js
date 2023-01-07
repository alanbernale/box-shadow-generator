import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="application">
    <div class="application__content">
      <div class="application__properties">
        <div class="application__header">
          <h1 class="h2 text-center">Box Shadow Generator</h1>
        </div>
        <div class="property">
          <div class="property__header">
            <div class="property__name">Horizontal offset</div>
            <div class="property__input">
              <input
                type="number"
                class="form-control"
                name="offset-x-value"
                id="offset-x-value"
                min="-100"
                max="100"
                value="0"
              />
              <span>px.</span>
            </div>
          </div>
          <div class="property__range">
            <input
              type="range"
              class="form-range"
              name="offset-x"
              id="offset-x"
              min="-100"
              max="100"
              value="0"
            />
          </div>
        </div>

        <div class="property">
          <div class="property__header">
            <div class="property__name">Vertical offset</div>
            <div class="property__input">
              <input
                type="number"
                class="form-control"
                name="offset-y-value"
                id="offset-y-value"
                min="-100"
                max="100"
                value="10"
              />
              <span>px.</span>
            </div>
          </div>
          <div class="property__range">
            <input
              type="range"
              class="form-range"
              name="offset-y"
              id="offset-y"
              min="-100"
              max="100"
              value="10"
            />
          </div>
        </div>

        <div class="property">
          <div class="property__header">
            <div class="property__name">Blur radius</div>
            <div class="property__input">
              <input
                type="number"
                class="form-control"
                name="blur-radius-value"
                id="blur-radius-value"
                min="0"
                max="100"
                value="15"
              />
              <span>px.</span>
            </div>
          </div>
          <div class="property__range">
            <input
              type="range"
              class="form-range"
              name="blur-radius"
              id="blur-radius"
              min="0"
              max="100"
              value="15"
            />
          </div>
        </div>

        <div class="property">
          <div class="property__header">
            <div class="property__name">Spread radius</div>
            <div class="property__input">
              <input
                type="number"
                class="form-control"
                name="spread-radius-value"
                id="spread-radius-value"
                min="-100"
                max="100"
                value="-3"
              />
              <span>px.</span>
            </div>
          </div>
          <div class="property__range">
            <input
              type="range"
              class="form-range"
              name="spread-radius"
              id="spread-radius"
              min="-100"
              max="100"
              value="-3"
            />
          </div>
        </div>

        <div class="property__group">
          <div class="property">
            <div class="property__header">
              <div class="property__name">Color</div>
              <div class="property__input">
                <input
                  type="text"
                  class="form-control"
                  name="color-value"
                  id="color-value"
                  size="4"
                  value="#000000"
                />
              </div>
            </div>
            <div class="property__color">
              <input
                type="color"
                class="form-control form-control-color"
                name="color"
                id="color"
                value="#000000"
              />
            </div>
          </div>

          <div class="property">
            <div class="property__header">
              <div class="property__name">Opacity</div>
              <div class="property__input">
                <input
                  type="number"
                  class="form-control"
                  name="opacity-value"
                  id="opacity-value"
                  min="0"
                  max="1"
                  value="0.1"
                  step="0.01"
                />
              </div>
            </div>
            <div class="property__range">
              <input
                type="range"
                class="form-range"
                name="opacity"
                id="opacity"
                min="0"
                max="1"
                value="0.1"
                step="0.01"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="application__result">
        <div class="application__preview">
          <div
            class="application__box"
            id="application__box"
            style="box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1)"
          ></div>
        </div>
        <div class="application__generated">
          <div class="application__code">
            box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
          </div>
          <button type="button" class="application__copy">
            Copiar
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
              <path
                d="M112 128h160C280.8 128 288 120.8 288 112S280.8 96 272 96h-24.88C252.6 86.55 256 75.72 256 64c0-35.35-28.65-64-64-64S128 28.65 128 64c0 11.72 3.379 22.55 8.877 32H112C103.2 96 96 103.2 96 112S103.2 128 112 128zM192 32c17.64 0 32 14.36 32 32s-14.36 32-32 32S160 81.64 160 64S174.4 32 192 32zM320 64c-8.844 0-16 7.156-16 16S311.2 96 320 96c17.64 0 32 14.34 32 32v320c0 17.66-14.36 32-32 32H64c-17.64 0-32-14.34-32-32V128c0-17.66 14.36-32 32-32c8.844 0 16-7.156 16-16S72.84 64 64 64C28.7 64 0 92.72 0 128v320c0 35.28 28.7 64 64 64h256c35.3 0 64-28.72 64-64V128C384 92.72 355.3 64 320 64zM72 256c0 13.25 10.75 24 24 24c13.26 0 24-10.75 24-24c0-13.26-10.74-24-24-24C82.75 232 72 242.7 72 256zM96 328c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24c13.26 0 24-10.75 24-24C120 338.7 109.3 328 96 328zM304 240h-128C167.2 240 160 247.2 160 256s7.156 16 16 16h128C312.8 272 320 264.8 320 256S312.8 240 304 240zM304 336h-128C167.2 336 160 343.2 160 352s7.156 16 16 16h128c8.844 0 16-7.156 16-16S312.8 336 304 336z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
    <div class="application__footer">
      <span>Desarrollado por</span>
      <img src="/isologo-full-bernaldev.svg" alt="" />
    </div>
  </div>
`
