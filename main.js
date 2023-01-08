// Import JS libraries
import Toastify from "toastify-js"
import hexToRgb from "./hexToRgb"

// Import CSS files
import "bootstrap/dist/css/bootstrap.css"
import "toastify-js/src/toastify.css"
import "./style.css"

// The default properties of the box shadow
let shadowProperties = {
  'offset-x' : 0,
  'offset-y' : 10,
  'blur-radius' : 15,
  'spread-radius' : -3,
  'color' : '#000000',
  'opacity' : 0.1
}

let defaultBoxShadow = `${shadowProperties['offset-x']}px ${shadowProperties['offset-y']}px ${shadowProperties['blur-radius']}px ${shadowProperties['spread-radius']}px rgba(${hexToRgb(shadowProperties['color'])},${shadowProperties['opacity']})`

// Render the app to the document
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
                name="offset-x-text"
                id="offset-x-text"
                min="-100"
                max="100"
                value="${shadowProperties['offset-x']}"
              />
              <span>px.</span>
            </div>
          </div>
          <div class="property__range">
            <input
              type="range"
              class="form-range"
              name="offset-x-range"
              id="offset-x-range"
              min="-100"
              max="100"
              value="${shadowProperties['offset-x']}"
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
                name="offset-y-text"
                id="offset-y-text"
                min="-100"
                max="100"
                value="${shadowProperties['offset-y']}"
              />
              <span>px.</span>
            </div>
          </div>
          <div class="property__range">
            <input
              type="range"
              class="form-range"
              name="offset-y-range"
              id="offset-y-range"
              min="-100"
              max="100"
              value="${shadowProperties['offset-y']}"
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
                name="blur-radius-text"
                id="blur-radius-text"
                min="0"
                max="100"
                value="${shadowProperties['blur-radius']}"
              />
              <span>px.</span>
            </div>
          </div>
          <div class="property__range">
            <input
              type="range"
              class="form-range"
              name="blur-radius-range"
              id="blur-radius-range"
              min="0"
              max="100"
              value="${shadowProperties['blur-radius']}"
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
                name="spread-radius-text"
                id="spread-radius-text"
                min="-100"
                max="100"
                value="${shadowProperties['spread-radius']}"
              />
              <span>px.</span>
            </div>
          </div>
          <div class="property__range">
            <input
              type="range"
              class="form-range"
              name="spread-radius-range"
              id="spread-radius-range"
              min="-100"
              max="100"
              value="${shadowProperties['spread-radius']}"
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
                  name="color-text"
                  id="color-text"
                  size="4"
                  value="${shadowProperties['color']}"
                />
              </div>
            </div>
            <div class="property__color">
              <input
                type="color"
                class="form-control form-control-color"
                name="color-range"
                id="color-range"
                value="${shadowProperties['color']}"
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
                  name="opacity-text"
                  id="opacity-text"
                  min="0"
                  max="1"
                  value="${shadowProperties['opacity']}"
                  step="0.01"
                />
              </div>
            </div>
            <div class="property__range">
              <input
                type="range"
                class="form-range"
                name="opacity-range"
                id="opacity-range"
                min="0"
                max="1"
                value="${shadowProperties['opacity']}"
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
            style="box-shadow: ${defaultBoxShadow}"
          ></div>
        </div>
        <div class="application__generated">
          <div class="application__code" id="application__code">
            box-shadow: ${defaultBoxShadow};
          </div>
          <button type="button" class="application__copy" id="application__copy">
            Copy
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
      <span>Developed by</span>
      <img src="/isologo-full-bernaldev.svg" alt="" />
    </div>
  </div>
`
/**
 * Update the box shadow style and code
 * @param propertyRef
 * @param value
 */
const updateBoxShadow = (propertyRef, value) => {
  const applicationBox = document.getElementById('application__box'),
    applicationCode = document.getElementById('application__code')
  shadowProperties[propertyRef] = value
  applicationBox.style.boxShadow = `${shadowProperties['offset-x']}px ${shadowProperties['offset-y']}px ${shadowProperties['blur-radius']}px ${shadowProperties['spread-radius']}px rgba(${hexToRgb(shadowProperties['color'])},${shadowProperties['opacity']})`
  applicationCode.innerText = `box-shadow: ${shadowProperties['offset-x']}px ${shadowProperties['offset-y']}px ${shadowProperties['blur-radius']}px ${shadowProperties['spread-radius']}px rgba(${hexToRgb(shadowProperties['color'])},${shadowProperties['opacity']})`
}

/**
 * Applies an event listener to the defined property and executes the action on changes
 * @param propertyRef
 */
const modifyProperty = (propertyRef) => {
  const propertyRange = document.getElementById(propertyRef + '-range'),
    propertyText = document.getElementById(propertyRef + '-text')

  propertyRange.addEventListener('input', e => {
    propertyText.value = e.currentTarget.value
    updateBoxShadow(propertyRef, e.currentTarget.value)
  })
  propertyText.addEventListener('input', e => {
    propertyRange.value = e.currentTarget.value
    updateBoxShadow(propertyRef, e.currentTarget.value)
  })
}

// The properties that will be modifiable are defined
modifyProperty('offset-x')
modifyProperty('offset-y')
modifyProperty('blur-radius')
modifyProperty('spread-radius')
modifyProperty('color')
modifyProperty('opacity')

// An event listener is applied to copy the resulting code to the clipboard
let applicationCopy = document.getElementById('application__copy')
applicationCopy.addEventListener('click', () => {
  navigator.clipboard.writeText(`box-shadow: ${shadowProperties['offset-x']}px ${shadowProperties['offset-y']}px ${shadowProperties['blur-radius']}px ${shadowProperties['spread-radius']}px rgba(${hexToRgb(shadowProperties['color'])},${shadowProperties['opacity']})`)
    .then(() => {
      Toastify({
        text: "😁 Se copió el código al portapapeles.",
        close: true,
        duration: 3000,
        style: {
          background: "#E82077",
        }
      }).showToast();
    })
    .catch(err => {
      Toastify({
        text: "⚠️ ¡Ups! Sucedió algo, inténtalo nuevamente.",
        close: true,
        duration: 3000,
        style: {
          background: "red",
        }
      }).showToast();
      console.error(err.message)
    })
})
