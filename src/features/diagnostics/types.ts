export enum DiagnosticColor {
  BLACK = 'BLACK',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  ORANGE = 'ORANGE',
  RED = 'RED',
}

export interface Diagnostic {
  name: string
  color: DiagnosticColor
}
