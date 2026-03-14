/**
 * InputManager — handles keyboard, mouse, and pointer lock
 */
export class InputManager {
  constructor(canvas) {
    this.canvas = canvas;
    this.keys = {};
    this.mouseDown = false;
    this.mouseDelta = { x: 0, y: 0 };
    this.isLocked = false;
    this._accDelta = { x: 0, y: 0 };

    // Keyboard
    window.addEventListener('keydown', (e) => {
      this.keys[e.code] = true;
    });
    window.addEventListener('keyup', (e) => {
      this.keys[e.code] = false;
    });

    // Mouse
    canvas.addEventListener('mousedown', (e) => {
      if (e.button === 0) this.mouseDown = true;
    });
    canvas.addEventListener('mouseup', (e) => {
      if (e.button === 0) this.mouseDown = false;
    });

    // Pointer lock
    document.addEventListener('pointerlockchange', () => {
      this.isLocked = document.pointerLockElement === canvas;
    });

    document.addEventListener('mousemove', (e) => {
      if (this.isLocked) {
        this._accDelta.x += e.movementX;
        this._accDelta.y += e.movementY;
      }
    });
  }

  requestPointerLock() {
    this.canvas.requestPointerLock();
  }

  isKeyDown(code) {
    return !!this.keys[code];
  }

  isMouseClicked() {
    const val = this.mouseDown;
    this.mouseDown = false; // consume
    return val;
  }

  getMouseDelta() {
    const d = { x: this._accDelta.x, y: this._accDelta.y };
    this._accDelta.x = 0;
    this._accDelta.y = 0;
    return d;
  }
}
