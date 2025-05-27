import { Instance } from 'cooljs'
import * as constant from './constant'

const getActionConfig = (engine, type) => {
  const {
    width, height, utils
  } = engine
  const { random } = utils
  const size = engine.getVariable(constant.cloudSize)
  const actionTypes = {
    bottomToTop: {
      x: width * random(0.3, 0.7),
      y: height,
      vx: 0,
      vy: engine.pixelsPerFrame(height) * 0.7 * -1
    },
    leftToRight: {
      x: size * -1,
      y: height * random(0.3, 0.6),
      vx: engine.pixelsPerFrame(width) * 0.4,
      vy: engine.pixelsPerFrame(height) * 0.1 * -1
    },
    rightToLeft: {
      x: width,
      y: height * random(0.2, 0.5),
      vx: engine.pixelsPerFrame(width) * 0.4 * -1,
      vy: engine.pixelsPerFrame(height) * 0.1
    },
    rightTopToLeft: {
      x: width,
      y: 0,
      vx: engine.pixelsPerFrame(width) * 0.6 * -1,
      vy: engine.pixelsPerFrame(height) * 0.5
    }
  }
  return actionTypes[type]
}
