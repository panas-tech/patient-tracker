import clsx from 'clsx'
import {useState} from 'react'
import {useForm} from 'react-hook-form'
import {Button} from '../../components/Button'
import {Input} from '../../components/Input'
import {db} from '../../firebase'
import {Diagnostic, DiagnosticColor} from './types'
import {enumToColor} from './utils'

export function DiagnosticForm({
  defaultValues = {name: '', color: DiagnosticColor.BLACK},
}: {
  defaultValues?: Diagnostic
}) {
  const [submitting, setSubmitting] = useState(false)
  const {register, handleSubmit, watch, reset, errors} = useForm<Diagnostic>({
    defaultValues,
  })
  const {color, name} = watch()
  async function onSubmit(diagnostic: Diagnostic) {
    setSubmitting(true)
    await db.collection('diagnostics').add(diagnostic)
    setSubmitting(false)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="block">
        <span className="text-gray-700">Nombre</span>
        <Input
          ref={register({
            required: true,
            minLength: 1,
            validate: (value) => Boolean(value.trim()),
          })}
          name="name"
          className={clsx('mt-1 block w-full', errors.name && 'border-red-600')}
          placeholder="Ejemplo: Caries"
          type="text"
        />
        {errors.name && (
          <small className="block mt-1 p-2 bg-red-100 rounded text-red-600">
            Nombre es requerido
          </small>
        )}
      </label>
      <label className="block mt-4">
        <span className="text-gray-700">Color</span>
        <div className="grid gap-2 sm:gap-4 grid-flow-col mt-1">
          {Object.values(DiagnosticColor).map((diagnosticColor) => (
            <label key={diagnosticColor}>
              <input
                ref={register}
                type="radio"
                name="color"
                value={diagnosticColor}
                className={clsx(
                  'h-10 w-full rounded transform translate-y-1 shadow-sm transition-all cursor-pointer opacity-50',
                  'focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
                  diagnosticColor === color &&
                    '-translate-y-1 opacity-100 shadow-md',
                  enumToColor(diagnosticColor)
                )}
              />
              <span className="sr-only">{diagnosticColor}</span>
            </label>
          ))}
        </div>
      </label>
      <Button disabled={Boolean(submitting || errors.name || !name)}>
        {submitting ? (
          <svg className="animate-spin mr-3 h-5 w-5 text-white">
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        ) : (
          'Guardar'
        )}
      </Button>
    </form>
  )
}
