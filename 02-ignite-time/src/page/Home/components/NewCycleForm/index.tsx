/**
 * [STYLES]
 */
import * as S from './styles'

export function NewCycleForm() {
  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        id="task"
        type="text"
        placeholder="Dê um nome para o seu projeto"
        list="taks-suggestions"
        {...register("task")}
        disabled={!!activeCycle}
      />

      <datalist id="task-suggestions">
        <option value="Projeto 1"></option>
      </datalist>

      <label htmlFor="">durante</label>
      <S.MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register("minutesamount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </S.FormContainer>
  )
}
