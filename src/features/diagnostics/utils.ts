import {DiagnosticColor} from './types'

export function enumToColor(color: DiagnosticColor) {
  switch (color) {
    case DiagnosticColor.BLACK:
      return 'bg-black text-black'
    case DiagnosticColor.BLUE:
      return 'bg-blue-600 text-blue-600'
    case DiagnosticColor.GREEN:
      return 'bg-green-500 text-green-500'
    case DiagnosticColor.ORANGE:
      return 'bg-yellow-600 text-yellow-600'
    case DiagnosticColor.RED:
      return 'bg-red-600 text-red-600'
    default:
      return 'bg-white text-white'
  }
}
